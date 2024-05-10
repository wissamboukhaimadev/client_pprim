"use client"

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import DognutChart from "@/components/charts/DognutChart";
import { ICard } from "@/utils/cards";
import { Button } from "@mantine/core";
import { Plug, ThermometerSun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



const cards_items: ICard[] = [
  {
    title: "Tension",
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

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      router.push('/chart');
    }, 5000);

    return () => clearInterval(interval);
  }, [router])

  return (
    <div className="bg-pprimbg pt-5 px-5 h-screen">
      <Header />
      <div className="flex">
        <SideNav />
        <div className="main p-5 flex-grow">
          <div className="flex justify-between  ">
            <div>
              <p className="text-2xl">Values Overview</p>
            </div>
            <div>
              <div>
                <Button variant="outline">Select a date</Button>

              </div>
            </div>
          </div>


          <div className="flex justify-between ">
            <div className="w-2/3 grid grid-cols-2 gap-4 mr-10">

              {cards_items.map((item, index) => (
                <div className="mt-5 p-5 bg-white rounded-xl shadow-xl">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold text-lg" >{item.title}</p>
                      <p className="text-xl font-semibold pl-3 mt-2">{item.value}%</p>
                    </div>
                    <div>
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <div className="flex-grow ">
              <div className="mt-5 p-5 bg-white rounded-xl shadow-xl">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg" >Consommation en Kwh</p>
                    <div className="mt-3">
                      <DognutChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>





        </div>
      </div>
    </div>
  );
}