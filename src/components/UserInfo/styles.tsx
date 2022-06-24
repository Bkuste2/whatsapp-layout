import styled from 'styled-components';
import { MdMessage, MdMoreVert } from 'react-icons/md'

export const Container = styled.div`
    grid-area:UI;


    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: var(--primary);
    padding: 9px 35px 9px 14px ;
`;

export const Avatar = styled.div`
    width:42px;
    height:42px;
    
    border-radius:50%;
    background-color: var(--avatar);
`;

export const Icons = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:22%;
`;

export const StatusIcon = styled.div`
    width:21px;
    height:21px;
`;

export const NewChatIcon = styled(MdMessage)`
    width:21px;
    height:21px;
    color: var(--white);
    `;

export const MoreOptionsIcon = styled(MdMoreVert)`
    width:23px;
    height:23px;
    color: var(--white);
`;

