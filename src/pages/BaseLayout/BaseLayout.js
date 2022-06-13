import { Outlet } from "react-router-dom"

const BaseLayout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default BaseLayout