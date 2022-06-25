import React from 'react';
import Channel from '../Channel';
import Filed from '../Filed';
import SearchChat from '../SearchChat';

import { Container, FullLine, ScrollArea } from './styles';


const ChannelList: React.FC = () => {
  return (
      <Container>
        <SearchChat label='Pesquisar ou começar uma nova conversa'/>
        <FullLine />
        <ScrollArea>
          <Filed />
          <Channel name='Amor Da Minha Vida💙💙' message='Whehehehe' time='01:36' fixed />
          <Channel name='Ismael Fura Rolê' message='Orkei' time='01:27'/>
          <Channel name='Matheus Gótica Rabuda' message='Preto'/>
          <Channel name='Wizeup' message='Chat finalizado às 16:34:20'/>
          <Channel name='Kart dos Amigos' message='+55 48 9963-0501: 👏🏻👏🏻👏🏻👏🏻'/>
          <Channel name='Projeto Primo Rico' message='Brunão: https://www.youtube.com/channel/UCbEZSVNL-gJZXfytO-9kwlA   asdfdsafsdfssfad'/>
          <Channel name='Escolhe nome ai' message='Ismael: Bele'/>
          <Channel name='Escolhe nome ai' message='Ismael: Bele'/>
          <Channel name='Escolhe nome ai' message='Ismael: Bele'/>
          <Channel name='Escolhe nome ai' message='Ismael: Bele'/>
          <Channel name='Mãe' message='Vai limpar o mundo inteiro SIM!'/>
          <Channel name='Mãe' message='Vai limpar o mundo inteiro SIM!'/>
          <Channel name='Aaa' message='Vai limpar o mundo inteiro SIM!'/>
        </ScrollArea>
      </Container>
  )
}

export default ChannelList;