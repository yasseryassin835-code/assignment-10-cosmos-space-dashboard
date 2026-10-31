
let TheDarkLight = document.querySelector("html");
let theme_toggle_button = document.getElementById("theme-toggle-button");


let navTapButtons = document.querySelectorAll("#portfolio-filters > button");
let cardsNavAndTap = document.querySelectorAll(
  "#portfolio-grid .portfolio-item",
);


let toggleNavBar = document.getElementById("menu-btn");
let navLinkToggle = document.getElementById("navLinkToggle");



let menuBtn = document.getElementById("menu-btn");
let navLinks = document.querySelector(".nav-links");
let allLinks = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  for (let link of allLinks) {
    let section = document.querySelector(link.getAttribute("href"));
    let start = section.offsetTop - 150;
    let end = start + section.offsetHeight;
    if (window.scrollY >= start && window.scrollY < end) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
});


theme_toggle_button.addEventListener("click", function () {
  if (TheDarkLight.classList.contains("dark")) {
    TheDarkLight.classList.remove("dark");
    TheDarkLight.classList.add("light");
  } else {
    TheDarkLight.classList.remove("light");
    TheDarkLight.classList.add("dark");
  }
});

for (let i = 0; i < navTapButtons.length; i++) {
  navTapButtons[i].addEventListener("click", function () {
    for (let j = 0; j < navTapButtons.length; j++) {
      navTapButtons[j].classList.remove("active");
    }
    navTapButtons[i].classList.add("active");

    for (let j = 0; j < cardsNavAndTap.length; j++) {
      cardsNavAndTap[j].classList.remove("hidden");
    }
    let hideList = [];
    if (i === 0) {
      hideList = [];
    } else if (i === 1) {
      hideList = [1, 2, 4, 5, 7, 8];
    } else if (i === 2) {
      hideList = [0, 2, 3, 5, 6, 8];
    } else if (i === 3) {
      hideList = [0, 1, 3, 4, 5, 6, 7];
    } else if (i === 4) {
      hideList = [0, 1, 2, 3, 4, 6, 7, 8];
    }

    for (let k = 0; k < hideList.length; k++) {
      cardsNavAndTap[hideList[k]].classList.add("hidden");
    }
  });
}


let topBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  topBtn.classList.toggle("show", window.scrollY > 200);
});

topBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

let carouselCards = document.querySelectorAll("#testimonials-carousel > div");
let nextButton = document.getElementById("next-testimonial");
let prevButton = document.getElementById("prev-testimonial");
let indecatorsButtons = document.querySelectorAll(" .carousel-indicator ");

var x = 0;

nextButton.addEventListener("click", function () {
  if (x < 3) {
    carouselCards[x].classList.add("hidden");
    carouselCards[x + 3].classList.remove("hidden");
    x++;

    for (let j = 0; j < indecatorsButtons.length; j++) {
      indecatorsButtons[j].classList.remove("active");
    }
    indecatorsButtons[x].classList.add("active");
  }
});

prevButton.addEventListener("click", function () {
  if (x > 0) {
    x--;
    carouselCards[x].classList.remove("hidden");
    carouselCards[x + 3].classList.add("hidden");

    for (let j = 0; j < indecatorsButtons.length; j++) {
      indecatorsButtons[j].classList.remove("active");
    }
    indecatorsButtons[x].classList.add("active");
  }
});

for (let i = 0; i < indecatorsButtons.length; i++) {
  indecatorsButtons[i].addEventListener("click", function () {
    for (let j = 0; j < indecatorsButtons.length; j++) {
      indecatorsButtons[j].classList.remove("active");
    }

    let hideList = [];
    let showList = [];
    if (i === 0) {
      indecatorsButtons[i].classList.add("active");

      hideList = [3, 4, 5];
      showList = [0, 1, 2];
    } else if (i === 1) {
      indecatorsButtons[i].classList.add("active");
      hideList = [0, 4, 5];
      showList = [1, 2, 3];
    } else if (i === 2) {
      indecatorsButtons[i].classList.add("active");
      hideList = [0, 1, 5];
      showList = [2, 3, 4];
    } else if (i === 3) {
      indecatorsButtons[i].classList.add("active");
      hideList = [0, 1, 2];
      showList = [3, 4, 5];
    }

    for (let k = 0; k < hideList.length; k++) {
      carouselCards[hideList[k]].classList.add("hidden");
      carouselCards[showList[k]].classList.remove("hidden");
    }
  });
}


let BtnOpenSideBar = document.getElementById("settings-toggle");
let containsSideBar = document.getElementById("settings-sidebar");
let closeBtn = document.getElementById("close-settings");
let resetSideBarButton = document.getElementById("reset-settings");
//allFonts
let allFonts = document.querySelectorAll(".allFonts > button");

let selectColorsSidBar = [
  "#4f46e5",
  "#06b6d4",
  "#22c55e",
  "#dc2626",
  "#f59e0b",
  "#d946ef",
];
let themeColor = document.getElementById("theme-colors-grid");

BtnOpenSideBar.addEventListener("click", function () {
  containsSideBar.classList.remove("translate-x-full");
  BtnOpenSideBar.style.transform = "translateX(-20rem)";
});


closeBtn.addEventListener("click", function () {
  close(); 
});


resetSideBarButton.addEventListener("click", function () {
  close();
  document.documentElement.style.setProperty(
    "--color-primary",
    selectColorsSidBar[0],
  );
  document.body.style.fontFamily = allFonts[1].dataset.font;
});

function close() {
  containsSideBar.classList.add("translate-x-full");
  BtnOpenSideBar.style.transform = "";
}



for (let i = 0; i < allFonts.length; i++) {
  allFonts[i].addEventListener("click", function (e) {
    document.body.style.fontFamily = allFonts[i].dataset.font;
  });
}



for (let i = 0; i < selectColorsSidBar.length; i++) {
  var buttonColor = document.createElement("button");
  buttonColor.style.width = "3rem";
  buttonColor.style.height = "3rem";
  buttonColor.style.borderRadius = "1.5rem";
  buttonColor.style.backgroundColor = selectColorsSidBar[i];
  themeColor.append(buttonColor);

  buttonColor.addEventListener("click", function () {
    document.documentElement.style.setProperty(
      "--color-primary",
      selectColorsSidBar[i],
    );
  });
}

let typeProjectInput = document.querySelector(".typeProjectInput");


let selectedTypeProject = document.querySelector(
  ".typeProjectInput .selected-text",
);


let allTypesProjects = document.querySelector(".allTypesProjects");


let fa_chevron_down = document.querySelector(
  ".typeProjectInput .fa-chevron-down",
);


let selectTypeProject = document.querySelectorAll(".allTypesProjects div");

typeProjectInput.addEventListener("click", function () {
  allTypesProjects.classList.toggle("hidden");

  if (allTypesProjects.classList.contains("hidden")) {
    fa_chevron_down.style.transform = "rotate(0deg)";
  } else {
    fa_chevron_down.style.transform = "rotate(180deg)";
  }
});

for (let i = 0; i < selectTypeProject.length; i++) {
  selectTypeProject[i].addEventListener("click", function (e) {
    let chosenProject = e.currentTarget.textContent.trim();

    selectedTypeProject.textContent = chosenProject;
    typeProjectInput.dataset.value = chosenProject;

    selectedTypeProject.classList.remove(
      "text-slate-500",
      "dark:text-slate-400",
    );

    allTypesProjects.classList.add("hidden");
    fa_chevron_down.style.transform = "rotate(0deg)";
  });
}


let budgetInput = document.querySelector('[data-name="budget"]');

let budgetWrapper = budgetInput.parentElement;


let selectedBudget = budgetInput.querySelector(".selected-text");


let budget_chevron_down = budgetInput.querySelector(".fa-chevron-down");


let allBudgets = budgetWrapper.querySelector(".custom-options");


let selectBudget = budgetWrapper.querySelectorAll(".custom-option");

budgetInput.addEventListener("click", function () {
  allBudgets.classList.toggle("hidden");

  if (allBudgets.classList.contains("hidden")) {
    budget_chevron_down.style.transform = "rotate(0deg)";
  } else {
    budget_chevron_down.style.transform = "rotate(180deg)";
  }
});

for (let i = 0; i < selectBudget.length; i++) {
  selectBudget[i].addEventListener("click", function (e) {
    let chosenBudget = e.currentTarget.dataset.value;

    selectedBudget.textContent = chosenBudget;
    budgetInput.dataset.value = chosenBudget;

    selectedBudget.classList.remove("text-slate-500", "dark:text-slate-400");

    allBudgets.classList.add("hidden");
    budget_chevron_down.style.transform = "rotate(0deg)";
  });
}





n
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let details = document.getElementById("details");

function validation(element, msgClass) {
  let text = element.value;
  let regex = {
    name: /^[A-Za-z\u0621-\u064A ]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(\+20|0020|20|0)?1[0125][0-9]{8}$/,
    details: /^(?=.*[a-zA-Z\u0621-\u064A])[a-zA-Z\u0621-\u064A0-9\s.,،؟?!:\-()]{10,}$/,
  };
  let message = document.querySelector("." + msgClass);

  if (element.id === "phone") {
    text = text.replace(/\s/g, "");
  }

  if (regex[element.id].test(text)) {
    message.classList.add("hidden");
    return true;
  } else {
    message.classList.remove("hidden");
    return false;
  }
}

name.addEventListener("input", function () {
  validation(name, "msgName");
});

email.addEventListener("input", function () {
  validation(email, "msgEmail");
});

phone.addEventListener("input", function () {
  validation(phone, "msgNumber");
});

details.addEventListener("input", function () {
  validation(details, "msgDescription");
});



let btnSubmit = document.querySelector(".submitButton");
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validation(name, "msgName") &&
    validation(email, "msgEmail") &&
    validation(phone, "msgNumber") &&
    validation(details, "msgDescription")
  ) {
    Swal.fire({
      title: `تم ارسال الرسالة بنجاح
  شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن`,
      icon: "success",
      draggable: true,
      background: "#1e293b",
      color: "#ffffff",
    });
    resetForm();
  }
});

function resetForm() {
  name.value = "";
  email.value = "";
  phone.value = "";
  details.value = "";

  let texts = document.querySelectorAll(".selected-text");
  texts[0].textContent = "اختر نوع المشروع";
  texts[1].textContent = "اختر الميزانية";
}