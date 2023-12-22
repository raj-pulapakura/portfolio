"use client";

import useDownloader from "react-use-downloader";

export default function ResumePage() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/Raj Pulapakura - Resume.pdf";
  const filename = "Raj Pulapakura - Resume.pdf";

  return (
    <main>
      <h1>Are you a technical recruiter?</h1>
      <p>Download my updated resume.</p>

      <button onClick={() => download(fileUrl, filename)}>
        Click to download my resume.
      </button>
    </main>
  );
}
