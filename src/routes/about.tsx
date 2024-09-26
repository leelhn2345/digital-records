import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

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
  const { data } = useSuspenseQuery(resumeOptions);
  return (
    <div className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-4">
      <section className="text-center lg:text-left">
        <img
          src={data.imageUrl}
          alt="handsome guy here"
          loading="lazy"
          className="mx-auto mb-6 max-h-96 rounded-3xl dark:border-2 dark:border-white"
        />
        <h1 className="mb-4 text-2xl font-bold">
          <span className="text-gray-400">Lee Lai Hon</span> Nelson
        </h1>
        <h3 className="mb-4">Software Engineer | Fullstack Developer</h3>
        <p className="text-sm">B.Eng | Electrical Engineering</p>
        <p className="text-sm">National University of Singapore</p>
      </section>
      <Separator className="lg:hidden" />
      <Accordion className="col-span-3 w-full" type="multiple">
        <AccordionItem value="aboutMe">
          <AccordionTrigger>About Me</AccordionTrigger>
          <AccordionContent>
            {data.aboutMe.map((desc, i) => (
              <p key={`aboutMe-${i}`}>{desc}</p>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            e fr gertgherth r5yhj yrth trh yrt jtyj rtyj yt nrty rtthrtg hyt nyt
            jtyj ytyrh rthrt{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="jobExperience">
          <AccordionTrigger>Job Experience</AccordionTrigger>
          <AccordionContent>
            e fr gertgherth r5yhj yrth trh yrt jtyj rtyj yt nrty rtthrtg hyt nyt
            jtyj ytyrh rthrt{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="projects">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent>
            e fr gertgherth r5yhj yrth trh yrt jtyj rtyj yt nrty rtthrtg hyt nyt
            jtyj ytyrh rthrt{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
