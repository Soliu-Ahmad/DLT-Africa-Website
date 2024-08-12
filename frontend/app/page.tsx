"use client";

import dynamic from 'next/dynamic';

import { useEffect, useState } from "react";
import CurrentAndUpcoming from "./components/HomePage/CurrentAndUpcoming/CurrentAndUpcoming";
import Faqs from "./components/HomePage/Faq/Faqs";
import JoinHackerHouse from "./components/HomePage/JoinHackerHouse/JoinHackerHouse";
import Partners from "./components/HomePage/Partners/Partners"
import {
  RegisterOnline,
} from "./components/HomePage/Register/Register";
import WhatYou from "./components/HomePage/WhatYou/WhatYou";
import Loader from "./components/Loader/Loader";
const HeroSection = dynamic(() => import('./components/HomePage/HeroSection/HeroSection'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <HeroSection />
          <WhatYou />
          <RegisterOnline />
          <Partners/>
          <JoinHackerHouse />
          <Faqs />
          <CurrentAndUpcoming />
        </div>
      )}
    </div>
  );
}
