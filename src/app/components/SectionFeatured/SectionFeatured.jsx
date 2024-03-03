import './SectionFeatured.css';
import ItemCard from '../ItemCard/ItemCard';
/* import { featuredData } from '@/app/data'; */

const SectionFeatured = (itemsData) => {
    
    const featuedList = itemsData['itemsData' ].map(item =>
        <li key={item.id}>
            <ItemCard
                itemName={item.itemName}
                itemType={item.itemType}
                itemSex={item.itemSex}
                imgUrl={item.imgUrl}
                itemPrice={item.itemPrice}
                discount={item.discount}
                discountAmount={item.discountAmount}
                favourited={item.favourited}
            />
        </li>
    )

    return (
        <section>
            <div className="wrapper main--featued">
                <h2>Новинки</h2>
                    {/* слайдер потом */}
                    <ul className="featued--items">{featuedList}</ul>
                <button className='featured--moreBtn'>
                    Показать больше
                </button>
            </div>

        </section>
    )
}

export default SectionFeatured;