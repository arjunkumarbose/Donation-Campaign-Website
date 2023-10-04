/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowCard = ({ card }) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg, id } = card

    console.log(card_bg)

    const cardStyle = {
        backgroundColor: card_bg, 
    };

    const catStyle = {
        backgroundColor: category_bg, 
    };

    const textStyle = {
        color: text_button_bg, 
    };


    return (
        <>
            <Link to={`showDetails/${id}`}>
                <div style={cardStyle} className="card cursor-pointer hover:shadow-2xl">
                    <figure ><img className="w-full" src={picture} alt={picture} /></figure>

                    <div style={textStyle} className="card-body h-[150px]">
                        <span className="w-24 p-2 text-center rounded-lg" style={catStyle}>{category}</span>
                        <h2 className="card-title capitalize">
                            {title}
                        </h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ShowCard;