"use client"

import Image from "next/image";
import ProjectButton from '@/components/ProjectButton';
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export default function Home() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const toggleRegisterModal = () => {
        setIsRegisterOpen(!isRegisterOpen);
    };

   const [selectedClass, setSelectedClass] = useState('7');
   const [selectedLang, setSelectedLang] = useState('қаз');
   const [selectedType, setSelectedType] = useState('сайт');

   const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
   };

   const handleLangChange = (e) => {
    setSelectedLang(e.target.value);
   };
   const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
   };

  return (
    <main className = "pt-6">
        <div className="ml-12 flex space-x-5">
            <Image
                src="/logo.png"
                width={42}
                height={42}
                alt="logo"
            />
            <h1 className="mr-3 w-3/5 text-xl font-bold pt-2">NisChem</h1>
        </div>

        <div className = "flex">
            <h1 className="text-4xl font-bold ml-40">Архив</h1>
            <button onClick={toggleRegisterModal} className = "absolute right-16 w-36 h-14 bg-green-500 rounded text-white transition duration-300 transform hover:scale-110 font-bold text-2xl">Жүктеу</button>
        </div>

        <div className="flex items-center justify-center font-semibold text-2xl space-x-44">
            <h1>
                сынып
            </h1>
            <h1>
                тіл
            </h1>
            <h1>
                тип
            </h1>
        </div>

        <div className="pt-2 flex items-center justify-center font-semibold text-2xl space-x-8">

            <div>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="7"
                    checked={selectedClass === '7'}
                    onChange={handleClassChange}
                    />
                    <button
                    className={`${
                        selectedClass === '7'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedClass('7')}
                    >
                    7
                    </button>
                </label>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="8"
                    checked={selectedClass === '8'}
                    onChange={handleClassChange}
                    />
                    <button
                    className={`${
                        selectedClass === '8'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedClass('8')}
                    >
                    8
                    </button>
                </label>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="9"
                    checked={selectedClass === '9'}
                    onChange={handleClassChange}
                    />
                    <button
                    className={`${
                        selectedClass === '9'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedClass('9')}
                    >
                    9
                    </button>
                </label>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="10"
                    checked={selectedClass === '10'}
                    onChange={handleClassChange}
                    />
                    <button
                    className={`${
                        selectedClass === '10'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedClass('10')}
                    >
                    10
                    </button>
                </label>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="11"
                    checked={selectedClass === '11'}
                    onChange={handleClassChange}
                    />
                    <button
                    className={`${
                        selectedClass === '11'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedClass('11')}
                    >
                    11
                    </button>
                </label>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="12"
                    checked={selectedClass === '12'}
                    onChange={handleClassChange}
                    />
                    <button
                    className={`${
                        selectedClass === '12'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedClass('12')}
                    >
                    12
                    </button>
                </label>
            </div>
        
            <div>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="қаз"
                    checked={selectedLang === 'қаз'}
                    onChange={handleLangChange}
                    />
                    <button
                    className={`${
                        selectedLang === 'қаз'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedLang('қаз')}
                    >
                    қаз
                    </button>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="рус"
                    checked={selectedLang === 'рус'}
                    onChange={handleLangChange}
                    />
                    <button
                    className={`${
                        selectedLang === 'рус'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedLang('рус')}
                    >
                    рус
                    </button>
                </label>
            </div>

            <div>
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="сайт"
                    checked={selectedType === 'сайт'}
                    onChange={handleTypeChange}
                    />
                    <button
                    className={`${
                        selectedType === 'сайт'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedType('сайт')}
                    >
                    сайт
                    </button>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value="видео"
                    checked={selectedType === 'видео'}
                    onChange={handleTypeChange}
                    />
                    <button
                    className={`${
                        selectedType === 'видео'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedType('видео')}
                    >
                    видео
                    </button>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    className="hidden"
                    value=".pdf"
                    checked={selectedType === '.pdf'}
                    onChange={handleTypeChange}
                    />
                    <button
                    className={`${
                        selectedType === '.pdf'
                        ? 'bg-white hover:bg-gray-200 transition-colors duration-300'
                        : 'bg-zinc-300 hover:bg-zinc-400 transition-colors duration-300'
                    } text-black text-base font-bold py-2 px-4 rounded`}
                    onClick={() => setSelectedType('.pdf')}
                    >
                    .pdf
                    </button>
                </label>
            </div>
        </div>

        <div className="flex items-center justify-center pt-10">
            <input
            type="text"
            placeholder="іздеу..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-1/2"
            />
        </div>

        <div className="flex flex-col">
            <div className="flex items-center justify-center space-x-10 pt-8">
                <ProjectButton projectName="Chem Project 1" fullName = "Mercedes Benz" nisClass = "12A" group="1 group"/>
                <ProjectButton projectName="Chem Project 2" fullName = "Rolls Royce" nisClass = "12B" group="2 group"/>
            </div>
            <div className="flex items-center justify-center space-x-10 pt-8">
                <ProjectButton projectName="Chem Project 1" fullName = "Mercedes Benz" nisClass = "12A" group="1 group"/>
                <ProjectButton projectName="Chem Project 2" fullName = "Rolls Royce" nisClass = "12B" group="2 group"/>
            </div>
            <div className="flex items-center justify-center space-x-10 pt-8">
                <ProjectButton projectName="Chem Project 1" fullName = "Mercedes Benz" nisClass = "12A" group="1 group"/>
                <ProjectButton projectName="Chem Project 2" fullName = "Rolls Royce" nisClass = "12B" group="2 group"/>
            </div>
            <div className="flex items-center justify-center space-x-10 pt-8">
                <ProjectButton projectName="Chem Project 1" fullName = "Mercedes Benz" nisClass = "12A" group="1 group"/>
                <ProjectButton projectName="Chem Project 2" fullName = "Rolls Royce" nisClass = "12B" group="2 group"/>
            </div>
            <div className="flex items-center justify-center space-x-10 pt-8">
                <ProjectButton projectName="Chem Project 1" fullName = "Mercedes Benz" nisClass = "12A" group="1 group"/>
                <ProjectButton projectName="Chem Project 2" fullName = "Rolls Royce" nisClass = "12B" group="2 group"/>
            </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center" style={{ display: isRegisterOpen ? '' : 'none' }}>
            <div className = "w-1/2 h-72 bg-zinc-300 text-center flex flex-col outline outline-6 outline-white rounded-lg">
                <h1 className="text-2xl font-semibold pt-6">Тіркелуді аяқтаныз!</h1>
                <div className="pt-6 flex justify-center items-center">
                    <div className="relative">
                    <input
                        type="text"
                        placeholder="Аты-Жөні"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-96"
                    />
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-10 pt-8">
                    <div className="flex space-x-5">
                        <h1 className="text-2xl font-semibold">
                            сынып
                        </h1>

                        <select name="" id="">
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                        
                    <div className="flex space-x-5">
                        <h1 className="text-2xl font-semibold">
                            топ
                        </h1>

                        <select name="" id="">
                            <option value="1" >1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                    <div className="flex space-x-5">
                        <h1 className="text-2xl font-semibold">
                            тіл
                        </h1>

                        <select name="" id="">
                            <option value="Қаз" >Қаз</option>
                            <option value="Рус">Рус</option>
                        </select>
                    </div>
                    
                </div>
                
                <div className="flex items-center justify-center pt-8">
                    <button onClick={toggleRegisterModal} className = "w-28 h-10 bg-green-500 rounded text-white transition duration-300 transform hover:scale-110 font-bold text-xl">Жүктеу</button>
                </div>

            </div>

        </div>

    </main>
  );
}
