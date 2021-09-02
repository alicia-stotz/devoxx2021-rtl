import React from 'react';

import { Toolbar } from './ToolBar';
import { SummaryButton } from '../../shared/SummaryButton';

const SUMMARY_CONTENT: JSX.Element = <div></div>
export const GameZone = () => {
  return <div className="container row">
    <SummaryButton content={SUMMARY_CONTENT} />
    <Toolbar numberOfPokemon={0} />
  </div>
}