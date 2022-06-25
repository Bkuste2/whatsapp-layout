import React from 'react';

import { Container, Icon} from './styles';

export interface Props{
  label: string
}

const SearchChat: React.FC<Props> = ({label}) => {
  return (
      <Container>
        <Icon />
        <input type="text" placeholder={label} />
      </Container>
  )
}

export default SearchChat;