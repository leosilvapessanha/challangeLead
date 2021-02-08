import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  /* height: 34px; */
  display: flex;
  background: transparent;
  word-break: break-all;
  color: #001c80;

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
