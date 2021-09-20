import { useAuth } from "../hooks/auth";

export function Home(){

    const {user} =useAuth();

    return(
        <div>
            {user?.nome}
        </div>
    )
}