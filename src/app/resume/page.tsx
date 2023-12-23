"use client";

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
      <h1 className="text-5xl font-black mb-10 text-center">
        Are you a technical recruiter?
      </h1>
      <button
        className="hover:bg-gray-100 active:bg-gray-400 text-lg text-white dark:text-black bg-light dark:bg-dark font-bold  px-5 py-3 rounded-lg block mx-auto "
        onClick={() => download(fileUrl, filename)}
      >
        <FontAwesomeIcon className="mr-3" icon={faDownload} size="lg" />
        Download my resume
      </button>
    </main>
  );
}
