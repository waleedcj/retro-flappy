// import React from "react";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";


const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export default function FloatingContractAddress() {
    const handleCopyContractAddress = () => {
        if (CONTRACT_ADDRESS) {
          const successful = copy(CONTRACT_ADDRESS);
          if (successful) {
            toast.success("Contract address copied to clipboard!");
          } else {
            toast.error("Failed to copy contract address.");
          }
        } else {
          toast.info("Please wait until the contract address is available.");
        }
      };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div onClick={() => {handleCopyContractAddress()}} className="flex items-center bg-gray-800 rounded-xl shadow-lg px-3 py-1 md:px-4 md:py-1 space-x-2">
        <span
          className="text-xs md:text-sm lg:text-sm text-white"
          title={CONTRACT_ADDRESS || "Contract address not available yet"}
        >
          Contract:{" "}
          {CONTRACT_ADDRESS
            ? `${CONTRACT_ADDRESS.slice(0, 6)}...${CONTRACT_ADDRESS.slice(-4)}`
            : "Not Available"}
        </span>
        <button
          onClick={() => {}}
          className=" text-white hover:text-[#a855f7]"
          title="Copy Contract Address"
          aria-label="Copy Contract Address"
        >
          <FaCopy className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
}
