import TwitterIcon from '@material-ui/icons/Twitter';

export const TwitterLink = () => {
  return <div className="twitter-link position-fixed bottom-0" style={{ right: '10px' }}>
    <a href="https://twitter.com/StotzAlicia"
      className="text-muted"
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noreferrer">
      <TwitterIcon /> @StotzAlicia
    </a>
  </div>
}