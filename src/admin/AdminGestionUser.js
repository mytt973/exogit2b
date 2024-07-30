import React, { useEffect, useState } from 'react'
import api from '../api/api.js';


export default function AdminGestionUser() {
    const [ users,setUsers]=useState([]);
    const recupUser= async ()=>{
           
        api.post('api/users/all',{}).then(function (reponce) {
            setUsers(reponce.data)
          
        
        })
        .catch(function (err) {
      console.log("euueur",err);
            
        })
    }
    useEffect(()=>
        {
            recupUser()
        },[])
     


  return (
<>
    <h3>AdminGestion users</h3>
    <table className='table ms-4'>
        <thead>
            <tr className='row'>
                <td className='col'>nom</td>
                <td className='col'>email</td>
                <td className='col'>prenom</td>
                <td className='col'>add</td>
                <td className='col'>delete</td>
            </tr>
        </thead>
        <tbody>
        {users.map((elem,index)=>{return(
      <tr key={index} className="form-group row">
        <td className='col'>{elem.nom}</td>
        <td className='col'>{elem.email}</td>
        <td className='col'>{elem.prenom}</td>
        <td className='col'> <button  >+ pour ajouter</button> </td>
        <td className='col'> <button >- pour reduire</button> </td>
         </tr>
 )})}

        </tbody>

    </table>
</>
  )
}
