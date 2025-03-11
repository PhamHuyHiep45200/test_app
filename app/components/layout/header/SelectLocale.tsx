"use client";
import { optionLocale } from "@/app/_contants/option.contant";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function SelectLocale() {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<string>('');
  const router = useRouter();
  const params = useParams();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleConfigLocale = (locale: { value: string; label: string }) => {
    setLocale(locale.label);
    setIsOpen(false);
    router.replace(`/${locale.value}`);
  }

  useEffect(() => {
    if (params.locale) {
      setLocale(optionLocale.find((e) => e.value === params.locale)?.label || '');
    }
  }, [params]);

  console.log(params);


  return (
    <>
      <button
        className="border px-3 py-1 rounded flex items-center gap-2"
        onClick={toggleDropdown}
      >
        {locale}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
          <ul className="py-2 text-sm text-gray-700">
            {optionLocale.map((locale) => (
              <li
                key={locale.value}
                className="hover:bg-gray-200 cursor-pointer"
              >
                <button
                  onClick={() => handleConfigLocale(locale)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleConfigLocale(locale);
                    }
                  }}
                  className="flex items-center w-full px-4 py-2 text-left"
                >
                  {locale.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SelectLocale;
