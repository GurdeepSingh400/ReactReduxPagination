import React from 'react';

import InputField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Edit } from '../Services/Actions/Actions'
import { useDispatch } from "react-redux"






// const dispatch = useDispatch();
//     const hnadleInput =(e)=>{
//         const {name,value}= e.target;
//         console.log("<<<<<<",value)
//        props.setEdit({...props.edit,[name]: value});
//     }

const ShowData = (props) => {
    const dispatch = useDispatch();
    const EdittData = (event) => {
   
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
                <InputField id="outlined-basic"  placeholder  ={props.editdata.id} name="id"  variant="outlined" onChange={EdittData} />
                <InputField id="outlined-basic" placeholder  = {props.editdata.country} name="country" variant="outlined" onChange={EdittData} />
                <InputField id="outlined-basic" placeholder  = {props.editdata.established} name="Established"  variant="outlined" onChange={EdittData} />
                <InputField id="outlined-basic" placeholder  = {props.editdata.head_quaters} name="Headquaters" variant="outlined" onChange={EdittData} />
            </form>
            {/* <Button variant="contained" color="primary" onClick={() => props.setshowpage(false)}>UPDATE</Button> */}
            <Button variant="contained" color="primary" onClick={() => { props.setshowpage(false); dispatch(Edit(props.editdata)) }}>UPDATE</Button>
        </>
    )
}
export default ShowData;