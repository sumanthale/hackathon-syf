import PageIllustration from "../components/page-illustration";
import Avatar01 from "../assets/images/avatar-01.jpg";
import Avatar02 from "../assets/images/avatar-02.jpg";
import Avatar03 from "../assets/images/avatar-03.jpg";
import Avatar04 from "../assets/images/avatar-04.jpg";
import Avatar05 from "../assets/images/avatar-05.jpg";
import Avatar06 from "../assets/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="flex justify-center space-x-1">
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/4616/4616734.png"
                  }
                  width={42}
                  height={42}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/2316/2316109.png"
                  }
                  width={42}
                  height={42}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/1449/1449312.png"
                  }
                  width={42}
                  height={42}
                  alt="Avatar 04"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/10884/10884219.png"
                  }
                  width={42}
                  height={42}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/12073/12073393.png"
                  }
                  width={42}
                  height={42}
                  alt="Avatar 02"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={"https://cdn-icons-png.flaticon.com/512/508/508250.png"}
                  width={42}
                  height={42}
                  alt="Avatar 03"
                />

                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/5408/5408798.png"
                  }
                  width={42}
                  height={42}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              The hackathon you're <br className="max-lg:hidden" />
              wating for
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Join us for an epic convergence of creativity, innovation, and
                collaboration where ideas transform into reality, and solutions
                redefine the future
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Register Now{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  synchrony.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  hackathon start
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --fuel=coffee --mood=excited
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --extension=brainstorm
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully started.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npx create-epic-app
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  echo "Keep calm and code on!" {">"} /dev/motivation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
