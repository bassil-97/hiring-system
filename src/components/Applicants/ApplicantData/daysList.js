import React from 'react';

export default function daysList() {

    const days = Array.from(new Array(31),( val, index) => index + 1);

    return (
        <select id="inputState" class="form-control">
            <option selected>اليوم</option>
            {
                days.map((day, index) => {
                    return <option key={`day${index}`} value={day}>{day}</option>
                })
            }
        </select>
    )
}
