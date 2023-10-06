import {useState} from "react";

function Form(){
    const [information, setInformation] = useState({name:'', email:'', title:'', textArea:''});
    const [falsed, setFalsed] = useState(true);
   function ChangeName(e){
       information.name = e.target.value;
   }
    function ChangeEmail(e){
        information.email = e.target.value;
    }
    function ChangeTitle(e){
        information.title = e.target.value;
    }
    function ChangeText(e){
        information.textArea = e.target.value;
    }
    function onClick(){
       if(information.email !=="" && information.title !==""){
           console.log(information);
           setFalsed(true);
       }else {
           setFalsed(false);
       }

    }
    return(<div className='inputs'>
        <input  placeholder={'Ім’я'} type={"text"} onChange={(e)=>ChangeName(e)}/>
        <input  type={"email"} placeholder='email' onChange={(e)=>ChangeEmail(e)}/>
        <input  placeholder={'Тема'} type={"text"} onChange={(e)=>ChangeTitle(e)}/>
        <textarea  placeholder='Повідомлення' onChange={(e)=>ChangeText(e)}></textarea>
        <p className='small'>Поля відмічені * мають бути обов'язково заповнені</p>
        <button className='buttons' onClick={onClick}>Відправити</button>
        {falsed === false &&(<div className='alert'>Ви не заповнили потрібні поля</div>)}
    </div>)
}
export default Form