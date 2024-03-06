import { useLocation } from 'react-router-dom'

export function Error() {

    const location = useLocation();

    return (
        <>
            <div className="error">
                <div className="container">
                    <div className="error__wrapper">
                        <h1>Something went wrong!</h1>
                        <hr />
                        <h2>404 - {location.pathname} not found!</h2>
                    </div>
                </div>
            </div>
        </>
    )
}