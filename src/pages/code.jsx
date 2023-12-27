import { useSelector } from 'react-redux'


const Code = () => {
  const store = useSelector((State) => State.Packages);

  
  // const objectsEqual = (o1, o2) => 
  // typeof o1 === 'object' &&  Object.keys(o1).length > 0  ? 
  // Object.keys(o1).length === Object.keys(o2).length   && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
  // : o1 === o2;
  // console.log(store)
   // const dispatch = useDispatch()

   const checker =(param) =>{
    // console.log(param.id);
    const vault = store.filter((pack)=> {
      console.log(param , pack.id)
       return  pack.id == param
      }) ;  
    console.log("Result -> ",vault)
 
    // vault.map((item)=>{
      if(vault[0]){
           if(vault[0].name === param){
            console.log(vault[0].name,param)
            return true;
           }
          }
           return false;
          // })
   }
  
  
   const bcryptjs = checker( 'bcryptjs' )
   const body_parser = checker( 'body-parser' )
   const colors = checker( 'colors' )
   const cookie_parser = checker('cookie-parser' )
   const cors = checker( 'cors' )
   const dotenv = checker( 'dotenv' )
   const express_validator = checker( 'express-validator' )
   const jsonwebtoken = checker( 'jsonwebtoken' )
   const mongoose = checker( 'mongoose' )
   const multer = checker('multer')


  console.log(
    bcryptjs,
    body_parser,
    colors,
    cookie_parser,
    cors,dotenv,
    express_validator,
    jsonwebtoken,
    mongoose,
    multer
    );

  return (
    <>
      <div className="codejs">
        <div className='main'>
          <h1>Installation </h1>
          <pre className="language-js"
          ><code>
              npm i{store.map((item) =>
                <span key={item.id}> {item.name}</span>
              )}
            </code></pre>

          <h2>Code of server file</h2>
          <pre className="language-js"
          ><code>

              {"const express = require('express')"} <br />

              {bcryptjs ? "const bcrypt = require('bcryptjs')":""}<br/>
             
              {body_parser ? "const bodyParser=require('body-parser')":""}<br/>
              
             
              {colors ? "const colors = require('colors')":""}<br />
              {cookie_parser  ? "const cookieParser = require('cookie-parser')":""}<br />
              {cors ? "const cors = require('cors')":""}<br />
              {dotenv ? "const dotenv = require('dotenv')":""}<br />
              {express_validator ? "const {body, validationResult} = require('express-validator')":""}<br/>
              {jsonwebtoken ? "const jwt = require('jsonwebtoken')":""}<br/>
              {mongoose ? "const mongoose = require('mongoose')":""}<br/>
            
              {multer ? "const multer  = require('multer')":""}<br/>
 


              

            </code>
          </pre>
        </div>
      </div>
    </>
  )
}

export default Code