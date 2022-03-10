import styled from 'styled-components';
import Fundo from '../../Assets/cover.png';

export const Sidebar = styled.aside`
    margin: 0;
    padding: 0;
    width: 200px;
    height: 100%;
    background-color: #181C2e;
    position: fixed;
    overflow: auto;
    
`

export const Avatar = styled.div`
    background: url(${Fundo});
    background-color: #181C2e;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;
`