import React from "react";

function Card({ title, description, image, githublink }) {
  return (
    <div className="flex flex-col justify-center items-center h-[370px] w-[405px] bg-[rgba(255,255,255,0.9)] shadow-md rounded-xl p-4 overflow-hidden">
    {image && (
        <img
          className="w-[80px] h-[80px] object-cover rounded-xl max-w-full"
          src={image}
          alt={title}
        />
      )}
      <h1 className="text-2xl font-semibold text-gray-800 mt-4 text-center">
        {title}
      </h1>
      <p className="text-xl font-medium text-gray-600 m-1 text-center overflow-hidden text-ellipsis">
        {description}
      </p>
      <div className="mt-2 w-full text-center">
        <a
          href={githublink}
          className="text-xl font-medium text-blue-600 m-1 truncate block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {githublink}
        </a>
      </div>
    </div>
  );
}

export default Card;
