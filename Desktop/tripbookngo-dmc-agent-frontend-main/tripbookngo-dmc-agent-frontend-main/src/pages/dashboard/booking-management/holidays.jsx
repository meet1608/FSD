import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  BellDot,
  ChevronDown,
  CircleHelp,
  Plus,
  Eye,
  Download,
  Edit,
  Search,
  Settings,
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

const holidayBookings = [
  {
    booking: "HB001",
    customerName: "Alice Johnson",
    destination: "Hawaii",
    startDate: "2024-12-20",
    endDate: "2024-12-27",
    totalPersons: 4,
    status: "Confirmed",
  },
  {
    booking: "HB002",
    customerName: "Michael Clark",
    destination: "Bali",
    startDate: "2024-11-10",
    endDate: "2024-11-17",
    totalPersons: 2,
    status: "Pending",
  },
  {
    booking: "HB003",
    customerName: "Linda Smith",
    destination: "Paris",
    startDate: "2024-10-05",
    endDate: "2024-10-12",
    totalPersons: 1,
    status: "Cancelled",
  },
  {
    booking: "HB004",
    customerName: "James Williams",
    destination: "Tokyo",
    startDate: "2024-09-15",
    endDate: "2024-09-22",
    totalPersons: 3,
    status: "Confirmed",
  },
  {
    booking: "HB005",
    customerName: "Emily Davis",
    destination: "New York",
    startDate: "2024-08-01",
    endDate: "2024-08-05",
    totalPersons: 2,
    status: "Confirmed",
  },
];

export default function Holidays() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [filteredBookings, setFilteredBookings] = useState(holidayBookings);

  // Handle search specifically by Customer Name and Destination
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBookings(term, statusFilter);
  };

  const navigate = useNavigate();

  // Filter bookings based on search term and status filter
  const filterBookings = (term, status) => {
    const filtered = holidayBookings.filter(
      (booking) =>
        (booking.customerName.toLowerCase().includes(term.toLowerCase()) ||
          booking.destination.toLowerCase().includes(term.toLowerCase())) &&
        (status === "All" || booking.status === status)
    );
    setFilteredBookings(filtered);
  };

  // Handle status filter change
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterBookings(searchTerm, status);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Holidays</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
            <Search className="font-thin" size={15} />
            <input
              type="search"
              placeholder="Search anything"
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

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 bg-white rounded-xl p-2 text-neutral-400 text-sm">
          <Search className="font-thin" size={15} />
          <input
            type="search"
            placeholder="Search anything"
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
          <Button className="flex items-center gap-3" onClick={() => navigate("/dashboard/booking-management/addholiday")}>
            <Plus size={15} />
            Add booking
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Total Persons</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.booking} className="text-sm">
                <TableCell className="font-normal">{booking.booking}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>{booking.startDate}</TableCell>
                <TableCell>{booking.endDate}</TableCell>
                <TableCell>{booking.totalPersons}</TableCell>
                <TableCell>
                  <p
                    className={`w-fit p-1 text-xs rounded-md ${
                      booking.status === "Confirmed"
                        ? "bg-green-200 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </p>
                </TableCell>
                <TableCell >
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}