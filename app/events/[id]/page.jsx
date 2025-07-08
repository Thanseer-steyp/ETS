// app/events/[id]/page.jsx
"use client";
import { useRouter } from "next/router"; // or use params in server component
import { useEffect, useState } from "react";
import Image from "next/image";
import eventImg from "../../../components/assets/event.jpeg";
import Wallet from "../../../components/assets/wallet.svg";
import Location from "../../../components/assets/location.svg";
import Calender from "../../../components/assets/calendar.svg";

const allEvents = [
    {
      id: 1,
      title: "Rock Night Festival",
      location: "Mumbai",
      date: "21 July 2025",
      price: 700,
      time: "5pm",
      image: eventImg,
    },
    {
      id: 2,
      title: "Stand-up Comedy Night",
      location: "Delhi",
      date: "22 July 2025",
      price: 350,
      time: "3pm",
      image: eventImg,
    },
    {
      id: 3,
      title: "Art & Wine Evening",
      location: "Bangalore",
      date: "25 July 2025",
      price: 500,
      time: "9pm",
      image: eventImg,
    },
    {
      id: 4,
      title: "Live Jazz Concert",
      location: "Kolkata",
      date: "08 August 2025",
      price: 450,
      time: "3pm",
      image: eventImg,
    },
    {
      id: 5,
      title: "Tech Innovators Meetup",
      location: "Hyderabad",
      date: "30 July 2025",
      price: 600,
      time: "7pm",
      image: eventImg,
    },
    {
      id: 6,
      title: "Indie Music Fest",
      location: "Chennai",
      date: "28 July 2025",
      price: 800,
      time: "11pm",
      image: eventImg,
    },
    {
      id: 7,
      title: "Food Carnival",
      location: "Ahmedabad",
      date: "19 August 2025",
      price: 300,
      time: "3pm",
      image: eventImg,
    },
    {
      id: 8,
      title: "Yoga in the Park",
      location: "Pune",
      date: "21 July 2025",
      price: 200,
      time: "2pm",
      image: eventImg,
    },
    {
      id: 9,
      title: "Startup Pitch Day",
      location: "Gurgaon",
      date: "26 July 2025",
      price: 650,
      time: "4pm",
      image: eventImg,
    },
    {
      id: 10,
      title: "Book Reading by Author",
      location: "Jaipur",
      date: "24 July 2025",
      price: 250,
      time: "12am",
      image: eventImg,
    },
  ];


const EventDetailPage = ({ params }) => {
  const id = parseInt(params.id);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const found = allEvents.find((ev) => ev.id === id);
    setEvent(found);
  }, [id]);

  if (!event) {
    return <div className="text-white p-10">Event not found</div>;
  }

  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-[#1a2942] rounded-xl overflow-hidden shadow-lg p-6">
        <Image
          src={event.image}
          alt={event.title}
          className="rounded-lg mb-6 w-full h-[300px] object-cover"
        />

        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

        <div className="space-y-3 mb-6">
          <p className="flex items-center">
            <Image src={Location} alt="Location" className="w-4 h-4 mr-2" />
            {event.location}
          </p>
          <p className="flex items-center">
            <Image src={Calender} alt="Calendar" className="w-4 h-4 mr-2" />
            {event.date} at {event.time}
          </p>
          <p className="flex items-center">
            <Image src={Wallet} alt="Price" className="w-4 h-4 mr-2" />
            ₹{event.price}
          </p>
        </div>

        <p className="text-gray-300 mb-6">{event.description}</p>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default EventDetailPage;
