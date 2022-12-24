import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  CircleStackIcon,
  DocumentMagnifyingGlassIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WalletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import Logo from "../Logo";
import Profile from "./Profile";
import Link from "next/link";

const solutions = [
  {
    name: "Customer Manager",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Budget Control",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: WalletIcon,
  },
  {
    name: "Cryptocurrency quote",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: CircleStackIcon,
  },
  {
    name: "Drink Finder",
    description: "Connect with third-party tools that you're already using.",
    href: "/finder",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <Popover className="sm:fixed w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {session && (
            <Popover.Group
              as="nav"
              className="hidden space-x-10 md:flex items-center"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-blue-600" : "text-black",
                        "group inline-flex items-center rounded-md bg-white text-sm font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      )}
                    >
                      <span>Applications</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-blue-600" : "text-black",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-blue-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-sm font-normal text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-sm font-normal text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-sm font-normal text-black hover:text-gray-900"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-sm font-normal text-black hover:text-gray-900"
              >
                Tools
              </a>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-blue-600" : "text-black",
                        "group inline-flex items-center rounded-md bg-white text-sm font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      )}
                    >
                      <span>Technologies</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-blue-600" : "text-black",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-blue-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-sm font-normal text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm font-normal text-gray-500">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                  <li
                                    key={post.id}
                                    className="truncate text-sm"
                                  >
                                    <a
                                      href={post.href}
                                      className="font-normal text-gray-900 hover:text-gray-700"
                                    >
                                      {post.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-normal text-blue-600 hover:text-blue-500"
                              >
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          )}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {!session ? (
              <>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_21_7231)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.48 0C4.6898 0 0 4.6898 0 10.48C0 15.1174 2.9999 19.0343 7.1657 20.4229C7.6897 20.5146 7.8862 20.2002 7.8862 19.9251C7.8862 19.6762 7.8731 18.8509 7.8731 17.9732C5.24 18.4579 4.5588 17.3313 4.3492 16.7418C4.2313 16.4405 3.7204 15.5104 3.275 15.2615C2.9082 15.065 2.3842 14.5803 3.2619 14.5672C4.0872 14.5541 4.6767 15.327 4.8732 15.6414C5.8164 17.2265 7.3229 16.7811 7.9255 16.506C8.0172 15.8248 8.2923 15.3663 8.5936 15.1043C6.2618 14.8423 3.8252 13.9384 3.8252 9.9298C3.8252 8.7901 4.2313 7.8469 4.8994 7.1133C4.7946 6.8513 4.4278 5.7771 5.0042 4.3361C5.0042 4.3361 5.8819 4.061 7.8862 5.4103C8.7246 5.1745 9.6154 5.0566 10.5062 5.0566C11.397 5.0566 12.2878 5.1745 13.1262 5.4103C15.1305 4.0479 16.0082 4.3361 16.0082 4.3361C16.5846 5.7771 16.2178 6.8513 16.113 7.1133C16.7811 7.8469 17.1872 8.777 17.1872 9.9298C17.1872 13.9515 14.7375 14.8423 12.4057 15.1043C12.7856 15.4318 13.1131 16.0606 13.1131 17.0431C13.1131 18.4448 13.1 19.5714 13.1 19.9251C13.1 20.2002 13.2965 20.5277 13.8205 20.4229C17.9601 19.0343 20.96 15.1043 20.96 10.48C20.96 4.6898 16.2702 0 10.48 0Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_7231">
                        <rect width="20.96" height="20.96" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </>
            ) : (
              <Profile session={session} />
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-sm font-normal text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-sm font-normal text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-sm font-normal text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-normal text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-normal text-white shadow-sm hover:bg-blue-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-sm font-normal text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
