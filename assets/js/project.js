AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "LLM-Powered Text-to-SQL",
    cardImage: "assets/images/project-page/llmsql.png",
    description:
      "Schema-aware Text-to-SQL system combining fine-tuned LLMs (T5, BART), semantic schema matching, and SQLCoder-7B for accurate SQL query generation.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/919/919836.png", // SQL icon
    Previewlink: "",
    Githublink:
      "https://github.com/SaiSudhaPanigrahi/LLM-Powered-Text-to-SQL",
  },
  {
    title: "COVID Epidemiological Models",
    cardImage: "assets/images/project-page/covid.jpeg",
    description:
      "Comparative study on parameter estimation of COVID epidemiological models using Differential Evolution. Published in Springer’s Studies in Computational Intelligence.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", // virus icon
    Previewlink: "",
    Githublink:
      "https://github.com/SaiSudhaPanigrahi/COVID-Epidemiological-Models-Using-Differential-Evolution-Algorithm",
  },
  {
    title: "Animal Detection for Road Safety",
    cardImage: "assets/images/project-page/animalDetection.jpeg",
    description:
      "Deep learning pipeline for real-time animal detection on roads, improving safety. Presented at ICCICA 2021.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/616/616408.png", // paw icon
    Previewlink: "",
    Githublink:
      "https://github.com/SaiSudhaPanigrahi/Animal-Detection-for-Road-safety-using-Deep-Learning",
  },
  {
    title: "AI Chatbot Application",
    cardImage: "assets/images/project-page/chatbot.jpeg",
    description:
      "User-friendly FAQ chatbot for IGCAR built with TensorFlow and NLP (NLTK) that serves contextual answers with >85% accuracy.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png", // chat bubble icon
    Previewlink: "",
    Githublink: "https://github.com/SaiSudhaPanigrahi/AI_chatbot",
  },
  {
    title: "Quizzito",
    cardImage: "assets/images/project-page/quiz.jpeg",
    description:
      "Online quiz application using PHP/MySQL (XAMPP), HTML/CSS, managed via JIRA and Agile for full-stack Web dev education.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/1082/1082603.png", // quiz icon
    Previewlink: "",
    Githublink: "https://github.com/SaiSudhaPanigrahi/Quizzito",
  },
  {
    title: "J2EE Bug Assistance Portal",
    cardImage: "assets/images/project-page/bug.jpeg",
    description:
      "Enterprise J2EE portal to automate bug reporting and network-monitoring config updates via REST APIs and Shell scripts.",
    tagimg: "https://cdn-icons-png.flaticon.com/512/565/565547.png", // bug icon
    Previewlink: "",
    Githublink:
      "https://github.com/SaiSudhaPanigrahi/J2EE-Application-Bug-Assistance-Portal",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, tagimg, description }) => {
    output += `
      <div class="column skill-card card" style="margin: 15px"
           data-aos="zoom-in-up"
           data-aos-easing="linear"
           data-aos-delay="300"
           data-aos-duration="600">
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          <div class="header"></div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
              </div>
              <p class="description">${description}</p>
              <img src="${tagimg}" alt="tech icon" class="tech-icon" />
              <ul class="menu-content">
                <li>
                  <a href="${Previewlink}" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="${Githublink}" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  });
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);
