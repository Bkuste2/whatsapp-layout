import styled from 'styled-components';

import { HiChevronRight } from 'react-icons/hi'

export const Container = styled.div`
    grid-area:NF;

    display:flex;
    align-items:center;

    padding:22px 14px;

    background-color: var(--notification-bg);
    border-right: 0.2px solid var(--border);

    &:hover{
        cursor:pointer;
    }
`;

export const Labels = styled.div`
    display:flex;
    flex-direction:column;
    margin-left: 17px;
`;

export const Title = styled.div`
    color: var(--white);
    font-weight:light;
    font-size: 15px;
`;

export const Subtitle = styled.div`
    color: var(--light-gray);
    font-weight:light;
    font-size: 13.2px;
    margin-top:4px;
    display:flex;
    align-items:center;

    &:hover{
        text-decoration:underline;
    }
`;

export const ArrowRight = styled(HiChevronRight)`
    width:20px;
    height:20px;
`;

