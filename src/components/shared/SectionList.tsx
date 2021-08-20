import React from 'react';
import { useLocation } from 'react-router-dom';

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
    link: '/',
    title: 'Introduction section',
    label: 'Introduction'
  },
  {
    id: 'example',
    link: '/example',
    title: 'Example section',
    label: 'Exemple',
    subSection: [
      {
        id: 'defaultPokemonCard',
        link: '/example/default',
        title: 'Default Pokemon card',
        label: 'Card Pokemon',
      }
    ]
  }
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
      list.map((item: ISummaryList) =>
        <React.Fragment key={item.id}>
          <a
            href={item.link}
            title={item.title}
            className={`list-group-item list-group-item-action${activeLink(item.link, 1) ? " list-group-item-secondary" : ""}${item.subSection ? " border-0" : ""}`}>
            {item.label}

          </a>
          {
            item.subSection ?
              <ul className="list-group list-group-flush">
                {
                  item.subSection.map((section: ISection) =>
                    <a
                      key={`${item.id}-${section.id}`}
                      href={section.link}
                      title={section.title}
                      className={`list-group-item fw-lighter px-4${activeLink(section.link, 2) ? ' text-primary' : ''}`}>
                      {section.label}
                    </a>
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