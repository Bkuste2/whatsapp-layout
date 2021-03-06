import styled from 'styled-components';
import { MdMessage, MdMoreVert } from 'react-icons/md'

export const Container = styled.div`
    grid-area:UI;

    padding: 9px 35px 9px 14px ;
    background-color: var(--primary);
    border-right: 0.2px solid rgba(134,150,160,0.15);

    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Avatar = styled.div`
        width:42px;
        height:42px;
        
        border-radius:50%;
        background-color: var(--avatar);

        &:hover{
            cursor:pointer;
        }
`;

export const Icons = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:22%;

    & > img:hover{
        cursor:pointer;
    }
`;

export const StatusIcon = styled.div`
    width:21px;
    height:21px;

    &:hover{
        cursor:pointer;
    }
`;

export const NewChatIcon = styled(MdMessage)`
    width:21px;
    height:21px;
    color: var(--white);

    &:hover{
        cursor:pointer;
    }
`;

export const MoreOptionsIcon = styled(MdMoreVert)`
    width:23px;
    height:23px;
    color: var(--white);

    &:hover{
        cursor:pointer;
    }
`;

