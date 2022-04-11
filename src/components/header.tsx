import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import Script from 'next/script';

export default function MyHeader() {
  <Script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></Script>;
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <header className="border">
      <div className="text-center text-5xl text-blue-400">This is header area</div>
      {/* daisyUI theme area */}
      <div className="text-center m-2">
        <h2 className="mb-4 text-2xl text-red-400 font-bold">Select Theme</h2>
        <select data-choose-theme className="focus:outline-none h-10 rounded-full px-3 border">
          <option value="">Default</option>
          <option value="dark">Dark</option>
          <option value="black">Black</option>
          <option value="cupcake">cupcake</option>
          <option value="bumblebee">bumblebee</option>
          <option value="emerald">emerald</option>
          <option value="corporate">corporate</option>
          <option value="synthwave">synthwave</option>
          <option value="retro">retro</option>
          <option value="cyberpunk">cyberpunk</option>
          <option value="valentine">valentine</option>
          <option value="halloween">halloween</option>
          <option value="garden">garden</option>
          <option value="forest">forest</option>
          <option value="aqua">aqua</option>
          <option value="lofi">lofi</option>
          <option value="pastel">pastel</option>
          <option value="fantasy">fantasy</option>
          <option value="wireframe">wireframe</option>
          <option value="luxury">luxury</option>
          <option value="dracula">dracula</option>
          <option value="cmyk">cmyk</option>
          <option value="autumn">autumn</option>
          <option value="business">business</option>
          <option value="acid">acid</option>
          <option value="lemonade">lemonade</option>
          <option value="night">night</option>
          <option value="coffee">coffee</option>
          <option value="winter">winter</option>

          <option value="🌸">🌸 Pink</option>
          <option value="🐬">🐬 Blue</option>
          <option value="🐤">🐤 Yellow</option>
        </select>
      </div>
    </header>
  );
}
