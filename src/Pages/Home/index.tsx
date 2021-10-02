import {useAuth} from "../../Hooks/useAuth";

function Home(){
    const {user} = useAuth()

    return(
        <>
            {user.photoURL && <img src={user.photoURL} alt={"avatar"}/> }
        </>
    )
}

export default Home