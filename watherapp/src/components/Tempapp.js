import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tampapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");
//    const  handleChange =(e)=>{
//     const {value} =e.target;
//     setSearch({...search,value})
//    }


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f62e6161005b70d5e848f1fca5016246`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(response);
            setCity(resJson.main);


        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className='inputData'>
                    <input
                        type="search"
                        value={search}
                        className="inputFeild"
                   
                        onChange={(event)=>{setSearch(event.target.value)} }/>
                </div>

        {     !city ?( <p className="errorMsg">No Data Found </p>) : (

            <div>
            
            <div className="info">

                    <h2 className="location">
                    <i class="fas fa-street-view"> </i>{search}
                    </h2>
                    <h1 className="temp">
                    {city.temp}ºCel 

                    </h1>
                    <h3 className="tempmin_max"> {city.temp_min}ºCel |  {city.temp_max}ºCel </h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                   </div>
                    )}         
            </div>
        </>
    )
}
export default Tampapp;