import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342px;
  height: 423px;
  align-items: center;
  box-shadow: 0px 0.1px 0.1px 0.1px black;
  margin: 0 auto;
  flex-direction: column;

  img {
    justify-content: center;
    width: 160px;
    height: 105px;
    margin-top: 49px;
    margin-bottom: 21px;
  }

  p {
    font: 11px, Roboto, sans-serif;
    color: #00dcb7;
  }

  input {
    height: 34px;
    flex: 1;
    border-width: 0 0 2px 0;
    border-color: #00dcb7;
    margin: 0px auto 27px auto;
    font: 14px, Roboto, sans-serif;
    word-break: break-all;

    & + input {
      margin-bottom: 44px;
    }
  }

  button {
    width: 114px;
    height: 43px;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid #00dcb7;
    background-color: white;
    font: 14px, Roboto, sans-serif;
    color: #00dcb7;
  }
`;
