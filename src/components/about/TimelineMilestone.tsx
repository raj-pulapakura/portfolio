import { ReactNode } from "react";

export default function TimelineMilestone({
  text,
  description,
}: {
  text: string | ReactNode;
  description: string | ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl font-black">{text}</h3>
      {description}
    </div>
  );
}
