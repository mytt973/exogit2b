import { Outlet } from "react-router-dom"
import { Nav } from "../components"

const SiteLyout= ()=>{
return(
    <>
    <header>
        <Nav/>
    </header>
   
    <main className="main">
        <Outlet/>
    </main>
   
     
<footer>
<p> miguz@gmail.com</p>
<p>  © 2023 Votre entreprise. Tous droits réservés.</p> 
</footer>

    </>
)


}
export default SiteLyout;