import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ErrorMsg, Spinner } from '../components'
import { mobile } from '../responsive'
import { CheckCircle, Error } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { format, parseISO } from 'date-fns'
import { selectUser } from '../redux/selectors'
import { useGetUserQuery, useUpdateUserMutation } from '../redux/ecommerceApi'

const MyOrders = styled.div``

const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    color: #333;
    margin-bottom: 20px;
    h1 {
        font-size: 18px;
        font-weight: 400;
        ${mobile({ marginBottom: '20px' })}
    }
    ${mobile({ flexDirection: 'column' })}
`

const Container = styled.div`
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    display: flex;
`
const UserInfoContainer = styled.div`
    flex: 1;
    padding: 20px;
    border-right: 1px solid #e2e2e2;
    min-height: 445px;
    h1 {
        font-size: 16px;
        margin-bottom: 20px;
        color: #f27a1a;
        font-weight: 500;
    }
`
const PasswordContainer = styled.div`
    flex: 1;
`
const UpdateUser = styled.form``
const InputWrapper = styled.div`
    display: flex;
`
const InputContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-right: 20px;
    &:last-child {
        margin-right: 0px;
    }
    margin-bottom: 20px;
`
const InputLabel = styled.label`
    font-size: 14px;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
`
const EmptyLabel = styled(InputLabel)`
    height: 21px;
`
const Input = styled.input`
    padding: 10px 12px;
    background-color: #fbfbfb;
    border: solid 1px #e6e6e6;
    border-radius: 6px;
    &:focus {
        outline: none;
    }
`
const SelectCode = styled.select`
    cursor: pointer;
    padding: 10px 12px;
    background-color: #fbfbfb;
    border: solid 1px #e6e6e6;
    border-radius: 6px;
    &:focus {
        outline: none;
    }
`
const CodeOption = styled.option``

const SubmitBtn = styled.button`
    text-transform: uppercase;
    width: 100%;
    font-size: 14px;
    border-radius: 6px;
    padding: 8px;
    background: transparent;
    color: #f27a1a;
    border: solid 1px #f27a1a;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #f27a1a;
        color: #fff;
        transition: all 0.2s ease;
    }
`
const UserUpdated = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    background-color: ${(props) => props.bg};
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
`
const UserInfo = () => {
    const { _id } = useSelector(selectUser)
    const [updated, setUpdated] = useState(false)
    const [err, setErr] = useState(false)
    const [year, setYear] = useState('Year')
    const [day, setDay] = useState('Day')
    const [month, setMonth] = useState('Month')
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })

    const { data: user, isLoading, isError } = useGetUserQuery(_id)
    const [
        updateUser,
        { isLoading: isUserUpdating, isError: isUserUpdateError, error },
    ] = useUpdateUserMutation()

    const [text, setText] = useState(false)
    const countryCode = text ? (
        <p style={{ color: 'red', fontSize: '12px', marginLeft: '10px' }}>
            Do not forget your country code...
        </p>
    ) : null

    useEffect(() => {
        const { firstName, lastName, email, phone, birthDate } = user || {}
        setInputs({
            firstName: firstName ? firstName : '',
            lastName: lastName ? lastName : '',
            email: email ? email : '',
            phone: phone ? phone : '',
        })
        setYear(birthDate ? format(parseISO(birthDate), 'y') : 'Year')
        setDay(birthDate ? format(parseISO(birthDate), 'd') : 'Day')
        setMonth(birthDate ? format(parseISO(birthDate), 'MM') : 'Month')
    }, [user])

    const generateYear = () => {
        const arr = []
        const startYear = 1900
        const endYear = new Date().getFullYear()
        for (let i = endYear; i >= startYear; i--) {
            arr.push(
                <CodeOption key={i} value={i}>
                    {i}
                </CodeOption>
            )
        }
        return arr
    }

    const onInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    const generateDate = (date) => {
        const arr = []
        for (let i = 1; i <= (date === 'day' ? 31 : 12); i++) {
            arr.push(
                <CodeOption key={i} value={i}>
                    {i}
                </CodeOption>
            )
        }
        return arr
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const credentials = {
            ...inputs,
            birthDate: `${year}-${month}-${day}`,
        }

        try {
            const updatedUser = await updateUser({ credentials, _id }).unwrap()
            console.log(updatedUser)
        } catch (error) {
            console.log(err)
        }
    }

    const success = updated ? (
        <Message bg="#edfff2" title="User has been updated" />
    ) : null

    const errorMsg =
        isError && err ? <Message bg="#e99b98" title="Wrong Password" /> : null

    useEffect(() => {
        const timerId = setTimeout(() => {
            setUpdated(false)
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [updated])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setErr(false)
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [err])

    return (
        <MyOrders>
            <OrderHeader>
                <h1>User Infromation</h1>
            </OrderHeader>
            {success}
            {errorMsg}
            <Container>
                <UserInfoContainer>
                    {isLoading || isUserUpdating ? (
                        <Spinner />
                    ) : isError || isUserUpdateError ? (
                        <ErrorMsg />
                    ) : (
                        <>
                            <h1>Update Membership Infromation</h1>
                            <UpdateUser onSubmit={onSubmit}>
                                <InputWrapper>
                                    <InputContainer>
                                        <InputLabel>Firstname</InputLabel>
                                        <Input
                                            value={inputs.firstName}
                                            name="firstName"
                                            onChange={onInputChange}
                                            type="text"
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <InputLabel>Lastname</InputLabel>
                                        <Input
                                            value={inputs.lastName}
                                            name="lastName"
                                            onChange={onInputChange}
                                            type="text"
                                        />
                                    </InputContainer>
                                </InputWrapper>
                                <InputWrapper>
                                    <InputContainer>
                                        <InputLabel>E-Mail</InputLabel>
                                        <Input
                                            value={inputs.email}
                                            name="email"
                                            onChange={onInputChange}
                                            type="email"
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <InputLabel>Password</InputLabel>
                                        <Input
                                            name="password"
                                            onChange={onInputChange}
                                            type="password"
                                        />
                                    </InputContainer>
                                </InputWrapper>
                                <InputWrapper>
                                    <InputContainer>
                                        <InputLabel
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            Phone {countryCode}
                                        </InputLabel>
                                        <Input
                                            onFocus={() => setText(true)}
                                            onBlur={() => setText(false)}
                                            value={inputs.phone}
                                            name="phone"
                                            onChange={onInputChange}
                                            type="text"
                                        />
                                    </InputContainer>
                                </InputWrapper>
                                <InputWrapper>
                                    <InputContainer>
                                        <InputLabel>Date Of Birth</InputLabel>
                                        <SelectCode
                                            value={day}
                                            onChange={(e) =>
                                                setDay(e.target.value)
                                            }
                                        >
                                            <CodeOption disabled hidden>
                                                Day
                                            </CodeOption>
                                            {generateDate('day')}
                                        </SelectCode>
                                    </InputContainer>
                                    <InputContainer>
                                        <EmptyLabel></EmptyLabel>
                                        <SelectCode
                                            value={month}
                                            onChange={(e) =>
                                                setMonth(e.target.value)
                                            }
                                        >
                                            <CodeOption disabled hidden>
                                                Month
                                            </CodeOption>
                                            {generateDate('month')}
                                        </SelectCode>
                                    </InputContainer>
                                    <InputContainer>
                                        <EmptyLabel></EmptyLabel>
                                        <SelectCode
                                            value={year}
                                            onChange={(e) =>
                                                setYear(e.target.value)
                                            }
                                        >
                                            <CodeOption disabled hidden>
                                                Year
                                            </CodeOption>
                                            {generateYear()}
                                        </SelectCode>
                                    </InputContainer>
                                </InputWrapper>
                                <SubmitBtn type="submit">Update</SubmitBtn>
                            </UpdateUser>
                        </>
                    )}
                </UserInfoContainer>
                <PasswordContainer></PasswordContainer>
            </Container>
        </MyOrders>
    )
}

const Message = ({ title, bg }) => {
    return (
        <UserUpdated bg={bg}>
            {bg === '#edfff2' ? (
                <CheckCircle sx={{ color: '#1eb539', marginRight: '5px' }} />
            ) : (
                <Error sx={{ color: '#cc0f0f', marginRight: '5px' }} />
            )}
            {title}
        </UserUpdated>
    )
}

export default UserInfo
