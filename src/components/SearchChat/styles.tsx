import styled from 'styled-components';

import { GoSearch } from 'react-icons/go';

export const Container = styled.div`
    background-color:var(--primary);
    height:35px;

    display:flex;
    align-items:center;

    margin: 6px 12px;

    padding: 0 16px;
    border-radius:8px;

    color:var(--light-gray);
    font-size:14px;
    font-weight:200;
`;

export const Icon = styled(GoSearch)`
    margin-right:39px;
`;

