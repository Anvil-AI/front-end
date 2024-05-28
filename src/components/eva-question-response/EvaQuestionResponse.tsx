import EvaMessage from "../eva-message/EvaMessage";

export default function EvaQuestionResponse() {
    return (
        <div id={"evaResponse"} className="flex font-body min-w-[45vw] w-2/5 items-center justify-end">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold mb-2">Eva:</h1>
                <EvaMessage message="lorem ipsun lorem ipsun lorem ipsun lorem ipsu"></EvaMessage>
                <EvaMessage message="lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun "></EvaMessage>
                <button 
                type="button"
                className="self-end bg-gray-200 font-body w-2/5 py-2 rounded-lg mt-11 text-base select-none"
                id="btnRemake"
                name="btnRemake"
            >Reforçar conteúdo</button>
            </div>
            <a className='m-0 p-0'>
                <i className="bi bi-arrow-right-short text-5xl ml-8 cursor-pointer"></i>
            </a>
            {/* <form method="post" className="flex flex-col">
                <h1 className="text-xl font-bold mb-2">Eva:</h1>
                <EvaMessage message="Esse flashcard foi:"></EvaMessage>
                <button 
                    type="button"
                    className="self-end bg-gray-200 font-body min-w-[35vw] max-w-[35vw] py-4 rounded-lg text-base select-none mb-4"
                    id="btnEasy"
                    name="btnEasy"
                >Fácil</button>
                <button 
                    type="button"
                    className="self-end bg-gray-200 font-body min-w-[35vw] max-w-[35vw] py-4 rounded-lg text-base select-none mb-4"
                    id="btnMedium"
                    name="btnMedium"
                >Média</button>
                <button 
                    type="button"
                    className="self-end bg-gray-200 font-body min-w-[35vw] max-w-[35vw] py-4 rounded-lg text-base select-none mb-4"
                    id="btnHard"
                    name="btnHard"
                >Difícil</button>
            </form>
            <a className='m-0 p-0'>
                <i className="bi bi-arrow-right-short text-5xl ml-8 cursor-pointer"></i>
            </a> */}
            
        </div>
    )
}