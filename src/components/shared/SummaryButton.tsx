import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

export interface ISummaryButtonProps {
  content: JSX.Element;
  title: JSX.Element;
}

export const SummaryButton = ({ content, title }: ISummaryButtonProps) => {
  const [displaySummary, setDisplaySummary] = React.useState<Boolean>(false);
  return <div className={`mb-3 summary-button${displaySummary ? " border p-3" : ""}`}>
    {
      displaySummary ?
        <button
          type="button"
          title="Hide summary"
          onClick={() => setDisplaySummary(false)}
          className="btn btn-light btn-sm float-end">
          <ClearIcon fontSize="small" />
        </button>
        :
        <div className="d-flex align-items-center justify-content-between">
          {title}
          <button
            type="button"
            className="btn btn-secondary btn-sm float-right"
            style={{ float: "right" }}
            title="View summary"
            onClick={() => setDisplaySummary(true)}>
            Summary
          </button>
        </div>
    }
    {displaySummary ? content : null}
  </div>
};