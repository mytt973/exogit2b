import React, {  useState } from 'react'
import {Login } from '../../components'
import axios from 'axios'
import { getTab } from '../../model/Tab'
import { useNavigate } from 'react-router-dom'

// import api from '../../../api/api'
// import {  useNaviqgate, } from 'react-router-dom'

export default function Home() {
    const [login,setLogin]=useState(false)
    const [ info,setInfo]=useState(JSON.parse(localStorage.getItem('use')))
    const navigate = useNavigate();

    const  onLogin=async (data)=>{
        try {
            const  reponce = await axios.post("https://api-dev.akov-developpement.fr/api/users/save",data)
            alert("tu t enregistre");
            console.log(reponce);
    } catch (error) {  
        console.log("erreur");
    }
}
    const onConnection =async (data)=>{
        try {
        const reponce =await axios.post("https://api-dev.akov-developpement.fr/api/users/login",data)
        console.log(reponce.data,8,reponce.status);
        setInfo(reponce.data);
        localStorage.setItem('use',JSON.stringify(reponce.data))    
         if(reponce.data.role==="ADMIN"){navigate("/admin")}else{navigate("/user")}
         console.log("tu t connectter");

    } catch (error) {
        console.log("erreur");          
        alert("email or password not found ")
    }
    
  
}


    const LogChange=()=>{
        setLogin(!login)
    }

const onDeconnect=()=>{
    localStorage.setItem('use',null)
    setInfo(null);
}



  return (
 <>

        {info?(
            <>
                 <div className='card'>
                <p> nom : {info.nom}</p> 
                <p> prenom : {info.prenom}</p> 
                <p> role : {info?.role}</p> 
                <p> id : {info.id}</p>
                <button onClick={onDeconnect}>ce deconnecter {info?.email}</button>
               </div>
            </>
        ):( 
            <>
              <div>   {login?<Login  tab={getTab(false)} onSub={onLogin}/> : <Login tab={getTab(true)} onSub={onConnection}/>}
                <button className='btn btn-secondary' style={{width:400}} onClick={LogChange}> {!login?"inscription":"connection"} </button>
              </div>
            </>
        )}


   </>
  )
}

    //  const fu = ()=>{   api.post('/api/users/save',data).then(function () {
    //        alert("tu t enregistre")
    //         console.log("reponce"); 
    //         navigate('/admin')  
           
    //     } 
    //     ).catch(function (erreur) {
    //         alert(erreur)

    //     });}