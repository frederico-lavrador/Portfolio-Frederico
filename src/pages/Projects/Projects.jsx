import { getData } from '../../services/api'
import { globalFetch } from '../../services/hook'

export function Projects() {

	const { data, loading } = globalFetch(getData);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!data.home || !data.home) {
		return <div>Loading home data...</div>;
	}

	return (
		<section id='projects' className='projects'>
			<div className='container'>
				<div className='projects__wrapper'>
					<div className='projects__title'>
						<h2>{ data.projects_title.title }</h2>
					</div>
					<h3>Coming Soon!</h3>
					<div className='projects__projects'></div>
				</div>
			</div>
		</section>
	);

}
