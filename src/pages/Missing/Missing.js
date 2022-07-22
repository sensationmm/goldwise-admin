import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div>
                <Link to="dashboard">Go back to dashboard</Link>
            </div>
        </article>
    )
}

export default Missing