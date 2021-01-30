import styled from 'styled-components';

export const Title = styled.title`
  display: flex;
  margin-top: 117px;
  margin-left: 0;
  font: 50px Roboto, sans-serif;
  font-weight: bold;
  background-color: green;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  /* margin: 0 auto; */
  padding: 0;
  width: 100%;
  height: 100%;

  img {
    width: 160px;
    height: 105px;
    background-color: red;
  }
`;
