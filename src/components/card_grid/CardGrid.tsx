import Card from "../Card.tsx";

type CardType = {
    id: number;
    name: string;
    img: string;
};

const cardData: CardType[] = [
    { id: 1, name: "Tiger", img: "/tiger.png" },
    { id: 2, name: "Tiger", img: "/tiger.png" },
    { id: 3, name: "Elephant", img: "/elephant.png" },
    { id: 4, name: "Elephant", img: "/elephant.png" },
    { id: 5, name: "Lion", img: "/lion.png" },
    { id: 6, name: "Lion", img: "/lion.png" },
    { id: 7, name: "Zebra", img: "/zebra.png" },
    { id: 8, name: "Zebra", img: "/zebra.png" },
    { id: 9, name: "Panda", img: "/panda.png" },
    { id: 10, name: "Panda", img: "/panda.png" },
    { id: 11, name: "Bear", img: "/bear.png" },
    { id: 12, name: "Bear", img: "/bear.png" },
    { id: 13, name: "Monkey", img: "/monkey.png" },
    { id: 14, name: "Monkey", img: "/monkey.png" },
    { id: 15, name: "Wolf", img: "/wolf.png" },
    { id: 16, name: "Wolf", img: "/wolf.png" },
];

function CardGrid() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {cardData.map((card) => (
                <Card key={card.id} cardName={card.name} img={card.img}/>
            ))}
        </div>
    );
}

export default CardGrid;
