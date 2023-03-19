//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./ErrorMessage.css";
import ModalWindow from './ModalWindow';


const ErrorMessage = () => {

  return (

    <section className="error">
      <p> Danger Will Robinson! You have reached an error. </p>
      <p> the modal window should follow this. Does it work?</p>
      <ModalWindow />
    </section>
      
  )
}

export default ErrorMessage
