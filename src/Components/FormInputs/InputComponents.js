

export const InputComponents = (props) => {
    return <input name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.change} onBlur={props.blur} type={props.type} />
}

