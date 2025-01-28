import CarouselFlowbite from "@/components/CarouselFlowbite";
import { heroCards } from "@/utils/data-card-presentation";
import PresentationCard from "./PresentationCard";
import { v4 as uuidv4 } from "uuid";

const PresentationCarousel = () => {
  const renderCards = () => {
    return (
      heroCards &&
      heroCards?.map((card) => {
        return (
          <div
            key={uuidv4()}
            className="relative h-full overflow-hidden rounded-lg px-1"
          >
            <PresentationCard
              logo={card.logo}
              nameLogo={card.title}
              technology={card.technology}
              text={card.text}
              title={card.title}
              skills={card.skills}
            />
          </div>
        );
      })
    );
  };

  return (
    <CarouselFlowbite slideInterval={4000} controls={false} indicators={false} className="transition-all duration-1000 ease-in-out">
      {renderCards()}
    </CarouselFlowbite>
  );
};

export default PresentationCarousel;
