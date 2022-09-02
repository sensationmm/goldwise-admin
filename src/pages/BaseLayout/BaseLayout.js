import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <main className="App transition-all">
            <Outlet />
        </main>
    )
}

export default BaseLayout