import React from 'react';
import "./components/global/reset.css"
import "./components/global/global.css"
import Header from "./components/Header/Header";
import SectionBrands from "./components/SectionBrands/SectionBrands";
import SectionPromo from "./components/SectionPromo/SectionPromo";
import SectionFeatured from "./components/SectionFeatured/SectionFeatured";
//Можно ли import { promoData } from "../../data.js"; и через props скинуть массив в SctionPromo?

export default function page() {
  return (
    <body>
      <Header />
      <main>
        {/* слайдер */}
        <SectionBrands />
        <SectionPromo />
        <SectionFeatured />
      </main>
    </body>

  )
}
