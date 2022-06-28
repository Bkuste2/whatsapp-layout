import styled from 'styled-components';

import { BiSearchAlt2 } from 'react-icons/bi';
import { MdMoreVert } from 'react-icons/md';

export const Container = styled.div`
    grid-area:CI;

    width:100%;
    min-width:465px;
    background-color: var(--primary);

    display:flex;
    align-items:center;

    .div-avatar{
        width:70px;
    }

    .big-div{
        width:100%;

        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-right:24px;
    }

    .icons{
        display:flex;
        align-items:center;
    }
    .icons:hover{
        cursor:pointer;
    }
`;

export const Avatar = styled.div`
    width:42px;
    height:42px;
    margin-left:16px;
    margin-right: 13px;

    border-radius:50%;
    background-color: var(--avatar);

    &:hover{
        cursor:pointer;
    }
`;

export const ChatName = styled.span`
    color:var(--white);
    &:first-child:hover{
        cursor:pointer;
    }
`;

export const Participants = styled.div`
    font-size:13px;
    margin-top:5px;
    color:var(--light-gray);

    &:hover{
        cursor:pointer;
    }
`;

export const SearchIcon = styled(BiSearchAlt2)`
    width:23px;
    height:23px;
    color:#A7B3BA;
    margin-right:15px;
    &:hover{
        cursor:pointer;
    }
`;

export const More = styled(MdMoreVert)`
    width:24px;
    height:24px;
    color: #A7B3BA;

    &:hover{
        cursor:pointer;
    }
`;
