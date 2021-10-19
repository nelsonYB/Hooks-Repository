import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true); //Si está momentado el componente
    const [state, setState] = useState({ data: null, loading: true, error: null });

    // Se carga la primera vez y retorna que el componente no esta montado(false)
    useEffect( () => {

        return () => {
            isMounted.current = false;
        }

    }, [])

    // cambia según la url
    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        //Realiza el fetch
        fetch( url )
            //recibe el json de la respuesta
            .then( resp => resp.json() )
            .then( data => { //Define el comportamiento que tendrá la data
                    //Si el componente está montado muestra la data
                    if ( isMounted.current ) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })  
                    }

            });

    }, [url]);

    return state;

}
