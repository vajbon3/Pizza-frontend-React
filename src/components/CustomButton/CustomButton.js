import React from 'react'

const CustomButton = ({children}) => {
    return (
        <button
          href="#"
          class="flex items-center py-1 px-2 bg-cheese text-black rounded-xl transform hover:scale-105"
        >
            {children}
        </button>
    )
}

export default CustomButton
