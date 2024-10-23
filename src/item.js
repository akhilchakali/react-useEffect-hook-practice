const Item = (props) => {
    const {details} = props
    const {title,image,description} = details
    return(
        <li>
            <p >{title}</p>
            <img height={40} width={40} src={image} alt="img"/>
            <p>{description}</p>
        </li>
    )
}

export default Item