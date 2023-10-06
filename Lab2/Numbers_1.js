import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function Numbers(props) {
    const [count, setCount] = useState(props.numbers.initials);

    function increment() {
        if (count < props.numbers.max) {
            setCount(count + 1);
        }

    }

    function decrement() {
        if (count > props.numbers.min) {
            setCount(count - 1);
        }
    }

    return (
        <div className="firstl">
            <p>Ви натиснули {count} разів</p>
            <Button variant="danger" onClick={increment}>
                Додати
            </Button>{' '}
            <Button variant="success" onClick={decrement}>
                Відняти
            </Button>{' '}
            <Button variant="warning" onClick={() => setCount(props.numbers.initials)}>{' '}
                Скинути
            </Button>{' '}
        </div>
    );
}
Numbers.defaultProps = { numbers: { initials: 0, max: 40, min: -40 } }
export default Numbers;
