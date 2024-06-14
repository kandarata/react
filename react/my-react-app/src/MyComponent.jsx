import React, {useState} from 'react';

function MyComponent() {
          
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        phonenumber: '',
        displayname: '',
        address: '',
        address2: '',
    });
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmpoyedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                onChange={handleShippingChange} />
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>


            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comment: {comment}</p>

            
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <input value={name} onChange={handleNameChange} />

            
            <p>Quantity: {quantity}</p>
            <input value={quantity || 0} onChange={handleQuantityChange} type="number" />

            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmpoyedStatus}>Toggle Is Empoyed</button>
        </div>
    );
}

export default MyComponent;