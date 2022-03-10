import { useContext } from 'react';
import { AuthContent } from '../../contexts/auth';
import avatar from '../../Assets/avatar.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import {Sidebar,Avatar} from './headerStyle';

export default function Header(){
    const { user } = useContext(AuthContent);

    return(
        <Sidebar>
            <Avatar>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto avatar" />
            </Avatar>
            <Link to="/dashboard">
                <FiHome color="#000" size={23} />
                Chamados
            </Link>
            <Link to="/dashboard">
                <FiUser color="#000" size={23} />
                Clientes
            </Link>
            <Link to="/dashboard">
                <FiSettings color="#000" size={23} />
                Configurações
            </Link>
        </Sidebar>
    )
}