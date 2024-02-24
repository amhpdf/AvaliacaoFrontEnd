'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const NavBar = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Notícias', path: '/noticias' },
    { title: 'Convênios', path: '/convenios' },
  ];

  return (
    <nav className="bg-white h-10 w-full border-b md:border-0 md:static z-30">
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
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <Link
                  href={item.path}
                  key={idx}
                  className="text-gray-600 hover:text-indigo-600"
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
