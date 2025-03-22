import React from 'react';

interface FilmTitleCardProps {
  title: string;
  originalTitle: string;
  year: string;
  tagline: string;
  director: string;
  writer: string;
  length: string;
  releaseDate: string;
  className?: string; // Changed from bgColor to className
}

export default function FilmTitleCard({
  title,
  originalTitle,
  year,
  tagline,
  director,
  writer,
  length,
  releaseDate,
  className = "bg-gray-700" // Default color
}: FilmTitleCardProps): React.JSX.Element {
  return (
    <div className={`${className} rounded-lg p-6 uppercase`}>
      <p className="text-2xl md:text-5xl border-b-2 border-b-black">
        {title} ({originalTitle}, {year})
      </p>
      <p className="font-thin text-lg md:text-2xl">
        {tagline}
      </p>
      <div className="text-xs mt-12">
        <p>Directed by: {director}</p>
        <p>Written by: {writer}</p>
        <p>Length: {length}</p>
        <p>Release Date (Japan): {releaseDate}</p>
      </div>
    </div>
  );
}
