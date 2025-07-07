"use client";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Header from "../../components/screens/Header";

const EventPage = () => {
  const [location, setLocation] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [price, setPrice] = useState(500);
  const [search, setSearch] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const calendarRef = useRef(null);
  const today = new Date();

  // First day of the current month
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  // Last day of the current month
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const [dateRange, setDateRange] = useState([
    {
      startDate: startOfMonth,
      endDate: endOfMonth,
      key: "selection",
    },
  ]);

  const allEvents = [
    {
      id: 1,
      title: "Rock Night Festival",
      location: "Mumbai",
      date: "21-07-2025",
      price: 700,
    },
    {
      id: 2,
      title: "Stand-up Comedy Night",
      location: "Delhi",
      date: "22-07-2025",
      price: 350,
    },
    {
      id: 3,
      title: "Art & Wine Evening",
      location: "Bangalore",
      date: "25-07-2025",
      price: 500,
    },
    {
      id: 4,
      title: "Live Jazz Concert",
      location: "Kolkata",
      date: "08-08-2025",
      price: 450,
    },
    {
      id: 5,
      title: "Tech Innovators Meetup",
      location: "Hyderabad",
      date: "30-07-2025",
      price: 600,
    },
    {
      id: 6,
      title: "Indie Music Fest",
      location: "Chennai",
      date: "28-07-2025",
      price: 800,
    },
    {
      id: 7,
      title: "Food Carnival",
      location: "Ahmedabad",
      date: "19-07-2025",
      price: 300,
    },
    {
      id: 8,
      title: "Yoga in the Park",
      location: "Pune",
      date: "21-07-2025",
      price: 200,
    },
    {
      id: 9,
      title: "Startup Pitch Day",
      location: "Gurgaon",
      date: "26-07-2025",
      price: 650,
    },
    {
      id: 10,
      title: "Book Reading by Author",
      location: "Jaipur",
      date: "24-07-2025",
      price: 250,
    },
  ];

  const handleFilter = () => {
    const start = dateRange[0].startDate;
    const end = dateRange[0].endDate;

    const filtered = allEvents.filter((event) => {
      const matchesLocation = location
        ? event.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesPrice = event.price <= price;

      const [day, month, year] = event.date.split("-").map(Number);
      const eventDate = new Date(year, month - 1, day);

      const matchesDate = eventDate >= start && eventDate <= end;

      return matchesLocation && matchesPrice && matchesDate;
    });

    setFilteredEvents(filtered);
    setFiltersApplied(true); // 👈 update here
  };

  const handleClearFilters = () => {
    setLocation("");
    setPrice(500);
    setDateRange([
      {
        startDate: new Date("01-07-2025"),
        endDate: new Date("08-31-2025"),
        key: "selection",
      },
    ]);
    setFilteredEvents(allEvents);
    setFiltersApplied(false); // 👈 update here
  };

  useEffect(() => {
    setFilteredEvents(allEvents);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#0B1C2D] text-white min-h-screen">
        <div className="wrapper flex">
          <div className="w-full lg:w-[20%] p-4 border border-gray-700 rounded-md h-max mt-4 space-y-6">
            <h2 className="text-xl font-bold mb-2">Filter Events</h2>
            <div className="relative" ref={calendarRef}>
              <label className="block text-sm font-semibold mb-2">Date</label>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex flex-col text-left bg-[#131d30] text-white px-4 py-2 rounded-md border border-gray-600 hover:border-yellow-400 transition w-full"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">📅 Date Range</span>
                  <span className="text-yellow-400">
                    {showCalendar ? "▲" : "▼"}
                  </span>
                </div>
              </button>
              <span className="text-sm block mt-2 mx-auto text-gray-300 w-max">
                {dateRange[0].startDate.toLocaleDateString()} -{" "}
                {dateRange[0].endDate.toLocaleDateString()}
              </span>

              {showCalendar && (
                <div className="absolute mt-2 z-20">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    className="rounded-md"
                  />
                </div>
              )}
            </div>

            {/* Location Input */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Search location..."
                value={location}
                onChange={async (e) => {
                  const val = e.target.value;
                  setLocation(val);
                }}
                className="px-4 py-2 w-full rounded-md bg-[#131d30] text-white border border-gray-600"
              />
              {suggestions.length > 0 && (
                <div className="absolute bg-white text-black w-full rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setLocation(suggestion);
                        setSuggestions([]);
                      }}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer border-b border-gray-200"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Slider */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Max price: ₹{price}
              </label>
              <input
                type="range"
                min={0}
                max={1000}
                step={50}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-yellow-400"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={handleFilter}
              className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition w-full "
            >
              {filtersApplied ? "Filters Applied" : "Apply Filters"}
            </button>

            <button
              onClick={handleClearFilters}
              className="bg-gray-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition mx-auto w-full "
            >
              Remove Filters
            </button>
          </div>

          {/* Right: Event List */}
          <div className="w-full lg:w-[60%] pl-6 space-y-6">
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-5xl font-bold">Events</h2>
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 rounded-md bg-[#131d30] text-white border border-gray-600 w-1/2 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="space-y-4">
              {filteredEvents
                .filter((event) =>
                  event.title.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  const [aDay, aMonth, aYear] = a.date.split("-").map(Number);
                  const [bDay, bMonth, bYear] = b.date.split("-").map(Number);

                  const aDate = new Date(aYear, aMonth - 1, aDay);
                  const bDate = new Date(bYear, bMonth - 1, bDay);

                  return aDate - bDate; // use bDate - aDate for descending
                })
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-[#1a2942] p-4 rounded-lg hover:bg-[#24344e] transition"
                  >
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-300">
                      {event.date} -- {event.location} -- ₹{event.price}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
