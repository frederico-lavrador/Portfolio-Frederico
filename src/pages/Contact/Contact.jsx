import { getData } from '../../services/api'
import { globalFetch } from '../../services/hook'

export function Contact() {


	const { data, loading } = globalFetch(getData);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!data.home || !data.home) {
		return <div>Loading home data...</div>;
	}

    return (
			<section id='contact' className='contact'>
				<div className='container'>
					<div className='contact__wrapper'>
						<div className='contact__text'>
						<h2>{data.contact.title}</h2>
						<h3>{data.contact.email}</h3>
						<h3>{data.contact.phone}</h3>
						</div>
					</div>
				</div>
			</section>
		);
}