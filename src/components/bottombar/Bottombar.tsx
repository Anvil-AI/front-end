export default function Bottombar() {
    return (
        <div 
        className="
            flex
            justify-center
            py-5
            absolute
            bottom-0
            left-1/2 
            transform 
            -translate-x-1/2
        ">
            <div
            className="
                flex
                px-14
                py-3
                border-2
                rounded-full
            ">
                <a href="/profile" className="bi bi-person-fill cursor-pointer text-stone-900 mx-4 text-xl leading-none hover:text-stone-600 hover:transition"></a>
                <a href="/home" className="bi bi-house-fill cursor-pointer text-stone-900 mx-4 text-xl leading-none hover:text-stone-600 hover:transition"></a>
                <a href="/analytics" className="bi bi-bar-chart-fill cursor-pointer text-stone-900 mx-4 text-xl leading-none hover:text-stone-600 hover:transition"></a>
                <a href="/profile/settings" className="bi bi-gear-fill cursor-pointer text-stone-900 mx-4 text-xl leading-none hover:text-stone-600 hover:transition"></a>
            </div>
        </div>
    )
}