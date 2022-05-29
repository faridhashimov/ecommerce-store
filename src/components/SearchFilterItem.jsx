import { Close } from '@mui/icons-material'
import styled from 'styled-components'

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
const CloseContainer = styled.div`
    cursor: pointer;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchFilterItem = ({ info, onDeleteFilter, ct }) => {
    console.log(ct)
    return (
        <Container>
            {ct === 'color' ? <Color c={info} /> : <Info>{info}</Info>}

            <CloseContainer onClick={() => onDeleteFilter(info)}>
                <Close
                    sx={{ fontSize: '8px', stroke: 'black', strokeWidth: '2' }}
                />
            </CloseContainer>
        </Container>
    )
}

export default SearchFilterItem
