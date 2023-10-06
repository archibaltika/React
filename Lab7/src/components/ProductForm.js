import React, {useContext} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import ProductContext from "../context/product-context";


function ProductForm(){
    const {state, dispatch, defaultProducts} = useContext(ProductContext)
    const sendForm = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_PRODUCT'});
    }
    return(
        <div>
            <Form style={{display: 'flex'}} onSubmit={sendForm}>
                <InputGroup style={{margin: '0.5rem'}} >
                    <Form.Control
                        value={state.value}
                        aria-label="Product"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                            const input = document.getElementsByTagName('input');
                            dispatch({
                                type: 'SET_VALUE',
                                nextValue: input[0].value
                            })
                        }}
                    />
                </InputGroup>
                <Button style={{margin: '0.5rem'}} onClick={() => {
                    dispatch({type: 'ADD_PRODUCT'})
                }}>Додати</Button>
            </Form>
        </div>
    )
}

export default ProductForm;