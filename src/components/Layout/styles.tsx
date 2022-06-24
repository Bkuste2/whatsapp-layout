import styled from "styled-components";

// UI - UserInfo
// CI - ChannelInfo
// NF - Notification
// CD - ChannelData
// CL - ChannelList
// CI - ChannelInput

export const Grid = styled.div`
    display:grid;
    
    grid-template-columns:480px auto;
    grid-template-rows: 60px 90px 1fr 60px;

    grid-template-areas: 
    'UI CI' 
    'NF CD' 
    'CL CD' 
    'CL CMI'
    ;

    height: 100vh;
`;

