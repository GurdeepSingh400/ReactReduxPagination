
import axios from 'axios'
import {Add_To_Cart} from '../Constants'
import {Delete_Button} from '../Constants'
import {Edit_Button} from '../Constants'

export const addToCart = (i,count)=>dispatch =>{

  axios.get (`https://api.instantwebtools.net/v1/passenger?page=${i}&size=10`)
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



export const Delete = (index) =>  {
  return ({
    type : Delete_Button,
    payload : index
  });
}


export const Edit = (index) => dispatch => {
  debugger
  return dispatch({
      type : Edit_Button,
      payload : index
    });

}