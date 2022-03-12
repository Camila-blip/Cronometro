import Header from '../../components/Header';
import {} from '../../Estilizacao/profileStyle';
import { Content } from '../../Estilizacao/headerStyle';
import Title from '../../components/Title';
import {FiSettings} from 'react-icons/fi'

export default function Profile(){
    return(
        <section>
            <Header/>
            <Content>
                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>
            </Content>
        </section>
    )
}