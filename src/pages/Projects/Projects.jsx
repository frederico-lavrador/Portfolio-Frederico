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
						<h2>{data.projects_title.title}</h2>
					</div>
					<div className='projects__projects'>
				
						{data.projects.map((project) => {

							return (
								<div className='projects__item' key={project.id}>
									<img src={project.image} />
									<h1>{project.title}</h1>
									<p>{project.description}</p>
								</div>
							)
							
						})}
					</div>
				</div>
			</div>
		</section>
	);

}
