import React, { useState } from "react";
import  districts  from "../Data/Districts.jsx";
import  crops  from "../Data/Crop.jsx";

const Input = ({ onAnalyze }) => {
  const [district, setDistrict] = useState("");
  const [crop, setCrop] = useState("");
  const [year, setYear] = useState("");
  const [temp, setTemp] = useState("");
  const [rain, setRain] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAnalyze({ district, crop, year: +year, temp: +temp, rain: +rain });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-emerald-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-black-600">District</label>
          {/* <input
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="e.g. Bardhaman"
            className="mt-1 p-2 w-full border rounded"
          /> */}
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-black-600">Crop</label>
          {/* <input
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            placeholder="e.g. Rice"
            className="mt-1 p-2 w-full border rounded"
          /> */}
          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="">Select Crop</option>
            {crops.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-black-600">Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setYear(value);
              }
            }}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter year(e.g. 2022)"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-xs text-black-600">Avg Temp (°C)</label>
          <input
            type="text"
            value={temp}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setTemp(value);
              }
            }}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter temperature(e.g. 32)"
          />
        </div>

        <div>
          <label className="block text-xs text-black-600">
            Avg Rain (mm/month)
          </label>
          <input
            type="text"
            value={rain}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setRain(value);
              }
            }}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter rainfall amount(e.g. 87)"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Analyze
        </button>
      </div>
    </form>
  );
};

export default Input;
