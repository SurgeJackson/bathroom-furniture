import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const HeaderRight = () => {
  return (
    <div className="flex flex-wrap mr-2 justify-end items-center">
      <ShoppingBagIcon className="h-6 w-6 m-1 md:m-2 opacity-80 hover:opacity-100 transition-opacity duration-300" />
      <MagnifyingGlassIcon className="h-6 w-6 m-1 md:m-2 opacity-80 hover:opacity-100 transition-opacity duration-300" />
      <UserIcon className="h-6 w-6 m- md:m-2 opacity-80 hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default HeaderRight