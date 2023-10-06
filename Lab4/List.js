import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";

function List() {
    let [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState(JSON.parse(localStorage.getItem('messageList'))||[]);
    useEffect(() => {
    localStorage.setItem('messageList', JSON.stringify(messageList))
    },[messageList])
    function handleRemoveItem(id){
        setMessageList(messageList.filter((obj) => obj.id !== id));
    }

    return  (
        <div className={"firstl"}>
            <input
                type="text"
                value={message}
                placeholder="Заповніть поле"
                onChange={e => {
                    setMessage(e.target.value);
                }}
            />
            <Button className={"button-85"}
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
                    <p className={"paragraph"} key={m.id}>{m.message} <Button className={"button-30"} onClick={event => handleRemoveItem(m.id)}>X</Button></p>
                ))}

            </div>
        </div>
    );
}

export default List