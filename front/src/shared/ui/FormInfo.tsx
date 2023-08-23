type FormInfoProps = {
    text: string
}

export default function FormInfo({ text }: FormInfoProps){

    return(
        <div className="form-item">
            <h4 className="form-info">{text}</h4>
        </div>
    )
}