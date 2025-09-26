type CardProps = {
    cardName: string;
};

const Card = ({cardName}: CardProps) => {
    return (
        <div onClick={() => alert(`You clicked on ${cardName}`)} className="border p-4 rounded shadow hover:shadow-lg cursor-pointer h-40">
            <h1>
                {cardName}
            </h1>
        </div>
    )
};

export default Card;