/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import classNames from 'classnames';

const Fields = ({ date, setD, month, setM, year, setY, setB }) => {


    const [dateError, setDateError] = useState("");
    const [monthError, setMonthError] = useState("");
    const [yearError, setYearError] = useState("");

    const validate = () => {
        const currentYear = new Date().getFullYear();
        if (!date) {
            setDateError("This field is required");

        } else if (date < 1 || date > 31) {
            setDateError("Must be a valid day");

        } else {
            setDateError(""); // Clear error message
        }


        if (!month) {
            setMonthError("This field is required")

        }
        else if (month < 1 || month > 12) {
            setMonthError("Must be a valid month");

        }
        else {
            setMonthError(""); // Clear error message
        }

        if (!year) {
            setYearError("This field is required")
        }
        else if (year > currentYear) {
            setYearError("Must be in the past");

        } else {
            setYearError(""); // Clear error message
        }

        if (dateError || yearError || monthError){
            return false
        }
        else{
            return true
        }
    };

    const handleSubmit = () => {
        if (validate()){
            const now = new Date()
            var y = now.getFullYear()
            var m = now.getUTCMonth() + 1
            var d = now.getDate()
            var mo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            if(date > d){
                d = d + mo[m-1];
                m = m-1
            }
            
            if(month > m){
                m = m + 12
                y = y - 1
            }

            setB([y-year,m-month,d-date])
        }
    }


    return (
        <div>
            <div className='flex gap-6'>
                <div>
                    <p className={classNames('text-off_white tracking-widest text-sm', {'text-light_red': dateError })}>DAY</p>
                    <input type="number" className={classNames('w-24 px-2 md:w-32 md:p-5 font-bold text-lg  md:text-2xl border-light_grey border rounded-md h-14 focus:outline-none focus:border-purple hover:border-purple', {"border-light_red": dateError})} onChange={() => setD(event.target.value)} placeholder='DD' />
                    {dateError && (
                        <p className={classNames('text-xs italic text-light_red',)}>{dateError}</p>
                    )}

                </div>

                <div>
                    <p className={classNames('text-off_white tracking-widest text-sm', {'text-light_red': monthError })}>MONTH</p>
                    <input type="number" className={classNames('w-24 px-2 md:w-32 md:p-5 font-bold text-lg  md:text-2xl border-light_grey border rounded-md h-14 focus:outline-none focus:border-purple hover:border-purple', {"border-light_red": monthError})} onChange={() => setM(event.target.value)} placeholder='MM' />
                    {monthError && (
                        <p className={classNames('text-xs italic text-light_red',)}>{monthError}</p>
                    )}
                </div>

                <div>
                    <p className={classNames('text-off_white tracking-widest text-sm', {'text-light_red': yearError })}>YEAR</p>
                    <input type="number" className={classNames('w-24 px-2 md:w-32 md:p-5 font-bold text-lg  md:text-2xl border-light_grey border rounded-md h-14 focus:outline-none focus:border-purple hover:border-purple', {"border-light_red": yearError})} onChange={() => setY(event.target.value)} placeholder='YYYY' />
                    {yearError && (
                        <p className={classNames('text-xs italic text-light_red',)}>{yearError}</p>
                    )}
                </div>

            </div>

            <div className='flex items-center mt-4'>
                <hr className='w-[40%] lg:w-[80%] text-light_grey' />
                <div className='bg-purple hover:bg-off_black rounded-full p-2 lg:p-4 cursor-pointer' onClick={handleSubmit}>
                    <img src="/src/assets/icon-arrow.svg" alt="" className='w-8 lg:w-12' />
                </div>
                <hr className='w-[40%] lg:hidden text-light_grey' />
            </div>
        </div>
    )
}

export default Fields