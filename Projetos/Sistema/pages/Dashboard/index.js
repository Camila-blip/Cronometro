import { useContext } from "react";
import { AuthContent } from "../../contexts/auth";
import Header from "../../components/Header";

export default function Dashboard(){
    const { signOut } = useContext( AuthContent );

    return(
        <div>
            <Header/>
           
            <button onClick={()=> signOut()}>Fazer logout</button>
        </div>
    )
}
