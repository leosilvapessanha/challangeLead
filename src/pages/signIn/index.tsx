import React from 'react';
// { FormEvent, useCallback, useRef }
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
// import { FormHandles } from '@unform/core';
// import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
// import ValidationErrors from '../../utils/getValidations';

import Input from '../../components/input';
import Button from '../../components/button';
// import api from '../../services/api';
import * as S from './styles';

const SignIn: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  function handdleSignIn(data: object): void {
    console.log(data);
  }

  return (
    <>
      <S.MainContainer>
        <S.Container>
          <img src={logo} alt="lead up" />
          <Form onSubmit={handdleSignIn}>
            <p>E-mail</p>
            <Input name="Mail" icon={FiMail} type="text" placeholder="E-mail" />
            <p>Senha</p>
            <Input
              name="Password"
              type="text"
              icon={FiLock}
              placeholder="Senha"
            />
            <Button>Cadastrar</Button>
          </Form>
          <a href="/">
            <FiLogIn />
            Voltar
          </a>
        </S.Container>
      </S.MainContainer>
    </>
  );
};
export default SignIn;
