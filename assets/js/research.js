/* Research Details Table */
const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A Comparative Study on Parameter Estimation of COVID Epidemiological Models Using Differential Evolution Algorithm",
    authors: "Sai Sudha Panigrahi",
    conferences:
      "Springer, chapter in Differential Evolution: From Theory to Practice, Studies in Computational Intelligence (Vol. 1009)",
    researchYr: 2022,
    citebox: "popup1",
    absbox: "absPopup1",
    image: "assets/images/research-page/covid.webp",
    abstract: `
      We formulate parameter estimation for classical COVID‐19 compartmental models as an optimization problem.
      Using a Differential Evolution algorithm, we identify optimal or near‐optimal parameters for each model
      and compare their predictive performance over the five most heavily affected Indian states. Our analysis
      demonstrates that tuning via evolutionary search yields substantially better short‐term forecasts, and
      the best‐fitting model can be used to project case counts several days ahead with quantified accuracy.`,
    citation: {
      vancouver: `
        Panigrahi S S. A Comparative Study on Parameter Estimation of COVID Epidemiological Models Using Differential
        Evolution Algorithm. In: Mezura-Montes L, Coello C, editors. Differential Evolution: From Theory to Practice.
        Studies in Computational Intelligence, vol 1009. Springer; 2022. p 241–263. doi: 10.1007/978-981-16-8082-3_9
      `
    }
  },
  {
    title: "Animal Detection for Road Safety Using Deep Learning",
    authors: "Sai Sudha Panigrahi",
    conferences:
      "2021 International Conference on Computational Intelligence and Computing Applications (ICCICA), IEEE",
    researchYr: 2021,
    citebox: "popup2",
    absbox: "absPopup2",
    image: "assets/images/research-page/animal.png",
    abstract: `
      Accidents due to animals darting across poorly lit roads remain a major hazard. We collect and curate
      a large open‐source dataset of animal images, then train Convolutional Neural Networks to detect animals
      in real‐time video frames. When an animal is recognized, the system triggers a three-second audible alert
      to warn drivers. Our prototype achieves 91% overall detection accuracy and can be extended seamlessly
      as new animal classes are added to the dataset.`,
    citation: {
      vancouver: `
        Panigrahi S S. Animal Detection for Road Safety Using Deep Learning. In: Proceedings of the 2021 International
        Conference on Computational Intelligence and Computing Applications (ICCICA). IEEE; Nov 2021. doi:
        10.1109/ICCICA52335.2021.9697287
      `
    }
  }
];

AOS.init();

const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image, title, authors, conferences,
      researchYr, citebox, absbox, abstract, citation
    }) =>
      (output += `
        <tr data-aos="zoom-in-left">
          <td class="imgCol">
            <img src="${image}" class="rImg" alt="${title} cover">
          </td>
          <td class="researchTitleName">
            <div class="img-div">
              <span class="imgResponsive">
                <img src="${image}" class="imgRes" alt="${title} thumbnail">
              </span>
            </div>
            <a href="#0" class="paperTitle">${title}</a>
            <div class="authors">${authors}</div>
            <div class="rConferences">
              ${conferences}
              <div class="researchY">${researchYr}</div>
            </div>
            <div class="d-flex" style="margin-right:5%;">
              <button class="button button-accent button-small" type="button"
                      data-toggle="collapse" data-target="#${absbox}"
                      aria-expanded="false" aria-controls="${absbox}">
                ABSTRACT
              </button>
              <button class="button button-accent button-small" type="button"
                      data-toggle="collapse" data-target="#${citebox}"
                      aria-expanded="false" aria-controls="${citebox}">
                CITE
              </button>
            </div>
            <div id="${absbox}" class="collapse" data-parent=".collapse">
              <div class="card-body">${abstract}</div>
            </div>
            <div id="${citebox}" class="collapse" data-parent=".collapse">
              <div class="card-body">${citation.vancouver}</div>
            </div>
          </td>
        </tr>
      `)
  );
  researchTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
