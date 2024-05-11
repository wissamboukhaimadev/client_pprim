"use client"

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import CardsAmphie from "@/components/cards/CardsAmphie";
import CardsEtage1 from "@/components/cards/CardsEtage1";
import CardsEtage2 from "@/components/cards/CardsEtage2";
import CardsEtage3 from "@/components/cards/CardsEtage3";
import CardsGeneral from "@/components/cards/CardsGeneral";
import DognutChart from "@/components/charts/DognutChart";
import { navigation_labels } from "@/utils/navigation";
import { DatePickerInput } from "@mantine/dates";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { motion } from "framer-motion"
import '@mantine/dates/styles.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";



export default function Home() {

  const router = useRouter()

  const [currentLabel, setCurrentLabel] = useState<navigation_labels>("General")
  const [dateValue, setDateValue] = useState<Date | null>(null)

  useEffect(() => {
    // const interval = setInterval(() => {
    //   router.push('/chart');
    // }, 5000);

    // return () => clearInterval(interval);
    toast.success("data success", {
      position: "bottom-right"
    })
  }, [router])

  return (
    <div className="bg-pprimbg pt-5 px-5 h-screen">
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
            <div className="w-2/3 grid grid-cols-2 gap-4 mr-10">
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

      <ToastContainer
        hideProgressBar
        pauseOnHover={false}
        autoClose={2000}
        draggable
      />
    </div>
  );
}

type TSwitchCardsByLabel = {
  label: navigation_labels
}

function SwitchCardsByLabel({ label }: TSwitchCardsByLabel) {
  if (label === "General") {
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