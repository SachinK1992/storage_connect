import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Dropdown as BootstrapDropdown} from 'react-bootstrap';
import '../../../scss/Dropdown.scss';

const Dropdown = ({
  options,
  id,
  onChange,
  variant,
  label,
  placeholder,
  error,
  selectedValue,
  disabled,
}) => {
  const [selectedOption, setSelectedOption] = useState(selectedValue);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <label className='dropdown-label'>{label}</label>
      <BootstrapDropdown
        className={`dropdown-component ${error ? 'is-invalid' : ''}`}
        onClick={() => setShowDropdown(!showDropdown)}
        onBlur={() => setShowDropdown(false)}
      >
        <BootstrapDropdown.Toggle variant={variant} id={id}>
          {selectedOption?.name || placeholder}
          <i
            className={
              showDropdown
                ? 'navigation-icon icon-down-navigation'
                : 'navigation-icon icon-left-navigation'
            }
          ></i>
        </BootstrapDropdown.Toggle>

        <BootstrapDropdown.Menu
          popperConfig={{
            modifiers: [
              {
                name: 'offset',
                enabled: true,
                options: {
                  offset: [0, -1],
                },
              },
            ],
          }}
        >
          {options?.map((option, index) => {
            return (
              <BootstrapDropdown.Item
                key={`dropdown_${option.label}-${index}`}
                onClick={() => {
                  onChange(option);
                  setSelectedOption(option);
                }}
                disabled={disabled}
              >
                {option.label || option.name}
              </BootstrapDropdown.Item>
            );
          })}
        </BootstrapDropdown.Menu>
      </BootstrapDropdown>
      <div className='error-message'>{error}</div>
    </>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  selectedValue: PropTypes.any,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  id: 'SelectBox',
  options: [],
  label: 'SelectBox',
  className: 'primary',
  variant: '',
  onChange: (event) => event,
  placeholder: '',
  error: '',
  selectedValue: '',
  disabled: false,
};

export default Dropdown;
