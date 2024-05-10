import { ICard } from '@/utils/cards'
import { Plug, ThermometerSun } from 'lucide-react'

import { motion } from "framer-motion"


const cards_items: ICard[] = [
    {
        title: "Tension general",
        value: 25,
        icon: <Plug />
    },
    {
        title: "Courant",
        value: 25,
        icon: <ThermometerSun />
    },
    {
        title: "Puissance",
        value: 25,
        icon: <ThermometerSun />
    },
    {
        title: "Cos",
        value: 25,
        icon: <ThermometerSun />
    },
]

export default function CardsGeneral() {
    return (
        <>
            {cards_items.map((item, index) => (
                <motion.div
                    key={index}
                    className="mt-5 p-5 bg-white rounded-xl shadow-xl"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 * index / 2 }}
                >
                    <div className="flex justify-between">
                        <div>
                            <p className="font-bold text-lg" >{item.title}</p>
                            <p className="text-xl font-semibold pl-3 mt-2">{item.value}</p>
                        </div>
                        <div>
                            {item.icon}
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    )
}