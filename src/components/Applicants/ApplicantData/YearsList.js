import React from 'react';

export default function YearsList() {

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20),( val, index) => index + year);

    return (
        <select id="inputState" class="form-control">
            <option selected>السنة</option>
            {
                years.map((year, index) => {
                    return <option key={`year${index}`} value={year}>{year}</option>
                })
            }
        </select>
    )
}
