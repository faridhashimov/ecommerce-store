import styled from 'styled-components';

const Info = styled.div``;

const InfoPart = styled.div`
  margin-bottom: 10px;
  p {
    color: #666;
    font-size: 15px;
    font-weight: 300;
  }
`;

export const ProductBackground = () => {
  return (
    <Info>
      <InfoPart>
        <p>
          <strong>PRODUCT BACKGROUND</strong>: <br /> We believe that greater
          transparency will help lead the change towards a more sustainable
          future. As a step in this long-term commitment, we’re sharing how and
          where our products are made wherever possible.
        </p>
      </InfoPart>
      <InfoPart>
        <p>
          <strong>MATERIALS </strong>: <br /> Our goal is to use 100% recycled
          or other sustainably sourced materials by 2030.
        </p>
      </InfoPart>
      <InfoPart>
        <p>
          <strong>OUR SUPPLIERS</strong>: <br />
          This product has been produced in one of the following countries:
          China
        </p>
      </InfoPart>
      <InfoPart>
        <p>
          <strong>Suppliers and factories for this product.</strong> <br />
          All of our products are made by independent suppliers, often in
          developing countries where our presence can make a real difference.
          Our business helps to create jobs and independence, particularly for
          women — consequently lifting people out of poverty and contributing to
          economic growth. We only work with partners who share our respect for
          people and the environment, and who are willing to work with us to
          improve their practices. All suppliers and factories must sign our
          strict Sustainability Commitment, which includes requirements for fair
          wages and good working conditions for all. We employ a dedicated
          sustainability staff in our worldwide production offices to make sure
          the commitment is followed.
        </p>
      </InfoPart>
      <InfoPart>
        <p>
          <strong>BE A FASHION RECYCLER!.</strong> <br />
          You too can help the environment and make fashion more sustainable.
          Bring unwanted clothes or home textiles to any H&M store and they will
          be reworn, reused or recycled.
        </p>
      </InfoPart>
    </Info>
  );
};
