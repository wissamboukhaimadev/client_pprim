import { Indicator } from '@mantine/core'
import { BellRing, HandCoins, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import NotificationDrawer from './NotificationDrawer'
import { useDisclosure } from '@mantine/hooks'

export default function Header() {

    const [opened, { open, close }] = useDisclosure(false)

    const router = useRouter()
    return (
        <div className='flex justify-between pl-10 pr-5 bg-white p-5 rounded-xl shadow-lg '>

            <NotificationDrawer opened={opened} close={close} />
            <p className='text-3xl cursor-pointer' onClick={() => {
                router.push("/")
            }}>Logo</p>
            <div className='flex'>
                <Settings className=' cursor-pointer' size={28} />
                <Indicator
                    disabled={false}
                    size={15}
                    label="New"
                >
                    <BellRing className='ml-10 cursor-pointer' size={28} onClick={open} />
                </Indicator>
                <HandCoins className='ml-10 cursor-pointer' size={28} />
            </div>
        </div>
    )
}
