import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen text-[#FCFCFD] bg-[#3843D0] h-screen flex flex-col justify-center items-center py-10 px-4 ">
            <h1 className=" text-3xl mb-6 font-semibold"> Contador</h1>
            <p className="text-6xl font-bold">{count}</p>
            <button
            onClick={() => setCount(count+1)}
            className="mt-8 px-6 py2 text-[3843D0] border-2 bg-white font-medium rounded-lg hover:bg-[#FCFCFD] transition"
            >
                Sumar + 1
            </button>
        </div>
    );
}
export default Counter;