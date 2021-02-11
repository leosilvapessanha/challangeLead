import styled, { css } from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* height: 34px; */
  display: flex;
  background: transparent;
  word-break: break-all;
  color: #001c80;

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    margin: 0px auto 27px auto;
    flex: 1;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-color: #00dcb7;

    &::placeholder {
      color: transparent;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
