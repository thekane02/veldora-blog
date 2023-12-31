import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToggleStyles = styled.label`
  div {
    display: inline-block;
    width: 70px;
    height: 42px;
    position: relative;
    cursor: pointer;
    border-radius: 100rem;
    padding: 4px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background: ${(props) =>
      props.isChecked ? props.theme.primary : props.theme.grayLight};
  }
  span {
    display: inline-block;
    width: 34px;
    height: 34px;
    background: white;
    border-radius: 100rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transform: translateX(${(props) => (props.isChecked ? "28px" : "0")});
  }
`;

const Toggle = (props) => {
  const { on, onClick, ...rest } = props;

  return (
    <ToggleStyles isChecked={on}>
      <input
        type="checkbox"
        checked={on}
        className="hidden-input"
        onChange={() => {}}
        onClick={onClick}
      />
      <div {...rest}>
        <span
          className={`transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ${
            on ? "translate-x-[28px]" : ""
          }`}
        ></span>
      </div>
    </ToggleStyles>
  );
};

Toggle.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;
