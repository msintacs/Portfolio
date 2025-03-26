import React from "react";

function TabButton({ title, isSelected, tabClick }) {
  return (
    <button
      type="button"
      className={`rounded-full px-6 py-2 text-sm ${
        isSelected
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      onClick={tabClick}
    >
      {title}
    </button>
  );
}

export default TabButton;
