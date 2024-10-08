import { useCallback, useState } from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MainImageWrapper = styled.figure`
  width: 100%;
  height: 95%;
  background-repeat: no-repeat;
  cursor: move;
  &:hover ${MainImage} {
    opacity: 0;
  }
`;

export const MainImageComponent = ({ image }) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 10;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <MainImageWrapper
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${backgroundPosition}`,
        backgroundImage: `url(${image})`,
      }}
    >
      <MainImage src={image} />
    </MainImageWrapper>
  );
};
