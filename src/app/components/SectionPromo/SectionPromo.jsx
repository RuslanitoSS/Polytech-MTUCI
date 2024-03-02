import "./SectionPromo.css";
import PromoCard from "./PromoCard/PromoCard";
import { promoData } from "../../data.js";

const SectionPromo = () => {
  const promoList = promoData.map(item =>
    <li key={item.id}>
      <PromoCard imgUrl={item.imgUrl} promoTitle={item.promoTitle} />
    </li>
  )
  return (
    <section>
      <div className="wrapper">
        {/*    {data.map((item) => {
          return (
            <PromoCard imgUrl={item.imgUrl} promoTitle={item.promoTitle} />
          )
        })} */}
        <ul className="main--promo">
          {promoList}
        </ul>
        {/* <PromoCard imgUrl="https://sun9-66.userapi.com/impg/7JqQzXc7ItWNYfZUtcxaJG8ul6BNw_6V1QdOyg/rPXNCggCwtE.jpg?size=431x246&quality=96&sign=ea966494412238250dbaef5679247231&type=album" promoTitle="Довольное ебало 1" />
        <PromoCard imgUrl="https://sun9-66.userapi.com/impg/7JqQzXc7ItWNYfZUtcxaJG8ul6BNw_6V1QdOyg/rPXNCggCwtE.jpg?size=431x246&quality=96&sign=ea966494412238250dbaef5679247231&type=album" promoTitle="Довольное ебало 2" /> */}
      </div>
    </section>
  );
};

export default SectionPromo;