import React from 'react';

interface ISummaryList {
  id: string;
  link: string;
  title: string;
  label: string;
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
    link: '/example/default',
    title: 'Example section: Default Pokemon card',
    label: 'Card Pokemon'
  }
];

export const SummaryList = () => {
  return <ul className="list-group list-group-flush list-group-numbered">
    {
      list.map((item: ISummaryList) =>
        <a key={item.id}
          href={item.link}
          title={item.title}
          className={`list-group-item list-group-item-action${window.location.pathname === item.link ? " list-group-item-secondary" : ""}`}>
          {item.label}
        </a>
      )
    }
  </ul>
};