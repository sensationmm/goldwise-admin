import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { clearAdmin } from '../../reducers/userSlice.reducer'
import authService from '../../services/auth.service'
import Button from '../../components/atoms/Button'
import './dashboard.scss'

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = async () => {
        const response = await authService.logout()
        // TODO: Check for success before navigate
        // API response PR needs to be merged
        // if (response) {
        dispatch(clearAdmin())
        navigate('/', { replace: true })
        // }
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <Button
                label="Logout"
                onClick={() => logOut()}
                size="small"
            />
        </div>
    )
}

export default Dashboard;