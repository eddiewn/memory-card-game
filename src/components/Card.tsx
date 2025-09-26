
type CardProps = {
    cardName: string;
    img: string;
    flipped: boolean;
    onClick?: () => void;
};


const Card = ({cardName, img, flipped, onClick}: CardProps) => {

    return (
        <div 
        onClick={() => (
            onClick && onClick()
        )} 
        
        className="m-auto border lg:h-35 rounded shadow hover:shadow-lg cursor-pointer w-[100%] relative aspect-[9/16]">

            {img && <img className="w-full h-full absolute border-4 border-black" src={!flipped ? "/card-background.png" : img} alt={cardName} />}
        </div>
    )
};

export default Card;