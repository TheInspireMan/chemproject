import Image from 'next/image'

export default function Hero(){
    return (
        <main className = "w-full h-full flex pt-32 bg-zinc-50">

            <div className = "ml-16 pt-48 flex flex-col w-1/2">
                <h1 className = "text-5xl text-center text-zinc-900">
                    НЗМ ФМБ Алматы 
                    <div className="whitespace-pre-line">
                    Химия Порталы
                    </div>
                </h1>
                <div className = "ml-56 pt-12">
                    <button className = "rounded-md bg-green-500 text-white text-lg font-medium w-40 h-16 transition duration-300 transform hover:scale-110">
                        Бастау!
                    </button>
                </div>
            </div>

            <div className = "mr-32 pb-24">
                <Image
                    src="/illustration.png"
                    width={702}
                    height={560}
                    alt="illustration"
                    />
            </div>
        </main>
    );
}