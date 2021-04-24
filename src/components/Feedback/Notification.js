import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ message }) => <p>{message}</p>;

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;
