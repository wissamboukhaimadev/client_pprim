import { navigation_items } from '@/utils/navigation'
import { Progress } from '@mantine/core'
import { Droplets, ThermometerSun } from 'lucide-react'
import { motion } from "framer-motion"

function SideNav() {
    return (
        <motion.div
            className="side nav flex flex-col mt-3 w-1/6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
        >
            <div className="p-5 bg-white rounded-xl  shadow-xl">
                <p className="mb-1 text-">Menu</p>
                <div>
                    <div className="pl-5 mr-5 cursor-pointer">
                        <p className="mb-1 p-1 ">Dashboard</p>
                    </div>
                    {navigation_items.map((item, index) => (
                        <div key={index} className="pl-5 mr-5 ml-2 cursor-pointer">
                            <p className="mb-1 p-1 text-center">{item.label}</p>
                        </div>
                    ))}
                    <div className="pl-5 mr-5 cursor-pointer">
                        <p className="mb-1 ">Histrorique</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 p-5 bg-white  rounded-xl shadow-xl">
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

            <div className="mt-5 p-5 bg-white  rounded-xl shadow-xl">
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

        </motion.div>
    )
}

export default SideNav