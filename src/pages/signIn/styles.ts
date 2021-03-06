import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  /* background-color: red; */
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
    font: 11px Roboto, sans-serif;
    color: #00dcb7;
    margin-bottom: 4px;
  }

  > a {
    color: #5f84bd;
    margin-top: 16px;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  > a:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;
