import React from 'react';

export const Introduction = () => {
  return <div>
    <p>
      React Testing Library (RTL) par Kent C. Dodds apporte une alternative à Enzyme de Airbnb.
    </p>
    <p></p>
    <p>Contrairement à Enzyme qui test le fonctionnement interne d'un coposant.
      RTL se concentre sur l'experience utilisateur. C'est à dire comment l'utilisateur interagierait avec le composant.
    </p>
    <figure>
      <blockquote className="blockquote">
        <p>The more your tests resemble the way your software is used, the more confidence they can give you.</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Guiding Principles in <cite title="Source Title">React Testing Library web site</cite>
      </figcaption>
    </figure>
    <p>RTL encourage donc à ne pas tester les détails d'implémentation. Tel que :</p>
    <ol>
      <li>les methodes du composant</li>
      <li>les states du composant</li>
      <li>les composants enfants</li>
      <li>le cycle de vie du composant</li>
    </ol>
    <p>RTL n'est pas une alternative à Jest, il a besoin de ce type de framework pour fonctionner.
      Car il n'est pas un "test runner" ou un framework
    </p>
    <p>Si vous utilisez create-react-app, React Testing Library est inclu par défaut.</p>
  </div>
}