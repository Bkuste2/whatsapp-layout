import React, { Children } from 'react';

import { Container, Avatar, Icons, NewChatIcon, MoreOptionsIcon } from './styles';
import  StatusIcon from '../../imgs/Status.svg'


const UserInfo: React.FC = () => {
  return (
      <Container>
        <Avatar /> 
        <Icons>
            <img src={StatusIcon} alt="" />
            <NewChatIcon />
            <MoreOptionsIcon />
        </Icons>
      </Container>
  )
}

export default UserInfo;