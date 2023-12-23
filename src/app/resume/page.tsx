"use client";

import Email from "@/components/Email";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDownloader from "react-use-downloader";

export default function ResumePage() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/Raj Pulapakura - Resume.pdf";
  const filename = "Raj Pulapakura - Resume.pdf";

  return (
    <main className="">
      <h1 className="text-4xl font-black mb-10 text-left">
        Want know how I can add value to your company?
      </h1>
      <p className="mb-10 text-left">
        I would love to chat about potential roles as a Software Engineer, Full
        Stack Developer, or Machine Learning Engineer. Kindly download my resume
        using the button below, and email me at <Email /> to discuss further any
        opportunities.
      </p>
      <button
        className="hover:bg-gray-100 active:bg-gray-400 text-lg text-white dark:text-black bg-light dark:bg-dark font-bold  px-5 py-3 rounded-lg mb-20 "
        onClick={() => download(fileUrl, filename)}
      >
        <FontAwesomeIcon className="mr-3" icon={faDownload} size="lg" />
        Download my resume
      </button>
    </main>
  );
}
