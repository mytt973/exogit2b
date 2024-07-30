import React from 'react'

export default function Login(props) {

  const tab = props.tab

    
    function Validation(e){
        e.preventDefault();
        let data = {};

    if(tab.length<=2){
         data= {
          "email":tab[0].value,
          "mdp":tab[1].value
        }}
    else{

         data= {
          nom:tab[0].value,
          prenom:tab[1].value,
          email:tab[2].value,
          mdp:tab[3].value,
        }
    }


    if(tab.length===5){
      data = { 
        "nom":tab[0].value,
"description":tab[1].value,
       "prix": parseInt(tab[2].value),
      "image":tab[3].value,
      "tail": parseInt( tab[4].value) 
        }
      }

console.log(data,tab);
    props.onSub(data);
  }
  const on =(e,elem)=>{elem.value=(e.target.value); }
  return (

    <>
    <form className='formule mt-2' onSubmit={Validation} id="fromControl">
 {tab.map((elem,index)=>{return(
      <div key={index} className="form-group mt-2">
    <input  key={index} type={elem.type} className="form-control"  onChange={(e)=>on(e,elem)} placeholder={elem.place}/>
     </div>
 )})}
  {props.area&&(<textarea className='form-control mt-2' placeholder='give your message'></textarea>)}
  <button type="submit"  className="btn btn-primary mb-2 mt-2">Submit</button>
   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

</form>
</>
  )
}
