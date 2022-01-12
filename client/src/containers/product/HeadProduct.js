import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useNavigate} from "react-router-dom"

function HeadProduct(props){
    let navigate = useNavigate();
    const onClick = (e) => {        
        const idx = e.target.id
        navigate(`/product/productdetail/${idx}`)
       }
        return (
            <TableRow>
                <TableCell onClick={onClick}>{props.id}</TableCell>
                <TableCell onClick={onClick}><img src ={props.image} alt="Profile"/></TableCell>
                <TableCell onClick={onClick}>{props.product}</TableCell>
                <TableCell onClick={onClick}>{props.price}</TableCell>
            </TableRow>
        )

} 


export default HeadProduct;