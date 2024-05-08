import { navigation_items } from '@/utils/navigation'
import { Progress } from '@mantine/core'
import { Droplets, ThermometerSun } from 'lucide-react'
import React from 'react'

function SideNav() {
    return (
        <div className="side nav flex flex-col mt-5 ">
            <div className="p-5 bg-white rounded-xl w-56">
                <p className="pb-3 text-">Menu</p>
                <div>
                    <div className="pl-5 mr-5">
                        <p className="pb-2">Dashboard</p>
                    </div>
                    {navigation_items.map((item, index) => (
                        <div key={index} className="pl-5 mr-5">
                            <p className="pb-2">{item.label}</p>
                        </div>
                    ))}
                    <div className="pl-5 mr-5">
                        <p className="pb-2">Histrorique</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 p-5 bg-white w-56 rounded-xl">
                <div className="flex justify-between">
                    <div>
                        <p>Weather</p>
                        <p className="text-xl font-semibold pl-3 mt-2">25%</p>
                    </div>
                    <div>
                        <ThermometerSun />
                    </div>
                </div>
                <Progress className="mt-3 " value={25} />
            </div>

            <div className="mt-5 p-5 bg-white w-56 rounded-xl">
                <div className="flex justify-between">
                    <div>
                        <p>Humidity</p>
                        <p className="text-xl font-semibold pl-3 mt-2">40%</p>
                    </div>
                    <div>
                        <Droplets />
                    </div>
                </div>
                <Progress className="mt-3 " value={40} color="orange" />
            </div>

        </div>
    )
}

export default SideNav