import React from 'react';

import logo from '../../assets/logo.svg';

import { Title, Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="lead up" />
        <Title>Artigos</Title>
      </Container>
    </>
  );
};
export default Dashboard;
