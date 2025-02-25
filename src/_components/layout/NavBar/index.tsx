'use client'
import Route from '@/_enums/Route'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import classNames from 'classnames'

type NavBarItemProps = {
  route: Route
  renderSvg: (props: { className: string }) => ReactNode
}

const NavBarItem = ({ route, renderSvg }: NavBarItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === route

  return (
    <Link
      href={route}
      className="inline-flex flex-col items-center justify-center px-5 group"
    >
      {renderSvg({
        className: classNames({
          'text-gray-400 group-hover:text-white': !isActive,
          'text-white': isActive,
        }),
      })}
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-gray-700 border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <NavBarItem
          route={Route.HOME}
          renderSvg={({ className }) => (
            <svg
              className={classNames('w-5 h-5 mb-1', className)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
          )}
        />
        <NavBarItem
          route={Route.CALENDAR}
          renderSvg={({ className }) => (
            <svg
              className={classNames('w-7 h-7 mb-1', className)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
          )}
        />
        <div className="flex items-center justify-center">
          <Link
            href={Route.ADD}
            className="rounded-full inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </Link>
        </div>
        <NavBarItem
          route={Route.CHART}
          renderSvg={({ className }) => (
            <svg
              className={classNames('w-7 h-7 mb-1', className)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
              />
            </svg>
          )}
        />
        <NavBarItem
          route={Route.PROFILE}
          renderSvg={({ className }) => (
            <svg
              className={classNames('w-6 h-6 mb-1', className)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          )}
        />
      </div>
    </div>
  )
}

export default NavBar
