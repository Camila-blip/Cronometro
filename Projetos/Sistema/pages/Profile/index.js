import { useState, useContext} from 'react';
import Header from '../../components/Header';
import { Container, FormProfile, LabelAvatar, Logout } from '../../Estilizacao/profileStyle';
import { Content } from '../../Estilizacao/headerStyle';
import Title from '../../components/Title';
import avatar from '../../Assets/avatar.png';
import { AuthContent} from '../../contexts/auth';
import {FiSettings, FiUpload} from 'react-icons/fi';


export default function Profile(){
    const {user,signOut} = useContext(AuthContent);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    return(
        <section>
            <Header/>
            <Content>
                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>
                <Container>
                    <FormProfile>
                        <LabelAvatar>
                            <span>
                                <FiUpload color="#fff" size={25}/>
                            </span>
                            <input type="file" accept="image/*" /><br/>
                            { avatarUrl === null ? 
                                <img src={avatar} width="250" height={250}  alt="Foto de perfil do usuario" />
                                :
                                <img src={avatarUrl} width="250" height={250}  alt="Foto de perfil do usuario" />
                            }
                        </LabelAvatar>

                        <label>Nome</label> 
                        <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)}/>

                        <label>Email</label> 
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>
                    </FormProfile>
                </Container>
                <Container>
                    <Logout onClick={()=> signOut()}>
                        Sair
                    </Logout>
                </Container>
            </Content>
        </section>
    )
}
