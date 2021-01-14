import React, {useState} from "react"
import s from "./DragAndDrop2.module.css"

type CardType = {
    id: number
    order: number
    text: string
}

export const DragAndDrop2 = () => {

    const [cardList, setCardList] = useState<CardType[]>([
        {id: 1, order: 1, text: 'Card 1'},
        {id: 3, order: 3, text: 'Card 3'},
        {id: 2, order: 2, text: 'Card 2'},
        {id: 4, order: 4, text: 'Card 4'}
    ])

    const [currentCard, serCurrentCard] = useState<CardType | null>(null)

    function dragStart(e: React.DragEvent<HTMLDivElement>, card: CardType) {
        // TypeError: Cannot read property 'style' of null
        // setTimeout( () => e.currentTarget.style.background = 'red', 0)
        console.log('card: ', card)
        serCurrentCard(card)
    }

    function dragEnd(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.className = `${s.card} ${s.leave}`

    }

    function dragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.className = `${s.card} ${s.hovered}`
    }

    function drop(e: React.DragEvent<HTMLDivElement>, card: CardType) {
        e.preventDefault()
        setCardList(cardList.sort(sortCard).map(c => {
            if (c.id === card.id) {
                if (currentCard)
                    return {...c, order: currentCard.order}
            }
            // @ts-ignore
            if (c.id === currentCard.id) {
                return {...c, order: card.order}
            }
            return c
        }))
        e.currentTarget.className = `${s.card} ${s.leave}`
    }

    const sortCard = (a: CardType, b: CardType) => (a.order > b.order) ? 1 : -1

    return (
        <div className={s.cardBlock}>
            {cardList.sort(sortCard).map(card =>
                <div
                    className={s.card}
                    key={card.id}
                    draggable={true}
                    onDragStart={(e) => dragStart(e, card)}
                    onDragLeave={(e) => dragEnd(e)}
                    onDragEnd={(e) => dragEnd(e)}
                    onDragOver={(e) => dragOver(e)}
                    onDrop={(e) => drop(e, card)}
                >
                    {card.text}
                </div>)}
        </div>
    )
}