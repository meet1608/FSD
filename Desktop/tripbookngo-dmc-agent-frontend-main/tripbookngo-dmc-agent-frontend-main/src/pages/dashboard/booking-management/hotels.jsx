import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  BellDot,
  ChevronDown,
  CircleHelp,
  Plus,
  Download,
  Search,
  Eye,
  Settings,
  Edit,
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

// Sample Data
const bookingsData = [
  {
    booking: "BK001",
    customerName: "John Doe",
    hotelName: "Hotel California",
    checkInDate: "2024-09-20",
    checkOutDate: "2024-09-25",
    totalGuests: 2,
    status: "Confirmed",
  },
  {
    booking: "BK002",
    customerName: "Jane Smith",
    hotelName: "Grand Hyatt",
    checkInDate: "2024-10-01",
    checkOutDate: "2024-10-05",
    totalGuests: 4,
    status: "Pending",
  },
];

export default function Hotels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [filteredBookings, setFilteredBookings] = useState(bookingsData);
  const [editingBooking, setEditingBooking] = useState(null);

  const navigate = useNavigate();

  // Handle search specifically by Customer Name
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBookings(term, statusFilter);
  };

  // Handle status filter change
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterBookings(searchTerm, status);
  };

  // Filter bookings by customer name and status
  const filterBookings = (term, status) => {
    let filtered = bookingsData.filter((booking) =>
      booking.customerName.toLowerCase().includes(term.toLowerCase())
    );

    if (status !== "All") {
      filtered = filtered.filter((booking) => booking.status === status);
    }

    setFilteredBookings(filtered);
  };

  // Open Edit Modal
  const handleEditBooking = (booking) => {
    setEditingBooking({ ...booking });
  };

  // Handle Edit Input Change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingBooking((prev) => ({ ...prev, [name]: value }));
  };

  // Save Booking
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
      {/* Header with Profile */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Hotel Bookings</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
            <Search size={15} />
            <input
              type="search"
              placeholder="Search by customer name"
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

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
          <Search size={15} />
          <input
            type="search"
            placeholder="Search by customer name"
            value={searchTerm}
            onChange={handleSearch}
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
          <button className="flex items-center gap-1 text-neutral-400">
            <CalendarIcon />
            <span className="text-sm">1-8 July 2024</span>
            <ChevronDown size={14} />
          </button>
          <Button className="flex items-center gap-3" onClick={() => navigate("/dashboard/booking-management/addhotels")}>
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
              <TableHead>Hotel Name</TableHead>
              <TableHead>Check-in Date</TableHead>
              <TableHead>Check-out Date</TableHead>
              <TableHead>Total Guests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.booking} className="text-sm">
                <TableCell>{booking.booking}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.hotelName}</TableCell>
                <TableCell>{booking.checkInDate}</TableCell>
                <TableCell>{booking.checkOutDate}</TableCell>
                <TableCell>{booking.totalGuests}</TableCell>
                <TableCell>
                  <span
                    className={`p-1 rounded-md text-xs ${
                      booking.status === "Confirmed"
                        ? "bg-green-200 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button >
                    <Eye size={15}  /> View
                  </Button>
                  <Button>
                    <Download size={15} /> Download
                  </Button>
                  <Button onClick={() => handleEditBooking(booking)}>
                    <Edit size={15} /> Edit
                  </Button>
                </TableCell>
                {/* <TableCell>
                  <Button onClick={() => handleEditBooking(booking)}>
                    <Edit size={15} /> Edit
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Modal */}
      {editingBooking && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-1/3">
            <h2 className="text-lg font-semibold mb-4">Edit Booking</h2>
            <div className="mb-4">
              <label className="block text-sm mb-1">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={editingBooking.customerName}
                onChange={handleEditChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Hotel Name</label>
              <input
                type="text"
                name="hotelName"
                value={editingBooking.hotelName}
                onChange={handleEditChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex gap-4">
              <Button onClick={handleSaveBooking}>Save</Button>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}