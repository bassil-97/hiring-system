import React from 'react';

export default function MonthsList() {

    const months = Array.from(new Array(12),( val, index) => index + 1);

    return (
        <select id="inputState" class="form-control">
            <option selected>الشهر</option>
            {
                months.map((month, index) => {
                    return <option key={`month${index}`} value={month}>{month}</option>
                })
            }
        </select>
    )
}
