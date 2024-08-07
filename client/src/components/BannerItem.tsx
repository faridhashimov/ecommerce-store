import styled from 'styled-components';
import { ArrowRightAltOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Banner = styled.div`
  flex: 1;
  margin: 0px 10px;
  position: relative;
  height: 480px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 0.2s ease;
  }
  &:hover::after {
    opacity: 1;
    transition: all 0.2s ease;
  }
`;
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BannerInfo = styled.div`
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
const BannerTitle = styled.span`
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 300;
  color: #777777;
`;
const BannerName = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  color: #333333;
`;
const BannerDiscount = styled.h2`
  font-size: 22px;
  font-weight: 300;
  letter-spacing: -1px;
  color: #333333;
`;

const BannerButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #f27a1a;
  border: 2px solid #f27a1a;
  min-width: 120px;
  text-transform: uppercase;
  padding: 6px 10px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: transparent;
  &:hover {
    background-color: #f27a1a;
    color: #fff;
    transition: all 0.2s ease;
  }
`;

interface BannerItemProps {
  img: string;
  title: string;
  cat: string;
  disc: string;
}
export const BannerItem: React.FC<BannerItemProps> = ({
  img,
  title,
  cat,
  disc,
}) => {
  return (
    <Banner>
      <BannerImage src={img} />
      <BannerInfo>
        <BannerTitle>{title}</BannerTitle>
        <BannerName>{cat}</BannerName>
        <BannerDiscount>{disc}</BannerDiscount>
        <BannerButton to={`/list?category=${encodeURIComponent(cat)}`}>
          Shop Now
          <ArrowRightAltOutlined
            style={{
              marginLeft: 12,
              fontSize: 15,
              fontWeight: 300,
            }}
          />
        </BannerButton>
      </BannerInfo>
    </Banner>
  );
};
