import bonusItems from "../data/bonusItems";

export default function Cart({cart, setCart}){
    let total = 0;
    function removeItem(target){
        const currentCart = [...cart];
        currentCart.splice(target,1);
        setCart(currentCart);
    }
    return (
        <div className="cart">
            <h3>Cart</h3>
            <h4>Discount: {cart.length <= 2 ? 0 : 10}%</h4>
            <h4>Total: ${total = cart.reduce((total, item)=>total+item.amount,0) * (1 - (cart.length <= 2 ? 0 : 0.1))}</h4>
            <ol>
                {cart.map((item, index)=>{
                    return(
                        <li key={index}><button onClick={()=>removeItem(index)}>❌</button>{item.name}</li>
                    )
                })}
            </ol>
            <ul>
                {total >= 100 ? (<li>{bonusItems[0]}</li>): null}
                {total >= 300 ? (<li>{bonusItems[1]}</li>): null}
                {total >= 500 ? (<li>{bonusItems[2]}</li>): null}
                {total >= 1000 ? (<li>{bonusItems[3]}</li>): null}
            </ul>
        </div>
    );
}