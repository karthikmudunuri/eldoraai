import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteBanner() {
  return (
    <div className="relative top-0 bg-[#f87171] py-3 text-black md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          to="https://github.com/karthikmudunuri/eldoraai"
          target="_blank"
          className="group inline-flex items-center justify-center text-center text-sm leading-loose"
        >
          ✨
          <span className="ml-2 font-[580] dark:font-[550]">
            {" "}
             
            Introducing Eldora AI – Create beautiful landing pages in minutes with just a prompt. ⭐ Support us by giving us a star on GitHub!
          </span>{" "}
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
