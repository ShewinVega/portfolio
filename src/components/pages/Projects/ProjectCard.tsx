import type { RepositoryInterface, WebPageInterface } from "./interfaces";
import {
  FaLock,
  FaRegCheckCircle,
  FaRegClock,
  FaLink,
  FaGithub,
} from "react-icons/fa";

interface Props {
  profileImage: ImageMetadata;
  name: string;
  description: string;
  webPage: WebPageInterface;
  repository: RepositoryInterface;
  technologies: any[];
  completed: boolean;
}

export const ProjectCard = ({
  profileImage,
  name,
  description,
  repository,
  webPage,
  technologies,
  completed,
}: Props) => {
  return (
    <article className="border-2 border-white/10 rounded-lg py-4 flex flex-col gap-y-2 justify-center lg:max-w-[380px] lg:h-full">
      <div className="h-[250px] rounded-lg">
        <img
          src={profileImage.src}
          alt="Provitional image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center px-2">
        <span className="text-white text-h3 font-semibold">{name}</span>
      </div>
      {/* Status and redirection */}
      <div className="flex gap-x-3 items-center px-2">
        {webPage.url.length !== 0 && (
          <div className="flex gap-x-1 items-center">
            <FaLink
              className="size-3"
              color={`${webPage.url.length !== 0 ? "white" : "red"}`}
            />
            <a href={webPage.url} target="_blank">
              <span
                className={`text-white text-h6 opacity-60 ${webPage.url.length === 0 && "line-through"}`}
              >
                {webPage.name}
              </span>
            </a>
          </div>
        )}
        {repository.url && (
          <a
            href={repository.url}
            target="_blank"
            className="flex gap-x-1 items-center"
          >
            <FaGithub className="size-3" color="white" />
            <span className="text-white text-h6 opacity-60">Source</span>
          </a>
        )}
      </div>
      <p className="text-white text-h5 text-pretty leading-6 opacity-80 px-2">
        {description}
      </p>
      <hr className="text-secondary-200" />
      <div className="flex gap-6 items-center justify-start px-2">
        {technologies.map((iconName, index) => (
          <img key={index} src={iconName.src} className="size-5" />
        ))}
      </div>
      <hr className="text-secondary-200" />
    </article>
  );
};
