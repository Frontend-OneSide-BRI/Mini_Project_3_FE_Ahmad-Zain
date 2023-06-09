import { Link } from "react-router-dom";
import React from "react";

import Navbar from "src/components/Molecule/Navbar";
import Footer from "src/components/Molecule/Footer";
import { Button } from "src/components/Atom";

const Home = () => {
  return (
    <>
      <div className="bg-herohome bg-cover">
        <div className="bg-gradient-to-b from-black/80 via-black/50 to-black/80">
          <Navbar />
          <div className="flex flex-col justify-center items-center h-screen px-2 lg:gap-6">
            <p className="text-xl lg:text-5xl text-white font-black ">
              Unlimited movies, TV shows, and more
            </p>
            <p className="text-base lg:text-2xl text-white font-normal tracking-wide">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-sm lg:text-2xl text-white font-normal tracking-wide">
              Ready to watch? Let's proceed to start your journey!
            </p>
            <div className="w-full flex items-center justify-center h-14 mt-6 lg:mt-0">
              <Link to="/movies" className="flex justify-center w-full">
                <Button
                  text="Let's go!"
                  className="w-1/3 h-full text-2xl py-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-black border-t-8 border-neutral-800 text-white px-2 lg:px-40 lg:gap-8 py-12 lg:py-24">
        <div className="flex flex-col w-1/2 lg:pr-4 gap-6">
          <p className="font-black text-xl lg:text-5xl">Enjoy on your TV</p>
          <p className="text-sm lg:text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="relative">
            <div className="absolute flex items-center justify-center">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="TV"
              />
            </div>
            <div className="flex items-center justify-center p-7 lg:p-[3.8rem]">
              <video
                autoPlay
                playsInline
                muted
                loop
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-black border-t-8 border-neutral-800 text-white px-2 lg:px-32 py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="flex items-center justify-center">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="TV"
            />
          </div>
          <div className="flex items-center justify-center mt-[-2em] lg:mt-[-8em]">
            <div className="flex gap-1 lg:gap-4 h-16 lg:h-24 border-2 bg-black border-neutral-700 rounded-xl lg:px-3">
              <div className="flex gap-1 lg:gap-4 items-center h-full rounded-xl">
                <img
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  className="w-8 lg:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-xs lg:text-base font-bold">
                    Stranger Things
                  </p>
                  <p className="text-xs lg:text-base text-blue-download">
                    Downloading...
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                  className="w-8 h-8 lg:w-12 lg:h-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 lg:pr-4 gap-6">
          <p className="font-black text-xl lg:text-5xl">
            Download your shows to watch offline
          </p>
          <p className="text-sm lg:text-2xl">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="flex items-center bg-black border-t-8 border-neutral-800 text-white px-2 lg:px-40 lg:gap-8 py-16 lg:py-44">
        <div className="flex flex-col w-1/2 gap-6">
          <p className="font-black text-xl lg:text-5xl">Watch everywhere</p>
          <p className="text-sm lg:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
              />
            </div>
            <div className="flex items-center justify-center px-10 lg:px-20 mt-[-3rem] lg:mt-[-7rem]">
              <video
                autoPlay
                playsInline
                muted
                loop
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v"
                type="video/mp4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-black border-t-8 border-neutral-800 text-white px-2 lg:px-40 lg:gap-8 py-12 lg:py-20">
        <div className="flex items-center justify-center w-1/2">
          <img
            alt=""
            src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-6">
          <p className="font-black text-xl lg:text-5xl">
            Create profiles for kids
          </p>
          <p className="text-sm lg:text-2xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
