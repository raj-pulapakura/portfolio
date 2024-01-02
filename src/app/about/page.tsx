"use client";

import TimelineBar from "@/components/about/TimelineBar";
import TimelineMilestone from "@/components/about/TimelineMilestone";
import { faAward, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function AboutPage() {
  const techIconWidth = 32;

  return (
    <main>
      <section className=" flex flex-col lg:flex-row lg:items-center lg:justify-evenly gap-10 mb-10 lg:mb-36 mx-auto">
        <div className=" ">
          <h1 className="text-5xl lg:text-6xl text-center lg:text-left mb-5">
            👋👋👋
          </h1>
          <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-black mb-3">
            Hi, I'm Raj.
          </h1>
          <h2 className="text-3xl text-center lg:text-left font-black">
            I live in Melbourne, Australia.
          </h2>
        </div>
        <Image
          className="bg-blue-100 w-full lg:w-2/5 h-fit rounded-lg "
          src="/pfps/biking.jpg"
          alt="Me biking"
          width="400"
          height="400"
        />
      </section>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center">
        My dev journey started in the beginning of 2021...
      </h1>

      <TimelineBar />

      <TimelineMilestone
        text="Jan 2021"
        description="Learned Python and programming fundamentals."
        icons={[
          <Image
            src="/techIcons/python-5.svg"
            alt="python"
            width={techIconWidth}
            height={techIconWidth}
          />,
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
          <Image
            src="/techIcons/kotlinlang-icon.svg"
            alt="kotlin"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/google_play-icon.svg"
            alt="google play"
            width={techIconWidth}
            height={techIconWidth}
          />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Sep 2021"
        description="Discovered and mastered web development."
        icons={[
          <Image
            src="/techIcons/logo-javascript.svg"
            alt="javascript"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/typescript.svg"
            alt="typescript"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/w3_html5-icon.svg"
            alt="html"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/w3_css-icon.svg"
            alt="css"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/react-2.svg"
            alt="react"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/docker-icon.svg"
            alt="docker"
            width={techIconWidth}
            height={techIconWidth}
          />,

          <Image
            src="/techIcons/aws-logo.svg"
            alt="aws"
            width={techIconWidth}
            height={techIconWidth}
          />,

          <Image
            src="/techIcons/graphql-icon.svg"
            alt="graphql"
            width={techIconWidth}
            height={techIconWidth}
          />,

          <Image
            src="/techIcons/mysql-logo.svg"
            alt="mysql"
            width={techIconWidth}
            height={techIconWidth}
          />,

          <Image
            src="/techIcons/mongodb-icon-1.svg"
            alt="mysql"
            width={techIconWidth}
            height={techIconWidth}
          />,
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
          <Image
            src="/techIcons/flutterio-icon.svg"
            alt="flutter"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/firebase-1.svg"
            alt="firebase"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/google_play-icon.svg"
            alt="google play"
            width={techIconWidth}
            height={techIconWidth}
          />,
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
          <Image
            src="/techIcons/tensorflow-icon.svg"
            alt="tensorflow"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/pytorch-icon.svg"
            alt="pytorch"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/numpy-1.svg"
            alt="numpy"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/Pandas.svg"
            alt="pandas"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/opencv-icon.svg"
            alt="opencv"
            width={techIconWidth}
            height={techIconWidth}
          />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Jan 2023"
        description="Dived into Deep Learning and Computer Vision"
        miniMilestones={[
          <div>
            <FontAwesomeIcon icon={faFile} /> Real-time Gesture Detection Dino
            Game
          </div>,
          <div>
            <FontAwesomeIcon icon={faFile} /> Image Search Engine
          </div>,
        ]}
        icons={[
          <Image
            src="/techIcons/tensorflow-icon.svg"
            alt="tensorflow"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/pytorch-icon.svg"
            alt="pytorch"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/numpy-1.svg"
            alt="numpy"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/opencv-icon.svg"
            alt="opencv"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/react-2.svg"
            alt="opencv"
            width={techIconWidth}
            height={techIconWidth}
          />,
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
        icons={[
          <Image
            src="/techIcons/tensorflow-icon.svg"
            alt="tensorflow"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/numpy-1.svg"
            alt="numpy"
            width={techIconWidth}
            height={techIconWidth}
          />,
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
        icons={[
          <Image
            src="/techIcons/tensorflow-icon.svg"
            alt="tensorflow"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/pytorch-icon.svg"
            alt="pytorch"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/react-2.svg"
            alt="react"
            width={techIconWidth}
            height={techIconWidth}
          />,
        ]}
      />

      <TimelineBar />

      <TimelineMilestone
        text="Sep 2023"
        description="Upskilling"
        miniMilestones={[
          <div>
            <FontAwesomeIcon icon={faAward} /> IBM Machine Learning Professional
            Certificate
          </div>,
          <div>
            <FontAwesomeIcon icon={faAward} /> Advanced Machine Learning on
            Google Cloud Certificate
          </div>,
          <div>
            <FontAwesomeIcon icon={faAward} /> Deep Learning Specialization
            Certificate
          </div>,
          <div>
            <FontAwesomeIcon icon={faAward} /> Databases and SQL for Data
            Science with Python
          </div>,
        ]}
        icons={[
          <Image
            src="/techIcons/ibm.svg"
            alt="ibm"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/google_cloud-icon.svg"
            alt="google cloud"
            width={techIconWidth}
            height={techIconWidth}
          />,
          <Image
            src="/techIcons/mysql-logo.svg"
            alt="mysql"
            width={techIconWidth}
            height={techIconWidth}
          />,
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
