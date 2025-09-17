import { useState } from 'react';
import FancyText from './FancyText';
import quote  from './quotes';
import Color from './Color';

export default function InspirationGenerator({ children }) {
    const [index, SetIndex] = useState(0);
    const quotes = quote[index];
    // const next = () => SetIndex((index + 1) % quote.length);

    function next() {
        SetIndex((index + 1 ) % quote.length);
    }
    return (
        <div>
            <p>Your Inspire Code is</p>
            { quotes.type === 'quote' ? <FancyText text={quotes.value} /> : <Color color={quotes.value}/>}
            <button onClick={next}>Click Me</button>

            {

                children}</div>
    )
}
