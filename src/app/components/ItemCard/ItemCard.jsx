import "./ItemCard.css";
const ItemCard = ({
  itemName,
  itemType,
  itemSex,
  imgUrl,
  itemPrice,
  discount,
  discountAmount,
  favourited,
}) => {
  return (
    <div className="item-card">
      <div className="item-card--top">
        <button className={favourited ? "item--favourited" : "item--unfavourited"}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16.0737L16.18 20L14.54 12.6L20 7.62105L12.81 6.96842L10 0L7.19 6.96842L0 7.62105L5.45 12.6L3.82 20L10 16.0737Z" fill="#F2F2F2" />
          </svg>
        </button> {/* absolute */}
        {/* Как мне в реакте сделать изменение цвета на клике?
        И как по bool Favourite задать цвет (черный) кнопке
      */} 
        <img src={imgUrl} alt={itemType + " " + itemName} />
        <span className={discount ? "top--discount" : "invisible"}>
          -{discountAmount}%
        </span>
      </div>
      <a className="iitem-card--bot">
        <span  className="item--name">{itemName}</span>
        <span className={itemSex ? "item--sex" :"invisible"}>{itemSex}</span>
        <span className="item--type">{itemType}</span>
        <div className="item--prices">
          <span className={discount ? "prices--discounted" : "item--price"}>
            {/* Как , если discount = true, сделть стиль текста line-through?? */}
            {itemPrice}
          </span>
          <span className="item--currencyType">₽</span>
          <span className={discount ? "item--dicountedPrice" : "invisible"}>
            {itemPrice * Math.ceil((1- discountAmount/100))}
            <span className="item--currencyType">₽</span>
          </span>
          
        </div>
      </a>
    </div>
  );
};

export default ItemCard;
