import HeadProduct from "./HeadProduct";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import {useState, useEffect} from "react";
import axios from "axios";
// import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: 10,
  },
});

    function Product() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    const callApi = async() => {
    const response = await axios.get("http://localhost:3001/api/products")
    setProducts([...products,...response.data])
  }

    useEffect(() => {
    callApi();
    },[]);

    


  
    return (
    <Paper className= {classes.root}>
      <Table className= {classes.table}>
        <TableHead>
          <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>상품</TableCell>
          <TableCell>가격</TableCell>
          </TableRow>
        </TableHead>
      <TableBody> 
          {products!=0 ? products.map((c) => {
          return (   
            <HeadProduct 
            key={c.id}
            id={c.id}
            image={c.image}
            product={c.product}
            price={c.price}
            />
          );
        }) :
          <TableRow>
            <TableCell colSpan="6" align="center">
            </TableCell>
          </TableRow>
        }
      </TableBody>
      </Table> 
    </Paper>
  );
}

export default Product;
