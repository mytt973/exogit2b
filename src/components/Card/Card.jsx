export default function  Card({ index , elem,children}){
//    const  addCommande=(e)=>{
//     e.preventDefault();
//     console.log( JSON.parse(localStorage.getItem("use")));
//     const data = 
//         {
//             "idUser" : JSON.parse(localStorage.getItem("use")).id,
//             "idProduit" : elem.id, 
//             "qte" : 1
//             }  
//    com(data)}

    return(
        <div className="card">
           <h5  className="card-title">{elem.nom} </h5>
          <div className="card-body row">
              <img  src={elem.image} className='col-4' alt='test' height="auto"/>
           <div className=" col">    
           <p  className='row'> tail : {elem.tail} ml</p>
           <p className='row'> Prix : {elem.prix} $ </p>
          </div>
          {!index&&( <p  className="card-text">{elem.description}</p>)}
         </div>
{children}
           
  
        </div>    
        )
}