export interface ProjecCardInterface {
  name: string;
  description: string;
  webPage: WebPageInterface;
  github: string;
  technologies: any[];
  completed: boolean;
  statusIcon: string;
}

export interface WebPageInterface {
  url: string;
  name: string;
}

export interface RepositoryInterface {
  url: string;
  icon: any;
}
