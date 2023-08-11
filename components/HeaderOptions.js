import HeaderOption from './HeaderOption'
import {Bars3BottomLeftIcon, MapIcon, NewspaperIcon, PhotoIcon, PlayIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base
        lg:justify-start lg:space-x-36 lg:pl-52 border-b">
          {/* Left */}
        <div className="flex space-x-6">
            <HeaderOption  Icon={MagnifyingGlassIcon}
            title="Google Search Results" selected />
        </div>
        
          {/* Right */}
        <div className="flex space-x-4">
            
        </div>
        </div>
    )
}

export default HeaderOptions;