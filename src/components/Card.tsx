
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
        
        className="border rounded shadow hover:shadow-lg cursor-pointer h-40 relative aspect-auto">

            {img && <img className="w-full h-full absolute " src={!flipped ? "/card-background.png" : img} alt={cardName} />}
        </div>
    )
};

export default Card;