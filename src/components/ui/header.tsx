import CartIcon from '@/assets/CartIcon'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex justify-end bg-gray-800 sticky min-h-12">
      <div>
        <button
          type="button"
          className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm h-full pr-2 pl-2"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <CartIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
