import React from 'react'
import Header from '../ReuseableComponents/Header'
import OffersCard from './OffersCard'

const Offers = () => {
    const cardData = [
        {
          imageSrc: "/assets/img/offers/1.png",
          title: "Up to 35% savings on Clubrooms and Suitese",
          listItems: ["Luxaries condition", "3 Adults & 2 Children size", "Sea view side"],
          buttonText: "Book Now",
        },
        {
          imageSrc: "/assets/img/offers/2.png",
          title: "Up to 35% savings on Clubrooms and Suitese",
          listItems: ["Luxaries condition", "3 Adults & 2 Children size", "Sea view side"],
          buttonText: "Book Now",
        },
        {
          imageSrc: "/assets/img/offers/3.png",
          title: "Up to 35% savings on Clubrooms and Suitese",
          listItems: ["Luxaries condition", "3 Adults & 2 Children size", "Sea view side"],
          buttonText: "Book Now",
        },
      ];

  return (
    <div className='p-5 md:p-10 py-10 md:py-24'>
        <Header
        subtitle="Our Offers"
        title="Ongoing Offers"
        />
        <div className='flex flex-wrap gap-8 justify-center'>
            {cardData.map((card, index) => (
                <OffersCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                listItems={card.listItems}
                buttonText={card.buttonText}
                onButtonClick={card.onButtonClick}
                />
            ))}
        </div>
   </div>
  )
}

export default Offers