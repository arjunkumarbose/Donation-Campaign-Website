import { useState } from "react";
import ShowDonationDetails from "../Donation/ShowDonationDetails";
import { getStoredItems } from "../localstorage";

const Donation = () => {
    const cards = getStoredItems()
    const [maxCard,setMaxCard] = useState(4)
    return (
        <div className="bg-white">
            <div className="w-5/6 grid lg:grid-cols-2 gap-5 items-center mx-auto my-10">
                {
                    cards.slice(0, maxCard).map((card) => <ShowDonationDetails key={card.id} card={card} />)
                }
            </div>
            {
                cards.length > maxCard ?
                    <div className="text-center">
                        <button className="bg-green-700 text-center p-3 m-5 rounded-lg text-white px-5" onClick={() => setMaxCard(cards.length)}>See all</button>
                    </div>
                    : ''
            }
            <div className="h-10 bg-white"></div>

        </div>

    );
};

export default Donation;