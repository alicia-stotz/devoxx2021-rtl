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
    id: 'exemple',
    link: '/',
    title: 'Exemple section',
    label: 'Exemple'
  }
];

export const SummaryList = () => {
  return <ul className="list-group list-group-flush list-group-numbered">
    {
      list.map((item: ISummaryList) =>
        <a key={item.id}
          href={item.link}
          title={item.title}
          className="list-group-item list-group-item-action">
          {item.label}
        </a>
      )
    }
  </ul>
};