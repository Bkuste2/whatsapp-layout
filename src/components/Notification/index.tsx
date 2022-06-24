import React from 'react';

import { Container, Labels, Title, Subtitle, ArrowRight } from './styles';
import Bell from '../../imgs/Bell.svg'


const Notification: React.FC = () => {
  return (
      <Container>
        <img src={Bell} alt="" />
        <Labels>
          <Title>
            Receba notificações de novas mensagens
          </Title>
          <Subtitle>
            Ativar notificações na área de trabalho <ArrowRight />
          </Subtitle>
          
        </Labels>
      </Container>
  )
}

export default Notification;