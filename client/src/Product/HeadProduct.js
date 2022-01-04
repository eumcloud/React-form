import React, {Component} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class HeadProduct extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src ={this.props.image} alt="Profile"/></TableCell>
                <TableCell>{this.props.product}</TableCell>
                <TableCell>{this.props.price}</TableCell>
            </TableRow>
        )
    }
} 


export default HeadProduct;