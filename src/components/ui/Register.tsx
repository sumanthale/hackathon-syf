import Logo from "../../components/ui/logo";
import AuthBg from "../../assets/images/auth-bg.svg";

export default function Register() {
  return (
    <>
      <header className="absolute z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex grow">
        <div
          className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
        </div>

        {/* Content */}
        <div className="w-full">
          <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem]">
            <div className="px-4 sm:px-6">
              <div className="mx-auto w-full max-w-sm">
                <div className="py-16">
                  <>
                    <div className="mb-10">
                      <h1 className="text-4xl font-bold">
                        Register for Hackathon
                      </h1>
                    </div>

                    {/* Form */}
                    <form>
                      <div className="space-y-4">
                        <div>
                          <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="name"
                          >
                            Full name
                          </label>
                          <input
                            id="name"
                            className="form-input w-full py-2"
                            type="text"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            className="form-input w-full py-2"
                            type="email"
                            placeholder="johndoe@syf.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="SSO/Employee ID"
                          >
                            SSO / Employee ID
                          </label>
                          <input
                            id="phone"
                            className="form-input w-full py-2"
                            type="text"
                            placeholder="XXXXXXXXX"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="team"
                          >
                            Team Name
                          </label>
                          <input
                            id="team"
                            className="form-input w-full py-2"
                            type="text"
                            autoComplete="on"
                            placeholder="••••••••"
                            required
                          />
                        </div>
                        <div>
                          <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="team"
                          >
                            Company
                          </label>
                          <input
                            id="team"
                            className="form-input w-full py-2"
                            type="text"
                            autoComplete="on"
                            placeholder="••••••••"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-6 space-y-3">
                        <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
                          Register
                        </button>
                      </div>
                    </form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* Right side */}
          <div className="relative my-6 mr-6 hidden w-[572px] shrink-0 overflow-hidden rounded-2xl lg:block">
            {/* Background */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -ml-24 -translate-x-1/2 -translate-y-1/2 bg-blue-50"
              aria-hidden="true"
            >
              <img
                src={AuthBg}
                className="max-w-none"
                width={1285}
                height={1684}
                alt="Auth bg"
              />
            </div>
            {/* Illustration */}
            <div className="absolute left-32 top-1/2 w-[500px] -translate-y-1/2">
              <div className="aspect-video w-full rounded-2xl bg-gray-900 px-5 py-3 shadow-xl transition duration-300">
                <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                  <span className="text-[13px] font-medium text-white">
                    synchrony.com
                  </span>
                </div>
                <div className="font-mono text-sm text-gray-500 transition duration-300 [&_span]:opacity-0">
                  <span className="animate-[code-1_10s_infinite] text-gray-200">
                    hackathon
                  </span>{" "}
                  <span className="animate-[code-2_10s_infinite]">
                    --registry=https://npm.pkg.github.com
                  </span>
                  <br />
                  <span className="animate-[code-3_10s_infinite]">
                    --scope=@phanatic
                  </span>{" "}
                  <span className="animate-[code-4_10s_infinite]">
                    Successfully logged-in.
                  </span>
                  <br />
                  <br />
                  <span className="animate-[code-5_10s_infinite] text-gray-200">
                    npm publish
                  </span>
                  <br />
                  <span className="animate-[code-6_10s_infinite]">
                    Package published.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
