import { useState } from "react";

type CardProps = {
    cardName: string;
    img: string;
};


const Card = ({cardName, img}: CardProps) => {

const [clicked, setClicked] = useState<boolean>(false);


    return (
        <div 
        onClick={() => (
            setClicked(!clicked)
        )} 
        
        className="border rounded shadow hover:shadow-lg cursor-pointer h-40 relative aspect-auto">

            {img && <img className="w-full h-full absolute " src={!clicked ? "/card-background.png" : img} alt={cardName} />}
        </div>
    )
};

export default Card;