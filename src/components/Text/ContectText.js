import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
export default function ContactText(){
    const navigate = useNavigate();
    return(
        <div className=" lg:ml-20 w-full text-black">
            <span className="text-xl lg:text-4xl mb-7 font-bold ">Contact Me</span>
            <hr className=" border-black my-2"></hr>
            <form className="text-left p-2" method="get" name="contact">
                <label htmlFor='name' placeholder="Daniel Lee" className="text-xl">Name</label>
                <Input id = 'name' type = 'text'></Input>
                <label htmlFor = 'email' placeholder="daniellee2024@gmail.com" className="text-xl">Email</label>
                <Input id = 'email' type = 'email'></Input>
                <label htmlFor = 'textbox' className="text-xl">Message</label>
                <textarea id = 'textbox' className="outline-none w-full p-3 my-3 rounded-md bg-indigo-100/90 h-24" placeholder="Write down your message."></textarea>  
                <Button type = 'submit' text = 'Submit' className = 'transition-all bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-400 p-3 rounded-md w-full text-white text-2xl font-bold tracking-wide' onClick={(props)=>{alert("Thank you for your contact!"); navigate('/home');}}></Button>          
            </form>
        </div>
    )
}