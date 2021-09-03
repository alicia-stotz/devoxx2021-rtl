import React from 'react';

import { ToolBar } from './ToolBar';
import { SummaryButton } from '../../shared/SummaryButton';

const SUMMARY_CONTENT: JSX.Element = <div></div>
export const GameZone = () => {
  return <div className="container row">
    <SummaryButton content={SUMMARY_CONTENT} />
    <ToolBar numberOfPokemon={0} withFakePromise />
  </div>
}