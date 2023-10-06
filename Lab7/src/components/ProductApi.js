import React, {useEffect, useReducer, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import reducer from "../reducer/reducer-product";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ProductContext from "../context/product-context.js";
import {Alert} from "react-bootstrap";

export default function ProductApi(){
    const initialState = {products: getProductsFromLocalStorage(), id: getIdCounter(), value: '', showMessage: false, text: 'Added!', typeMessage: 'success'}
    const [defaultProducts, setDefaultProducts] = useState(getProductsFromLocalStorage());
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        setProductsToLocalStorage(state.products);
        if(state.products.length === 0){
            setIdCounter(0)
        }
    }, [state.products])
    useEffect(() => {
        setIdCounter(state.id)
    }, [state.id])

    useEffect(() => {
        if(state.showMessage){
            setTimeout(() => {
              dispatch({type: 'HIDE_MESSAGE'})
            }, 2000)
        }
    }, [state.showMessage])

    return (
        <div style={{width: '30rem'}}>
            <ProductContext.Provider value={{state, dispatch, defaultProducts}}>
                <ProductForm/>
                <ProductList/>
            </ProductContext.Provider>
            <div id="message" style={{margin: '0.5rem'}}>
                <TransitionGroup>
                    {state.showMessage && (   <CSSTransition classNames="option">
                            <alert key={state.typeMessage} variant={state.typeMessage}>{state.text}</alert>
                    </CSSTransition>)}
                </TransitionGroup>
            </div>
        </div>
    )
}




function getProductsFromLocalStorage(){
    const products = JSON.parse(localStorage.getItem("products"));
    if(products != null)
        return products;
    else return  [];
}

function setProductsToLocalStorage(products){
    localStorage.setItem("products", JSON.stringify(products));
}

function setIdCounter(id){
    localStorage.setItem("counterId", JSON.stringify({id: id}));
}

function getIdCounter(){
    const counter = JSON.parse(localStorage.getItem("counterId"));
   if(counter == null)
       return 0;
   else
       return JSON.parse(localStorage.getItem("counterId")).id;
}

