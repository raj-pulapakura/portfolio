"use client";

import Email from "@/components/Email";
import DownloadButton from "./DownloadButton";
import { useDownloadPdf } from "@/hooks/useDownloadPdf";

export default function ResumePage() {
  const downloadPdf = useDownloadPdf();

  return (
    <main className="">
      <h1 className="text-4xl font-black mb-10 text-left">
        Want to know how I can add value to your company?
      </h1>
      <p className="mb-10 text-left">
        I would love to chat about potential roles as a Software Engineer, Full
        Stack Developer, or Machine Learning Engineer. Kindly download my resume
        using the button below, and email me at <Email /> to discuss further any
        opportunities.
      </p>
      <div className="flex gap-5">
        <DownloadButton
          onClick={() =>
            downloadPdf(
              "/resumes/Raj Pulapakura - Machine Learning Engineer Resume.pdf",
              "Raj Pulapakura - Machine Learning Engineer Resume.pdf"
            )
          }
        >
          Machine Learning Engineer Resume
        </DownloadButton>
        <DownloadButton
          onClick={() =>
            downloadPdf(
              "/resumes/Raj Pulapakura - Full Stack Software Engineer Resume.pdf",
              "Raj Pulapakura - Resume - Full Stack Software Engineer Resume.pdf"
            )
          }
        >
          Full Stack Engineer Resume
        </DownloadButton>
      </div>
    </main>
  );
}
