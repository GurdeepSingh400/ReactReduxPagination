import React, {useState, useEffect } from 'react';
import { addToCart } from '../Services/Actions/Actions'
import {  useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const Home = () => {
  const dispatch = useDispatch()

  const  Finaldata = useSelector(state=> state.cardItems.cardData.data)
  console.log(Finaldata,"final data ")
  const page=useSelector(state=>state.cardItems.cardData.totalPages)
const [data,setData]=useState([]);

const handleperpage=(i,j)=>{
  dispatch(addToCart(j))
}

  

  useEffect(() => {
    dispatch(addToCart(1))
    addToCart();
  },[])

  useEffect(()=>{
    if(Finaldata)
    {
      setData(Finaldata);
    }
    else{
      setData([])
    }
  },[Finaldata])

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();



  return (
    <>

   

        <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Trips</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Established</TableCell>
            <TableCell>Headquaters</TableCell>
            <TableCell>website</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((index,j)=>{
          return (<TableRow>
              <TableCell>{j}</TableCell>
              <TableCell>{index.name}</TableCell>
              <TableCell>{index.trips}</TableCell>
              <TableCell>{index.airline.country}</TableCell>
              <TableCell> {index.airline.established}</TableCell>
              <TableCell> {index.airline.head_quaters}</TableCell>
              <TableCell> {index.airline.website}</TableCell>

        
              
            </TableRow>)})}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination count={page} onChange={handleperpage}></Pagination>


       

  
    </>
  )
}
export default Home;