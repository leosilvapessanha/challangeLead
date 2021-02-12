import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import getValidation from '../../utils/getValidations';
import { useAuth } from '../../hooks/AuthContext';
// import api from '../../services/api';
import * as S from './styles';

interface LogInCredentials {
  Mail: string;
  Password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handdleSubmit = useCallback(
    async (data: LogInCredentials) => {
      try {
        formRef.current?.setErrors({});
        console.log(data);
        const schema = Yup.object().shape({
          Mail: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          Password: Yup.string().required('senha não válida'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({ email: data.Mail, password: data.Password });
      } catch (err) {
        console.log(err);
        const errors = getValidation(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <>
      <S.MainContainer>
        <S.Container>
          <img src={logo} alt="lead up" />
          <Form onSubmit={handdleSubmit}>
            <p>E-mail</p>
            <Input name="Mail" icon={FiMail} placeholder="E-mail" />
            <p>Senha</p>
            <Input
              name="Password"
              type="text"
              icon={FiLock}
              placeholder="Senha"
            />
            <Button>Entrar</Button>
          </Form>
          <Link to="SignIn">
            <FiLogIn />
            Criar conta
          </Link>
        </S.Container>
      </S.MainContainer>
    </>
  );
};
export default LogIn;
