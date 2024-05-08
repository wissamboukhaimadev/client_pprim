import { BellRing, HandCoins, Settings } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between pl-10 pr-5 bg-white p-5 rounded-xl shadow-lg '>
            <p className='text-3xl'>Logo</p>
            <div className='flex'>
                <Settings className='mr-10 cursor-pointer' size={28} />
                <BellRing className='mr-10 cursor-pointer' size={28} />
                <HandCoins className='mr-10 cursor-pointer' size={28} />
            </div>
        </div>
    )
}
