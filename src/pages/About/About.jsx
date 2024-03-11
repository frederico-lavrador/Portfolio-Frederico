
export function About() {
    
    return (
        <section id='about' className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__text">
                        <h2>Hello! I'm Frederico, from Portugal, and I am a Web Developer.</h2>
                        <hr />
                        <p>
                            I took a programming course in highschool focused on back-end development and
                            decided to expand my knowledge in this field by educating myself on front-end development.
                            <br />
                            Recently I have learned the basics of JavaScript and React and now I am looking to learn
                            about back-end tools, mainly SQL and Node.js.
                            <br />
                            I am passionate about programming and I am always happy to face new challenges.
                        </p>
                        <p>
                            Outside of my studies I like spending my time reading about history, philosophy and fantasy.
                            I'm learning how to play guitar and want to learn piano and drums. Video-games are also a big passion of mine.
                        </p>
                    </div>
                    <div className="about__img">
                        <img src="../../assets/foto_portfolio.jpg" alt="foto_portfolio" />
                    </div>
                </div>
            </div>
        </section>
    )
}