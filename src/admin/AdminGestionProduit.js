import React, { useEffect, useState } from 'react'
import api from '../api/api.js';
import Produit from '../model/Produit.js';

export default function AdminGestionProduit() {
    const [ produits,setProduits]=useState([]);
    const recupProduits= async ()=>{
            let listProduit=[];
        api.post('api/produit/all',{}).then(function (reponce) {
            reponce.data.map(produit=>{
           const prod=new Produit(produit.description,produit.id,produit.nom,produit.prix,produit.image,produit.tail);
            listProduit.push(prod)
            return null
        
        })
            setProduits(listProduit)
        }).catch(function (err) {
      
            
        })
    }
    useEffect(()=>
        {
            recupProduits()
        },[])
     


  return (
<>
    <h3>AdminGestionProduit</h3>
    <table className='table ms-4'>
        <thead>
            <tr className='row'>
                <td className='col'>nom</td>
                <td className='col'>image</td>
                <td className='col'>prix</td>
                <td className='col'>add</td>
                <td className='col'>delete</td>
            </tr>
        </thead>
        <tbody>
        {produits.map((elem,index)=>{return(
      <tr key={index} className="form-group row">
        <td className='col'>{elem.nom}</td>
        <td className='col'><img src={elem.image} width={50} height="auto" alt='missing'/></td>
        <td className='col'>{elem.prix}</td>
        <td className='col'> <button  >+ pour ajouter</button> </td>
        <td className='col'> <button >- pour reduire</button> </td>
         </tr>
 )})}

        </tbody>

    </table>
</>
  )
}
// const tog =()=>{setFromulaire(!fromulaire)}
// const [fromulaire,setFromulaire]=useState(false)

// const  onAdd =async(data)=>{
//     try {
//         const reponce= await axios.post("https://api-dev.akov-developpement.fr/api/produit/save",data  ) 
//         console.log(reponce);
        
//     } catch (error) {
//         console.log("erruer");
//     }
// }

// <button onClick={tog}>array+</button>
// {fromulaire?<Login tab={tab}  onSub={onAdd}/>:<p>not active</p>}
