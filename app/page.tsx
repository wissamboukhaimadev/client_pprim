"use client"

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";



export default function Home() {

  return (
    <div className="bg-pprimbg pt-5 px-5 h-screen">
      <Header />
      <div className="flex">
        <SideNav />
        <div className="main p-5">
          <div className="flex justify-between bg-white ">
            <div>
              <p>Values Overview</p>
            </div>
            <div>
              <p>Date</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
