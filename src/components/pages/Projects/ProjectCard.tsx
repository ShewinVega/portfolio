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
    <article className="border-2 border-white/10 rounded-lg p-6 flex flex-col gap-y-2 justify-center lg:max-w-[380px]">
      <div className="h-[250px] rounded-lg">
        <img
          src={profileImage.src}
          alt="Provitional image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white text-h3 font-semibold">{name}</span>
        <div className="flex gap-x-1">
          <span className="text-white">Feb, 2025</span>
        </div>
      </div>
      {/* Status and redirection */}
      <div className="flex gap-x-3 items-center">
        {completed ? (
          <div className="flex gap-x-3 items-center">
            <FaRegCheckCircle className="size-3" color="green" />
            <span className="text-white text-h6 opacity-60">Completado</span>
          </div>
        ) : (
          <div className="flex gap-x-1 items-center">
            <FaRegClock className="size-3 text-primary" />
            <span className="text-white text-h6 opacity-60">En curso</span>
          </div>
        )}
        <div className="flex gap-x-1 items-center">
          <FaLink
            className="size-3"
            color={`${webPage.url.length !== 0 ? "white" : "red"}`}
          />
          {webPage.url.length !== 0 ? (
            <a href={webPage.url} target="_blank">
              <span
                className={`text-white text-h6 opacity-60 ${webPage.url.length === 0 && "line-through"}`}
              >
                {webPage.name}
              </span>
            </a>
          ) : (
            <span
              className={`text-white text-h6 opacity-60 ${webPage.url.length === 0 && "line-through"}`}
            >
              {webPage.name}
            </span>
          )}
        </div>
        {repository.url ? (
          <a
            href={repository.url}
            target="_blank"
            className="flex gap-x-1 items-center"
          >
            <FaGithub className="size-3" color="white" />
            <span className="text-white text-h6 opacity-60">Source</span>
          </a>
        ) : (
          <div className="flex gap-x-1 items-center cursor-pointer">
            <FaLock className="size-3" color="red" />
            <span className="text-white text-h6 opacity-60 line-through ">
              Source
            </span>
          </div>
        )}
      </div>
      <p className="text-white text-h5 text-pretty leading-6 opacity-80">
        {description}
      </p>
      <hr className="text-secondary-200" />
      <div className="flex gap-6 items-center justify-start">
        {technologies.map((iconName, index) => (
          <img key={index} src={iconName.src} className="size-5" />
        ))}
      </div>
      <hr className="text-secondary-200" />
    </article>
  );
};
