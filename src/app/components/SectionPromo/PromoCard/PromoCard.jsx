import './PromoCard.css';

const PromoCard = ({ imgUrl, promoTitle }) => {
    return (
        <a href="" className="promo--card">
            <img src={imgUrl} alt="" />
            <h3>{promoTitle}</h3>
        </a>
    )
}

export default PromoCard;