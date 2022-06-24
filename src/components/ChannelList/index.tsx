import React from 'react';
import Filed from '../Filed';
import SearchChat from '../SearchChat';

import { Container, FullLine } from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
        <SearchChat label='Pesquisar ou começar uma nova conversa'/>
        <FullLine />
        <Filed />
      </Container>
  )
}

export default ChannelList;