import { useState } from 'react';
import { Container,  Login, LogoArea, LogoImagem, Form, Input, Button, LinkHref, H1 } from './../Estilizacao/login';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('aqui')
  }

    return (
      <Container>
        <Login>
          <LogoArea>
            <LogoImagem />
          </LogoArea>
          <Form onSubmit={handleSubmit}>
              <H1>Cadastrar uma conta</H1>
              <Input type="text" placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
              <Input type="text" placeholder='email@email.com' value={email}  onChange={ (e) => setEmail(e.target.value)}/>
              <Input type="password" placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <Button type="submit">Cadastrar</Button>
          </Form>
          <LinkHref  to="/">Já tem uma conta? Entre</LinkHref>
        </Login>
      </Container>
    );
  }
  