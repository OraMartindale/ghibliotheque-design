export default function TwoColumnText() {
  return (
    <div className="flex flex-col md:flex-row text-xs">
      <div className="w-full md:w-1/2">
        <p className="mb-1 md:mr-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, turpis vitae vehicula posuere, ante dui facilisis turpis, vitae suscipit sem tortor a elit. Ut elementum pellentesque aliquet. Phasellus a nulla ac dui convallis dapibus. Nunc est lorem, tempus sit amet accumsan sit amet, gravida ut dolor. Nulla facilisi. Nulla ac pharetra libero. Donec in tincidunt ligula, at vulputate ante. Proin rutrum ornare mi vitae laoreet. Aliquam rutrum condimentum gravida. Fusce sed massa ut quam cursus commodo. Vestibulum nec posuere libero. Vestibulum lobortis leo id metus lacinia rhoncus.</p>
      </div>

      <div className="w-full md:w-1/2">
        <p className="mb-1 md:mr-3">Proin auctor dictum odio, id convallis diam aliquam nec. Cras ut magna rutrum, cursus quam fringilla, efficitur purus. Curabitur lectus urna, lobortis nec nibh id, mollis semper metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ipsum nibh, sagittis id est a, imperdiet tristique neque. Pellentesque dictum sit amet quam a commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nec congue tortor. Donec ullamcorper ex ullamcorper tellus maximus tempor. Suspendisse pharetra est massa. Vestibulum pellentesque a quam vel facilisis.</p>
      </div>
    </div>
  );
}
