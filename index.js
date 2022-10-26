const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px"; // chiffrre entre 100 et 300 px (bulle de differentes taille)
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%"; // sera entre 1 et 100% de hauteur (au minimum 50% de bas)
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // bulle part 1 fois vers la gauche et lautee fois vers la droite
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%"); // permet a la bulle de se déporter vers la gauche ou la droite

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    // methode qui permet de supprimer la bulle au bout de 8 secondes
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);
