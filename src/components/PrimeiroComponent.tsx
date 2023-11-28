'use client'

export function PrimeiroComponent(){

    function handleClick(){
        console.log("Cliquei no botao")
    }

    return(
        <div>
            Meu Primeiro Component!

            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function</h2>
    )
}