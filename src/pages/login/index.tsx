import React, { useState, FormEvent } from 'react';

import logo from '../../assets/logo.svg';
import { Form, Container } from './styles';

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
      <Container>
        <img src={logo} alt="lead up" />
        <Form onSubmit={handdleMail}>
          <p>E-mail</p>
          <input
            value={mail}
            onChange={e => setMail(e.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <p>Senha</p>
          <input type="text" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    </>
  );
};
export default LogIn;
