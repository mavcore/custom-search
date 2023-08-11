import {GlobeAltIcon} from '@heroicons/react/20/solid'

function Footer() {
        return <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm
        text-gray-500"> 
<div className="px-8 py-3">
    <p>© Rohan (Mav ツ)</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
    <div className="flex p-2 justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
        <GlobeAltIcon className="h-5 mr-1 text-green-700" />
        Code. Collaborate. Conquer.
    </div>
</div>
        </footer>
}

export default Footer;