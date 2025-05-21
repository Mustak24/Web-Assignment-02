export default function Input({id, name, placeholder='Type here', value}){
    id = id ?? String(Math.floor(Math.random() * 1000));

    return (
        <label htmlFor={id}>
            <input id={id} name={name} type="text" placeholder={placeholder} />
        </label>
    )
}