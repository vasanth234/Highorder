import React from 'react';



function Order(Compo){

  let authen=true;
  return (pro)=>{
    if(authen){
      <Compo {...pro} />
    }
    else{
      <User/>
    }
  }
}


function Login(pro){
  return (
    <>
    <h2>Login component</h2>
    <p>{pro.username}</p>
    </>
  );
}



function User(){
  return (
    <h2>User component</h2>
  )
  
}
const Authr=Order(Login)




function App  () {
  return (
    <Authr username={"karna"}/>
  )
}

export default App 