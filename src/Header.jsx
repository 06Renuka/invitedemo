
import React, { useState } from "react";
import { X, Copy, User } from "lucide-react";
import scan from "./assets/scan.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardLink] = useState("packy.ai/jenvvevvnvowv");
  const [inviteEmail, setInviteEmail] = useState("");

  // Example list of invited users
  const invitees = [
    { name: "John Doe", email: "john@example.com", status: "Invited" },
    { name: "Jane Smith", email: "jane@example.com", status: "Accepted" },
    { name: "Bob Brown", email: "bob@example.com", status: "Rejected" },
    { name: "Alice Green", email: "alice@example.com", status: "Invited" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dashboardLink);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue">Packy</h1>
        <button
          className="bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => setIsOpen(true)}
        >
          Invite
        </button>
      </header>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-md z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] relative">
            {/* Close Button Outside the Modal Content */}
            <button
              className="absolute -top-4 -right-3 text-gray-600 hover:text-gray-800 bg-gray-200 rounded-full shadow-md sm:p-1 sm:text-sm z-10"
              onClick={() => setIsOpen(false)}
            >
              <X size={10} className="sm:w-4 sm:h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column with Right Border */}
              <div className="md:border-r md:pr-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Invite & Travel Together
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Share your trip with friends and plan seamlessly!
                </p>

                {/* Dashboard Link */}
                <div className="flex items-center mt-4 border p-2 rounded-md">
                  <input
                    type="text"
                    value={dashboardLink}
                    readOnly
                    className="flex-1 bg-transparent outline-none text-gray-700"
                    placeholder="Dashboard Link"
                  />
                  <button
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-md flex items-center"
                    onClick={copyToClipboard}
                  >
                    <Copy size={16} className="mr-1" /> Copy
                  </button>
                </div>

                {/* QR Scanner */}
                <div className="mt-6">
                  <div className="w-24 h-24 bg-gray-200 flex items-center justify-center mx-auto overflow-hidden rounded-md">
                    <img
                      src={scan}
                      alt="QR Code"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-center text-gray-500 text-sm mt-2">
                    Scan this code with your phone to open your trip instantly!
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:pl-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Invite People to Your Ahmedabad Trip
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Share your trip with friends and plan seamlessly!
                </p>

                {/* Invite Email Input & Send Button */}
                <div className="flex flex-col sm:flex-row sm:space-x-2 mt-4">
                  <input
                    type="email"
                    placeholder="Invite Email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="mt-2 sm:mt-0 bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200 transition duration-300">
                    Send
                  </button>
                </div>

                {/* Invitee List */}
                <div className="mt-6">
                  {invitees.map((invitee, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      {/* User Avatar & Name */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <User size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">{invitee.name}</p>
                          <p className="text-gray-500 text-sm">{invitee.email}</p>
                        </div>
                      </div>

                      {/* Invite Status */}
                      <div className="flex items-center space-x-2">
                        <button
                          className={`px-4 py-1 rounded-md text-sm font-medium ${invitee.status === "Accepted"
                            ? "bg-green-100 text-green-600"
                            : invitee.status === "Rejected"
                              ? "bg-red-100 text-red-600"
                              : "bg-gray-200 text-gray-600"
                            }`}
                        >
                          {invitee.status}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
