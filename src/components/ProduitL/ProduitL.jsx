import React from 'react'

export default function ProduitL({produit}) {
  return (
   <> <section>
    <h5>{produit.nom}</h5>
   <div className=''>
    <p className=''>{produit.description}</p>
    <img className='' src={produit.image} alt='not worck' width={100} height="auto" style={{padding:20}}/></div>
   <p> <strong> {`Prix: ${produit.prix}`} </strong>  {` pour une tail de :${produit.tail}`}</p>
  </section></>
  )
}
