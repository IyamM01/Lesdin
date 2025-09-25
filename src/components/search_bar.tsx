"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
    return (
      <div className="mt-6 flex items-center bg-[#D5DDDF] rounded-xl p-2">
        <input
          type="text"
          placeholder="Temukan mitra industri di sini..."
          className="flex-1 bg-transparent outline-none px-5 text-[#1B2727]"
        />
        <button className="p-2 rounded-lg hover:bg-gray-200">
          <Search className="text-[#1B2727]" />
        </button>
      </div>
    );
}