import styled from 'styled-components';

export const Container = styled.div`
    grid-area:CL;
    color:var(--white);
    background-color:var(--secondary);
    overflow:hidden;
    padding-bottom:8.4%;

    border-right: 0.2px solid var(--border);
`;

export const FullLine = styled.div`
    border-bottom: 1px solid var(--border-channel-list);
`;

export const ScrollArea = styled.div`
    overflow-y:scroll;
    height:100%;

    &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    &::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--border-channel-list)
    }
`;