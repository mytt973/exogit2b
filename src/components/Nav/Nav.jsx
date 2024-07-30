import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {

  return (
 <> <nav className='navbar'>  
   <Link to="/slide">  <div className='btn btn-danger'> aceille</div> </Link>
  <Link to="/user">    <div className='btn btn-danger'> produit</div>  </Link>
    <Link to="produit">  <div className='btn btn-danger'> contact test</div> </Link>
   <Link to="home">     <div className='btn btn-danger'> espace Client</div></Link>
     </nav>
 </>
  )
}
