export default function Input(props){
    return (
        <>
            <input id={props.id} className="outline-none w-full p-2 rounded-md my-3  bg-indigo-100/90" type={props.type} placeholder={props.placeholder}></input>
        </>
    )
}