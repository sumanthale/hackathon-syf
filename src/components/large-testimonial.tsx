import TestimonialImg from "../assets/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* <div>
            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-500">
                1 Aug, 2023
              </h3>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
              <a className="absolute inset-0 z-[1]" href="#"></a>

              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  <svg
                    className="flex-shrink-0 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" x2="8" y1="13" y2="13"></line>
                    <line x1="16" x2="8" y1="17" y2="17"></line>
                    <line x1="10" x2="8" y1="9" y2="9"></line>
                  </svg>
                  Created "Preline in React" task
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Find more detailed insctructions here.
                </p>
                <button
                  type="button"
                  className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none"
                >
                  <img
                    className="flex-shrink-0 size-4 rounded-full"
                    src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  James Collins
                </button>
              </div>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
              <a className="absolute inset-0 z-[1]" href="#"></a>

              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  Release v5.2.0 quick bug fix 🐞
                </h3>
              </div>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
              <a className="absolute inset-0 z-[1]" href="#"></a>

              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  Marked "Install Charts" completed
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Finally! You can check it out here.
                </p>
              </div>
            </div>

            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-500">
                31 Jul, 2023
              </h3>
            </div>

            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
              <a className="absolute inset-0 z-[1]" href="#"></a>

              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                </div>
              </div>

              <div className="grow p-2 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                  Take a break ⛳️
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Just chill for now... 😉
                </p>
              </div>
            </div>
          </div> */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="-my-6">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                  Registration Close
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Aug, 2024
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Registration will close
                  </div>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                  The Ideation
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Aug, 2024
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Ideation will start
                  </div>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                  Mentor Discussion
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Sept, 2024
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Mentor Discusstion will start
                  </div>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </div>
              </div>

              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                  Hackathon Day
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Sept, 2024
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Hackation begins
                  </div>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
