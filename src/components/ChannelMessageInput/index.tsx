import React from 'react';

import { Container, Icons, SmileIcon, ClipIcon, MicIcon } from './styles';
import Fundo from '../../imgs/fundo.jpg'

const ChannelMessageInput: React.FC = () => {
  return (
      <Container>
        <div className="left">
          <Icons>
            <SmileIcon />
            <ClipIcon />
          </Icons>
        
          <input type="text" placeholder='Mensagem'/>
        </div>
        <MicIcon />
      </Container>
  )
}

export default ChannelMessageInput;