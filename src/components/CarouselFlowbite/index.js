import { Carousel } from "flowbite-react";

const CarouselFlowbite = ({
  children = <></>,
  className = "",
  indicators = true,
  controls = true,
  slideInterval = 3000,
}) => {
  const hiddenControls = () => {
    if (!controls) {
      return <div style={{ display: "none" }}></div>;
    }

    return null;
  };

  return (
    <Carousel
      slideInterval={slideInterval}
      leftControl={hiddenControls()}
      rightControl={hiddenControls()}
      indicators={indicators}
      className={`${className}`}
    >
      {children}
    </Carousel>
  );
};

export default CarouselFlowbite;
