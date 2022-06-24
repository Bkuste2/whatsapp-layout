import React from 'react';

import { Container, Avatar, Icons, StatusIcon, NewChatIcon, MoreOptionsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
      <Container>
        <Avatar /> 

        <Icons>
            <StatusIcon />
            <NewChatIcon />
            <MoreOptionsIcon />
        </Icons>
      </Container>
  )
}

export default UserInfo;