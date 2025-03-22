import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ghibliotheque - Studio Ghibli Film Collection',
  description: 'Explore the magical world of Studio Ghibli films',
};

interface FilmCardProps {
  title: string;
  year: string;
  description: string;
  href: string;
  className: string; // Changed from bgColor/hoverColor to className
}

const FilmCard: React.FC<FilmCardProps> = ({ 
  title, 
  year, 
  description, 
  href, 
  className
}) => (
  <div className={className}>
    <Link href={href} className="block">
      <h2 className="text-2xl mb-2 font-semibold">{title} ({year})</h2>
      <p>{description}</p>
    </Link>
  </div>
);

export default function Home(): React.JSX.Element {
  return (
    <div className="mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl mb-6 font-bold">Ghibliotheque</h1>
      <p className="mb-8">Welcome to Ghibliotheque, your destination for Studio Ghibli film explorations.</p>
      
      <div className="grid gap-6">
        <FilmCard
          title="Nausicaä of the Valley of the Wind"
          year="1984"
          description="Explore Hayao Miyazaki's post-apocalyptic masterpiece"
          href="/nausicaa"
          className="bg-green-700 rounded-lg p-6 text-white hover:bg-green-800 transition-colors"
        />
        
        <FilmCard
          title="My Neighbor Totoro"
          year="1988"
          description="Discover the magic of rural Japan through the eyes of two young sisters"
          href="/my-neighbor-totoro"
          className="bg-amber-500 rounded-lg p-6 text-white hover:bg-amber-600 transition-colors"
        />
      </div>
    </div>
  );
}
