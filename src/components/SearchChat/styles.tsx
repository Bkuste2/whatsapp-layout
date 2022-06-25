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

    color: #d1d7db;
    font-size:14px;
    font-weight:200;

    & > input {
        height:100%;
        width:100%;
        background:transparent;
        color: #d1d7db;
        font-size:15px;
    }

    & > input::placeholder {
        color: var(--light-gray);
      }
`;

export const Icon = styled(GoSearch)`
    margin-right:39px;
    &:hover{
        cursor:pointer;
    }
`;

