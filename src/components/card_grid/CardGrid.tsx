import Card from "../Card.tsx";

type CardType = {
    id: number;
    name: string;
    img: string;
};

const cardData: CardType[] = [
    {id: 1, name: "Tiger", img: "../../public/tiger.png",},
    {id: 2, name: "Monkey", img: "monkey.png",},
    {id: 3, name: "Elephant", img: "elephant.png"},
    {id: 4, name: "Lion", img: "lion.png"},
    {id: 5, name: "Giraffe", img: "giraffe.png"},
    {id: 6, name: "Zebra", img: "zebra.png"},
    {id: 7, name: "Bear", img: "bear.png"},
    {id: 8, name: "Wolf", img: "wolf.png"},
    {id: 9, name: "Fox", img: "fox.png"},
    {id: 10, name: "Panda" ,img: "panda.png"},
    {id: 11, name: "Kangaroo", img: "kangaroo.png"},
    {id: 12, name: "Raccoon" , img: "raccoon.png"},
    {id: 13, name: "Hedgehog", img: "hedgehog.png"},
    {id: 14, name: "Otter", img: "otter.png"},
    {id: 15, name: "Deer", img: "deer.png"},
    {id: 16, name: "Squirrel", img: "squirrel.png"},
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
