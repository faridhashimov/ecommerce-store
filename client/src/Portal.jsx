import ReactDOM from 'react-dom';

export const Portal = (props) => {
  return ReactDOM.createPortal(props.children, document.body);
};
