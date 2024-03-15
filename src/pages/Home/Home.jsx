import { getData } from '../../services/api'
import { globalFetch } from '../../services/hook'

export function Home() {

	/* const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData();
			console.log('Result: ', result);
			setData(result);
		}
		fetchData();
	}, []);
 */
	
	const { data, loading } = globalFetch(getData);

	if (loading) {
	return <div>Loading...</div>
	}

	if (!data.home || !data.home) {
		return <div>Loading home data...</div>
	}
	
	return (
			<section id='hero' className='hero'>
				<div className='container'>
					<div className='hero__wrapper'>
						<h1>
						{data.home.text} <span>{data.home.name}</span>{ data.home.connector } <span>{data.home.occupation}</span>.
						</h1>
					</div>
				</div>
			</section>
		);
}