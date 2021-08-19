import React from 'react';

export interface ISummaryButtonProps {
  content: JSX.Element;
}

export const SummaryButton = ({ content }: ISummaryButtonProps) => {
  const [displaySummary, setDisplaySummary] = React.useState<Boolean>(false);
  return <div className="mb-3 summary-button">
    <button
      type="button"
      className="btn btn-secondary btn-sm float-right"
      style={{ float: "right" }}
      name={displaySummary ? "Hide summary" : "View summary"}
      onClick={() => setDisplaySummary(!displaySummary)}>
      Summary
          </button>
    {displaySummary ? content : null}
  </div>
};