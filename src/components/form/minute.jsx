import React from 'react';

const Minute = ({ischeckTime}) => {
    
    return (
        <>
                <select name="time[minute]" id="minute" required disabled={ischeckTime ? true : false}>
                    <option value="">-</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                </select>
            <label htmlFor="minute">분</label> 
        </>
    )
}

export default Minute;