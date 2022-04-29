import { StarRate } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

const ReviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({display: 'none'})}

`;
const StarContainer = styled.div`
    margin-right: 10px;
`;
const Review = styled.div`
    font-size: 13px;
    color: #ccc;
`;

const Reviews = () => {
    return (
        <ReviewContainer>
            <StarContainer>
                <StarRate style={{ fontSize: 16, color: '#FCB941' }}></StarRate>
                <StarRate style={{ fontSize: 16, color: '#FCB941' }}></StarRate>
                <StarRate style={{ fontSize: 16, color: '#FCB941' }}></StarRate>
                <StarRate style={{ fontSize: 16, color: '#CCCCCC' }}></StarRate>
                <StarRate style={{ fontSize: 16, color: '#CCCCCC' }}></StarRate>
            </StarContainer>
            <Review>( 2 Reviews )</Review>
        </ReviewContainer>
    );
};

export default Reviews;
