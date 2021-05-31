import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getData} from "./Store/action"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link,NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Books=()=>{
  
    const store=useSelector(state=>state.book);
    const dispatch=useDispatch();
    useEffect(() => {
      console.log('hello')
        dispatch(getData())
      }, [dispatch])


      console.log(store);

      const classes = useStyles();

      return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>smallThumbnail</TableCell>
                <TableCell>Title</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {!store.loading && store.data.items.map((row) => (
              
                <TableRow key={row.name}>
                     {/* <NavLink to={`/description/${row.id}`}></NavLink> */}
                     <NavLink to={`/description/${row.id}`}>
                  <TableCell component="th" scope="row">
                      <img src={row.volumeInfo.imageLinks.smallThumbnail} />
                  </TableCell>
                
                  <TableCell >{row.volumeInfo.title}</TableCell>
                  </NavLink>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    
}
export default Books;



