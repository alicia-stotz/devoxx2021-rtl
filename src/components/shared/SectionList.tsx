import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ISection {
  id: string;
  link: string;
  title: string;
  label: string;
}
interface ISummaryList extends ISection {
  subSection?: ISection[];
}

const list: ISummaryList[] = [
  {
    id: 'introduction',
    link: '/introduction',
    title: 'Introduction section',
    label: 'Introduction'
  },
  {
    id: 'examples',
    link: '/examples',
    title: 'Examples section',
    label: 'Exemples',
    subSection: [
      {
        id: 'defaultPokemonCard',
        link: '/examples/default',
        title: 'Default Pokemon card',
        label: 'Card Pokemon - Part 1',
      },
      {
        id: 'pokemonCardWithoutType',
        link: '/examples/withoutType',
        title: 'Pokemon card without type',
        label: 'Card Pokemon - Part 2',
      },
      {
        id: 'pokedex',
        link: '/examples/pokedex',
        title: 'Pokedex',
        label: 'Pokedex',
      },
      {
        id: 'gameZone',
        link: '/examples/gameZone',
        title: 'Zone de jeu',
        label: 'Game zone',
      }
    ]
  },
  {
    id: 'conclusion',
    link: '/conclusion',
    title: 'Conclusion section',
    label: 'Conclusion'
  },
  {
    id: 'sources',
    link: '/sources',
    title: 'Sources section',
    label: 'Sources'
  },
];

export const SectionList = () => {
  const location = useLocation();

  const activeLink = (link: string, index: number): boolean => {
    const pathName = location.pathname.split("/");
    const splitedLink = link.split("/");

    if (pathName[index] === "" && link === "/") {
      return true;
    }
    return !!(pathName[index] && pathName[index] === splitedLink[index]);
  }

  return <ul className="list-group list-group-flush list-group-numbered">
    {
      list.map((item: ISummaryList, indexList: number) =>
        <React.Fragment key={item.id}>
          <Link
            to={item.link}
            title={item.title}
            className={`list-group-item list-group-item-action${activeLink(item.link, 1) ? " list-group-item-secondary" : ""}${item.subSection ? " border-0" : ""}`}>
            {item.label}

          </Link>
          {
            item.subSection ?
              <ul className="list-group list-group-flush">
                {
                  item.subSection.map((section: ISection, index: number) =>
                    <Link
                      key={`${item.id}-${section.id}`}
                      to={section.link}
                      title={section.title}
                      className={`list-group-item fw-lighter px-4${activeLink(section.link, 2) ? ' text-primary' : ''}${item.subSection!.length > index + 1 ? " border-0" : (list.length > indexList + 1 ? " border-bottom" : "")}`}>
                      {section.label}
                    </Link>
                  )
                }

              </ul>
              : null
          }

        </React.Fragment>
      )
    }

  </ul>
};