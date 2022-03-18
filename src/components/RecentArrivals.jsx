import { ArrowRightAltOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import Products from './Products';
import { recentArrivals } from '../data';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
`;
const Wrapper = styled.div`
    width: 93vw;
    padding-bottom: 30px;
`;
const Title = styled.div`
    margin-bottom: 15px;
    text-align: center;
    font-size: 32px;
    line-height: 34px;
    color: #333;
    font-weight: 600;
`;
const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;
const FilterButton = styled.div`
    padding: 5px 10px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    color: #777777;
    margin: 0px 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #eea287;
        transition: all 0.3s ease-in-out;
    }
`;
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #232323;
    border: 2px solid #232323;
    padding: 10px 24px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #232323;
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
`;

const RecentArrivals = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Recent Arrivals</Title>
                <Filters>
                    <FilterButton>All</FilterButton>
                    <FilterButton>Women</FilterButton>
                    <FilterButton>Men</FilterButton>
                    <FilterButton>Shoe & Boots</FilterButton>
                </Filters>
                <Products products={recentArrivals} />
                <ButtonContainer>
                    <InfoButton>
                        View More
                        <ArrowRightAltOutlined
                            style={{
                                marginLeft: 12,
                                fontSize: 15,
                                fontWeight: 300,
                            }}
                        />
                    </InfoButton>
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default RecentArrivals;
