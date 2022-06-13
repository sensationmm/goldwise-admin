import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { clearAdmin } from '../../reducers/adminSlice.reducer'
import Button from '../../components/atoms/Button'
import './dashboard.scss'

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(clearAdmin())
        navigate('/', { replace: true })
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