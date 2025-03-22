import React from 'react';
import { Metadata } from 'next';
import ImageWithCaption from '../../components/ImageWithCaption';
import TwoColumnText from '../../components/TwoColumnText';
import FilmTitleCard from '../../components/FilmTitleCard';
import ReviewCard from '../../components/ReviewCard';

export const metadata: Metadata = {
  title: 'Ghibliotheque - My Neighbor Totoro',
  description: 'Exploring the magical world of Totoro through the eyes of two young sisters',
};

export default function TotoroPage(): React.JSX.Element {
  const filmColorClass = "bg-amber-500"; // Changed variable name to clarify it's a CSS class
  
  return (
    <div className="mx-auto px-4 *:mt-5 md:max-w-4xl">
      {/* Hero Image */}
      <ImageWithCaption 
        desktopSrc="https://www.bluedogposters.com.au/cdn/shop/files/54218MyNeighborTotoroFishing_002_1400x@2x.progressive.jpg"
        mobileSrc="https://amherstwire.com/wp-content/uploads/2021/02/my_neighbor_totoro_hero-900x507.jpg"
        caption="Totoro and the Catbus welcome you to the magical world of Studio Ghibli"
      />

      {/* Film Title Card */}
      <FilmTitleCard
        title="My Neighbor Totoro"
        originalTitle="Tonari no Totoro"
        year="1988"
        tagline="A childhood adventure in rural Japan"
        director="Hayao Miyazaki"
        writer="Hayao Miyazaki"
        length="1Hr 26Min"
        releaseDate="16 April 1988"
        className={filmColorClass} // Pass as className
      />

      {/* Film Description */}
      <p className="text-right text-sm uppercase leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae est nec arcu rhoncus lacinia. Integer id nibh non leo aliquam viverra. Donec ut suscipit purus, sed scelerisque dui. Quisque porttitor augue neque, et laoreet risus posuere vel. Aliquam vehicula nibh eu elit fermentum varius. Aliquam condimentum lorem tellus, id elementum sapien elementum eget. Nullam semper quam vel libero tempor consequat.
      </p>

      {/* Content Sections */}
      <ImageWithCaption 
        desktopSrc="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/20003443/GHI_Totoro_Select04.jpg"
        mobileSrc="https://soranews24.com/wp-content/uploads/sites/3/2024/10/MK-1.jpg"
        caption="Satsuki and Mei discover the magic of the forest and its inhabitants"
      />

      <TwoColumnText />

      {/* Review Card */}
      <ReviewCard 
        filmTitle="My Neighbor Totoro" 
        className={filmColorClass} // Pass as className
      />

      <TwoColumnText />
    </div>
  );
}
