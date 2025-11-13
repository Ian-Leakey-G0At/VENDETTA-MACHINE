import Link from "next/link";

export default function ArtistPage() {
  return (
    <main className="flex-grow pt-8 sm:pt-12">
      <div className="flex flex-col @container gap-12 lg:gap-16">
        <div className="flex flex-col-reverse @[640px]:flex-row w-full gap-8 @[640px]:gap-12 p-4">
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col">
              <p className="text-primary text-base font-medium leading-normal">
                Artist & Visionary
              </p>
              <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-extrabold leading-tight tracking-[-0.015em]">
                Glitch Please
              </h1>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
              A brief biography detailing the artist's background, their
              journey into the world of digital art, and the core inspirations
              that fuel their creative process. This section tells the story
              behind the art.
            </p>
            <div className="flex flex-col sm:flex-row w-full gap-3">
              <Link
                href="/"
                className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto hover:bg-opacity-90"
              >
                <span className="truncate">View My Art</span>
              </Link>
            </div>
          </div>
          <div className="w-full @[640px]:w-1/3 flex justify-center @[640px]:justify-end">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl w-48 h-48 sm:w-56 sm:h-56 @[640px]:w-full @[640px]:h-auto @[640px]:aspect-[3/4] border-4 border-primary/30"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbUPqGsW5i4H6ZrdjcddM8xqxQGxdnYOrM_pukmrrpqWwvpS4SFpeAbb5KTPxkugSok4eOdXegOSBlfS2ZVLnQeHLVxhm_10Gi6LGC8JYUSjDme9oDyHC_bbp2U2ykZL8wlfq8KD9mHDo2mWf6KSfjfIlXlKiIv5d-DLQkZiCDRZ2kdIJVhI6KHj0Y6MmTROgxmmcjnFRktLlNnumNKy4IqawQqzOvTuHnN7PqtHgeqPp_4AAzCY5XBZjEwCx2pzcvkzusS9w1Bb0")`,
              }}
            ></div>
          </div>
        </div>
        <div className="px-4 py-8 bg-black/5 dark:bg-white/5 rounded-xl">
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
            My Vision
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
            A short, powerful paragraph describing the artist's artistic
            philosophy and what drives their work. It delves into the themes
            of resilience, the beauty in imperfection, and the fusion of
            traditional art forms with a modern, digital aesthetic, embodying
            the spirit of Kintsugi Glow.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center text-center gap-4">
          <h3 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Connect with me
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
            Follow my process, get behind-the-scenes looks at new works, and
            connect with my community on social media.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              className="flex items-center justify-center size-12 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors"
              href="https://www.meta.ai/@glitchplease/"
              target="_blank"
            >
              <span
                aria-label="Meta AI Profile"
                className="material-symbols-outlined !text-2xl"
              >
                hub
              </span>
            </a>
            <a
              className="flex items-center justify-center size-12 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors"
              href="#"
            >
              <svg
                aria-label="Instagram Profile"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-center size-12 bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors"
              href="#"
            >
              <svg
                aria-label="X/Twitter Profile"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
