import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    font-size: 15px;
    font-weight: 700;
    color: white;
    padding: 15px;
    margin-bottom: 25px;
    outline: 0;
    border: 1px solid #801313;
    border-radius: 5px;
    background-color: transparent;
`;

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
