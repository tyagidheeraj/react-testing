import React, { useEffect, useState } from 'react';
import './Demo.css';

const App = () => {
    const [records, setRecords] = useState([]);
    const handleClick = () => {
        var myVal = document.getElementById('myVal');
        if (myVal.value === '') {
            alert('Plz Enter Any Number')
        }
        else {
            fetch(`https://randomuser.me/api/?results=${myVal.value}`)
                .then(response => response.json())
                .then(data => {
                    setRecords(data.results);
                    console.log(data.info.seed)
                });
        }

    }
    // useEffect(() => {
    //     handleClick();
    //     console.log(records);
    // }, [])
    return (
        <>
            <div className='inputBlock'>
                <input type='number' id='myVal' placeholder='Enter Fetch Data Value' />
                <input className='btn-cstm' type="button" value="Fetch data" onClick={handleClick} />
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    {
                        records.map((row, i) => {
                            return (
                                <>
                                    <div className='col-md-4'>
                                        <div className="userData">
                                            <p>Name : {row.name.first} </p>
                                            <p>Gender : {row.gender} </p>
                                            <p>Age : {row.dob.age} </p>
                                            <p>Email : {row.email}</p>
                                            <img src={row.picture.large} alt={row.name.first} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default App;
