import React from 'react';
import { Metadata } from 'next';
import ImageWithCaption from '../../components/ImageWithCaption';
import TwoColumnText from '../../components/TwoColumnText';
import FilmTitleCard from '../../components/FilmTitleCard';
import ReviewCard from '../../components/ReviewCard';
import ReviewFooter from '../../components/ReviewFooter';

export const metadata: Metadata = {
  title: 'Ghibliotheque - Nausicaä of the Valley of the Wind',
  description: 'Exploring Hayao Miyazaki\'s post-apocalyptic masterpiece from 1984',
};

export default function NausicaaPage(): React.JSX.Element {
  const filmColorClass = "bg-green-700"; // Changed variable name to clarify it's a CSS class
  
  return (
    <div className="mx-auto px-4 *:mt-5 md:max-w-4xl">
      {/* Hero Image */}
      <ImageWithCaption 
        desktopSrc="https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2019/12/nausicaa_01_nvw1012945.jpg"
        mobileSrc="https://miro.medium.com/v2/resize:fit:1024/1*mxd-iWJwsTxYGbTgdBv12g.jpeg"
        caption="Nausicaä flies through the Valley of the Wild and onto screens, in Ghibli's first feature"
      />

      {/* Film Title Card */}
      <FilmTitleCard
        title="nausica&auml; of the valley of the wind"
        originalTitle="kaze no tani no naushika"
        year="1984"
        tagline="The first wind rises"
        director="Hayao Miyazaki"
        writer="Hayao Miyazaki"
        length="1Hr 57Min"
        releaseDate="11 March 1984"
        className={filmColorClass} // Pass as className
      />

      {/* Film Description */}
      <p className="text-right text-sm uppercase leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae est nec arcu rhoncus lacinia. Integer id nibh non leo aliquam viverra. Donec ut suscipit purus, sed scelerisque dui. Quisque porttitor augue neque, et laoreet risus posuere vel. Aliquam vehicula nibh eu elit fermentum varius. Aliquam condimentum lorem tellus, id elementum sapien elementum eget. Nullam semper quam vel libero tempor consequat. Aliquam faucibus tempus vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tincidunt egestas.
      </p>

      {/* Content Sections */}
      <ImageWithCaption 
        desktopSrc="https://www.brightwalldarkroom.com/wp-content/uploads/2020/10/Nausicaa2-1-e1602752195952.jpg"
        mobileSrc="https://m.media-amazon.com/images/M/MV5BYzZkMGUxNWItMGU0Zi00YmQ0LTljNmItNzYxYTg5N2M2N2Y0XkEyXkFqcGc@._V1_QL75_UY281_CR13,0,500,281_.jpg"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae."
      />

      <TwoColumnText />

      <ImageWithCaption 
        desktopSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEMibfOu61Ci39NKsTAkcq2znIaWG0OZ_bBUdhzxbMmXmzIl8CloBlby80BmE3DDcM77N4-bYW1o9YqARbndYxsqFQleOsdUKcjyfhabKuIZMJ5KjzZKPxxXdUARZ5Fpl9-bQ76JBuC6q8/s1600/MV5BODJiNmUzYmQtZTNhNS00NjY0LThmYjMtOTliOTM1NTdkYzY1XkEyXkFqcGdeQXVyNjU0OTQ0OTY%2540._V1_.jpg"
        mobileSrc="https://blog.erikgern.com/2013/04/an-appreciation-of-nausicaa-the-movie/images/nausicaa-poster.jpg"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae."
      />

      <div className="flex flex-col-reverse md:flex-row bg-green-700 rounded-lg p-6 uppercase">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat justo vitae gravida vulputate. Sed ligula sem, finibus at orci sed, posuere luctus felis. Cras quis viverra felis. Ut pulvinar efficitur bibendum. Aliquam et tristique diam. Donec laoreet dui tortor, non pulvinar erat vulputate et. Vivamus dictum, sem a interdum.
        </p>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 8" strokeWidth="1" stroke="currentColor" className="w-48 stroke-white mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4 4 8 -2 8 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 8" strokeWidth="1" stroke="currentColor" className="w-48 -mt-10 stroke-white mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4 4 8 -2 8 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 8" strokeWidth="1" stroke="currentColor" className="w-48 -mt-10 stroke-white mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4 4 8 -2 8 2" />
          </svg>
        </div>
      </div>

      <ImageWithCaption 
        desktopSrc="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/8.-Oh-Mu--Nausicaa-of-The-Valley-of-the-Wind.jpg"
        mobileSrc="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Nausicaa-Ohm.jpg"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae."
      />

      <div className="flex flex-col md:flex-row text-xs">
        <div className="w-full md:w-1/2">
          <p className="mb-1 md:mr-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae vehicula posuere, ante dui facilisis turpis, vitae suscipit sem tortor a elit. Ut elementum pellentesque aliquet. Phasellus a nulla ac dui convallis dapibus. Nunc est lorem, tempus sit amet accumsan sit amet, gravida ut dolor. Nulla facilisi. Nulla ac pharetra libero. Donec in tincidunt ligula, at vulputate ante. Proin rutrum ornare mi vitae laoreet. Aliquam rutrum condimentum gravida. Fusce sed massa ut quam cursus commodo. Vestibulum nec posuere libero. Vestibulum lobortis leo id metus lacinia rhoncus.</p>

          <p className="mb-1 md:mr-3">Proin auctor dictum odio, id convallis diam aliquam nec. Cras ut magna rutrum, cursus quam fringilla, efficitur purus. Curabitur lectus urna, lobortis nec nibh id, mollis semper metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ipsum nibh, sagittis id est a, imperdiet tristique neque. Pellentesque dictum sit amet quam a commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nec congue tortor. Donec ullamcorper ex ullamcorper tellus maximus tempor. Suspendisse pharetra est massa. Vestibulum pellentesque a quam vel facilisis.</p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-green-700 rounded-lg p-6 *:mt-5">
            <p className="text-xl border-b-2 border-b-black uppercase">
              Warriors of the Wind?
            </p>

            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque quis nulla quis interdum. Donec ut lectus ac urna tempor imperdiet. Maecenas tincidunt augue mi. Mauris tellus nisl, tincidunt sed lorem at, cursus luctus nisi. Maecenas egestas erat vel lectus condimentum, in posuere lorem lobortis. Pellentesque ut pretium neque, in viverra purus. Duis semper volutpat metus, a viverra eros sodales.
            </p>

            <div className="group relative">
              <img
                src="https://m.media-amazon.com/images/I/91ufx-ArpKL.jpg"
                className="hidden md:block rounded-lg text-center w-full" 
                alt="Warriors of the Wind poster" />
        
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfCECr7oepYxIjSYokbnsEFDnkce2jfbR1C_U4Brfji7EUTr1"
                className="block md:hidden rounded-lg w-full" 
                alt="Warriors of the Wind poster mobile" />
        
              <div className="invisible group-hover:visible absolute transition-all bottom-0 right-0 text-gray-200 text-xs bg-black rounded-sm opacity-50 p-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae.
              </div>  
            </div>
          </div>
        </div>
      </div>

      {/* Review Card */}
      <ReviewCard 
        filmTitle="nausica&auml; of the valley of the wind" 
        className={filmColorClass} // Pass as className
      />

      <TwoColumnText />

      <ImageWithCaption 
        desktopSrc="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19993736/Nausicaa_Valley_of_the_wind_mask.jpg?quality=90&strip=all&crop=10.244885306882%2C0%2C79.510229386237%2C100&w=2400"
        mobileSrc="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19993736/Nausicaa_Valley_of_the_wind_mask.jpg?quality=90&strip=all&crop=0%2C0.61388199993876%2C100%2C98.772236000122&w=1200"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae."
      />

      <TwoColumnText />
    </div>
  );
}