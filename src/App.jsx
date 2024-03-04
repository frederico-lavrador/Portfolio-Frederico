import Header from './components/Header'

function App() {

  return (
		<>
			<Header />
			<section id='hero' className='hero'>
				<div className='container'>
					<div className='hero__wrapper'>
						<h1>
							Hello! I'm <span>Frederico</span>,<br />a <span>Web Development</span> student.
						</h1>
					</div>
				</div>
			</section>
		</>
	);
}

export default App
