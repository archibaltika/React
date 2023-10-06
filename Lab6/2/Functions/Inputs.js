import {useFieldArray, useForm} from "react-hook-form";
import {useState} from "react";
function Inputs() {
    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const [arr, setArray] = useState([{id:0}]);
    const [back, setBack] = useState(false);
    const onSubmit = data => console.log(data);
    function addArr(index){
        setArray([...arr, {id:index+1}]);
    }
    function deleteArr(Cindex){
        setArray((prev)=>prev.filter((_,index)=>index===Cindex));
    }

    return(<div className='main'>
        <form onSubmit={handleSubmit(onSubmit)}>
    <div className='marsh' >
        <p>Маршрут</p>
        <div className='city'>
        <select {...register('region_From')}>
            <option value='Віниця'>Віниця</option>
            <option value='Житомир'>Житомир</option>
            <option value='Київ'>Київ</option>
        </select>
        <select {...register('region_In')}>
            <option value='Бердичів'>Бердичів</option>
            <option value='Коростень'>Коростень</option>
            <option value='Умань'>Умань</option>
        </select>
        </div>
    </div>
        <hr/>
<div className='marsh'>
    <p>Вид відправлення</p>
    <select {...register('type')}>
        <option value='Вантажі'>Вантажі</option>
        <option value='Документи'>Документи</option>
        <option value='Палети'>Палети</option>
    </select>
</div>
        <hr/>
        <div >
            <p>Характеристики місць</p>
                {arr.map((index) => <div key={index.id} className='marsh'>
                    <div >
                        <p>Кількість</p>
                        <input type={"number"} {...register(`Counts${index.id}`)}/>
                    </div>
                    <div className="cost">
                        <p>Оголошена вартість</p>
                        <input type={"text"} {...register(`Sum${index.id}`, {
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            minLength: {
                                value: 0,
                                message: "This input must exceed 0 characters"
                            }
                        })}/>
                        <p>Грн</p>
                    </div>
                    <div>
                        <p>Вага</p>
                        <input type={"text"} {...register(`weight${index.id}`, {
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            minLength: {
                                value: 0,
                                message: "This input must exceed 0 characters"
                            },
                            maxLength:{
                                value: 3,
                                message: "This input must exceed 3 characters"
                            }
                        })}/>
                        <p>кг</p>
                    </div>
                    <div>
                        <p>Довжина</p>
                        <input type={"text"} {...register(`width${index.id}`,{
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            minLength: {
                                value: 0,
                                message: "This input must exceed 0 characters"
                            },
                            maxLength:{
                                value: 3,
                                message: "This input must exceed 3 characters"
                            }
                        })}/>
                    </div>
                    <div>
                        <p>Ширина</p>
                        <input type={"text"} {...register(`shuruna${index.id}`,{
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            minLength: {
                                value: 0,
                                message: "This input must exceed 0 characters"
                            },
                            maxLength:{
                                value: 3,
                                message: "This input must exceed 3 characters"
                            }
                        })}/>
                    </div>
                    <div>
                        <p>Висота</p>
                        <input type={"text"} {...register(`height${index.id}`, {
                            required: "This input is required.",
                            pattern: {
                                value: /\d+/,
                                message: "This input is number only."
                            },
                            minLength: {
                                value: 0,
                                message: "This input must exceed 0 characters"
                            },
                            maxLength:{
                                value: 3,
                                message: "This input must exceed 3 characters"
                            }
                        })}/>
                        <p>см</p>
                    </div>
                    <button className='delete' onClick={()=>deleteArr(index.id)}>Видалити місце</button>
                </div> )}
            <button className='add' onClick={()=>addArr(arr.id)}>Додати місце</button>
        </div>
            <hr/>
           <div  className='marsh'>
                    <p>Послуга "Підйом на поверх"</p>
                    <input type={"number"} {...register('town',{
                        required: "This input is required.",
                        pattern: {
                            value: /\d+/,
                            message: "This input is number only."
                        },
                        minLength: {
                            value: 0,
                            message: "This input must exceed 0 characters"
                        },
                        maxLength:{
                            value: 2,
                            message: "This input must exceed 3 characters"
                        }
                    })}/>
                    <p>Кількість поверхів</p>
                    <input type={"checkbox"} {...register('Lift')}/>
            </div>
            <div  className='marsh'>
                <p>Послуга "Зворотна доставка"</p>
                <input className='back' type={"checkbox"} {...register('Back')} onChange={()=>setBack(!back)}/>
                { back === true &&(
                <div  className='marsh'>
                    <p>Вид зворотної доставки</p>
                    <select {...register('backDeliver')}>
                    <option>Документи</option>
                    <option>Грошовий переказ</option>
                    </select>
                </div>
                )
                }
            </div>
        <div  className='butons'>
            <button className='b' type={"submit"}>Розрахувати вартість</button>
            <input className='b' type={"reset"}/>
        </div>
        </form>
    </div>)
}
export default Inputs;