import React, { useCallback, useRef } from 'react';
// FormEvent
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import logo from '../../assets/logo.svg';
// import ValidationErrors from '../../utils/getValidations';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidation from '../../utils/getValidations';
// import api from '../../services/api';
import * as S from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  console.log(formRef);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handdleSignIn = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      console.log(data);
      const schema = Yup.object().shape({
        Mail: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        Password: Yup.string().min(6, 'Mínimo de 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
      const errors = getValidation(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

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
