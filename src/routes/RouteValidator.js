import React from 'react'
import PropTypes from 'prop-types';
import MainLayout from '../components/layouts/MainLayout';

const RouteValidator = ({
  hasNavbar,
  Component
}) => {
  if (hasNavbar) {
    return (
      <MainLayout>
          <Component />
      </MainLayout>
    )
  }
  return <Component />
}

RouteValidator.propTypes = {
    Component: PropTypes.func,
    hasNavbar: PropTypes.bool
};

export default RouteValidator