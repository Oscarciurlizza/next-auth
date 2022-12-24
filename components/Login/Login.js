import { LockClosedIcon } from "@heroicons/react/20/solid";
import Logo from "../Logo";

export default function Login({ signIn }) {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Logo />
            <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
              Welcome to Goi.io ✨
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Or{" "}
              <a
                href="#"
                className="font-normal text-black hover:text-blue-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <section className="mt-8">
            <div className="space-y-5">
              <button
                onClick={() => signIn("github")}
                className="group relative flex w-full justify-center rounded-md border border-black bg-black py-2.5 px-4 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_21_7231)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.48 0C4.6898 0 0 4.6898 0 10.48C0 15.1174 2.9999 19.0343 7.1657 20.4229C7.6897 20.5146 7.8862 20.2002 7.8862 19.9251C7.8862 19.6762 7.8731 18.8509 7.8731 17.9732C5.24 18.4579 4.5588 17.3313 4.3492 16.7418C4.2313 16.4405 3.7204 15.5104 3.275 15.2615C2.9082 15.065 2.3842 14.5803 3.2619 14.5672C4.0872 14.5541 4.6767 15.327 4.8732 15.6414C5.8164 17.2265 7.3229 16.7811 7.9255 16.506C8.0172 15.8248 8.2923 15.3663 8.5936 15.1043C6.2618 14.8423 3.8252 13.9384 3.8252 9.9298C3.8252 8.7901 4.2313 7.8469 4.8994 7.1133C4.7946 6.8513 4.4278 5.7771 5.0042 4.3361C5.0042 4.3361 5.8819 4.061 7.8862 5.4103C8.7246 5.1745 9.6154 5.0566 10.5062 5.0566C11.397 5.0566 12.2878 5.1745 13.1262 5.4103C15.1305 4.0479 16.0082 4.3361 16.0082 4.3361C16.5846 5.7771 16.2178 6.8513 16.113 7.1133C16.7811 7.8469 17.1872 8.777 17.1872 9.9298C17.1872 13.9515 14.7375 14.8423 12.4057 15.1043C12.7856 15.4318 13.1131 16.0606 13.1131 17.0431C13.1131 18.4448 13.1 19.5714 13.1 19.9251C13.1 20.2002 13.2965 20.5277 13.8205 20.4229C17.9601 19.0343 20.96 15.1043 20.96 10.48C20.96 4.6898 16.2702 0 10.48 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_7231">
                        <rect width="20.96" height="20.96" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Sign in with GitHub
              </button>
              <button
                onClick={() => signIn("google")}
                className="group relative flex w-full justify-center rounded-md border-transparent bg-white border border-black py-2.5 px-4 text-sm font-normal text-black hover:bg-bluered-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M10.3301 4.99414C9.56819 4.25857 8.59908 3.88404 7.51969 3.88404C5.60486 3.88404 3.98411 5.18984 3.40598 6.94441C3.25894 7.3898 3.1754 7.86557 3.1754 8.35482C3.1754 8.84406 3.25894 9.31981 3.40597 9.76519C3.98409 11.5198 5.60486 12.8256 7.51969 12.8256C8.50885 12.8256 9.35097 12.5624 10.0093 12.117C10.7879 11.5906 11.3059 10.8045 11.4763 9.87657H7.51968V7.00515H14.4438C14.5307 7.49103 14.5775 7.99716 14.5775 8.52353C14.5775 10.7842 13.7755 12.6873 12.3853 13.9796C11.1689 15.1133 9.50467 15.778 7.51969 15.778C4.64578 15.778 2.15952 14.1145 0.949802 11.6885C0.45188 10.6864 0.167816 9.55265 0.167816 8.35482C0.167816 7.15699 0.451866 6.02327 0.949788 5.02114C2.1595 2.59512 4.64577 0.931641 7.51969 0.931641C9.50135 0.931641 11.1655 1.66721 12.4388 2.86504L10.3301 4.99414Z"
                      fill="black"
                    />
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
