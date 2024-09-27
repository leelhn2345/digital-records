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
import { ContactMe } from "@/components/layout/contact-me";

interface JobExperience {
  companyName: string;
  companyUrl: string;
  jobsInCompany: {
    jobTitle: string;
    timeSpan: string;
    description: string[];
  }[];
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
    <div className="flex w-full flex-col gap-8 lg:grid lg:grid-cols-4">
      <section className="text-center lg:text-left">
        <img
          src={data.imageUrl}
          alt="handsome guy here"
          // loading="lazy"
          className="mx-auto mb-6 max-h-96 rounded-3xl dark:border-2 dark:border-white"
        />
        <h1 className="mb-4 text-2xl font-bold">
          <span className="text-gray-400">Lee Lai Hon</span> Nelson
        </h1>
        <h3 className="mb-4">Software Engineer | Fullstack Developer</h3>
        <p className="text-sm">B.Eng | Electrical Engineering</p>
        <p className="text-sm">National University of Singapore</p>
        <ContactMe className="my-4" />
      </section>
      <Separator className="lg:hidden" />
      <Accordion className="col-span-3 w-full" type="multiple">
        <AccordionItem value="aboutMe">
          <AccordionTrigger className="text-xl">About Me</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-justify">
              {data.aboutMe.map((desc, i) => (
                <p key={`aboutMe-${i}`}>{desc}</p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger className="text-xl">Skills</AccordionTrigger>
          <AccordionContent>
            e fr gertgherth r5yhj yrth trh yrt jtyj rtyj yt nrty rtthrtg hyt nyt
            jtyj ytyrh rthrt{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="jobExperience">
          <AccordionTrigger className="text-xl">
            Job Experience
          </AccordionTrigger>
          <AccordionContent>
            <ol className="relative start-1.5 -mt-5 border-s border-gray-200 dark:border-gray-700">
              {data.jobExperience.map((jobEx) => (
                <li key={jobEx.companyName} className="mb-8 ms-4">
                  <div
                    className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200
                      dark:border-gray-900 dark:bg-gray-700"
                  ></div>
                  <div className="my-4 flex flex-col gap-2">
                    <a
                      href={jobEx.companyUrl}
                      target="_blank"
                      className="w-fit text-lg font-semibold hover:underline hover:underline-offset-4"
                    >
                      <h3>{jobEx.companyName}</h3>
                    </a>
                    {jobEx.jobsInCompany.map((y) => (
                      <div
                        key={`${jobEx.companyName}-${y.jobTitle}`}
                        className="mb-4"
                      >
                        <div className="flex items-center justify-between text-base">
                          <h4 className="my-3 italic">{y.jobTitle}</h4>
                          <time className="mb-1 mr-2 text-sm font-normal leading-none text-muted-foreground">
                            {y.timeSpan}
                          </time>
                        </div>
                        <ul className="ml-5 mr-2 list-disc space-y-2 text-justify">
                          {y.description.map((desc, num) => (
                            <li key={jobEx.companyName + num}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="projects">
          <AccordionTrigger className="text-xl">Projects</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {data.projects.map((x) => (
                <div key={x.projectName}>
                  <a
                    href={x.projectUrl}
                    className="text-base font-semibold hover:underline hover:underline-offset-4"
                  >
                    {x.projectName}
                  </a>
                  <ul className="ml-5 mr-2 mt-4 list-disc space-y-2 text-justify">
                    {x.description.map((desc, i) => (
                      <li key={x.projectName + i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
