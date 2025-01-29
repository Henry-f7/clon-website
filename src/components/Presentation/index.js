import Image from "next/image";
import clutch from "@/img/clutch.png";
import PresentationCarousel from "./PresentationCarousel";

const Presentation = () => {
  return (
    <div className="referral-program-background min-h-[845px]">
      <div className="px-8 h-full max-w-[1311px] items-center flex content-between mx-auto">
        <div className="flex gap-[100px] content-between object-contain relative w-full">
          <div className="items-start flex flex-col h-full justify-start">
            <h1 className="text-white text-[40px] leading-[1.3] font-bold max-w-[600px] mb-[57px]">
              Boost your Software team with Latin America talent. Go Beyond
              Staff Augmentation
            </h1>
            <p className="text-[25px] text-white font-semibold mb-[45px] text-justify leading-[1.6] max-w-[684px]">
              Whether you need one developer or an entire team, we have the
              expertise to find the right fit for your project. Plus, with our
              flexible engagement models, you can choose the level of support
              that works best for your needs.
            </p>
            <div className="flex flex-row items-center gap-[50px] w-full">
              <a className="items-center text-white bg-amber-500 flex justify-center leading-[64px] h-16 text-[25px] font-bold outline-none text-center no-underline w-[280px]">
                Get in Touch
              </a>
              <Image className="h-36 w-auto" src={clutch} alt="clutch" />
            </div>
          </div>
          <div className="h-[500px] min-h-[500px] w-[403px] ml-[52px] relative block">
            <PresentationCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
