// Din fiserul index.js va pleca toata functionalitatea noastra
const currentCityTag = document.querySelector('.current-city');

// Daca nu avem salvat in localStorage nici un oras, atunci salvam in localStorage ca default Bucuresti - asta facem prentu ca vrem sa persistam ce alege user-ul din drop-down-ul cu orase
// Primul pas - extragem ce este in localStorage dupa cheia city:
let currentCity = localStorage.getItem("city");

// Daca nu avem setat/salvat in localStorage nici o valoare pentru city atunci o setam cu metoda setItem
if (!currentCity){
    localStorage.setItem("city", "București");
    currentCity = "București";
}

// Actualizam tag-ul sa afiseze valoarea din localStorage
currentCityTag.innerHTML = currentCity;
console.log(currentCity)
// Afisam vremea curenta direct cand intram pe pagina
displayCurrentWeather(currentCity);
// Afisam si prognoza pe urmatoarele 5 zile 
displayWeatherForecast(currentCity);

// icon
const scrollTop = document.getElementById("scroll-top");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) { 
                document.body.classList.add("show-button");
            } else {
                document.body.classList.remove("show-button");
            }
        });

        scrollTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });

