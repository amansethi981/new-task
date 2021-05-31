import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getData} from "./Store/action"

const Books=()=>{
    const store=useSelector(state=>state.book);
    const dispatch=useDispatch();
    useEffect(() => {
      console.log('hello')
        dispatch(getData())
      }, [dispatch])
      console.log(store)    
    return(
        <div>
          <h1>this is heading</h1>
           
        </div>
    )
}
export default Books;