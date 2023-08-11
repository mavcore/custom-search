import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewfinderCircleIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter  } from "next/router"

export default function Home() {
  const searchInputRef: any = useRef(null);
  const router = useRouter();

  const search = (e:any) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Custom Search Engine</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link"><a href="https://programmablesearchengine.google.com/about/">Google Custom Engine</a></p>
          <p className="link"><a href="https://nextjs.org/">Next.js</a></p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link"><a href ="https://github.com/mavcore">GitHub</a></p>
        
        
         {/* Icon */}
        <CodeBracketIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

         {/* Avatar */}
         <Avatar className="" url ="https://i.postimg.cc/KzjcFYCv/Logo.png"/>
         </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
         src="https://i.postimg.cc/BvWRhzL0/MAV-ENGINE.png"
         height={100}
         width={300}
         alt="Google"
        />
        <div className="flex w-full mt-5 shadow-md hover:shadow-lg focus-within:shadow-md max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5"/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Search</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
