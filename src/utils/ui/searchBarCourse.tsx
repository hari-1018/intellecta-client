// import React from 'react';
import styled from "styled-components";

const SearchInput = () => {
  return (
    <StyledWrapper>
      <div className="wave-group">
        <input required type="text" className="input" />
        <span className="bar" />
        <label className="label">
          <span
            className="label-char"
            style={{ "--index": 0 } as React.CSSProperties}
          >
            S
          </span>
          <span
            className="label-char"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            E
          </span>
          <span
            className="label-char"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            A
          </span>
          <span
            className="label-char"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            R
          </span>
          <span
            className="label-char"
            style={{ "--index": 4 } as React.CSSProperties}
          >
            C
          </span>
          <span
            className="label-char"
            style={{ "--index": 5 } as React.CSSProperties}
          >
            H
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wave-group {
    position: relative;
  }

  .wave-group .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 200px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
  }

  .wave-group .input:focus {
    outline: none;
  }

  .wave-group .label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
  }

  .wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * 0.05s);
  }

  .wave-group .input:focus ~ label .label-char,
  .wave-group .input:valid ~ label .label-char {
    transform: translateY(-20px);
    font-size: 14px;
    color: #5264ae;
  }

  .wave-group .bar {
    position: relative;
    display: block;
    width: 200px;
  }

  .wave-group .bar:before,
  .wave-group .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .wave-group .bar:before {
    left: 50%;
  }

  .wave-group .bar:after {
    right: 50%;
  }

  .wave-group .input:focus ~ .bar:before,
  .wave-group .input:focus ~ .bar:after {
    width: 50%;
  }
`;

export default SearchInput;
