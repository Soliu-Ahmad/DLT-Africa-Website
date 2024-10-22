"use client";

import FullStackHero from "@/app/components/Courses/FullStack/FullstackHero";
import FullstackIconSection from "@/app/components/Courses/FullStack/FullstackIconSection";
import FullstackDetail from "@/app/components/Courses/FullStack/FullstackDetail";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {

    // Google Tag Manager
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-G2R8DSB4GV";
    script.async = true;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G2R8DSB4GV');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <FullStackHero />
      <FullstackIconSection />
      <FullstackDetail />
    </div>
  );
};

export default page;
