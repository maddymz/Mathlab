import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Card from './Card'
import update from 'immutability-helper'
import ItemTypes from './ItemTypes'
import { renderComponent } from 'recompose'
import { setExpression } from '../DragnDrop/box'

const style = {
    width: 400,
}

const ITEMS = []
var cards, setCards;
var ID = 0;
export function addToItems(value) {
    ID = ID + 1
    setCards(cards.concat({ id: ID, text: value }))
}


export default function Container() {
    [cards, setCards] = useState(ITEMS)
    const [temp, updateTemp] = useState([])
    const moveCard = (id, atIndex) => {
        const { card, index } = findCard(id)
        setCards(
            update(cards, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, card],
                ],
            }),
        )
        var temp = ''
        for (var i = 0; i < cards.length; i++) {
            temp = temp + cards[i].text
        }
        setExpression(temp)
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
