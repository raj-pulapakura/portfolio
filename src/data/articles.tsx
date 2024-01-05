export class Article {
  title: string;
  subtitle: string;
  articleURL: string;
  thumbnailURL: string;
  tags: string[];
  firstPara: string;
  datePublished: string;

  constructor({
    title,
    subtitle,
    articleURL,
    thumbnailURL,
    tags,
    firstPara,
    datePublished,
  }: {
    title: string;
    subtitle: string;
    articleURL: string;
    thumbnailURL: string;
    tags: string[];
    firstPara: string;
    datePublished: string;
  }) {
    this.title = title;
    this.subtitle = subtitle;
    this.articleURL = articleURL;
    this.thumbnailURL = thumbnailURL;
    this.tags = tags;
    this.firstPara = firstPara;
    this.datePublished = datePublished;
  }
}

export default [
  new Article({
    title: "2 Design Decisions that can Make or Break your ML System",
    subtitle:
      "How Static and Dynamic training/serving determines whether your production model will stand the test of time",
    articleURL:
      "https://medium.com/@raj.pulapakura/2-design-decisions-that-can-make-or-break-your-ml-system-14fbb22be512",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*TcD_7Td8F5_CURXzkSGPZw.png",
    tags: ["Machine Learning", "Data", "Production", "MlOps", "Data Science"],
    firstPara:
      "In the last article, we discussed the components of a production-grade ML Pipeline. While having a robust ML pipeline is a major step in the direction of success, it’s equally important to know how and when to use this pipeline, to avoid common issues like model staleness.",
    datePublished: "Jan 5, 2024",
  }),
  new Article({
    title: "Data to Deployment: Crafting a Robust Machine Learning Pipeline",
    subtitle:
      "A journey through the inner workings of production-grade machine learning pipelines",
    articleURL:
      "https://medium.com/@raj.pulapakura/data-to-deployment-crafting-a-robust-machine-learning-pipeline-5cbff6fa60fc",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*02zaF-jTPIR2Lhe7axbGkg.png",
    tags: ["Machine Learning", "Data", "Production"],
    firstPara: "Ever wondered how machine learning systems work in production?",
    datePublished: "Dec 30, 2023",
  }),
  new Article({
    title: "3 Reasons You Should Contribute to Open Source",
    subtitle: "Do you even open source, bro?",
    articleURL:
      "https://medium.com/@raj.pulapakura/3-reasons-you-should-contribute-to-open-source-6cc07ac0bb75",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*hQAUdDp5AK4BQP14e4I3bA.jpeg",
    tags: [
      "Open Source",
      "Programming",
      "Software Development",
      "GitHub",
      "Guide",
    ],
    firstPara:
      "The term open source refers to something people can modify and share because its design is publicly accessible. (https://opensource.com/resources/what-open-source)",
    datePublished: "Dec 23, 2023",
  }),
  new Article({
    title: "Beginner's Guide to the Maths behind Machine Learning",
    subtitle:
      "Kickstart your ML journey — Essentials of Linear Algebra, Calculus and Statistics for success in ML",
    articleURL:
      "https://medium.com/@raj.pulapakura/beginners-guide-to-the-maths-behind-machine-learning-13e497af2b9c",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/0*nijwsf72B5uq2tm5",
    tags: ["Machine Learning", "Maths", "Beginner"],
    firstPara:
      "I used to think that you didn’t need maths to get into machine learning. For a highschool student who was fascinated by ML, learning more maths was the least of my concerns.",
    datePublished: "Dec 15, 2023",
  }),
];
