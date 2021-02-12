import styled from 'styled-components';

export const Title = styled.title`
  display: flex;
  margin-top: 117px;
  /* margin-left: 131px; */
  font: 50px Roboto, sans-serif;
  color: #00145f;
  font-weight: bold;
  /* background-color: green; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 131px;
  /* margin: 0 auto; */
  padding: 0;
  width: 100%;
  height: 100%;

  img {
    width: 160px;
    height: 105px;
    color: #707070;
  }
`;

export const ArticlesCards = styled.div`
  display: flex;
  flex-direction: row;
  margin: 29px 0;
  padding: 0;
  width: 349px;
  height: 515px;
  justify-content: space-between;
  /* box-shadow: 0px 0px 1px 1px #00dcb7; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 131px; */
  margin-right: 107px;
  width: 349px;
  height: 515px;
  border: 1px solid #00dcb7;
  img {
    margin-top: 27px;
    margin-left: 26px;
    margin-right: 26px;
    height: 375px;
    width: 297px;
  }
`;
