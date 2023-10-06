import React, {useState} from "react";
import Button from "react-bootstrap/Button";

function List() {
    let [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    return (
        <div className={"firstl"}>
            <input
                type="text"
                value={message}
                placeholder="Заповніть місце"
                onChange={e => {
                    setMessage(e.target.value);
                }}
            />
            <Button
                value="Add"
                onClick={e => {
                    if (message == "") {
                        message = "Порожній рядок";
                    } else {
                        setMessageList([
                            ...messageList,
                            {
                                id: messageList.length + 1,
                                message: message
                            }
                        ])
                    }
                    ;
                    setMessage("");
                }}
            >Зберегти</Button>
            <div>
                {messageList.map(m => (
                    <p key={m.id}>{m.message}</p>
                ))}
            </div>
        </div>
    );
}

export default List