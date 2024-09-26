import { createFileRoute } from "@tanstack/react-router";
import { queryOptions } from "@tanstack/react-query";
import { api } from "@/lib/axios";

interface JobExperience {
  companyName: string;
  companyUrl: string;
  jobInCompany: {
    jobTitle: string;
    timeSpan: string;
    description: string[];
  };
}

interface Project {
  projectName: string;
  projectUrl: string;
  description: string[];
}

interface Skills {
  frameworks: string[];
  languages: string[];
  tools: string[];
  others: string[];
}

interface Resume {
  imageUrl: string;
  aboutMe: string[];
  jobExperience: JobExperience[];
  projects: Project[];
  skills: Skills;
}
async function getResume() {
  const res = await api.get("/resume");
  return res.data as Resume;
}

const resumeOptions = queryOptions({
  queryKey: ["resume"],
  queryFn: getResume,
  staleTime: 1000 * 60 * 30, // 30 minutes
});

export const Route = createFileRoute("/about")({
  loader: ({ context }) => context.queryClient.ensureQueryData(resumeOptions),
  component: About,
});

function About() {
  // const { data } = useSuspenseQuery(resumeOptions);
  return <div className="flex flex-col">Hello from About</div>;
}
