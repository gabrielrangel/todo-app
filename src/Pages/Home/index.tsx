import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

function Home(){
    const {user, logout} = useAuth()

    if (user.uid){
        return <button onClick={logout}>Logout</button>
    } else {
        return <Redirect to={"/"}/>
    }
}

export default Home