import Card from "./Card.tsx";
import {useEffect, useState} from "react";

type CardType = {
    id: number;
    name: string;
    img: string;
    flipped: boolean;
};

const cardData: CardType[] = [
    {id: 1, name: "Tiger", img: "/tiger.png", flipped: false},
    {id: 2, name: "Tiger", img: "/tiger.png", flipped: false},
    {id: 3, name: "Elephant", img: "/elephant.png", flipped: false},
    {id: 4, name: "Elephant", img: "/elephant.png", flipped: false},
    {id: 5, name: "Lion", img: "/lion.png", flipped: false},
    {id: 6, name: "Lion", img: "/lion.png", flipped: false},
    {id: 7, name: "Zebra", img: "/zebra.png", flipped: false},
    {id: 8, name: "Zebra", img: "/zebra.png", flipped: false},
    {id: 9, name: "Panda", img: "/panda.png", flipped: false},
    {id: 10, name: "Panda", img: "/panda.png", flipped: false},
    {id: 11, name: "Bear", img: "/bear.png", flipped: false},
    {id: 12, name: "Bear", img: "/bear.png", flipped: false},
    {id: 13, name: "Monkey", img: "/monkey.png", flipped: false},
    {id: 14, name: "Monkey", img: "/monkey.png", flipped: false},
    {id: 15, name: "Wolf", img: "/wolf.png", flipped: false},
    {id: 16, name: "Wolf", img: "/wolf.png", flipped: false},
];

function CardGrid() {
    const [cards, setCards] = useState<CardType[]>(cardData);

    const flipCard = (id: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? {...card, flipped: !card.flipped} : card
            )
        );
    };

    function shuffle(arr: CardType[]): CardType[] {
        const newArr = [...arr];
        let i = newArr.length,
            j,
            temp;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = newArr[j];
            newArr[j] = newArr[i];
            newArr[i] = temp;
        }
        return newArr;
    }

    useEffect(() => {
        setCards(shuffle(cards));
    }, []);

    const selectedCards = cards.filter(card => card.flipped);

    useEffect(() => {
        if (selectedCards.length === 2) {
            if (selectedCards[0].name === selectedCards[1].name) {
                console.log("It's a match!");
        }
        else{
            console.log("Not a match!");
            setTimeout(() => {
                setCards((prevCards) =>
                    prevCards.map((card) =>
                        card.flipped ? {...card, flipped: false} : card
                    )
                );
            }, 1000);
        }
    }
},[selectedCards]);
    return (
        <div className="grid grid-cols-4 gap-4">

            {
            cards.map((card) => (
                <Card
                    key={card.id}
                    cardName={card.name}
                    img={card.img}
                    flipped={card.flipped}
                    onClick={() => flipCard(card.id)}
                />
            ))
            }
        </div>
    );
}

export default CardGrid;
