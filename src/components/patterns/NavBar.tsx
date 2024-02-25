'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const NavBar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Notícias', path: '/noticias' },
    { title: 'Convênios', path: '/convenios' },
  ];

  return (
    <nav className="bg-white h-10 w-full border-b md:border-0 md:static z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <Image
              src="/imagens/amhplogo.png"
              width={120}
              height={50}
              alt="AMHP Logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center p-3 mt-4 md:block md:pb-0 md:mt-0 ${
            state
              ? 'block  bg-slate-200 rounded-lg opacity-80 drop-shadow-2xl'
              : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 z-30">
            {navigation.map((item, idx) => {
              return (
                <Link
                  href={item.path}
                  key={idx}
                  className="text-gray-600 font-bold hover:bg-secondary hover:text-white px-3 py-3 rounded-lg transition-transform duration-100 ease-in-out hover:scale-110 hover:shadow-secondaryDark"
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
