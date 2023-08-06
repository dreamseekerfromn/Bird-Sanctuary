import BirdCard from "./birdcard";

export default function BirdList({bird, setCart}){
    return (
        <ul>
            {bird.map((card)=>{
                return (
                    <BirdCard bird={card} setCart={ setCart }/>
                )
            })}
        </ul>
    );
}