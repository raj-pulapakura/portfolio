export class Project {
  title: string;
  description: string;
  thumbnailURL: string;
  githubURL: string;
  videoURL: string;
  webURL: string;
  tags: string[];
  technologiesUsed: string[];

  constructor({
    title,
    description,
    thumbnailURL,
    githubURL,
    videoURL,
    webURL,
    tags,
    technologiesUsed,
  }: {
    title: string;
    description: string;
    thumbnailURL: string;
    githubURL: string;
    videoURL: string;
    webURL: string;
    tags: string[];
    technologiesUsed: string[];
  }) {
    this.title = title;
    this.description = description;
    this.thumbnailURL = thumbnailURL;
    this.githubURL = githubURL;
    this.videoURL = videoURL;
    this.webURL = webURL;
    this.tags = tags;
    this.technologiesUsed = technologiesUsed;
  }
}

export default [
  new Project({
    title: "Image Search Engine",
    description: "Upload an image and find similar images easily!",
    thumbnailURL:
      "https://private-user-images.githubusercontent.com/87762282/248453997-21702ad9-6cfe-4a5d-8385-cc65fad8eded.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMjI0MzQsIm5iZiI6MTcwMzIyMjEzNCwicGF0aCI6Ii84Nzc2MjI4Mi8yNDg0NTM5OTctMjE3MDJhZDktNmNmZS00YTVkLTgzODUtY2M2NWZhZDhlZGVkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA1MTUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhNjMxMThhNWY0ZWQ3MTI3ZjYzMTI5NWYwY2U4MDRiN2MyZGNhYmIyNTJkZjllZmQ1NjVkMjRhYTM1OGJlNzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4uUY-JeZyAMqTYOpQXBPZj0nEujaci0Dvd_YAjc8bB4",
    githubURL: "https://github.com/raj-pulapakura/Image-Search-Engine/",
    videoURL: "https://www.youtube.com/watch?v=loBZkPvn29c",
    webURL: "image-search-pro.vercel.app",
    tags: [
      "aws",
      "machine-learning",
      "computer-vision",
      "neural-network",
      "responsive",
      "nextjs",
      "image-processing",
      "pytorch",
      "siamese-network",
      "searchengine",
      "resnet50",
      "bentoml",
      "mobilenetv3",
      "vercel",
    ],
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PyTorch",
      "BentoML",
      "AWS",
      "Terraform",
    ],
  }),
  new Project({
    title: "Real Time Gesture Detection Dino Game",
    description:
      "The classic dino game, except its controlled by your hand! Powered by TensorFlow, OpenCV and PyGame.",
    thumbnailURL:
      "https://private-user-images.githubusercontent.com/87762282/290688144-92b7e1e9-918a-4d7a-bc19-5f518aca820c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMjI0ODIsIm5iZiI6MTcwMzIyMjE4MiwicGF0aCI6Ii84Nzc2MjI4Mi8yOTA2ODgxNDQtOTJiN2UxZTktOTE4YS00ZDdhLWJjMTktNWY1MThhY2E4MjBjLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA1MTYyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUxZmYzYWMzN2MxNWU4NTNlODg2ZDFmOTc4NWJlMDJhMGFjNzEyYmI0MmU4MWMwM2IwNDVkMWM0YzQ4ZjFiYzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4B3QWkQmGmdrh-R1bHCkup5E_EIdF0KZ9GIzaGSB8n0",
    githubURL:
      "https://github.com/raj-pulapakura/Dino-Game-controlled-by-Gesture-Detection",
    videoURL: "https://www.youtube.com/watch?v=GvOFWHpD_iY",
    webURL: "",
    tags: [
      "python",
      "opencv",
      "computer-vision",
      "deep-learning",
      "tensorflow",
      "game-development",
      "pygame",
      "object-detection",
      "gesture-recognition",
      "dinosaur-game",
    ],
    technologiesUsed: ["Python", "Pygame", "TensorFlow", "OpenCV", "NumPy"],
  }),
  new Project({
    title: "UltraRide",
    description: "The ecommerce website for shoe addicts.",
    thumbnailURL:
      "https://private-user-images.githubusercontent.com/87762282/292123583-7165b700-6f2c-4ab6-9510-0aed381f67da.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMjI1MTQsIm5iZiI6MTcwMzIyMjIxNCwicGF0aCI6Ii84Nzc2MjI4Mi8yOTIxMjM1ODMtNzE2NWI3MDAtNmYyYy00YWI2LTk1MTAtMGFlZDM4MWY2N2RhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA1MTY1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0NmFhZDdjNmE1MTdkMWJlNGM3NjY5Y2UxYTk5MzEzNTk0ZTU1NDRkZmIxZDg1NWU4OTdiMWFkMWJmZGI5MGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Q8vS9CxYyGbSo1phDpsQ5i1r9iK_xruX6fqUxzNl7Kc",
    githubURL: "https://github.com/raj-pulapakura/ultraride",
    videoURL: "",
    webURL: "",
    tags: [
      "react",
      "nodejs",
      "mysql",
      "graphql",
      "docker",
      "redis",
      "website",
      "ecommerce",
      "stripe",
      "materialui",
      "expressjs",
      "apollographql",
      "typeorm",
    ],
    technologiesUsed: [
      "TypeScript",
      "React.js",
      "Material UI",
      "Redux",
      "Node.js",
      "Express.js",
      "GraphQL",
      "TypeORM",
      "Stripe API",
      "Redis",
      "Docker",
      "Docker Compose",
      "MySQL",
    ],
  }),
  new Project({
    title: "Comment Toxicity Checker",
    description:
      "Comment toxicity classification model, with a neat website interface!",
    thumbnailURL:
      "https://private-user-images.githubusercontent.com/87762282/289851956-5e5ac56b-083f-4341-ac8a-a6ed9d04d304.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMjI1MzgsIm5iZiI6MTcwMzIyMjIzOCwicGF0aCI6Ii84Nzc2MjI4Mi8yODk4NTE5NTYtNWU1YWM1NmItMDgzZi00MzQxLWFjOGEtYTZlZDlkMDRkMzA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA1MTcxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFhOTNjMTA4MTU4N2FmZTkwMmE5NmRjYmY4NGZjYTJhNTY3NzI4YWRlMDNmNWMxZDhlZWQ4NTdkNDQzMzQyNzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.pI6SxDDdHgn4B-KngKqcI2xp-fbFkhc8cOVhM1hyRUg",
    githubURL: "https://github.com/raj-pulapakura/Comment-Toxicity-Checker",
    videoURL: "",
    webURL: "https://comment-toxicity-checker.vercel.app/",
    tags: [
      "react",
      "nextjs",
      "machine-learning",
      "natural-language-processing",
      "deep-learning",
      "neural-networks",
      "tensorflow",
      "nextjs",
      "kaggle",
      "tensorflowjs",
    ],
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "TensorFlow",
      "TensorFlow Lite",
      "TensorFlow JS",
    ],
  }),
];
