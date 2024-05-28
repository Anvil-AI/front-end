interface EvaMessageProps {
    message: string
}


export default function EvaMessage(props: EvaMessageProps) {
    return (
        <div className="bg-gray-200 p-4 rounded-tr-lg rounded-br-lg rounded-bl-lg min-w-[35vw] max-w-[35vw] mb-4 last:mb-0">
            <span className="text-justify text-gray-500">{props.message}</span>
        </div>
    )
}