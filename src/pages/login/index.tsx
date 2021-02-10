import React, { useState, FormEvent } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
// import api from '../../services/api';
import * as S from './styles';

const LogIn: React.FC = () => {
  const [mail, setMail] = useState('');

  function handdleMail(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setMail('');
    // console.log(mail);
    // add novo e-mail
  }
  return (
    <>
      <S.MainContainer>
        <S.Container>
          <img src={logo} alt="lead up" />
          <Form onSubmit={handdleMail}>
            <p>E-mail</p>
            <Input
              name="Mail"
              value={mail}
              icon={FiMail}
              onChange={e => setMail(e.target.value)}
              type="text"
              placeholder="E-mail"
            />
            <p>Senha</p>
            <Input
              name="Password"
              type="text"
              icon={FiLock}
              placeholder="Senha"
            />
            <Button>Entrar</Button>
          </Form>
          <a href="SignIn">
            <FiLogIn />
            Criar conta
          </a>
        </S.Container>
      </S.MainContainer>
    </>
  );
};
export default LogIn;
