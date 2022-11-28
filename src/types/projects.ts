export interface Project {
  name: string;
  url: string;
  image: string;
  desc: string;
  tags: string[];
}

export interface Projects {
  projects: Project[];
}
