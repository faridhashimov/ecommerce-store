import { loginFailure, loginStart, loginSuccess } from './userSlice'
import axios from 'axios'

export const loginCall = async (userCredentials, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(
            'http://localhost:5000/api/auth/login',
            userCredentials
        )
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure(err.response.data))
    }
}
