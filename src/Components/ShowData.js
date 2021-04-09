import React from 'react';
import InputField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Edit } from '../Services/Actions/Actions'
import { useDispatch } from "react-redux"







const  ShowData = (props) => {
  
    const dispatch = useDispatch();
    const EdittData = (event)=> {
   
        const { name, value } = event.target;
        console.log("<<<<<<", value)
        console.log(props.editdata,"newdataaaaaa")
        props.setEditData({...props.editdata,[name]: value });
    }


    
 


    return (
        <>

            <h1>Edit API Data </h1>
            <form noValidate autoComplete="off">
                <InputField id="outlined-basic" placeholder  = {props.editdata.name} name="name"  variant="outlined" onChange={EdittData} />
                <InputField id="outlined-basic" placeholder  = {props.editdata.trips} name="trips"  variant="outlined" onChange={EdittData} />

            </form>
            {/* <Button variant="contained" color="primary" onClick={() => props.setshowpage(false)}>UPDATE</Button> */}
            <Button variant="contained" color="primary" onClick={() => { props.setshowpage(false); dispatch(Edit(props.editdata)) }}>UPDATE</Button>
        </>
    )
}
export default ShowData;
