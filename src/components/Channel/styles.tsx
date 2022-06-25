import styled from 'styled-components';
import { BsPinAngleFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

export const Container = styled.div`
    padding: 0 0 0 11px;
    display: flex;
    height:72px;
    overflow:hidden;

    &:hover{
        background-color:var(--border-channel-list);
        cursor:pointer;
    }
`;

export const Avatar = styled.div`
    min-width:50px;
    height:50px;
    background-color: var(--avatar);
    border-radius: 50%;
    margin-top: 15px;
`;

export const TextGroup = styled.div`
    overflow:hidden;
`;

export const Name = styled.div`
    margin-top: 17px;

    font-weight:300;
`;

export const Message = styled.div`
    margin-top: 6px;

    color: var(--light-gray);
    font-weight: 400;
    font-size: 14px;
`;

export const ContentGroup = styled.div`
    border-top: 1px solid var(--border-channel-list);
    margin-left: 15px;
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-between;
`;

export const RightGroup = styled.div`
    padding: 24px 13px 0 0;
    text-align:right;
    color:var(--light-gray);
    display:flex;
    flex-direction:column;
    align-items:right;
`;

export const Time = styled.div`
    font-size:12px;
`;


export const IconsGroup = styled.div`
    margin-top:6px;
    display:flex;
`;

export const IconFixed = styled(BsPinAngleFill)`
    width:15px;
    height:15px;
`;

export const IconArrow = styled(IoIosArrowDown)`
    width:20px;
    height:20px;
    display:none;
`;

