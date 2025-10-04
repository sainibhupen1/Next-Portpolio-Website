"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "sonner";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const togglePopup = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get("/api/contactus");
      setContacts(res.data);
    } catch (err) {}
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contactus/${id}`);
      const updated = contacts.filter((item) => item._id !== id);
      toast.success("contact deleted successfully.");
      setContacts(updated);
    } catch (err) {}
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".popup-menu") &&
        !e.target.closest(".popup-toggle")
      ) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "pending" ? "done" : "pending";

      const res = await axios.patch(`/api/contactus/${id}`, {
        status: newStatus,
      });

      setContacts((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: res.data.status } : c))
      );

      toast.success(`Status changed to ${newStatus}`);
      setOpenIndex(null);
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const paginationButtons = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full mb-4">
        <div className="w-[60%] border flex items-center gap-2 rounded-md px-4 py-1.5">
          <IoMdSearch />
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            className="outline-none w-full text-sm"
          />
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="border hidden text-white px-2 bg-[black]/80 py-1.5 text-sm rounded cursor-pointer hover:bg-[black]/90 dark:bg-[white]/5"
        >
          {showForm ? "Close Form" : "+ Add Contact"}
        </button>
      </div>

      {/* {showForm && (
        <div className="mb-6">
          <ContactForm
            onSuccess={fetchContacts}
            onClose={() => setShowForm(false)}
          />
        </div>
      )} */}

      <div
        className="flex-1 overflow-x-auto  min-w-0"
        style={{
          // full width
          // disable vertical scroll
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: "rgba(100, 100, 100, 0.4) transparent", // Firefox
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            height: 4px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background-color: rgba(100, 100, 100, 0.4);
            border-radius: 8px;
          }

          @media (prefers-color-scheme: dark) {
            div::-webkit-scrollbar-thumb {
              background-color: rgba(180, 180, 180, 0.4);
            }
          }
        `}</style>

        <div className="min-w-max">
          <ul className="flex gap-6 px-2 border-b-[1.5px] border-gray-600 py-3 pb-5 text-sm font-bold text-gray-900 dark:text-gray-200">
            <li className="max-w-[50px] min-w-[50px]">No.</li>
            <li className="max-w-[150px] min-w-[150px]">Name</li>
            <li className="max-w-[250px] min-w-[250px]">Email</li>
            <li className="max-w-[120px] min-w-[120px]">Status</li>
            <li className="max-w-[100px] min-w-[100px]">Number</li>
            <li className="max-w-[250px] min-w-[250px]">Message</li>
            <li className="max-w-[120px] min-w-[120px]">Action</li>
          </ul>

          {paginatedContacts.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-6">
              <p>No Contact Found.</p>
            </div>
          ) : (
            paginatedContacts.map((contact, index) => (
              <ul
                key={index}
                className="flex items-center gap-6 px-2 border-b-[1.5px] border-gray-600 py-4 text-sm font-bold text-gray-700 dark:text-gray-400"
              >
                <li className="max-w-[50px] min-w-[50px]">
                  {String(
                    (currentPage - 1) * itemsPerPage + index + 1
                  ).padStart(2, "0")}
                  .
                </li>
                <li className="max-w-[150px] min-w-[150px]">
                  {contact.name || "-"}
                </li>
                <li className="max-w-[250px] min-w-[250px]">
                  {contact.email || "-"}
                </li>
                <li className="max-w-[120px] min-w-[120px]">
                  {contact.status ? (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        contact.status === "done"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {contact.status}
                    </span>
                  ) : (
                    "-"
                  )}
                </li>

                <li className="max-w-[100px] min-w-[100px]">
                  {contact.number || "-"}
                </li>

                <li className="max-w-[250px] min-w-[250px]">
                  {contact.message || "-"}
                </li>
                <li className="relative max-w-[120px] min-w-[120px] pl-3">
                  <BsThreeDotsVertical
                    size={20}
                    className="hover:cursor-pointer popup-toggle"
                    onClick={() => togglePopup(index)}
                  />
                  {openIndex === index && (
                    <div className="popup-menu absolute top-6 right-0 bg-white border rounded shadow-md z-10 w-28 text-sm">
                      <button
                        onClick={() =>
                          handleToggleStatus(contact._id, contact.status)
                        }
                        className="block w-full px-3 py-1 hover:bg-gray-100 hover:underline text-center text-blue-600"
                      >
                        {contact.status === "pending" ? "Done" : "Pending"}
                      </button>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="block w-full px-3 py-1 hover:bg-gray-100 hover:underline text-center text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              </ul>
            ))
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 text-sm font-medium flex-wrap gap-2 px-2 my-10">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center h-10 w-10 border rounded-full disabled:opacity-50 hover:cursor-pointer"
              >
                <IoIosArrowBack size={20} />
              </button>
              {paginationButtons().map((item, index) =>
                item === "..." ? (
                  <span key={index} className="px-2 select-none">
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`flex items-center justify-center h-10 w-10 border rounded-full hover:cursor-pointer ${
                      currentPage === item
                        ? "bg-black text-white dark:bg-[white]/50 dark:text-black"
                        : "bg-[black]/30 text-black dark:bg-[white]/5 dark:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center justify-center h-10 w-10 border rounded-full disabled:opacity-50 hover:cursor-pointer"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
