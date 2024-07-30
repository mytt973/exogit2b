
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import { Accueil, Contact, Home, Slider } from '../../../../prj-fn-mc/doranco/React/produit/src/Pages';
import SiteLyout from '../../../../prj-fn-mc/doranco/React/produit/src/layout/SiteLayout';
import AdminGestionProduit from '../../../../prj-fn-mc/doranco/React/produit/src/admin/AdminGestionProduit';
import AdminLayout from '../../../../prj-fn-mc/doranco/React/produit/src/layout/AdminLayout';
import AdminGestionUser from '../../../../prj-fn-mc/doranco/React/produit/src/admin/AdminGestionUser';

const  PrivteAdminRoute = ({children})=>{

  const isAuth= localStorage.getItem('use')!=null && JSON.parse(localStorage.getItem('use')).role==="ADMIN";
  return isAuth ? <>{children}</> : <></>
}

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <SiteLyout/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },{
          path:"/user",
          element:<Accueil/>
        },{
          path:"/produit",
          element:<Contact/>
        },{
          path:"/slide",
          element:<Slider/>
        },
      ]
    },{
      path:"/admin",
      element:<PrivteAdminRoute><AdminLayout/></PrivteAdminRoute> ,  
      children:[
        {
          path:"gProd",
          element:<AdminGestionProduit/>
        },
        {
          path:"gUser",
          element:<AdminGestionUser/>
        }]
    }
    
  ])
    //
  return (
    <>
 <RouterProvider router={router}></RouterProvider>
 
    </>
  );
}

export default App;
