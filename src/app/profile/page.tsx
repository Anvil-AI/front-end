import Bottombar from "@/components/bottombar/Bottombar";

export default function Profile() {
    return (
        <div className="flex justify-center font-body">
            <div className="min-h-[90vh] w-[80vw] border-t-0 shadow-lg rounded-bl-3xl rounded-br-3xl flex flex-col">
                <i className="bi bi-person-fill text-14xl leading-none text-[#343434] self-center"></i>
                <div className="flex justify-around mt-5">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" value={"teste"} className="bg-transparent border-transparent focus:outline-none" disabled/>
                </div>
                <div className="flex justify-around mt-5">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={"teste@evaai.com"} className="bg-transparent border-transparent focus:outline-none" disabled/>
                </div>
                <div className="flex justify-around mt-5">
                    <label htmlFor="email">Telefone:</label>
                    <input type="phone" id="phone" name="phone" value={"(19) 9.9999-9999"} className="bg-transparent border-transparent focus:outline-none" disabled/>
                </div>
                <div className="flex justify-around mt-5">
                    <label htmlFor="plan">Plano:</label>
                    <input type="text" id="plan" name="plan" value={"Grátis"} className="bg-transparent border-transparent focus:outline-none" disabled/>
                </div>
                <div className="flex justify-between w-3/5 mt-10 self-center">
                    <button 
                        type="button"
                        className=" bg-gray-200 font-body px-10 py-2 w-2/4 rounded-lg text-base select-none"
                        id="btnChange"
                        name="btnChange"
                    >Editar</button>
                    <button 
                        type="button"
                        className=" bg-gray-200 font-body px-10 py-2 ml-10 w-2/4 rounded-lg text-base select-none"
                        id="btnManage"
                        name="btnManage"
                    >Gerenciar conta</button>
                </div>
            </div>
            <Bottombar></Bottombar>
        </div>
    )
}