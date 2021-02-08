import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    display: flex;
    /* flex-direction: row; */
    width: 114px;
    height: 43px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #00dcb7;
    background-color: transparent;
    font: 14px Roboto, sans-serif;
    color: #00dcb7;
    transition: background-color 0.5s, color 0.5s, border-color 0.5s;
  }
  button:hover {
    background: ${shade(0.2, '#00DCB7')};
    color: ${shade(0.2, '#27233a')};
    border-color: ${shade(0.2, '#27233a')};
  }
`;
