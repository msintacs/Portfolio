import React from "react";

function SkillCards({ category, data }) {
  return (
    <div>
      <div className="mb-8 flex items-center">
        <div className="mr-4 h-6 w-2 rounded-full bg-black" />
        <h3 className="text-2xl font-semibold">{category}</h3>
        <div className="ml-4 flex-grow border-b" />
      </div>
      <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={item.img}
                alt={item.title}
                className="mb-4 h-16 w-16 object-contain"
              />
              <span className="text-center text-sm font-medium">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCards;
