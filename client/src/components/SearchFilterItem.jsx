import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Close } from '@mui/icons-material'
import styled from 'styled-components'

import { add } from '../redux/resetSlice'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
`
const Info = styled.span`
    line-height: 12px;
    margin-right: 10px;
    font-size: 10px;
    font-weight: 600;
    color: #333;
`
const Color = styled.div`
    width: 20px;
    height: 10px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #999999;
    background-color: #${(props) => props.c};
`
const CloseContainer = styled(Link)`
    cursor: pointer;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchFilterItem = ({
    info,
    cat,
    setCat,
    ct,
    setClicked,
    getFiltersUrl,
}) => {
    const dispatch = useDispatch()

    const onToggleFilter = (categ, id) => {
        dispatch(add())
        if (cat && Object.entries(cat).flat().includes(id)) {
            setCat(
                Object.fromEntries(
                    Object.entries(cat).filter(([key, value]) => value !== id)
                )
            )
        }
    }

    return (
        <>
            {info === 'all' ? null : (
                <Container>
                    {ct === 'color' ? <Color c={info} /> : <Info>{info}</Info>}

                    <CloseContainer
                        onClick={() => onToggleFilter(ct, info)}
                        to={
                            ct === 'category'
                                ? getFiltersUrl({ category: info })
                                : ct === 'brand'
                                ? getFiltersUrl({ brand: info })
                                : ct === 'size'
                                ? getFiltersUrl({ size: info })
                                : ct === 'gender'
                                ? getFiltersUrl({ gender: info })
                                : getFiltersUrl({ color: info })
                        }
                    >
                        <Close
                            sx={{
                                fontSize: '8px',
                                stroke: 'black',
                                strokeWidth: '2',
                            }}
                        />
                    </CloseContainer>
                </Container>
            )}
        </>
    )
}

export default SearchFilterItem
