import { loginFailure, loginStart, loginSuccess } from './userSlice'
import { publicRequest } from '../requestMethods'

export const loginCall = async (userCredentials, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('auth/login', userCredentials)
        console.log(res.data)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure(err.response.data))
    }
}
