import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <><nav>
        <Link to="gUser"><div className='btn btn-info'> GestionProduit</div> </Link>
   <Link to="gProd"><div className='btn btn-info'> Gestion Client</div></Link>
   <Link to="/"><div className='btn btn-info'> home</div></Link>
  
    </nav>
    <main><Outlet/></main>
    
    </>
  )
}
