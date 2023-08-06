export default function Checkout({cart, setCart}){
    function resetHandler(){
        document.getElementById("submitForm").reset();
        setCart([]);
    }
    function submitHandler(e){
        e.preventDefault();
        cart.length > 1 ? alert("You have adopted birds. Thank you!") : alert("You have adopted a bird. Thank you!");
        resetHandler();
    }
    return (
        <div className="checkout">
            <form onSubmit={(e)=>submitHandler(e)} id="submitForm">
                <h3>Checkout</h3>
                <label htmlFor="name">First Name</label>
                <input
                    type="text"
                    id="name"
                />

                <label htmlFor="name">Last Name</label>
                <input
                    type="text"
                    id="name"
                />

                <label htmlFor="name">Email</label>
                <input
                    type="text"
                    id="email"
                />

                <label htmlFor="name">Zip Code</label>
                <input
                    type="text"
                    id="zipcode"
                />
                <br />
                <input type="submit" onSubmit={(e)=>submitHandler(e)} />
            </form>
        </div>
    )
}