import styled from 'styled-components';
import { Brands, BannerItem } from '.';
import { catItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 93vw;
`;
const AllBanners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${mobile({ flexDirection: 'column' })}
`;

export const BannerGroup: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <AllBanners>
          {catItems.map((item) => (
            <BannerItem key={item.id} {...item} />
          ))}
        </AllBanners>
        <Brands />
      </Wrapper>
    </Container>
  );
};
