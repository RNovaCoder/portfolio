'use client'

import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { usePathname } from 'next/navigation'
import { Menu, XSquare } from 'lucide-react'

const MobileNav = (props: { author?: string }) => {
  const [navShow, setNavShow] = useState(false)
  const pathname = usePathname()


  const onToggleNav = () => {
    setNavShow(!navShow)
    if (navShow) {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <Menu size={28} />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform-gpu opacity-95 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-zinc-900 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-5">
          <button
            className="mr-8 mt-7 h-8 w-8 active:scale-105 hover:scale-110 ease-in-out duration-100 transition-all"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <XSquare className="stroke-slate-800 dark:stroke-slate-200" size={28} />
          </button>
        </div>
        <div className="space-y-1 px-6 mr-4">
          {headerNavLinks.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={onToggleNav}
              className={`group flex p-3 px-5 rounded-md hover:bg-gray-200 hover:dark:bg-zinc-700/60 w-full justify-start cursor-pointer text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 transition-all duration-150 ease-in-out ${
                pathname === route.href
                  ? 'bg-gray-200 dark:bg-zinc-700/60 dark:text-primaryCentral p-2 '
                  : ''
              }
              `}
            >
              <div className="flex  group-hover:pl-4 items-center flex-1 transition-all duration-150 ease-in-out">
                {route.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-transparent text-white p-3">
          <div className="text-center text-base">
            <div className="p-2 bg-zinc-700 dark:bg-zinc-700/60 rounded-lg -ml-10 px-7">
              <p className="font-bold text-lg sign dark:text-white text-black max-w-[400px]">
                <span className="fast-flicker">{(props.author ?? '').substring(0, 2)}</span>
                {(props.author ?? '').substring(2, 4)}
                <span className="flicker">{(props.author ?? '').substring(4, 8)}</span>
                {(props.author ?? '').substring(8, 20)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
