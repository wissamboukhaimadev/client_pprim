"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import BarChart from '@/components/charts/BarChart'
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'


export default function Chart() {

    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            router.push('/');
        }, 5000); // Trigger navigation every 10 seconds

        return () => clearInterval(interval);
    }, [router])

    return (
        <motion.div
            className="bg-pprimbg pt-5 px-5 h-screen"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <Header />
            <div className="flex">

                <SideNav />


                <div className='flex-grow mx-10 p-5 bg-white mt-10'>
                    <BarChart />
                </div>
            </div>
        </motion.div>
    )
}
