import React from 'react';

interface FilmHeaderProps {
  title: string;
  originalTitle: string;
  year: string;
  tagline: string;
  director: string;
  writer: string;
  length: string;
  releaseDate: string;
  bgColor: string;
}

export default function FilmHeader({
  title,
  originalTitle,
  year,
  tagline,
  director,
  writer,
  length,
  releaseDate,
  bgColor
}: FilmHeaderProps): React.JSX.Element {
  return (
    <div className={`bg-${bgColor} rounded-lg p-6 uppercase`}>
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
