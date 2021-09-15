import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Introduction = () => {
  return <div className="introduction-page container row">
    <div className="col-12">
      <h3 className="mb-3">Introduction</h3>
      <p className="mb-4">
        <ArrowForwardIcon fontSize="small" /> React Testing Library (RTL) par Kent C. Dodds.
      </p>
      <p className="mb-1">
        <ArrowForwardIcon fontSize="small" /> Experience utilisateur.
      </p>
      <figure className="mb-4">
        <blockquote className="blockquote">
          <p>The more your tests resemble the way your software is used, the more confidence they can give you.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Guiding Principles in <cite title="Source Title">React Testing Library web site</cite>
        </figcaption>
      </figure>
      <p className="mb-4">
        <ArrowForwardIcon fontSize="small" />N'encourage pas à tester les détails d'implémentation.
      </p>
      <p className="mb-4">
        <ArrowForwardIcon fontSize="small" /> N'est pas un "test runner" ou un framework.
      </p>
      <p className="mb-4">
        <ArrowForwardIcon fontSize="small" />React Testing Library est inclu dans create-react-app.</p>
    </div>
  </div>
}