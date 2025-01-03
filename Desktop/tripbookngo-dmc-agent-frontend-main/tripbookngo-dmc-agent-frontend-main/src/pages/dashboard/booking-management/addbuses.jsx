import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Search,
  BellDot,
  CircleHelp,
  Settings,
  ChevronDown,
  Filter,
  Calendar as CalendarIcon,
  Plus,
} from "lucide-react";

const Addbuses = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookId: "",
    customerName: "",
    busNo: "",
    company: "",
    fromRoute: "",
    toRoute: "",
    departure: "",
    arrival: "",
    date: "",
    totalPassengers: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="flex flex-col gap-6 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Add Bus Details</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
            <Search className="font-thin" size={15} />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search anything"
              className="outline-none bg-transparent"
            />
          </div>
          <Button size="icon" className="bg-white text-neutral-700">
            <BellDot size={20} />
          </Button>
          <Button size="icon" className="bg-white text-neutral-700">
            <CircleHelp size={20} />
          </Button>
          <Button size="icon" className="bg-white text-neutral-700">
            <Settings size={20} />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-400/50 rounded-xl" />
            <div>
              <p className="text-sm">Martin Septimus</p>
              <p className="text-xs text-neutral-400">Admin</p>
            </div>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
          <Search className="font-thin" size={15} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search anything"
            className="outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-neutral-400">
            <Filter />
            <span className="text-sm">Status</span>
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 text-neutral-400">
            <CalendarIcon />
            <span className="text-sm">1-8 July 2024</span>
            <ChevronDown size={14} />
          </button>
          <Button
            className="flex items-center gap-3"
            onClick={() => navigate("/dashboard/booking-management/buses")}
          >
            Back To Bus Services
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="card p-4 w-full max-w-md bg-white rounded-xl border-2  rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-semibold mb-4">
            Bus Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "BookId", placeholder: "Book ID" },
                { name: "customerName", placeholder: "Customer Name" },
                { name: "busNo", placeholder: "Bus Number" },
                { name: "company", placeholder: "Company" },
              ].map(({ name, placeholder }) => (
                <input
                  key={name}
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="form-control w-full p-2 rounded-md border border-neutral-300"
                  placeholder={placeholder}
                  required
                />
              ))}
              <div className="flex w-full">
  {/* From Route Input */}
  <div className="flex-1">
    <input
      type="text"
      name="fromRoute"
      value={formData.fromRoute}
      onChange={handleChange}
      className="form-control w-full p-2 rounded-md border border-neutral-300"
      placeholder="From"
      required
    />
  </div>

  {/* Dash Between Routes */}
  <div className="flex-1 flex items-center justify-center">
    <span className="text-xl">-</span>
  </div>

  {/* To Route Input */}
  <div className="flex-1">
    <input
      type="text"
      name="toRoute"
      value={formData.toRoute}
      onChange={handleChange}
      className="form-control w-full p-2 rounded-md border border-neutral-300"
      placeholder="To"
      required
    />
  </div>
</div>

              <div className="flex gap-2">
                <input
                  type="text"
                  name="departureTime"
                  value={formData.departureTime}
                  onChange={handleChange}
                  className="form-control w-full p-2 rounded-md border border-neutral-300"
                  placeholder="Departure Time (e.g., 10:30)"
                  required
                />
                <select
                  name="departureMeridian"
                  value={formData.departureMeridian}
                  onChange={handleChange}
                  className="form-control w-1/3 p-2 rounded-md border border-neutral-300"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  name="arrivalTime"
                  value={formData.arrivalTime}
                  onChange={handleChange}
                  className="form-control w-full p-2 rounded-md border border-neutral-300"
                  placeholder="Arrival Time (e.g., 02:45)"
                  required
                />
                <select
                  name="arrivalMeridian"
                  value={formData.arrivalMeridian}
                  onChange={handleChange}
                  className="form-control w-1/3 p-2 rounded-md border border-neutral-300"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
              <label htmlFor="date" className="text-gray-600">
                 Bus Date:
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                className="form-control w-full p-2 rounded-md border border-neutral-300"
                required
              />
              <input
                type="number"
                name="totalPassengers"
                value={formData.totalPassengers}
                onChange={handleChange}
                className="form-control w-full p-2 rounded-md border border-neutral-300"
                placeholder="Total Passengers"
                required
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-control w-full p-2 rounded-md border border-neutral-300"
                required
              >
                <option value="">Select Status</option>
                <option value="Scheduled">Confirmed</option>
                <option value="Delayed">Pending</option>
                <option value="Cancelled">Rejected</option>
              </select>

              <Button
                type="submit"
                className="flex items-center justify-center gap-3 w-full mt-4"
              >
                Add Bus Details
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Addbuses;
