import React, { useState } from 'react';

const address = [
    {
        country: "تهران",
        cities: ['نجف آباد', 'شهرکرد', 'پردیس']
    },
    {
        country: "اصفهان",
        cities: ['فریدون', 'کاشان', 'اردستان']
    },
    {
        country: "قزوین",
        cities: ['تاکستان', 'بویین زهرا', 'الموت']
    }
];

function SelectAddress() {
    const [selectedCountry, setSelectedCountry] = useState(address[0].country);
    
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    
    const selectedCountryData = address.find(item => item.country === selectedCountry);
    
    return (
        <div className='h-full flex flex-row justify-start place-items-center gap-10 text-slate-400 max-md:flex-col'>

            <div className='w-2/5 flex flex-col place-items-start gap-2 max-md:w-full'>
                <label htmlFor="">استان</label>
                <select value={selectedCountry} onChange={handleCountryChange} className='w-full border py-1 rounded-lg border-slate-300'>
                    {address.map((item) => (
                        <option key={item.country} value={item.country}>{item.country}</option>
                    ))}
                </select>
            </div>
            
            <div className='w-2/5 flex flex-col place-items-start gap-2 max-md:w-full'>
                <label htmlFor="">شهر</label>
                <select className='w-full border py-1 rounded-lg border-slate-300'>
                    {selectedCountryData && selectedCountryData.cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default SelectAddress;