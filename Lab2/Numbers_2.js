import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
function Numberz(props) {
    const [count, setCount] = useState(props.numberz.initials);

    function increment() {
        if (count < props.numberz.max) {
            setCount(count + 1);
        }

    }

    function decrement() {
        if (count > props.numberz.min) {
            setCount(count - 1);
        }
    }

    return (
            <div className={"firstl"}>
                <p>Ви натиснули {count} разів</p>
                <Button variant="info" onClick={increment}>
                    Додати
                </Button>{' '}
                <Button variant="info" onClick={decrement}>
                    Відняти
                </Button>{' '}
                <Button variant="dark" onClick={() => setCount(props.numberz.initials)}>{' '}
                    Скинути
                </Button>{' '}
            </div>

    );
}

Numberz.defaultProps = {numberz: {initials: 0, max: 40, min: -40}}
export default Numberz;