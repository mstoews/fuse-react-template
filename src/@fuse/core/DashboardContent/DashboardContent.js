import { memo } from 'react';

function DashboardContent() {
  return (
    <>
      <div className="w-full xl:w-1/2">
        <h1 className="text-6xl font-bold text-center text-gray-800 2xl:leading-10 leading-0">
          Touching hundreds of lives
        </h1>
        <h2 className="mt-5 text-base leading-normal text-center text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing
        </h2>
      </div>
      <div className="flex flex-wrap items-start px-4 mt-4 2xl:px-20 lg:px-12">
        <div className="mt-24">
          <div className="flex items-end ">
            <img
              src="https://i.ibb.co/kBgtHK6/Rectangle-5.png"
              alt="girl with blue background"
              className="w-20 h-20 mr-6 rounded-lg"
            />
            <img
              src="https://i.ibb.co/9nLBtjx/Rectangle-3.png"
              alt="guy winking"
              className="w-48 rounded-lg h-36"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img src="https://i.ibb.co/jRbF1KF/Rectangle-4.png" alt="guy smiling" />
          </div>
          <div className="flex items-start">
            <img
              src="https://i.ibb.co/Sf4Q94L/Rectangle-6.png"
              alt="girl with bluw background"
              className="w-48 h-48 rounded-lg"
            />
            <img
              src="https://i.ibb.co/fnNqJrx/Rectangle-7.png"
              alt="guy with glasses"
              className="flex-shrink-0 object-cover w-20 h-20 ml-6 rounded-lg object-fit"
            />
          </div>
        </div>
        <div className="mt-32 ml-6">
          <img
            src="https://i.ibb.co/LSxy7fy/Rectangle-9.png"
            className="rounded-lg w-72 h-80"
            alt="guy with sunglasses"
          />
          <div className="flex items-start mt-6">
            <img
              src="https://i.ibb.co/X8PKD3q/Rectangle-8.png"
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg"
            />
            <img
              src="https://i.ibb.co/2Yj51CY/Rectangle-13.png"
              alt="guy with glasses"
              className="object-cover w-20 h-20 ml-6 rounded-lg object-fit"
            />
          </div>
        </div>
        <div className="ml-6 mt-14">
          <div className="lg:flex ">
            <div>
              <img
                src="https://i.ibb.co/bWGVSkP/Rectangle-10.png"
                alt="group of friends"
                className="object-center rounded-lg w-96 h-72 object-fit"
              />
            </div>
            <div>
              <div className="flex ml-6">
                <img
                  src="https://i.ibb.co/80jvpSv/Rectangle-16.png"
                  className="w-20 h-20 rounded-lg mt-14"
                  alt="man"
                />
                <img
                  src="https://i.ibb.co/6PR2Y74/Rectangle-15.png"
                  className="w-20 h-24 ml-6 rounded-lg"
                  alt="woman"
                />
              </div>
              <img
                src="https://i.ibb.co/M5rvjhk/Rectangle-14.png"
                alt="boy with blonde hair"
                className="w-48 h-32 mt-6 ml-6 rounded-lg"
              />
            </div>
          </div>
          <div className="flex mt-6">
            <img
              className="w-48 h-48 rounded-lg"
              src="https://i.ibb.co/GPpMsbr/Rectangle-12.png"
              alt="young girl with red hair"
            />
            <img
              className="h-56 ml-6 rounded-lg w-72"
              src="https://i.ibb.co/VBcgkVL/Rectangle-11.png"
              alt="young girl with red hair"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(DashboardContent);
