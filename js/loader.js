window.addEventListener("load", function () {
  // Remove Loader
  var load_screen = document.getElementById("load_screen");
  document.body.removeChild(load_screen);

  var layoutName = "Collapsible Menu";

  var settingsObject = {
    admin: "Template",
    settings: {
      layout: {
        name: layoutName,
        toggle: true,
        darkMode: true,
        boxed: true,
        logo: {
          darkLogo: "../assets/Opulent_Splendor_Icon.jpg",
          lightLogo: "#",
        },
      },
    },
    reset: false,
  };

  if (settingsObject.reset) {
    localStorage.clear();
  }

  if (localStorage.length === 0) {
    themeObject = settingsObject;
  } else {
    getthemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getthemeObject);
    ParsedObject = getParseObject;

    if (getthemeObject !== null) {
      if (ParsedObject.admin === "Template") {
        if (ParsedObject.settings.layout.name === layoutName) {
          themeObject = ParsedObject;
        } else {
          themeObject = settingsObject;
        }
      } else {
        if (ParsedObject.admin === undefined) {
          themeObject = settingsObject;
        }
      }
    } else {
      themeObject = settingsObject;
    }
  }

  // Get Dark Mode Information i.e darkMode: true or false

  if (themeObject.settings.layout.darkMode) {
    localStorage.setItem("theme", JSON.stringify(themeObject));
    getthemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getthemeObject);

    if (getParseObject.settings.layout.darkMode) {
      ifStarterKit =
        document.body.getAttribute("page") === "starter-pack" ? true : false;
      document.body.classList.add("dark");
      if (ifStarterKit) {
        if (document.querySelector(".navbar-logo")) {
          document
            .querySelector(".navbar-logo")
            .setAttribute("src", "../assets/Opulent_Splendor_Icon.jpg");
        }
      } else {
        if (document.querySelector(".navbar-logo")) {
          document
            .querySelector(".navbar-logo")
            .setAttribute("src", getParseObject.settings.layout.logo.darkLogo);
        }
      }
    }
  } else {
    localStorage.setItem("theme", JSON.stringify(themeObject));
    getthemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getthemeObject);

    if (!getParseObject.settings.layout.darkMode) {
      ifStarterKit =
        document.body.getAttribute("page") === "starter-pack" ? true : false;
      document.body.classList.remove("dark");
      if (ifStarterKit) {
        if (document.querySelector(".navbar-logo")) {
          document.querySelector(".navbar-logo").setAttribute("src", "#");
        }
      } else {
        if (document.querySelector(".navbar-logo")) {
          document
            .querySelector(".navbar-logo")
            .setAttribute("src", getParseObject.settings.layout.logo.lightLogo);
        }
      }
    }
  }

  // Get Layout Information i.e boxed: true or false

  if (themeObject.settings.layout.boxed) {
    localStorage.setItem("theme", JSON.stringify(themeObject));
    getthemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getthemeObject);

    if (getParseObject.settings.layout.boxed) {
      if (document.body.getAttribute("layout") !== "full-width") {
        document.body.classList.add("layout-boxed");
        if (document.querySelector(".header-container")) {
          document
            .querySelector(".header-container")
            .classList.add("container-xxl");
        }
        if (document.querySelector(".middle-content")) {
          document
            .querySelector(".middle-content")
            .classList.add("container-xxl");
        }
      } else {
        document.body.classList.remove("layout-boxed");
        if (document.querySelector(".header-container")) {
          document
            .querySelector(".header-container")
            .classList.remove("container-xxl");
        }
        if (document.querySelector(".middle-content")) {
          document
            .querySelector(".middle-content")
            .classList.remove("container-xxl");
        }
      }
    }
  } else {
    localStorage.setItem("theme", JSON.stringify(themeObject));
    getthemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getthemeObject);

    if (!getParseObject.settings.layout.boxed) {
      if (document.body.getAttribute("layout") !== "boxed") {
        document.body.classList.remove("layout-boxed");
        if (document.querySelector(".header-container")) {
          document
            .querySelector(".header-container")
            .classList.remove("container-xxl");
        }
        if (document.querySelector(".middle-content")) {
          document
            .querySelector(".middle-content")
            .classList.remove("container-xxl");
        }
      } else {
        document.body.classList.add("layout-boxed");
        if (document.querySelector(".header-container")) {
          document
            .querySelector(".header-container")
            .classList.add("container-xxl");
        }
        if (document.querySelector(".middle-content")) {
          document
            .querySelector(".middle-content")
            .classList.add("container-xxl");
        }
      }
    }
  }
});
