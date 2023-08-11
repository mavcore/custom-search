import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from 'react'
import {XMarkIcon, MicrophoneIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import Avatar from '../components/Avatar'
import HeaderOptions from "./HeaderOptions"

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className="flex w-full p-6 items-center">
            <Image 
            src='https://i.postimg.cc/BvWRhzL0/MAV-ENGINE.png' 
            height={50}
            width={140}
            alt="Google"
            onClick={() => router.push("/")}
            className="cursor-pointer"
            />
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border
             border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="test"
                defaultValue={router.query.term}
                />
             <XMarkIcon className="h-7 mr-2 text-gray-500 cursor-pointer transiton
             duration-100 transform hover:scale-125"
             onClick={() => (searchInputRef.current.value = "")}
             />
             <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex
             text-blue-500 border-l-2 pl-4 border-gray-300"
             />
             <MagnifyingGlassIcon className=" h-6 text-blue-500 hidden sm:inline-flex" 
             />
             <button hidden type='submit' onClick={search}>
             Search
             </button>
            </form>
            <Avatar className="ml-auto" url="https://i.postimg.cc/KzjcFYCv/Logo.png" />
            </div>

            {/* Header */}
            <HeaderOptions />
        </header>
    )
}

export default Header;