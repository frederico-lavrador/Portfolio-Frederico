import { globalFetch } from '../../services/hook'
import{ getData } from '../../services/api'
import imagem_portfolio from '../../assets/foto_portfolio.jpg';

export function About() {

	const { data, loading } = globalFetch(getData);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!data.home || !data.home) {
		return <div>Loading home data...</div>;
	}

	return (
		<section id='about' className='about'>
			<div className='container'>
				<div className='about__wrapper'>
					<div className='about__text'>
						<h2>{ data.about.title }</h2>
						<hr />
						<p>
							{ data.about.text }
						</p>
						<p>
							{ data.about.hobbies }
						</p>
					</div>
					<div className='about__img'>
						<img src={imagem_portfolio} alt='foto_portfolio' />
					</div>
				</div>
			</div>
		</section>
	);
}
