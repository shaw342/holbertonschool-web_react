import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const liProps = {
    "data-priority": type
  };

  if (html) {
    liProps.dangerouslySetInnerHTML = html;
  } else {
    liProps.children = value;
  }

  return (
    <li {...liProps} />
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string
};

export default NotificationItem;