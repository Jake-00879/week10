import React from 'react'

export default function Button(props) {
    const { text, func, transfer } = props;

    const handleClick = () => {
        if (transfer) {
            document.getElementById(transfer)?.scrollIntoView({ behavior: 'smooth' });
        }
        if (func) {
            func();
        }
    };

    return (
        <button onClick={handleClick} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}