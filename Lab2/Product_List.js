import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Prev } from "react-bootstrap/PageItem";


function Products(props) {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
        props.setCount(prev => prev + 1);
        props.setPrice(prev => prev + props.product.price);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
            props.setCount(prev => prev - 1);
            props.setPrice(prev => prev - props.product.price);
        }
    }

    return (
        <tr style={{ background: "deepskyblue", fontSize: "13px" }}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td><Button onClick={increment}>+</Button>{count}<Button onClick={decrement}>-</Button></td>
            <td>{props.product.price * count}</td>
        </tr>
    );
}

export default Products