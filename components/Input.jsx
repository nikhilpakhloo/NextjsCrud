

const Input = ({input, setForm, Form}) => {
    const { label, type, name } = input;
    const handleOnChange = (e)=>{
       
        return setForm({...Form, [e.target.name]:e.target.value})
       
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <label className="text-sm pt-2">{label}</label>
                
                <input className="p-3 bg-white/20 outline-none text-sm rounded-md" 
               onChange={handleOnChange} type={type} name={name} placeholder={`${name}...`}/>
            </div>  
        </>
    )
}

export default Input