import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'react-bootstrap';
import '../../../scss/Button.scss';

const ButtonComponent = ({
  disabled,
  isLoading,
  variant,
  title,
  className,
  onButtonClick,
  type,
  icon,
  id,
}) => {
  return (
    <>
      <Button
        className={`${className}`}
        variant={variant}
        disabled={disabled || isLoading}
        onClick={() => onButtonClick()}
        type={type}
        id={id}
      >
        {icon ? <i className={icon} /> : null}
        {title}
      </Button>
    </>
  );
};

ButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  variant: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  show: PropTypes.bool,
  showSpinnerIcon: PropTypes.bool,
  id: PropTypes.any,
};

ButtonComponent.defaultProps = {
  disabled: false,
  className: '',
  variant: '',
  title: 'Button',
  onButtonClick: (event) => event,
  type: 'button',
  showSpinnerIcon: false,
};

export default ButtonComponent;
