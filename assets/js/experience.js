AOS.init();

// Work experience cards
const experiencecards = document.querySelector(".hackathon-section");
const exp = [
  {
    title: "Data Scientist Intern",
    cardImage: "./assets/images/experience-page/Tzone.jpg", // Correct relative path
    place: "TechZone Academy",
    time: "(Feb, 2024 - present)",
    desp: `
      <li>Developed Python apps, showcased ML expertise, and prepared for data science roles.</li>
      <li>Improved data visualization and analytics processes for project insights.</li>
    `,
  },
  {
    title: "Machine Learning Intern",
    cardImage: "./assets/images/experience-page/Cognifyz.jpg", // Correct relative path
    place: "Cognifyz Technologies",
    time: "(Oct - Nov, 2024)",
    desp: `
      <li>Developed machine learning models for classification, recommendation systems, and predictive analytics.</li>
      <li>Applied ML concepts in real-world projects, focusing on scalability and accuracy.</li>
    `,
  },
  {
    title: "Data Scientist Intern",
    cardImage: "./assets/images/experience-page/British-Airways.jpg", // Correct relative path and consistent naming
    place: "British Airways",
    time: "(Nov, 2024)",
    desp: `
      <li>Built predictive models and recommendation systems with robust data preprocessing techniques.</li>
      <li>Optimized data pipelines to improve performance and data insights extraction.</li>
    `,
  },
];

const showExperience = () => {
  let output = "C:/Users/fahad/Desktop/fahad's Portfolio/assets/images/experience-page/ss-c.png";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
          <img src="${cardImage}" alt="${title}">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${place} | ${time}</span>
          <div class="blog-slider__text"><ul>${desp}</ul></div>
        </div>
      </div>
      `)
  );
  experiencecards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showExperience);

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards
const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Data Scientist Intern",
    cardImage: "./assets/images/experience-page/Tzone.jpg", // Correct relative path
    place: "TechZone Academy",
    description:
      "Developed Python apps, showcased ML expertise, and prepared for data science roles.",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "./assets/images/experience-page/Cognifyz.jpg", // Correct relative path
    description:
      "Applied ML concepts in real-world projects, focusing on scalability and accuracy.",
  },
  {
    title: "Data Scientist Intern",
    cardImage: "./assets/images/experience-page/British-Airways.jpg", // Correct relative path
    description:
      "Built predictive models and recommendation systems with robust data preprocessing techniques.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="60" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="${title}">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
