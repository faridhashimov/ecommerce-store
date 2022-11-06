import ReactDOM from 'react-dom'

const Portal = (props) => {
    return ReactDOM.createPortal(props.children, document.body)
}

export default Portal
