type CardProps = {
    cardName: string;
};

const Card = ({cardName}: CardProps) => {
    return (
        <div>
            <h1>
                {cardName}
            </h1>
        </div>
    )
};

export default Card;