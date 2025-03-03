"use client";

import Image from "next/image";

export default function Servers() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl orange">
          CSG ARMA 3 Exile Chernarus Isles
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Features
        </h2>
        <ul className="list-disc">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
          <li>Custom Loot Table</li>
          <li>Custom Traders</li>
          <li>Custom Missions</li>
          <li>Custom Static Missions</li>
          <li>Custom Locations</li>
          <li>Large variety of high quality mods</li>
          <li>Advanced Towing</li>
          <li>Advanced Urban Rappelling</li>
          <li>Better UI</li>
          <li>Roaming AI</li>
          <li>Territory Payment Warnings</li>
          <li>Helicopter Crashes</li>
          <li>Loot Drops</li>
          <li>Extra XM8 Apps</li>
          <li>Unique Flags</li>
          <li>Black Market trader</li>
          <li>Revive Script</li>
          <li>Claim Vehicle</li>
        </ul>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Our Server
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Server Specs
        </h3>
        <ul className="list-disc">
          <li>Intel Xeon E3-1270v6 - 4 cores/8 threads at 3.8Ghz</li>
          <li>32 Gb DDR4 ECC 2400Mhz RAM</li>
          <li>
            2x Intel PCIe NVMe SSDs RAID 1 - Read 1200 MB/s, Write 600 MB/s
          </li>
          <li>Windows Server 2016</li>
          <li>1Gb/s Upload, 500Mb/s Download</li>
        </ul>
        <Image
          alt="CSG Chernarus Isles Klen Trader"
          src="map1.png"
          width="1125"
          height="656"
        />
        <p className="leading-7 not-first:mt-6">
          Many hours of work have been put towards giving the traders a
          signature apocalyptic look. A large variety of special features have
          been added to further increase functionality and immersion such as
          extra detailing, trader animations and apocalyptic soundtracks playing
          from the radios.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Our Map
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Map Development
        </h3>
        <p className="leading-7 not-first:mt-6">
          New areas have been added to the map such as the improved North East
          Airfield and Custom Built military bases containing hidden secrets to
          the origin of the Apocalypse. The downfall of society is evident all
          through the map. Everything from soundtracks, to custom weather
          scripts have been added to create a new environment that captures some
          of the original DayZ magic.
        </p>
        <Image
          alt="CSG Chernarus Isles Berezino Camp"
          src="map2.png"
          width="1125"
          height="656"
        />
        <p className="leading-7 not-first:mt-6">
          Each trader has been built with a backstory in mind.
        </p>
        <p className="leading-7 not-first:mt-6">
          The Klen Trader, once a popular campground, and summer getaway was
          overtaken by the virus and abandoned for many years. Survivors later
          stumbled upon it, and fortified it as their new home, transporting
          many crates from the Rify ship wreck to be used as walls. The
          stockpile of loot they built up is now for bargain to other survivors.{" "}
        </p>
        <p className="leading-7 not-first:mt-6">
          The Stary Sobor Trader has a similar story to Klen. The old factory
          was abandoned after the outbreak of the virus, and several survivors
          hid their supplies deep inside the concrete jungles of the
          installation. As their group expanded, so did their gear stockpile
          until they decided to barter it away to the highest bidder.
        </p>
        <p className="leading-7 not-first:mt-6">
          The Zelenogorsk trader, the largest hospital center in Chernarus, was
          over loaded with the sick as the outbreak spread. Because of its
          importance, U.N. Forces were quick to reinforce the installation, and
          protect the hospital from any desperate survivors attempting to steal
          the medical supplies there. Many fights broke out around the premise,
          hence all the carnage that surrounds the trade zone&apos;s walls. It
          now stands as a beacon of hope for the small remaining population of
          Chernarus and offers help to those who come to them without hostile
          intent.
        </p>
        <Image
          alt="CSG Chernarus Isles North East Airfield C130 Crash"
          src="map3.png"
          width="1125"
          height="656"
        />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Custom Locations
        </h3>
        <p className="leading-7 not-first:mt-6">
          Many new military bases, sites, and evac sites have been added for
          increased military presence and gear. Civilian houses are not chocked
          full of automatic assault rifles, as is often the case on Exile
          servers. For this reasons, you must venture out to the higher risk
          sites to gain higher quality loot.
        </p>
        <p className="leading-7 not-first:mt-6">
          Many new military bases, sites, and evac sites have been added for
          increased military presence and gear. Civilian houses are not chocked
          full of automatic assault rifles, as is often the case on Exile
          servers. For this reasons, you must venture out to the higher risk
          sites to gain higher quality loot.
        </p>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          The custom military bases are:
        </h4>
        <ul className="list-disc">
          <li>Airbase Tent City (North West Airfield)</li>
          <li>Strelok Airbase (North East Airfield)</li>
          <li>Balota Airfield Field Treatment Area</li>
          <li>Cherno Containment Camp</li>
          <li>Elektro Triage Center</li>
          <li>Berezino Field Hospital</li>
          <li>Veresnik Military Compound</li>
          <li>Installation 175</li>
        </ul>
      </main>
    </div>
  );
}
