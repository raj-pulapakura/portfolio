import { ReactNode } from "react";

export default function TimelineMilestone({
  text,
  description,
  miniMilestones,
  icons,
}: {
  text: string | ReactNode;
  description: string | ReactNode;
  miniMilestones?: (ReactNode | string)[];
  icons?: ReactNode[];
}) {
  return (
    <div className="w-full">
      <h3 className={`text-2xl font-black text-center`}>{text}</h3>
      <p className={`text-lg text-center font-bold`}>{description}</p>
      <div className="mx-auto w-fit mt-3 gap-3 flex">
        {icons && icons.length && icons.map((icon) => icon)}
      </div>
      <div className="mt-5 mb-5">
        {miniMilestones &&
          miniMilestones.map((miniMilestone) => (
            <p className="text-center">{miniMilestone}</p>
          ))}
      </div>
    </div>
  );
}
