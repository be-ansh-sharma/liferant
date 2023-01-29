import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeTransistion.scss';

const FadeTransistion = ({ switcher, children }) => {
  return (
    <CSSTransition
      timeout={500}
      in={switcher}
      classNames="fadein"
      appear={true}>
      {children}
    </CSSTransition>
  );
};

export default FadeTransistion;
