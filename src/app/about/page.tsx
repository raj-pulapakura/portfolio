import Socials from "@/components/Socials";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Image src="/biking.jpg" alt="Me biking" width="300" height="500" />
      <h1>
        I'm Raj Pulapakura. I live in Melbourne (Australia), where I'm building
        the future.
      </h1>
      <p>For the past 3 years I have been honing my software skills.</p>
      <h2>My Journey</h2>
      <h3>Jan 2021</h3>
      <p>Learned Python and programming fundamentals</p>
      <h3>Jun 2021</h3>
      <p>
        Learned Kotlin and built my first app <em>Number Predictor</em>
      </p>
      <h3>Sep 2021</h3>
      <p>
        Discovered and mastered web development. Learned HTML, CSS, JavaScript,
        TypeScript and React.
      </p>
      <h3>Mar 2022</h3>
      <p>Learned how to build cross-platform apps with Flutter.</p>
      <p>
        Rebuilt <em>Number Predictor</em> with Flutter.
      </p>
      <h3>Jun 2022</h3>
      <p>Discovered Machine Learning</p>
      <p>
        Learned my first ML algorithms such as Linear Regression, KNN, Decision
        Trees and SVMs.
      </p>
      <h3>Jun 2023</h3>
      <p>Dived into Deep Learning</p>
      <p>Learned about Computer Vision, OpenCV and advanced TensorFlow </p>
      <h3>Jul 2023</h3>
      <p>Mastered Differential Calculus</p>
      <h3>Aug 2023</h3>
      <p>Took the TensorFlow Developer Certificate Exam and passed!</p>
      <p>Jun 2023 to Dec 2023</p>
      <p>Received the following certificates:</p>
      <ul>
        <li>IBM Machine Learning Professional Certificate</li>
        <li>Advanced Machine Learning on Google Cloud</li>
        <li>Deep Learning Specialization</li>
        <li>Databases and SQL for Data Science with Python</li>
      </ul>
      <h3>
        Throughout 2023, I combined all my knowledge (Python, web development,
        ML) to produce the following projects:
      </h3>
      <ul>
        <li>Real-time Gesture Detection Dino Game</li>
        <li>Image Search Engine</li>
        <li>Comment Toxicity Classifier</li>
      </ul>
      <h2>Things I love:</h2>
      <ul>
        <li>Coding</li>
        <li>Basketball</li>
        <li>Swimming</li>
        <li>Chess</li>
        <li>Going to the movies</li>
        <li>Reading technical/self-improvement books</li>
      </ul>
      <Socials />
    </main>
  );
}
