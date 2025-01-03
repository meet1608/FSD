import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  BellDot,
  ChevronDown,
  CircleHelp,
  Plus,
  Search,
  Settings,
  Download,
  Eye,
  Edit,
  Save,
  X,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { CalendarIcon, Filter } from "../../../components/icons";

const bookingsData = [
  {
    booking: "BK001",
    customerName: "John Doe",
    flightNo: "AA123",
    airline: "American Airlines",
    route: "JFK - LAX",
    departure: "10:00 AM",
    arrival: "1:00 PM",
    date: "2024-09-20",
    totalPassengers: 2,
    status: "Confirmed",
  },
  {
    booking: "BK002",
    customerName: "Jane Smith",
    flightNo: "UA456",
    airline: "United Airlines",
    route: "ORD - SFO",
    departure: "11:30 AM",
    arrival: "2:45 PM",
    date: "2024-09-21",
    totalPassengers: 1,
    status: "Pending",
  },
];

export default function Flights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [flightSearch, setFlightSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [filteredBookings, setFilteredBookings] = useState(bookingsData);
  const [editingBooking, setEditingBooking] = useState(null); // Track booking being edited

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBookings(term, flightSearch, statusFilter);
  };

  const handleFlightSearch = (e) => {
    const term = e.target.value;
    setFlightSearch(term);
    filterBookings(searchTerm, term, statusFilter);
  };


  const navigate = useNavigate();

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterBookings(searchTerm, flightSearch, status);
  };

  const filterBookings = (nameTerm, flightTerm, status) => {
    let filtered = bookingsData.filter(
      (booking) =>
        booking.customerName.toLowerCase().includes(nameTerm.toLowerCase()) &&
        booking.flightNo.toLowerCase().includes(flightTerm.toLowerCase())
    );

    if (status !== "All") {
      filtered = filtered.filter((booking) => booking.status === status);
    }

    setFilteredBookings(filtered);
  };

  // Open Edit Modal
  const handleManageBooking = (booking) => {
    setEditingBooking({ ...booking });
  };

  // Handle input changes in Edit Modal
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingBooking((prev) => ({ ...prev, [name]: value }));
  };

  // Save Edited Booking
  const handleSaveBooking = () => {
    setFilteredBookings((prev) =>
      prev.map((booking) =>
        booking.booking === editingBooking.booking ? editingBooking : booking
      )
    );
    setEditingBooking(null);
    alert("Booking updated successfully!");
  };

  // Close Modal
  const handleCloseModal = () => {
    setEditingBooking(null);
  };

  return (
    <section className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Flights</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
            <Search size={15} />
            <input
              type="search"
              placeholder="Search by Customer Name"
              value={searchTerm}
              onChange={handleSearch}
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
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
          <Search size={15} />
          <input
            type="search"
            placeholder="Search by Flight No"
            value={flightSearch}
            onChange={handleFlightSearch}
            className="outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center gap-4">
          {["All", "Confirmed", "Pending", "Cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusFilter(status)}
              className={`flex items-center gap-1 ${
                statusFilter === status ? "font-bold" : "text-neutral-400"
              }`}
            >
              <Filter />
              <span className="text-sm">{status}</span>
            </button>
          ))}
          <Button className="flex items-center gap-3" onClick={() => navigate("/dashboard/booking-management/addflights")}>
            <Plus size={15} />
            Add booking
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Flight No</TableHead>
              <TableHead>Airline</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Arrival</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total Passengers</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.booking}>
                <TableCell>{booking.booking}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.flightNo}</TableCell>
                <TableCell>{booking.airline}</TableCell>
                <TableCell>{booking.route}</TableCell>
                <TableCell>{booking.departure}</TableCell>
                <TableCell>{booking.arrival}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.totalPassengers}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <Button >
                    <Eye size={15}  /> View
                  </Button>
                  <Button>
                    <Download size={15} /> Download
                  </Button>
                  <Button onClick={() => handleManageBooking(booking)}>
                    <Edit size={15} /> Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Modal */}
      {editingBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 space-y-2">
            {Object.keys(editingBooking).map((key) => (
              <input
                key={key}
                name={key}
                value={editingBooking[key]}
                onChange={handleEditChange}
                placeholder={key}
                className="border p-2 w-full"
              />
            ))}
            <div className="flex justify-end gap-2">
              <Button onClick={handleCloseModal} variant="outline">
                <X /> Cancel
              </Button>
              <Button onClick={handleSaveBooking}>
                <Save /> Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}