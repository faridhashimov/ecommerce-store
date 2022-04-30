import { css } from 'styled-components'

export const mobile = (props) => {
    return css`
        @media screen and (min-width: 350px) and (max-width: 420px) {
            ${props}
        }
    `
}
