"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import BarChart from '@/components/charts/BarChart'
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import { navigation_labels } from '@/utils/navigation'


export default function Chart() {

    const [currentLabel, setCurrentLabel] = useState<navigation_labels>("General")

    const router = useRouter()

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         router.push('/');
    //     }, 5000); // Trigger navigation every 10 seconds

    //     return () => clearInterval(interval);
    // }, [router])

    return (
        <div
            className="bg-pprimbg pt-5 px-5 h-screen"
        >
            <Header />
            <div className="flex">

                <SideNav currentLabel={currentLabel} setCurrentLabel={setCurrentLabel} />


                <div className='flex-grow mx-10 p-5 bg-white mt-10'>
                    <BarChart />
                </div>
            </div>
        </div>
    )
}
