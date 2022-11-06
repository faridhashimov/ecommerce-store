import { Close } from '@mui/icons-material'
import styled from 'styled-components'
import ProductInfo from './ProductInfo'

const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
`
const ModalContainer = styled.div`
    position: relative;
    min-height: 70%;
    width: 65%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 3px;
`
const ModalClose = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30px;
    top: 10px;
    right: 10px;
    color: #7b7b7b;
    cursor: pointer;
    z-index: 999;
`

const ProductModal = ({ product, setOpen }) => {
    const handleModalClose = (e) => {
        let modalBg = e.target.getAttribute('data-bg')
        if (modalBg !== 'modal-bg') {
            return
        } else {
            setOpen(false)
        }
    }

    return (
        <ModalBackground data-bg="modal-bg" onClick={handleModalClose}>
            <ModalContainer>
                <ModalClose onClick={() => setOpen(false)}>
                    <Close />
                </ModalClose>
                <ProductInfo product={product} />
            </ModalContainer>
        </ModalBackground>
    )
}

export default ProductModal
