import Image from "next/image";
import PresentationCardSkills from "./PresentationCardSkills";

const PresentationCard = ({
  className = "",
  title = "",
  technology = "",
  text = "",
  skills = [],
  logo = "",
  nameLogo = "",
}) => {
  return (
    <div
      className={`${className} PresentationCarouselCard rounded-[10px] h-[500px] min-h-[500px] pb-[41px] px-[43px] pt-[21px] w-[399px]`}
    >
      <div className="PresentationCarouselCard-image items-center rounded-[50%] flex h-[98px] justify-center mb-[26px] ml-auto mr-auto w-[98px]">
        <Image
          className="h-auto"
          src={logo}
          alt={nameLogo}
          width={55}
          height={49}
        />
      </div>
      <div className="content-center items-center flex flex-col flex-nowrap justify-center mb-[19px] border-b border-gray-opaque">
        <h3 className="text-white text-lg">{title}</h3>
        <p className="block text-[15px] text-white">{technology}</p>
        <span className="text-white block text-xs mb-3">About me</span>
        <p className="text-white text-xs font-light h-[72px] mb-[17px] max-w-[307px] text-center w-full">
          {text}
        </p>
      </div>
      <button className="bg-transparent border border-light-grey border-r-[0] text-white block h-[34px] mb-6 mx-auto w-[105px]">
        Engage
      </button>
      <span className="text-white block text-xs mb-3">Skills:</span>
      <ul className="text-white flex flex-wrap text-xs font-thin list-none pl-0">
        <PresentationCardSkills skills={skills} />
      </ul>
    </div>
  );
};

export default PresentationCard;
