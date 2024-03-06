export function Contact() {

    return (
        <section id='contact' className='contact'>
            <div className="container">
                <div className="contact__wrapper">
                    <div className="contact__text">
                        <h2>Want to work with me?</h2>
                    </div>
                    <div className="contact__form">
                        <form action="">
                            Name:
                            <input type="text" placeholder="Name" />
                            <br />
                            Email:
                            <input type="email" placeholder="Email" />

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}