import React from 'react';
import ImageWithCaption from '../../components/ImageWithCaption';
import TwoColumnText from '../../components/TwoColumnText';

export default function TotoroPage(): React.JSX.Element {
  return (
    <div className="mx-auto px-4 *:mt-5 md:max-w-4xl">
      <ImageWithCaption 
        desktopSrc="https://www.bluedogposters.com.au/cdn/shop/files/54218MyNeighborTotoroFishing_002_1400x@2x.progressive.jpg"
        mobileSrc="https://amherstwire.com/wp-content/uploads/2021/02/my_neighbor_totoro_hero-900x507.jpg"
        caption="Totoro and the Catbus welcome you to the magical world of Studio Ghibli"
      />

      <div className="bg-amber-500 rounded-lg p-6 uppercase">
        <p className="text-2xl md:text-5xl border-b-2 border-b-black">
          My Neighbor Totoro (Tonari no Totoro, 1988)
        </p>
        <p className="font-thin text-lg md:text-2xl">
          A childhood adventure in rural Japan
        </p>
        <div className="text-xs mt-12">
          <p>Directed by: Hayao Miyazaki</p>
          <p>Written by: Hayao Miyazaki</p>
          <p>Length: 1Hr 26Min</p>
          <p>Release Date (Japan): 16 April 1988</p>
        </div>
      </div>

      <p className="text-right text-sm uppercase leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae est nec arcu rhoncus lacinia. Integer id nibh non leo aliquam viverra. Donec ut suscipit purus, sed scelerisque dui. Quisque porttitor augue neque, et laoreet risus posuere vel. Aliquam vehicula nibh eu elit fermentum varius. Aliquam condimentum lorem tellus, id elementum sapien elementum eget. Nullam semper quam vel libero tempor consequat.
      </p>

      <ImageWithCaption 
        desktopSrc="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/20003443/GHI_Totoro_Select04.jpg"
        mobileSrc="https://soranews24.com/wp-content/uploads/sites/3/2024/10/MK-1.jpg"
        caption="Satsuki and Mei discover the magic of the forest and its inhabitants"
      />

      <TwoColumnText />

      <div className="flex justify-between bg-amber-500 rounded-lg p-6">
        <p className="text-md uppercase">
          Review<span className="hidden md:inline">: My Neighbor Totoro</span>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>      
      </div>

      <TwoColumnText />

    </div>
  );
}
