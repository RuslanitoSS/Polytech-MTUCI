import React from 'react';
import "./components/global/reset.css"
import "./components/global/global.css"
import Header from "./components/Header/Header";
import SectionBrands from "./components/SectionBrands/SectionBrands";
import SectionPromo from "./components/SectionPromo/SectionPromo";
import SectionFeatured from "./components/SectionFeatured/SectionFeatured";
import { promoData } from "./data.js"
import { featuredData  } from "./data.js"

export default function page() {
  return (
    <body>
      <Header />
      <main>
        {/* слайдер */}
        <SectionBrands />
        <SectionPromo itemsData={promoData}/>
        <SectionFeatured itemsData={featuredData }/>
      </main>
    </body>

  )
}
