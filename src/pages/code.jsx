/* eslint-disable react/prop-types */
import { useSelector ,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removePackage } from '../slice/packege'

const Code = () => {
  const store = useSelector((State) => State.Packages);


  // const objectsEqual = (o1, o2) => 
  // typeof o1 === 'object' &&  Object.keys(o1).length > 0  ? 
  // Object.keys(o1).length === Object.keys(o2).length   && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
  // : o1 === o2;
  // console.log(store)
  // const dispatch = useDispatch()

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checker = (param) => {
    // console.log(param.id);
    const vault = store.filter((pack) => {
      // console.log(param, pack.id)
      return pack.id == param
    });
    // console.log("Result -> ", vault)


    if (vault[0]) {
      if (vault[0].name === param) {
        // console.log(vault[0].name, param)
        return true;
      }
    }
    return false;

  }

  const navigator = () =>{
      store.map((item)=>{
          dispatch(removePackage({id : item.id}))
      })
      navigate('/');
  }

  const nodemon = checker('nodemon')
  const bcryptjs = checker('bcryptjs')
  const body_parser = checker('body-parser')
  const colors = checker('colors')
  const cookie_parser = checker('cookie-parser')
  const cors = checker('cors')
  const dotenv = checker('dotenv')
  const express_validator = checker('express-validator')
  const jsonwebtoken = checker('jsonwebtoken')
  const mongoose = checker('mongoose')
  const multer = checker('multer')


  // console.log(
  //   bcryptjs,
  //   body_parser,
  //   colors,
  //   cookie_parser,
  //   cors, dotenv,
  //   express_validator,
  //   jsonwebtoken,
  //   mongoose,
  //   multer
  // );

  return (
    <>
    <button className='btn' onClick={ ()=>{
        navigator();
       } }>Go to reselect Packages</button>

   
      <div className="codejs">
        <div className='main'>
          <h1>To create packege file </h1>
          <pre className="language-js"
          ><code>{"// put command in Terminal"}<br/><br/>
             npm init -y
            </code></pre>
          <h1>Installation </h1>
           <p> instaling following packages :</p> express <br/>{store.map((item)=><><span key={item.id}>{item.name}</span><br/></>)}
          <pre className="language-js"
          ><code>{"// put command in Terminal"}<br/><br/>
              npm i express{store.map((item) =>
                <span key={item.id}> {item.name}</span>
              )}
            </code></pre>

          <h2>Code of server file</h2>
          <pre className="language-js"
          ><code>
               
               {"// app.js || index.js || etc... (main backend server file)"}<br/><br/>
              
              {"const express = require('express')"} <br />
              {"const app = express();"} <br />

              {bcryptjs ? "const bcrypt = require('bcryptjs')" : ""}{bcryptjs && <br />}

              {body_parser ? "const bodyParser=require('body-parser')" : ""}{body_parser && <br />}


              {colors ? "const colors = require('colors')" : ""}{colors && <br />}
              {cookie_parser ? "const cookieParser = require('cookie-parser')" : ""}{cookie_parser && <br />}
              {cors ? "const cors = require('cors')" : ""}{cors && <br />}
              {dotenv ? "const dotenv = require('dotenv')" : ""}{dotenv && <br />}
              {express_validator ? "const {body, validationResult} = require('express-validator')" : ""}{express_validator && <br />}
              {jsonwebtoken ? "const jwt = require('jsonwebtoken')" : ""}{jsonwebtoken && <br />}
              {mongoose ? "const mongoose = require('mongoose')" : ""}{mongoose && <br />}

              {multer ? "const multer  = require('multer')" : ""}{multer && <br />}

              <br />
              {mongoose ? (dotenv ? "mongoose.connect(process.env.DBUri);" : "mongoose.connect('Enter Your DataBase Url'));") : ""}{mongoose && <br />}

              {dotenv ? "dotenv.config();" : ""}{dotenv && <br />}
              {dotenv ? "const PORT = process.env.PORT;" : "const PORT = 3000 ;"}{dotenv && <br />}
              {"app.use(express.json());"}<br />
              {cookie_parser ? "app.use(cookieParser());" : ""}{cookie_parser && <br />}
              {body_parser ? "app.use(bodyParser.json()); " : ""}{body_parser && <br />}
              {cors ? "app.use(cors())" : ""}{cors && <br />}

              <br />

              {"app.get('/',(req,res)=>{"}<br />
              &nbsp;&nbsp;&nbsp;{'res.send("Hello World");'}<br />
              {"})"}<br /><br />


              {"app.listen(PORT,()=>{"}<br />
              {"  console.log(`server running on http://localhost:${PORT}`"}
              {colors ? ".rainbow.bold);" : ");"} <br />
              {"});"}

            </code>
          </pre>
                { nodemon && < Packages />}
                {dotenv && < Environment mongoose={mongoose} />}
        </div>
      </div>

      <button className="down btn" onClick={ ()=>{
        navigator();
       } }>Go to reselect Packages</button>

    </>
  )
}

const Environment = ({ mongoose }) => {
  return (
    <div>
         
      <h1> Environmental Elements</h1>
      <pre className="language-js" ><code>
      {"# Dotenv(.env || config.env)"}<br/><br/>


        PORT = 3000 <br />
       {mongoose && " DBUri =   &lt; Enter Your DataBase Url &gt;"} {mongoose && <br />}

      </code></pre>
    </div>
  )
}


const Packages = () =>{
  return(
    <div>
        <h1>Dont forgot toadd Command in packege.json</h1>
        <pre className="language-js" ><code>
      {"// add command in scripts objact and replace the name of your file in app.js"}<br/><br/>


      {'"start":"nodemon app.js",'}
      </code></pre>
    </div>
  )
}

export default Code