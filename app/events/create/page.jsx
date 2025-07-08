"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateEventPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save event data to localStorage for demo
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const newEvent = {
      ...formData,
      id: Date.now(),
      image: "/event.jpeg", // you can customize this
    };
    localStorage.setItem("events", JSON.stringify([...storedEvents, newEvent]));
    router.push("/events"); // redirect to main page
  };

  return (
    <div className="bg-[#0B1C2D] min-h-screen text-white p-10">
      <div className="max-w-xl mx-auto bg-[#1a2942] p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-6">Create New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0B1C2D] border border-gray-600 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0B1C2D] border border-gray-600 rounded"
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0B1C2D] border border-gray-600 rounded"
          />
          <input
            type="time"
            name="time"
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0B1C2D] border border-gray-600 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0B1C2D] border border-gray-600 rounded"
          />
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;
