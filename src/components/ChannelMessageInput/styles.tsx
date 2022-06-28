import styled from 'styled-components';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { ImMic } from 'react-icons/im';

export const Container = styled.div`
    grid-area:CMI;

    background-color:var(--CMI);
    box-shadow: 15px 19px 10px 10px black;
    border-left:0.2px solid rgba(134,150,160,0.15);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 27px 0 21px;

    & > .left{
        display:flex;
        width:100%;
    }

    .left > input {
        margin:0 20px;
        width:100%;
        height:42px;
        padding:0 12px;
        border-radius:8px;
        color: var(--white);
        background-color: var(--inputCD);
        font-size:15px;
    }
    .left > input::placeholder {
        color: var(--light-gray);
    }
`;

export const Icons = styled.div`
    display:flex;
    align-items:center;
`;

export const SmileIcon = styled(BsFillEmojiSmileFill)`
    width:24px;
    height:24px;
    color:var(--light-gray);

    &:hover{
        cursor:pointer;
    }
`;

export const ClipIcon = styled(FiPaperclip)`
    width:24px;
    height:24px;
    color:var(--light-gray);
    margin-left:18px;

    &:hover{
        cursor:pointer;
    }
`;

export const MicIcon = styled(ImMic)`
    width:24px;
    height:24px;
    color:var(--light-gray);

    &:hover{
        cursor:pointer;
    }
`;

