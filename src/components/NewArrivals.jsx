import { ArrowRightAltOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`;
const Wrapper = styled.div`
    width: 93vw;
`;
const AllNewArrivals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 20px; */
`;

const NewArrival = styled.div`
    flex: 1;
    margin: 0px 10px;
    position: relative;
    height: 300px;
    cursor: pointer;
    transition: all .3s ease;
    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: all .3s ease;
    }
    &:hover::after {
        opacity: 1;
        transition: all .3s ease;
    }
`;
const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const CategoryInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: 40px;
    top: 35%;
    text-transform: uppercase;
    width: 150px;
    z-index: 2;
`;
const CategoryTitle = styled.span`
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 300;
    color: #777777;
`;
const CategoryName = styled.h1`
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: #333333;
`;
const CategoryButton = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #eea287;
    border: 2px solid #eea287;
    min-width: 120px;
    text-transform: uppercase;
    padding: 6px 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: transparent;
    &:hover {
        background-color: #eea287;
        color: #fff;
    }
`;

const NewArrivals = () => {

    return (
        <Container>
            <Wrapper>
                <AllNewArrivals>
                    <NewArrival>
                        <CategoryImage src="https://d-themes.com/react/molla/demo-8/images/home/banners/banner-5.jpg" />
                        <CategoryInfo>
                            <CategoryTitle>New Arrivals</CategoryTitle>
                            <CategoryName>Women's</CategoryName>
                            <CategoryButton>
                                Shop Now
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </CategoryButton>
                        </CategoryInfo>
                    </NewArrival>
                    <NewArrival>
                        <CategoryImage src="https://d-themes.com/react/molla/demo-8/images/home/banners/banner-6.jpg" />
                        <CategoryInfo>
                            <CategoryTitle>New Arrivals</CategoryTitle>
                            <CategoryName>Men's</CategoryName>
                            <CategoryButton>
                                Shop Now
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </CategoryButton>
                        </CategoryInfo>
                    </NewArrival>
                </AllNewArrivals>
            </Wrapper>
        </Container>
    );
};

export default NewArrivals;
