import { PokemonCard } from './PokemonCard';
import { SummaryButton } from '../../shared/SummaryButton';

import { POKEMON_WITHOUT_TYPE, IPokemon } from '../../../contexts/pokedex.context';

const SUMMARY_CONTENT: JSX.Element = <div>
	<ul>
		<li className="mt-3">
			<h6>
				Chercher un élément{" "}
				<a href="https://testing-library.com/docs/queries/about#types-of-queries">(reference)</a>
			</h6>
			<span>getBy renvoit une erreur lorsque l'élément n'est pas trouvé</span>
			<pre className="mt-3"><code>
				<mark>screen.queryByText(...);</mark>
			</code></pre>
		</li>
	</ul>
</div>
const TITLE_CONTENT: JSX.Element =
	<div>
		<h3 className="mb-0">Card Pokemon - Sans type</h3>
		<span className="text-secondary fw-lighter">queryBy</span>
	</div>
export const PokemonCardWithoutType = () => {
	return <div className="container row">
		<div className="col-12">
			<SummaryButton title={TITLE_CONTENT} content={SUMMARY_CONTENT} />
		</div>
		{POKEMON_WITHOUT_TYPE.map((pokemon: IPokemon) =>
			<div key={pokemon.id} className="col-12 col-lg-6">
				<PokemonCard pokemon={pokemon} />
			</div>
		)}
	</div>
}