import React from 'react';
import ChannelInfo from '../ChannelInfo';
import UserInfo from '../UserInfo';
import Notification from '../Notification';

import { Grid } from './styles';
import ChannelData from '../ChannelData';
import ChannelList from '../ChannelList';
import ChannelMessageInput from '../ChannelMessageInput';

const Layout: React.FC = () => {
  return (
    <Grid>
        <UserInfo />
        <ChannelInfo />
        <Notification />
        <ChannelData />
        <ChannelList />
        <ChannelMessageInput />
    </Grid>
  );
}

export default Layout;