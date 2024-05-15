"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import BarChart from '@/components/charts/BarChart'
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import { navigation_labels } from '@/utils/navigation'
import { DatePickerInput } from '@mantine/dates'

import '@mantine/dates/styles.css';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export default function Chart() {

    const [currentLabel, setCurrentLabel] = useState<navigation_labels>("General")

    const router = useRouter()

    useEffect(() => {
        toast.success("data success", {
            position: "bottom-right"
        })
        // const interval = setInterval(() => {
        //     router.push('/');
        // }, 5000); // Trigger navigation every 10 seconds

        // return () => clearInterval(interval);

    }, [router])

    const [dateValue, setDateValue] = useState<Date | null>(null)


    return (
        <div
            className="bg-pprimbg pt-5 px-5 "
        >
            <Header />
            <div className="flex">

                <SideNav currentLabel={currentLabel} setCurrentLabel={setCurrentLabel} />

                <div className='flex-grow mx-10 p-5 bg-white mt-5'>

                    <div>

                        <div className='flex justify-between mb-2'>
                            <div></div>
                            <DatePickerInput
                                placeholder="Select a date"
                                value={dateValue}
                                onChange={setDateValue}
                                className='bg-red-200'
                            />
                        </div>

                        <BarChart />
                    </div>
                </div>
            </div>

            <ToastContainer
                hideProgressBar
                pauseOnHover={false}
                autoClose={2000}
                draggable
            />
        </div>
    )
}
