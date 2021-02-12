import React from 'react';
import logo from '../../assets/logo.svg';
import number1 from '../../assets/number1.png';
import number2 from '../../assets/number2.png';
import number3 from '../../assets/number3.png';
import number4 from '../../assets/number4.png';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <S.MainContainer>
        <img src={logo} alt="lead up" />
        <S.Title>Artigos</S.Title>
        <S.ArticlesCards>
          <S.Container>
            <img src={number1} alt="number 1" />
          </S.Container>
          <S.Container>
            <img src={number2} alt="number 2" />
          </S.Container>
          <S.Container>
            <img src={number3} alt="number 2" />
          </S.Container>
          <S.Container>
            <img src={number4} alt="number 2" />
          </S.Container>
        </S.ArticlesCards>
      </S.MainContainer>
    </>
  );
};
export default Dashboard;
