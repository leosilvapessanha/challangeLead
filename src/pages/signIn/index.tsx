import React, { FormEvent, useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import ValidationErrors from '../../utils/getValidations';

import Input from '../../components/input';
import Button from '../../components/button';
// import api from '../../services/api';
import * as S from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handdleSignIn = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        const schema = Yup.object().shape({
          mail: Yup.string()
            .required('e-mail obrigatório')
            .email('Digíte um e-mail válido'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
        });
        await schema.validate(event, { abortEarly: false });
      } catch (err) {
        console.log(err);
        const errors = ValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [],
  );

  return (
    <>
      <S.MainContainer>
        <S.Container>
          <img src={logo} alt="lead up" />
          <Form ref={formRef} onSubmit={handdleSignIn}>
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
