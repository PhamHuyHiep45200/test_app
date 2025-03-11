import { useTranslations } from "next-intl";
import React from "react";
import SelectLocale from "./header/SelectLocale";

function Header() {
  const t = useTranslations('header');
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">CHAWK BAZAR</h1>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-gray-500">
          {t('demos')}
        </a>
        <a href="#" className="hover:text-gray-500">
          {t('men')}
        </a>
        <a href="#" className="hover:text-gray-500">
          {t('women')}
        </a>
        <a href="#" className="hover:text-gray-500">
          {t('search')}
        </a>
        <a href="#" className="hover:text-gray-500">
          {t('shop')}
        </a>
        <a href="#" className="hover:text-gray-500">
          {t('page')}
        </a>
      </nav>
      <div className="flex gap-4 items-center">
        <SelectLocale />
        <button className="hover:text-gray-500">{t('signin')}</button>
        <button className="relative">
          🛒{" "}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full text-sm">
            0
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
