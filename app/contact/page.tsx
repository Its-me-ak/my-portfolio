"use client";
import { useSidebar } from "@/context/SidebarContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Contact = () => {
    const { isSidebarOpen } = useSidebar();
    return (
        <main className={`${isSidebarOpen ? "md:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
               <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                        Have a project in mind or just want to say hello? Feel free to reach out!
                    </p>
            <div className="flex justify-between items-center lg:flex-row flex-col">
                <div className="max-w-xl w-full">
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 text-sm bg-vscodeHeader rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" required />
                        <input type="email" placeholder="Your Email" className="w-full p-3 text-sm bg-vscodeHeader rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" required />
                           <input type="text" placeholder="Your Number" className="w-full p-3 text-sm bg-vscodeHeader rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" required />
                        <textarea placeholder="Your Message" className="w-full p-3 text-sm h-32 bg-vscodeHeader rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400" required></textarea>
                        <button type="submit" className="w-full py-3 bg-vscodeAccent hover:bg-blue-500 rounded-md text-white font-semibold transition">
                            Send Message
                        </button>
                    </form>
                </div>
                  {/* Map Section */}
                <div className="w-full md:w-[50%] h-[300px] md:h-[400px] rounded-lg overflow-hidden lg:mt-0 mt-10">
                    <MapContainer center={[28.6139, 77.2090]} zoom={12} className="h-full w-full">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[28.6139, 77.2090]}>
                            <Popup>My Location</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
        </main>
    );
};

export default Contact;
