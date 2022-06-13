import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RequireAuth = () => {
    const isAuthorized = useSelector((state) => state.user?.isAuthorized)
    const location = useLocation()

    return (
        isAuthorized
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth