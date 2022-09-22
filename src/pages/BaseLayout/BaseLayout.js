import { Outlet } from 'react-router-dom'
import Loader from "../../components/atoms/Loader";
import {useSelector} from "react-redux";

const BaseLayout = () => {
    const loader = useSelector((state) => state.loader?.display)

    return (
        <>
            {loader && <Loader/>}
            <main className="App transition-all">
                <Outlet />
            </main>
        </>

    )
}

export default BaseLayout
