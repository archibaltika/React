import React, {useState} from 'react'
import Button from "react-bootstrap/Button";

function Game() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);
    const [word, setWord] = useState([{id: 0, message: ""}]);
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function perevirka() {
        if (count === 9) {
            alert("You Lose")
            setResult(number);
            setCount(10);

        } else {
            if (input == number) {
                alert("You Won")
                setWord([
                    ...word,
                    {
                        id: word.length + 1,
                        message: "N == number"
                    }
                ])
                setResult(number);
            } else {
                setCount(count + 1);
                if (input > number) {
                    setWord([
                        ...word,
                        {
                            id: word.length + 1,
                            message: "N > number"
                        }
                    ])
                } else {
                    setWord([
                        ...word,
                        {
                            id: word.length + 1,
                            message: "N < number"
                        }
                    ])
                }
            }
        }
    }

    function random() {
        setResult('');
        setCount(0);
        setWord([{id: 0, massage: ""}])
        setNumber(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);

    }

    return (
        <div className={"firstl"}>
            <div>
                <Button variant={"primary"} onClick={random} disabled={count < 10 && count != 0}>New game</Button>
                <input type={"number"} onChange={(event) => setInput(event.target.value)} disabled={count === 10 }/>
                <Button variant={"dark"} onClick={perevirka} disabled={count === 10 }>Check</Button>
            </div>
            <h2>Information</h2>
            <div className={"back"}> {word.map(m => (
                <p key={m.id}>{m.message}</p>
            ))}</div>
            <h3>Attempts {count}</h3>
            <h3>Result: {result}</h3>
        </div>
    );
}

export default Game