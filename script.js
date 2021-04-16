const dugme = document.getElementById("dugme");
const unosi = document.getElementById("unosi");
const kontejner2 = document.getElementById("kontejner2");

const ime = document.getElementById("firstName");
const prezime = document.getElementById("lastName");
const mejl = document.getElementById("email");
const lozinka = document.getElementById("pass");

const poruka1 = document.getElementById("poruka1");
const poruka2 = document.getElementById("poruka2");
const poruka3 = document.getElementById("poruka3");
const poruka4 = document.getElementById("poruka4");

const greska = document.getElementById("greska");

unosi.addEventListener("submit", proveriSve);

function proveriSve(e){
    e.preventDefault();
    proveriIme();
    proveriPrezime();
    proveriMejl();
    proveriLozinku();

}

function proveriIme(){
    if(ime.value == ""){
        poruka1.classList.add("lose");
        poruka1.classList.remove("dobro");
        poruka1.innerHTML = "Молимо унесите Ваше име.";
    }
    else{
        poruka1.classList.add("dobro");
        poruka1.classList.remove("lose");
        poruka1.innerHTML = "Успешно сте унели захтеване податке.";
    }
}

function proveriPrezime(){
    if(prezime.value == ""){
        poruka2.classList.add("lose");
        poruka2.classList.remove("dobro");
        poruka2.innerHTML = "Молимо унесите Ваше презиме.";
    }
    else{
        poruka2.classList.add("dobro");
        poruka2.classList.remove("lose");
        poruka2.innerHTML = "Успешно сте унели захтеване податке.";
    }
}

function proveriMejl(){
        function validateEmail(email) {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }

        const m = mejl.value;
          if(validateEmail(m)){
            poruka3.classList.add("dobro");
            poruka3.classList.remove("lose");
            poruka3.innerHTML = "Успешно сте унели захтеване податке.";
          }
          else{
            poruka3.classList.add("lose");
            poruka3.classList.remove("dobro");
            poruka3.innerHTML = "Молимо унесите исправну ел.адресу.";
        }
  
}

function proveriLozinku(){
    if (lozinka.value.length < 5) {
        poruka4.classList.add("lose");
        poruka4.classList.remove("dobro");
        poruka4.innerHTML = "Лозинка није одговарајуће дужине. Покушајте поново.";
    }
    else{
        poruka4.classList.add("dobro");
        poruka4.classList.remove("lose");
        poruka4.innerHTML = "Успешно сте унели захтеване податке.";
    }
}

