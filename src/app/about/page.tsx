import TimelineBar from "@/components/about/TimelineBar";
import TimelineMilestone from "@/components/about/TimelineMilestone";
import {
  faAppStore,
  faCss3,
  faDocker,
  faGooglePlay,
  faHtml5,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faAward, faCode, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

// TODO: use better icons and get coloured icons from web and put in public and use

export default function AboutPage() {
  return (
    <main>
      <h1 className="text-6xl mb-5">👋👋👋</h1>
      <h1 className="text-6xl font-black mb-3">Hi, I'm Raj.</h1>
      <h2 className="text-3xl font-black mb-10">
        I live in Melbourne, Australia.
      </h2>
      <Image
        className="w-full rounded-lg mb-20"
        src="/biking.jpg"
        alt="Me biking"
        width="400"
        height="400"
      />

      <h1 className="text-6xl font-black text-center">
        My dev journey started in the beginning of 2021...
      </h1>

      <TimelineBar />

      <TimelineMilestone
        text="Jan 2021"
        description="Learned Python and programming fundamentals."
        icons={[
          <FontAwesomeIcon icon={faPython} size="2x" />,
          <FontAwesomeIcon icon={faCode} size="2x" />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Jun 2021"
        description={
          <p>
            Learned Kotlin and built my first app <em>Number Predictor</em>.
          </p>
        }
        icons={[
          <FontAwesomeIcon icon={faGooglePlay} size="2x" />,
          <FontAwesomeIcon icon={faAppStore} size="2x" />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Sep 2021"
        description="Discovered and mastered web development. Learned HTML, CSS, JavaScript,
        TypeScript and React."
        icons={[
          <FontAwesomeIcon icon={faHtml5} size="2x" />,
          <FontAwesomeIcon icon={faCss3} size="2x" />,
          <FontAwesomeIcon icon={faJs} size="2x" />,
          <FontAwesomeIcon icon={faDocker} size="2x" />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Mar 2022"
        description="Learned how to build cross-platform apps with Flutter."
        miniMilestones={[
          <p>
            Rebuilt <em>Number Predictor</em> with Flutter.
          </p>,
        ]}
        icons={[
          <FontAwesomeIcon icon={faGooglePlay} size="2x" />,
          <FontAwesomeIcon icon={faAppStore} size="2x" />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Jun 2022"
        description="Discovered Machine Learning"
        miniMilestones={[
          <p>Learned my first ML algorithms.</p>,
          <p>Learned Linear Algebra, Probablity, and Statistics.</p>,
          <p>Learned TensorFlow and PyTorch</p>,
        ]}
        icons={[
          <FontAwesomeIcon icon={faGooglePlay} size="2x" />,
          <FontAwesomeIcon icon={faAppStore} size="2x" />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Jan 2023"
        description="Dived into Deep Learning and Computer Vision"
        miniMilestones={[
          <p>
            <FontAwesomeIcon icon={faFile} /> Real-time Gesture Detection Dino
            Game
          </p>,
          <p>
            <FontAwesomeIcon icon={faFile} /> Image Search Engine
          </p>,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Jul 2023"
        description="Mastered Calculus for ML"
        miniMilestones={[
          <p>Mastered Differential Calculus</p>,
          <p>Learned about Partial Derivatives</p>,
          <p>Finally understood the Back Propagation algorithm</p>,
          <p>Implemented a neural network from scratch!</p>,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Aug 2023"
        description="More Deep Learning "
        miniMilestones={[
          <p>Took the TensorFlow Developer Certificate Exam and passed!</p>,
          <p>
            <FontAwesomeIcon icon={faFile} /> Comment Toxicity Classifier
          </p>,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Sep 2023"
        description="Upskilling"
        miniMilestones={[
          <p>
            <FontAwesomeIcon icon={faAward} /> IBM Machine Learning Professional
            Certificate
          </p>,
          <p>
            <FontAwesomeIcon icon={faAward} /> Advanced Machine Learning on
            Google Cloud Certificate
          </p>,
          <p>
            <FontAwesomeIcon icon={faAward} /> Deep Learning Specialization
            Certificate
          </p>,
          <p>
            <FontAwesomeIcon icon={faAward} /> Databases and SQL for Data
            Science with Python
          </p>,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone text="Dec 2023" description="" />

      {/* <h2>Things I love:</h2>
      <ul>
        <li>Coding</li>
        <li>Basketball</li>
        <li>Swimming</li>
        <li>Chess</li>
        <li>Going to the movies</li>
        <li>Reading technical/self-improvement books</li>
      </ul> */}
    </main>
  );
}
