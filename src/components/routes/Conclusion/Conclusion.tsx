import queryTab from './queryTab.png';

export const Conclusion = () => {
  return <div className="conclusion-page container row">
    <div className="col-12">
      <h3 className="mb-3">Conclusion</h3>
      <div className="text-center">
        <img src={queryTab} alt="Query table" width="65%" /><br />
        <a
          className="small"
          rel="noreferrer"
          target="_blank"
          href="https://testing-library.com/docs/react-testing-library/cheatsheet#queries">
          (Source : Testing Library web site - Cheatsheet)
        </a>
      </div>

    </div>
  </div>
}