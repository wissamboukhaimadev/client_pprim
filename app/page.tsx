"use client"

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import CardsAmphie from "@/components/cards/CardsAmphie";
import CardsEtage1 from "@/components/cards/CardsEtage1";
import CardsEtage2 from "@/components/cards/CardsEtage2";
import CardsEtage3 from "@/components/cards/CardsEtage3";
import CardsGeneral from "@/components/cards/CardsGeneral";
import DognutChart from "@/components/charts/DognutChart";
import { navigation_items, navigation_labels } from "@/utils/navigation";
import { DatePickerInput } from "@mantine/dates";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { motion } from "framer-motion"
import '@mantine/dates/styles.css';

import 'react-toastify/dist/ReactToastify.css';



export default function Home() {

  const router = useRouter()

  const [currentLabel, setCurrentLabel] = useState<navigation_labels>("Dashboard")
  const [dateValue, setDateValue] = useState<Date | null>(null)


  useEffect(() => {



    const state_interval = setInterval(() => {

      setCurrentLabel(prevLabel => {
        const currentIndex = navigation_items.findIndex(item => item.label === prevLabel);
        const nextIndex = (currentIndex + 1) % navigation_items.length;
        return navigation_items[nextIndex].label;
      });

      if (currentLabel == "Amphie") {
        router.push('/chart');
      }

    }, 2000);

    return () => {
      clearInterval(state_interval)

    };
  }, [router, currentLabel])

  return (
    <div className="bg-pprimbg pt-5 px-5 ">
      <Header />

      <div className="flex">
        <SideNav
          currentLabel={currentLabel}
          setCurrentLabel={setCurrentLabel}
        />
        <div className="main p-5 flex-grow">
          <div className="flex justify-between  ">
            <div>
              <p className="text-2xl">Values Overview</p>
            </div>
            <div className="w-1/5">
              <DatePickerInput
                placeholder="Select a date"
                value={dateValue}
                onChange={setDateValue}
              />
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="w-2/3 grid grid-cols-2 gap-4 mr-10 h-1/3">
              <SwitchCardsByLabel label={currentLabel} />
            </div>

            <div
              className="flex-grow"

            >
              <div
                className="mt-5 p-5 bg-white rounded-xl shadow-xl"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg">Consommation en Kwh</p>
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

type TSwitchCardsByLabel = {
  label: navigation_labels
}

function SwitchCardsByLabel({ label }: TSwitchCardsByLabel) {
  if (label === "Dashboard") {
    return <CardsGeneral />
  } else if (label === "Etage 1") {
    return <CardsEtage1 />
  } else if (label === "Etage 2") {
    return <CardsEtage2 />
  } else if (label === "Etage 3") {
    return <CardsEtage3 />
  } else if (label === "Amphie") {
    return <CardsAmphie />
  } else {
    return null
  }
}