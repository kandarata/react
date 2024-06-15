import React, {useState} from 'react';

function ListCar(props) {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i != index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);

    }

    function handleModelChange(event) {
        setCarModel(event.target.value);

    }

    return (
        <div>
            <p>List of Car Objects</p>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar()}>{car}</li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} />
            <input type="text" onChange={handleMakeChange} />
            <input type="text" onChange={handleModelChange} />
            <button onClick={handleAddCar} >Add Car</button>
        </div>
    );
}

export default ListCar;