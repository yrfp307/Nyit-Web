import React from 'react';
import SelfPhoto from './assets/mikimosImage.jpg'

export const initialState = {
    abouts : [
        {
            id: 1,
            image: SelfPhoto,
            title: 'My Self',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
            id: 2,
            image: SelfPhoto,
            title: 'My Family',
            text: 'This card has supporting text below as a natural lead-in to additional content',
        },
        {
            id: 3,
            image: SelfPhoto,
            title: 'My Friends',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.', 
        },
    ]
}

const reducer = (action, state) => {
    return state;
}

export default reducer;