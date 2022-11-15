import React, { Fragment } from 'react'

const VisaForm = () => {
  return (
    <Fragment>
    <div className=" transition-all duration-500 w-full flex flex-col items-start justify-start">
            <label htmlFor="cardNumber" className="opacity-70">
              Card Number
            </label>
            <input
              maxLength="16"
              type="number"
              id="cardNumber"
              className="w-full text-gray-200 bg-transparent border-b-[1px] border-opacity-10 outline-none"
            />
          </div>

          <div className="w-full text-[16px] flex items-start justify-start gap-5">
            {/* expiration month */}
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="exDate" className="opacity-70">
                Ex Month
              </label>
              <select
                id="exDate"
                className="bg-transparent text-white border-[1px] py-2 px-1 cursor-pointer"
              >
                <option value="Month" disabled>
                  Month
                </option>
                <option className="text-black bg-white" value="01">
                  January
                </option>
                <option className="text-black bg-white" value="02">
                  February
                </option>
                <option className="text-black bg-white" value="03">
                  March
                </option>
                <option className="text-black bg-white" value="04">
                  April
                </option>
                <option className="text-black bg-white" value="05">
                  May
                </option>
                <option className="text-black bg-white" value="06">
                  June
                </option>
                <option className="text-black bg-white" value="07">
                  July
                </option>
                <option className="text-black bg-white" value="08">
                  August
                </option>
                <option className="text-black bg-white" value="09">
                  September
                </option>
                <option className="text-black bg-white" value="10">
                  October
                </option>
                <option className="text-black bg-white" value="11">
                  November
                </option>
                <option className="text-black bg-white" value="12">
                  December
                </option>
              </select>
            </div>

            {/* expiration year */}
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="expireYY" className="opacity-70">
                Ex Year
              </label>
              <select
                id="expireYY"
                className="bg-transparent text-white border-[1px] py-2 px-1 cursor-pointer "
              >
                <option value="Year" disabled>
                  Year
                </option>
                <option className="text-black bg-white" value="20">
                  2020
                </option>
                <option className="text-black bg-white" value="21">
                  2021
                </option>
                <option className="text-black bg-white" value="22">
                  2022
                </option>
                <option className="text-black bg-white" value="23">
                  2023
                </option>
                <option className="text-black bg-white" value="24">
                  2024
                </option>
                <option className="text-black bg-white" value="25">
                  2025
                </option>
                <option className="text-black bg-white" value="26">
                  2026
                </option>
                <option className="text-black bg-white" value="27">
                  2027
                </option>
                <option className="text-black bg-white" value="28">
                  2028
                </option>
              </select>
            </div>

            {/* CVV */}
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="cvv" className="opacity-70">
                CVV
              </label>
              <input
                id="cvv"
                type="number"
                maxLength="4"
                className=" outline-none bg-transparent w-[100px] p-1 border-[1px]"
              />
        </div>
        </div>
        </Fragment>
  )
}

export default VisaForm