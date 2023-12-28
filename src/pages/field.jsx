
import Formio from '../components/Formio'
import { useSelector, useDispatch } from 'react-redux'
import { addPackage, removePackage } from '../slice/packege'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'



const Field = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Packages);
  // const [check, setCheck] = useState(false);

const navigate = useNavigate();

  const checkHandeler = async(e) => {
  const check = document.getElementById(e.target.id); 
  if(check.checked === true){
    check.checked === false;
  }
  else{
    check.checked === true;
  }
    switch (check.checked) {
      case true:
        dispatch(addPackage({
          name: e.target.name,
          id: e.target.id,
        }))
       
      break;
      case  false:
        dispatch(removePackage({
          id: e.target.id
        }))
      break ;  
      default :

    }
  }
  useEffect(()=>{
      // console.log(store)
    
  },[store])
  return (
    <>
      <div className="container">
        <div className='d-flex'>
        <Formio  type={"checkbox"} name={"bcryptjs"}   onChange={checkHandeler}  id={"bcryptjs"}  label={"bcryptjs"} />
        <Formio  type={"checkbox"} name={"body-parser"}   onChange={checkHandeler}  id={"body-parser"}  label={"body-parser"} />
        <Formio  type={"checkbox"} name={"colors"}   onChange={checkHandeler}  id={"colors"}  label={"colors"} />
          
        
        <Formio  type={"checkbox"} name={"concurrently"}   onChange={checkHandeler}  id={"concurrently"}  label={"concurrently"} />
        <Formio  type={"checkbox"} name={"cookie-parser"}   onChange={checkHandeler}  id={"cookie-parser"}  label={"cookie-parser"} />
        <Formio  type={"checkbox"} name={"cors"}  id={"cors"}   onChange={checkHandeler}  label={"cors"} />
        
        <Formio  type={"checkbox"} name={"dotenv"}   onChange={checkHandeler}  id={"dotenv"}  label={"dotenv"} />
        <Formio  type={"checkbox"} name={"express-validator"}   onChange={checkHandeler}   id={"express-validator"}  label={"express-validator"} />
        <Formio  type={"checkbox"} name={"jsonwebtoken"}   onChange={checkHandeler}  id={"jsonwebtoken"}  label={"jsonwebtoken"} />
       
        <Formio  type={"checkbox"} name={"mongoose"}   onChange={checkHandeler}  id={"mongoose"}  label={"mongoose"} />
        <Formio  type={"checkbox"} name={"multer"}   onChange={checkHandeler}  id={"multer"}  label={"multer"} />
        <Formio  type={"checkbox"} name={"nodemon"}   onChange={checkHandeler}  id={"nodemon"}  label={"nodemon"} />
        
        
        
        </div>
       <button onClick={ ()=>{
        navigate('/code');
       } }>Genrate express code</button>

   
      </div>
    </>
  )
}

export default Field
