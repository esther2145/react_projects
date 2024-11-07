export default function Content(props) {
    return (
        <div>
            <p>
                {props.details}
                {props.context}
            </p>
        </div>
    )
}