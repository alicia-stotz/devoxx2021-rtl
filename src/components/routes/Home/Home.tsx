import octopus from './octopus.png';

import TwitterIcon from '@material-ui/icons/Twitter';

export const Home = () => {
	return <div className="Home-page container row text-center">
		<div className="col-12">
			<h1 className="display-2 mt-5">
				A la découverte de Testing Library pour React
			</h1>
			<img src={octopus} alt="RTL octopus" /><br />
			<p className="lead text-secondary mt-3">
				<TwitterIcon /> @StotzAlicia
			</p>
		</div>
	</div>
}