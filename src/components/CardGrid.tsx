import Card from "./card.tsx";

type CardType = {
    id: number;
    name: string;
};

const cardData: CardType[] = [
    {id: 1, name: "Tiger"},
    {id: 2, name: "Monkey"},
    {id: 3, name: "Elephant"},
    {id: 4, name: "Lion"},
    {id: 5, name: "Giraffe"},
    {id: 6, name: "Zebra"},
    {id: 7, name: "Bear"},
    {id: 8, name: "Wolf"},
    {id: 9, name: "Fox"},
    {id: 10, name: "Panda"},
    {id: 11, name: "Kangaroo"},
    {id: 12, name: "Raccoon"},
    {id: 13, name: "Hedgehog"},
    {id: 14, name: "Otter"},
    {id: 15, name: "Deer"},
    {id: 16, name: "Squirrel"},
];

function CardGrid() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {cardData.map((card) => (
                <Card key={card.id} cardName={card.name} />
            ))}
        </div>
    );
}

export default CardGrid;
