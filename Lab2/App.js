import './App.css';
import Numbers from './Function/Numbers_1'
import Numberz from "./Function/Numbers_2";
import 'bootstrap/dist/css/bootstrap.min.css'
import List from "./Function/List_1"
import Delete from "./Function/List_2";
import Products from "./Function/Product_List"
import Game from "./Function/Game"
import React, { useState } from "react";

function App() {
    const numbers = { initials: 5, max: 10, min: -1 };
    const numberz = [{ initials: 5, max: 10, min: -1 }, { initials: 10, max: 16, min: -6 }, {
        initials: 12,
        max: 30,
        min: -30
    }, { initials: 12, max: 50, min: -10 }];
    const product = [{ name: "Lenovo", price: 412 }, { name: "OnePlus", price: 230 }, { name: "AirPods", price: 20 }];
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    console.log(price);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Завдання 1</h1>
                <Numbers numbers={numbers} />
                <br />
                <h1>Завдання 2</h1>
                {numberz.map((item) => <Numberz numberz={item} />)}
                <h1>Завдання 3</h1>
                <List />
                <h1>Завдання 4</h1>
                <Delete />
                <h1>Завдання 5</h1>
                <h1>Картка</h1>
                <table className="firstl">
                    <tr style={{ background: "wheat", fontSize: "20px" }}>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                    {product.map((item) => <Products product={item} setPrice={setPrice} setCount={setCount} />)}
                    <tr style={{ background: "cyan" }}>
                        <td></td>
                        <td></td>
                        <td> {count}</td>
                        <td> {price}</td>
                    </tr>
                </table>
                <h1>Завдання 6</h1>
                <Game />
            </header>
        </div>
    );
}

export default App;
