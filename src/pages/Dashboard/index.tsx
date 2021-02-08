import React from 'react';
import logo from '../../assets/logo.svg';
// import api from '../../services/api';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <S.Container>
        <img src={logo} alt="lead up" />
        <S.Title>Artigos</S.Title>
      </S.Container>
    </>
  );
};
export default Dashboard;
