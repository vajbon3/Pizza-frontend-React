import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import "./Pizza.css";

const Pizza = ({ id, name, description, img, price }) => {
    return (
        <div class="text-white m-3 pizza w-1/4 h-96 bg-black border-4 border-cheese rounded-lg flex flex-col justify-center items-center" id={id}>
            <div class="flex items-center justify-center">
                <img src={img} alt="photo of a pizza" class="rounded-lg shadow-md" />
            </div>
            <div class="flex flex-col items-center justify-center m-1 p-1">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div class="flex items-center justify-center p-3 mx-1">
                <h2 class="mx-3 text-green-500">{price}</h2>
                <CustomButton>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add To Cart
                </CustomButton>
            </div>
        </div>
    )
}

export default Pizza
