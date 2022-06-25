import React from 'react';

import { Container, FiledIcon } from './styles';
import ArchiveIcon from '../../imgs/Archive.svg'

const Filed: React.FC = () => {
  return (
      <Container>
        <FiledIcon>
          <img src={ArchiveIcon} alt="" />
        </FiledIcon> Arquivadas
      </Container>
  )
}

export default Filed;