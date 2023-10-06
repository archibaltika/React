import Product from "./Product";
import React, {useContext} from "react";
import {Card,ListGroup} from "react-bootstrap";
import ProductContext from "../context/product-context";



function ProductList(){
    const {state} = useContext(ProductContext)
    return(
        <Card style={{width: '15rem', margin: '0.5rem', marginLeft: "110px"}}>
            <ListGroup variant="flush" id="listProducts" numbered >
                {state.products.map(product => <Product product={product}/>)}
            </ListGroup>
        </Card>
    )
}

export default ProductList;