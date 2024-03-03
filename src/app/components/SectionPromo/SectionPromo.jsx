import "./SectionPromo.css";
import PromoCard from "./PromoCard/PromoCard";
/* import { promoData } from "../../data.js"; */


const SectionPromo = (itemsData) => {
/*   console.log(itemsData) */
/* Почему itemsData был объектом массива обхектов {[{},{}]}?*/
  const promoList = itemsData['itemsData'].map(item => 
    <li key={item.id}>
      <PromoCard imgUrl={item.imgUrl} promoTitle={item.promoTitle} />
    </li>
  )
  return (
    <section>
      <div className="wrapper">
        <ul className="main--promo">
          {promoList}
        </ul>
      </div>
    </section>
  );
};

export default SectionPromo;