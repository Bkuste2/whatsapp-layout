import React from 'react';

import { Container, Avatar, Name, Message, TextGroup, ContentGroup,RightGroup, Time, IconsGroup, IconFixed, IconArrow } from './styles';

export interface Props {
  name: string;
  message?: string;
  fixed?: boolean;
  time?: string;
  avatar?: string;
}

const Channel: React.FC<Props> = ({name, message,fixed, time, avatar}) => {
  
  return (
    <Container>
        <Avatar />
        <ContentGroup>
          <TextGroup>
              <Name>
                {name}
              </Name>
              
              <Message>
                {message}
              </Message>
          </TextGroup>
        
          <RightGroup>
            <Time>{time}</Time>
            
            <IconsGroup>
              {fixed ? <IconFixed /> : ''}
              <IconArrow className='arrow'/>
            </IconsGroup>
          </RightGroup>
        </ContentGroup>
      </Container>
  )
}

export default Channel;