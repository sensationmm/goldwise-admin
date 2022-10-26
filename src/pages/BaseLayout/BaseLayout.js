import { Outlet } from 'react-router-dom'
import Loader from "../../components/atoms/Loader";
import {useSelector} from "react-redux";
import Header from "../../components/molecules/Header/Header";
import Sidebar from "../../components/molecules/Sidebar";

const BaseLayout = ({full}) => {
    const loader = useSelector((state) => state.loader?.display)

    return (
        <>
            {loader && <Loader/>}
            <main className="App transition-all">
                {full ? <Outlet /> : <>
                <Header />
                <div className="flex h-full">
                    <Sidebar />
                    <Outlet />
                </div>
                </>}
            </main>
        </>

    )
}

export default BaseLayout
