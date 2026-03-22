import { GitHubSVG } from '../shared/SVG';

export default function SocialBar() {
  return (
    <div
      role="Social Lateral Links"
      data-interactive="true"
      className="fixed bottom-0 w-full flex justify-center items-center gap-10 z-30 backdrop-blur-sm
            xl:flex-col xl:w-fit xl:top-5 xl:right-3 xl:bottom-5"
    >
      <div className="relative grow h-0.5 xl:w-0.5 bg-sky-700 overflow-hidden"></div>

      <a
        className="w-5 h-6 xl:w-8 hover:scale-120 transition rounded-full"
        href="https://github.com/RoyNadiel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Red Social Github"
      >
        <GitHubSVG className="w-5 h-6 xl:w-8 xl:h-8 z-20" />
      </a>
      <a
        className="w-5 h-6 xl:w-8 hover:scale-120 transition"
        href="https://www.linkedin.com/in/roy-nadiel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Red Social LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 256"
        >
          <path
            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
            fill="#0A66C2"
          />
        </svg>
      </a>

      <div className="relative grow h-0.5 md:w-0.5 bg-sky-700"></div>
    </div>
  );
}
