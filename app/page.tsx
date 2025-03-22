import React from 'react';
import Link from 'next/link';

export default function Home(): React.JSX.Element {
  return (
    <div className="mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl mb-6 font-bold">Ghibliotheque</h1>
      <p className="mb-8">Welcome to Ghibliotheque, your destination for Studio Ghibli film explorations.</p>
      
      <div className="grid gap-6">
        <div className="bg-green-700 rounded-lg p-6 text-white hover:bg-green-800 transition-colors">
          <Link href="/nausicaa" className="block">
            <h2 className="text-2xl mb-2 font-semibold">Nausicaä of the Valley of the Wind (1984)</h2>
            <p>Explore Hayao Miyazaki's post-apocalyptic masterpiece</p>
          </Link>
        </div>
        
        <div className="bg-amber-500 rounded-lg p-6 text-white hover:bg-amber-600 transition-colors">
          <Link href="/my-neighbor-totoro" className="block">
            <h2 className="text-2xl mb-2 font-semibold">My Neighbor Totoro (1988)</h2>
            <p>Discover the magic of rural Japan through the eyes of two young sisters</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
