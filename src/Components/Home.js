import React, { useState, useEffect } from 'react';
import { Delete, addToCart } from '../Services/Actions/Actions'
import { useSelector, useDispatch } from 'react-redux';
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
import ShowData from './ShowData';



const Home = () => {
  const dispatch = useDispatch()

  const Finaldata = useSelector(state => state.cardItems.cardData.data)
  console.log(Finaldata, "final data ")
  const page = useSelector(state => state.cardItems.totalPages)
  console.log(page, "pagessssssssssssssssssss")
  const [data, setData] = useState([]);
  console.log(data, "datanews")

  const [showpage, setshowpage] = useState(false);


  const handleperpage = (i, j, index) => {
    dispatch(addToCart(j))

  }



  useEffect(() => {
    dispatch(addToCart(1))
    addToCart();


  }, [])

  useEffect(() => {
    if (Finaldata) {
      setData(Finaldata);
    }
    else {
      setData([])
    }
  }, [Finaldata])

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  const [editdata, setEditData] = useState({
    name: "",
    trips: "",
    country: "",
    id: "",
    established: "",
    head_quaters: ""
  });

  console.log(editdata, "neweditdatasssssssssssssssssssssssssssssssssss")

  return (
    <>
      {showpage ? null :
        <div>
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Trips</TableCell>
                  <TableCell>id</TableCell>
                  <TableCell>Logo</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Established</TableCell>
                  <TableCell>Headquaters</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((index, j) => {
                  return (<TableRow key={index._id} >
                    <TableCell>{j}</TableCell>
                    <TableCell>{index.name}</TableCell>
                    <TableCell>{index.trips}</TableCell>
                    <TableCell>{index._id}</TableCell>
                    <TableCell> <a href={`https://${index.airline.website}`} target="#"  > <img src={index.airline.logo} /> </a></TableCell>
                    <TableCell>{index.airline.country}</TableCell>
                    <TableCell>{index.airline.established}</TableCell>
                    <TableCell>{index.airline.head_quaters}</TableCell>
                    <TableCell> <Button variant="contained" color="primary" onClick={() => dispatch(Delete(index._id))}> Delete</Button>
                    </TableCell>
                    <TableCell><Button variant="contained" onClick={() => {
                      setshowpage(true);
                        setEditData({
                 
                        name: index.name,
                        country: index.airline.country,
                        trips: index.trips,
                        id:index._id,
                        established:index.airline.established,
                        head_quaters:index.airline.head_quaters

                      })
                    }}
                    >Edit</Button></TableCell>
                  </TableRow>)
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination count={page} onChange={handleperpage}></Pagination>

        </div>}

      { showpage ? <ShowData setshowpage={setshowpage}
        setEditData={setEditData}
        editdata={editdata}
      /> : null}

      {/* editTable ? <ShowTable  setEditTable={setEditTable}/> : null} */}

    </>

  )
}
export default Home;