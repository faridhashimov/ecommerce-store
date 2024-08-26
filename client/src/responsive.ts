import { css, CSSProp } from 'styled-components';

export const mobile = (props: CSSProp) => {
  return css`
    @media screen and (max-width: 600px) {
      ${props}
    }
  `;
};
