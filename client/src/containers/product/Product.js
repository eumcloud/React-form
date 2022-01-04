import React, { Component } from "react";
import HeadProduct from "./HeadProduct";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    width: "100%",
    margintop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
});

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: "",
      completed: 0
    }
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({products: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch("http://localhost:5000/api/products");
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
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
        {this.state.products ? this.state.products.map(b => { 
          return ( <HeadProduct key={b.id} id={b.id} image={b.image} product={b.product} price={b.price} /> ) 
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
}
export default withStyles(styles)(Product);
