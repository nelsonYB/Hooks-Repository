import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { author, quote } = !!data && data[0]; //If the data exists then extract the data at position 0

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div> 
                    )
                :
                    (
                        <figure>
                            <blockquote className="blockquote text-right">
                                    <p className="mb-0"> { quote } </p>
                            </blockquote>
                            <figcaption className="blockquote-footer"> { author } </figcaption>
                        </figure>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={ increment }
            
            >
                Next Quote
            </button>

        </div>
    )
}
