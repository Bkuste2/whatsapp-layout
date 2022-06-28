import React from 'react';

import { Container, ChatName, Participants, Avatar, SearchIcon, More} from './styles';

const ChannelInfo: React.FC = () => {
  return (
      <Container>
        <div className="div-avatar">
          <Avatar />
        </div>

        <div className="big-div">
          <div className='labels'>
            <ChatName>
              Nome do Chat
            </ChatName>
            <Participants>
              Ismael, Matheus, Mazzolla, Rafael, Rosikas, Você
            </Participants>
          </div>
          <div className="icons">
            <SearchIcon />
            <More />
          </div>
        </div>
        
      </Container>
  )
}

export default ChannelInfo;