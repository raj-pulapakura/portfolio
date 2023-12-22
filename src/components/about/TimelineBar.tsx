import Image from "next/image";
import { ReactNode } from "react";

export default function TimelineBar({
  barHeight = 64,
  miniMilestones,
}: {
  barHeight?: number;
  miniMilestones?: (ReactNode | string)[];
}) {
  return (
    <div className="w-full">
      {miniMilestones ? (
        <MiniMilestonesTrack miniMilestones={miniMilestones} />
      ) : (
        <RegularTimelineBar />
      )}
    </div>
  );
}

function MiniMilestonesTrack({
  miniMilestones,
}: {
  miniMilestones: (ReactNode | string)[];
}) {
  return (
    <div className="flex items-center w-full">
      <Image
        className="h-full"
        src="/timeline bar.svg"
        alt="inward line"
        width="48"
        height="8"
      />
      <div>
        {miniMilestones.map((milestone) => (
          <div className="flex items-center justify-between">
            <div className="h-4 w-4 bg-white rounded-full -translate-x-3"></div>
            <p className="w-full text-sm">{milestone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegularTimelineBar() {
  return (
    <div
      className={`my-2 w-2 h-48 bg-gradient-to-b from-transparent via-dark to-transparent`}
    ></div>
  );
}
