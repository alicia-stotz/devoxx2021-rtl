import React from 'react';

import { ToolBar } from './ToolBar';
import { SummaryButton } from '../../shared/SummaryButton';

const SUMMARY_CONTENT: JSX.Element = <div></div>
const TITLE_CONTENT: JSX.Element =
  <div>
    <h3 className="mb-0">Zone de jeu</h3>
    <span className="text-secondary fw-lighter">findby, user event, async</span>
  </div>
export const GameZone = () => {
  return <div className="container row">
    <SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
    <ToolBar numberOfPokemon={0} />
  </div>
}