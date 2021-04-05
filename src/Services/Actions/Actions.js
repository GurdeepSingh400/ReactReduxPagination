
import axios from 'axios'
import {Add_To_Cart} from '../Constants'

export const addToCart = (i,count)=>dispatch =>{

  axios.get (`https://api.instantwebtools.net/v1/passenger?page=${i}&size=20`)
  .then(res=>{
    dispatch({
      type:Add_To_Cart,
      payload:res.data
    });
  })
  .catch(err=>{
    dispatch({
      type:Add_To_Cart,
      payload:err

    });
  })
  
}