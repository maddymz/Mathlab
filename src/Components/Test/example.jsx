import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Card from './Card'
import update from 'immutability-helper'
import ItemTypes from './ItemTypes'
import { renderComponent } from 'recompose'
const style = {
    width: 400,
}


const ITEMS = [
    // {
    //     id: 1,
    //     text: 'Write a cool JS library',
    // },
    // {
    //     id: 2,
    //     text: 'Make it generic enough',
    // },
    // {
    //     id: 3,
    //     text: 'Write README',
    // },
    // {
    //     id: 4,
    //     text: 'Create some examples',
    // },
    // {
    //     id: 5,
    //     text: 'Spam in Twitter and IRC to promote it',
    // },
    // {
    //     id: 6,
    //     text: '???',
    // },
]

var ID = 0;
export function addToItems(value) {
    ID = ID + 1
    ITEMS.push({ id: ID, text: value });
    console.log(ITEMS);
}


export default function Container() {
    const [cards, setCards] = useState(ITEMS)
    console.log(useState(ITEMS));

    const moveCard = (id, atIndex) => {
        console.log('id', id, 'atIndex', atIndex)
        const { card, index } = findCard(id)
        setCards(
            update(cards, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, card],
                ],
            }),
        )
    }
    const findCard = id => {
        const card = cards.filter(c => `${c.id}` === id)[0]
        return {
            card,
            index: cards.indexOf(card),
        }
    }
    const [, drop] = useDrop({ accept: ItemTypes.CARD })
    return (
        <>
            <div style={styleDropArea}>
                <div ref={drop} style={style}>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            id={`${card.id}`}
                            text={card.text}
                            moveCard={moveCard}
                            findCard={findCard}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}


const styleDropArea = {
    backgroundColor: 'blue',
    width: '400px',
    height: '400px',
}
