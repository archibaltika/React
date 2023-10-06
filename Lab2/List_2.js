import React, {useState} from "react";
import Button from "react-bootstrap/Button";

function Delete() {
    let [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    function handleRemoveItem(id){
        setMessageList(messageList.filter(obj => obj.id != id));
    }

    return  (
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
                    if(message == ""){
                        message = "Порожній рядок";
                    }
                    else{
                    setMessageList([
                        ...messageList,
                        {
                            id: messageList.length + 1,
                            message: message
                        }
                    ])};
                    setMessage("");
                }}
            >Зберегти</Button>
            <div>
                {messageList.map(m => (
                    <p className={"paragraph"} key={m.id}>{m.message} <Button onClick={event => handleRemoveItem(m.id)}>X</Button></p>
                ))}

            </div>
        </div>
    );
}

export default Delete