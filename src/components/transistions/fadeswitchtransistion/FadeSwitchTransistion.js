import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const FadeSwitchTransistion = ({
  mode,
  children,
  switcher,
  mount = true,
  appear = true,
  type,
}) => {
  return (
    <SwitchTransition mode={mode}>
      <CSSTransition
        key={switcher}
        timeout={500}
        classNames={type}
        appear={appear}
        in={mount}>
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default FadeSwitchTransistion;
