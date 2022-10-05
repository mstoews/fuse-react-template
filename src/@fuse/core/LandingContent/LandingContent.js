import { memo, useState } from 'react';

function LandingContent() {
  const [defaultText, setDefaultText] = useState('About React');
  const convertTextToUpperCase = () => {
    // To convert Upper Case
    const upperCaseText = defaultText.toUpperCase();
    setDefaultText(upperCaseText);
  };

  return (
    <div id="hero">
      <div className="container h-screen px-6 py-12 max-w-8xl">
        {/* Menu/Logo Container */}
        <div className="flex items-center justify-between text-2xl text-white">
          {/* Logo */}
          <p className="text-4xl font-black uppercase text-white-700 ">Made To</p>
          {/* Menu */}
          <div className="hidden h-10 text-2xl md:flex md:space-x-8">
            <div className="text-gray-200 uppercase text-1xl group">
              <button className="uppercase" type="button">
                Creations
                </button>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="text-gray-200 uppercase text-1xl group">
              <button className="uppercase" type="button">
                Features
                </button>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="text-gray-200 uppercase text-1xl group">
              <button className="uppercase" type="button">
                Gallery
              </button>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="text-gray-200 uppercase text-1xl group">
              <button className="uppercase" type="button">
                Blog
              </button>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="text-gray-200 uppercase text-1xl group">
              <button className="uppercase" type="button">
                shop
              </button>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
          </div>
          <div className="max-w-4xl p-4 mt-32 mb-32 text-2xl text-white uppercase border-2 font-alata max-h-6xl md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Beautifully Hand Crafted Products
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LandingContent);
