import { useState } from 'react';

const ImputDashboard = () => {
    const { value, setValue } = useState("");
    const { airQuality, setAirQuality } = useState(null)

    const handleChange = (event) => {
        const value = event.target.value;
        setValue(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = ""
        const city = value
        const response = await fetch(
            `https://api.waqui.info/feed/${city}/?token=${token}`
        );
        const data = await response.json()
        console.log(data)
        setAirQuality(data, data)
    };
    return (
        <>
            <div className='searchContainer'>
                <form className='imputSearch'
                    onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" placeholder='Search a city' />
                </form>
                {airQuality && (
                    <div>
                        <h3>Air Quality in {value}</h3>
                        <p> AQI {airQuality.aqi}</p>
                        <p> PM2.5 {airQuality.iaqi.PM25 ? airQuality.iaqi.PM25.v : "N/A"}</p>
                        <p> PM10 {airQuality.iaqi.PM10 ? airQuality.iaqi.PM10.v : "N/A"}</p>
                        <p> O3 {airQuality.iaqi.O3 ? airQuality.iaqi.o3.v : "N/A"}</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default ImputDashboard