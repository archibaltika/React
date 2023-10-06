import React, {useContext} from "react";
import {Button, ListGroup} from "react-bootstrap";
import ProductContext from "../context/product-context";

export default function Product (props){
    const {dispatch} = useContext(ProductContext)
    return(
        <ListGroup.Item style={{textAlign: 'center'}} id={props.product.id}  key={props.product.id}>
            <div style={{display: 'block', justifyContent: '', alignItems: 'center'}} id={props.product.id} key={props.product.id}>
                <div>{props.product.name}</div>
                <Button variant={'danger'} onClick={() =>  dispatch({type: 'DELETE_PRODUCT', id: props.product.id})}>Видалити</Button>
            </div>
        </ListGroup.Item>
    )
}