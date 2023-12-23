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
    datePublished: "Dec 15 2023",
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
    datePublished: "Dec 23 2023",
  }),
];
