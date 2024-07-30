import React, { useEffect, useState } from 'react'
import Produit from '../../model/Produit';
import api from '../../api/api';
import './Accueil.css'
import { Card } from '../../components';

export default function Accueil () {
  const [ produits,setProduits]=useState([]);
  const [ produit,setProduit]=useState(null);
  const [ commande,setCommande]=useState(null);
  const [ toogle,setToogle]=useState(false);

   const recupProduits= async ()=>{
    let listProduit=[];
  api.post('api/produit/all',{}).then(function (reponce) {
    reponce.data.map(produit=>{     
   const prod=new Produit(produit.description,produit.id,produit.nom,produit.prix,produit.image,produit.tail);
    listProduit.push(prod)
    return null
  })
  setProduits(listProduit)
  }).catch(function (err) {console.log(err);})
}

const unique=async(e)=>{
  console.log("unique",e.target.id);
  const url = `api/produit/${e.target.id}`;
  api.post(url,{}).then(function (reponce) {
    setProduit( new Produit(reponce.data.description,reponce.data.id,reponce.data.nom,reponce.data.prix,reponce.data.image,reponce.data.tail));
  }).catch(function (err) {console.log(err);})

}

const addCommande=async(data)=>{
  api.post('/api/commande/save',data).then(function (reponce) {
console.log(reponce);updateCom();
  }).catch(function (err) {  console.log(err);alert( "tu n'est sans doute pas connecter");})

}
const deUnique=()=>{
  setProduit(null);  updateCom();
}
  const updateCom=()=>{
    api.post(`/api/commande/${JSON.parse(localStorage.getItem("use")).id}`,{}).then(function (reponce) {
      setCommande(reponce.data)
        }).catch(function (err) {  console.log(err);alert( "erreur")})
  }

useEffect(()=>
{
    recupProduits();
},[])

  function onToogle(){setToogle(!toogle)}

 const allPrice=(commande)=>{
  let t= 0;
  commande.forEach(element => {
   t+=element.commande.prix;
  });
  return t;
 }

function renderCommande(commande,id) {
if(toogle){
  return(
  <div className=''>  <h2>Article n°{id+1}</h2>
  <p> nom :{commande.ligneCommandes[0].produit.nom} |  prix :{commande.commande.prix} | qti :{commande.ligneCommandes[0].quantite} </p>
  <p> date :{commande.commande.dateAchat}</p>
   <strong className='ms-3'>-----------------------</strong>
    </div> 
)
}}


  return (
<div className='row cont'>
  <div className='col-4'>{commande&&(
    <div className='commande'>
      {commande.map((com,ind)=>{return(
        renderCommande(com,ind)
      )})}    
     <button style={{width:"100%"}} onClick={onToogle} className='btn btn-danger'>change {toogle?"↑":"↓"}</button>
     <div className='ms-2'>
        <p>nbArtible : {commande.length}</p>
        <p>prix : {allPrice(commande)}</p>
     </div> 
     </div>)}
  </div>
     
 <div className='col-6'>
  {produit?
  <Card index={produit.index}  elem={produit}>
    <button className="col btn btn-success mt-2" id={produit.index}  onClick={addCommande}>Comander </button>
    <button className="col btn btn-danger" id={produit.index}  onClick={deUnique}>X </button>
   </Card> 
    :
  produits.map((elem,index)=>{return(
        <Card key={`${index} dd`}index={elem.id} elem={elem} >
          <button key={index} className='col btn btn-danger mt-2' id={elem.id} onClick={unique}>voir plus</button>
        </Card>
       )
    })
   }
  </div>   
</div>
  )
}
