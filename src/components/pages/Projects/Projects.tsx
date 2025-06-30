import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projectList } from "@src/constants/projects.constants";
import { ProjectCard } from "./ProjectCard";

export const ProjectPage = () => {
  const options: any = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    arrows: false,
    gap: "24px",
    autoplay: true,
    pagination: false,
    interval: 2000,
    breakpoints: {
      768: {
        perPage: 1,
        perMove: 1,
        gap: "",
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
      },
    },
  };

  return (
    <Splide aria-label="My Favorite Images" options={options}>
      {projectList.map((item) => (
        <SplideSlide key={item.name}>
          <ProjectCard {...item} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
