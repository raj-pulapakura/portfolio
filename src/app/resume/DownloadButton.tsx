import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface DownloadButtonProps {
  onClick: () => void;
  children?: ReactNode;
}

export default function DownloadButton({
  onClick,
  children,
}: DownloadButtonProps) {
  return (
    <button
      className="hover:bg-gray-100 active:bg-gray-400 text-lg text-white dark:text-black bg-light dark:bg-dark font-bold  px-5 py-3 rounded-lg mb-2 "
      onClick={onClick}
    >
      <FontAwesomeIcon className="mr-3" icon={faDownload} size="lg" />
      {children}
    </button>
  );
}
