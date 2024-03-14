import { getData } from '../../services/api'
import { reducer } from '../../reducer'
import { useEffect, useReducer, useState } from 'react'

export function Home() {

	/* const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {

		async function fetchData() {

			try {

				const fetchedData = await getData();
				
				dispatch({ type: 'FETCH_SUCCESS', payload: fetchedData });

			} catch (error) {
				
				dispatch({ type: 'FETCH_ERROR', payload: error });

			}

		}

		fetchData();

	}, []);

	const { loading, error, data } = state;

	if (loading) {
		return (
			<div>
				Loading...
			</div>
		)
	} else if (error) {
		return (
			<div>
				Error: {error.message}
			</div>
		)
	}  */

    /* 	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {

		async function fetchData() {

			try {

				const fetchedData = await getData('home');

				dispatch({ type: 'FETCH_SUCCESS', payload: fetchedData });

			} catch (error) {
				
				dispatch({ type: 'FETCH_ERROR', payload: error })

			}

		}

		fetchData();

	}, []);

	console.log(state.data);

	if (state.loading) {
		return <div>Loading...</div>
	} else if (state.error) {
		return <div>Error: {state.error.message}</div>
	} else if (!state.data) {
		return <div>No Data</div>
	}
 */
	
	/* getData().then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});

	async function fetchData() {
		try {
			const data = await getData();
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	const data = fetchData(); */

	/* const[homePage, setHomePage] = useState();

	useEffect(() => {

		async function fetchData() {

			try {
				
				const data = await getData();

				setHomePage(data);

			} catch (error) {
				
				console.log('Error: ', error);

			}

		}

		fetchData();

	}, []); */
	
	return (
			<section id='hero' className='hero'>
				<div className='container'>
					<div className='hero__wrapper'>
						<h1>
							Hello! I'm <span>Frederico</span>,<br />a <span>Web Developer</span>.
						</h1>
					</div>
				</div>
			</section>
		);
}