/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ShowDonationDetails = ({ card }) => {
    const { id, picture, price, title, category, category_bg, card_bg, text_button_bg } = card

    const cardStyle = {
        backgroundColor: card_bg, 
    };

    const catStyle = {
        backgroundColor: category_bg, 
    };

    const textStyle = {
        color: text_button_bg, 
    };

    const btnStyle = {
        backgroundColor: text_button_bg, 
    }

    return (
        <div className="flex flex-col md:flex-row items-center font-bold text-black">
            <img className="h-56 md:w-auto w-96" src={picture} alt="" />
            <div className="h-56 p-7 space-y-2 rounded-r-lg w-96 md:w-full rounded-b-lg " style={cardStyle}>
                <span className="p-2 " style={{ ...catStyle, ...textStyle }}>{category}</span>
                <h1 className="text-xl">{title}</h1>
                <p style={textStyle} className="pb-5">{price}</p>
                <Link to={`/showDetails/${id}`}>
                    <button className="btn btn-primary border-none " style={btnStyle} >View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ShowDonationDetails;