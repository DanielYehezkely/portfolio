export type Project = {
  id: string;
  title: string;
  text: string;
  imgUrl?: string;
  url?: string;
  github?: string;
};

export async function listProjects(): Promise<Project[]> {
  const res = await fetch('/api/projects'); 
  if (!res.ok) throw new Error('Failed to load projects');
  return res.json();
}
