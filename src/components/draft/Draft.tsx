import Image from "next/image";

export default function Draft() {
    return (
        <form
        action=""
        method="post"
        className="flex flex-col font-body min-w-[45vw] w-2/5">
            <h1 id={"question"} className="text-base mb-4">
                1. Qual é sintaxe para iterar sobre uma lista de itens em java?
            </h1>
            <div className="bg-gray-100 min-w-fit rounded-md border border-gray-400 h-60">
                <div className="flex flex-row justify-between px-6 py-3">
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mx-3"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-center select-none">Draft</span>
                    <div></div>
                </div>
                <textarea 
                    name="draft" 
                    id="draft"
                    rows={7}
                    className="bg-gray-100 mx-7 resize-none w-11/12 focus:outline-none font-draft" 
                    autoComplete="false" 
                    spellCheck="false"
                ></textarea>
            </div>
            <button 
                type="button"
                className="self-end bg-gray-200 font-body w-2/5 py-2 rounded-lg mt-10 text-base select-none"
                id="btnVerify"
                name="btnVerify"
            >Verificar</button>
            {/* <button 
                type="button"
                className="self-end bg-[#31742F] text-white font-body w-2/5 py-2 rounded-lg mt-10 text-base select-none flex justify-center items-center"
                disabled
            >Correto <Image src="/icons/check.svg" alt="imagem correto" width="20" height="20" className="ml-2"/></button>
            <button 
                type="button"
                className="self-end bg-[#930000] text-white font-body w-2/5 py-2 rounded-lg mt-10 text-base select-none flex justify-center items-center"
                disabled
            >Incorreto <Image src="/icons/wrong.svg" alt="imagem incorreto" width="20" height="20" className="ml-2"/></button> */}
        </form>
    )
}