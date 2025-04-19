"use client";
import { useSidebar } from "@/context/SidebarContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import {toast} from "react-hot-toast"

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const Contact = () => {
    const { isSidebarOpen } = useSidebar();
    const center: LatLngExpression = [28.6139, 77.2090];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = { name, email, number, message };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                setName("");
                setEmail("");
                setNumber("");
                setMessage("");
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"} mt-20 pb-20`}>
            <h2 className="md:text-4xl text-3xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
                Have a project in mind or just want to say hello? Feel free to reach out!
            </p>

            <div className="flex justify-between items-center lg:flex-row flex-col gap-10">
                <div className="max-w-xl w-full">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 text-sm bg-[var(--article-bg)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                                   className="w-full p-3 text-sm bg-[var(--article-bg)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Your Number"
                                  className="w-full p-3 text-sm bg-[var(--article-bg)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)]"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                                  className="w-full p-3 h-32 text-sm bg-[var(--article-bg)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)]"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[var(--accent-color)] rounded-md text-white font-semibold transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="w-full md:w-[50%] h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={center}>
                            <Popup>My Location</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </main>
    );
};

export default Contact;
