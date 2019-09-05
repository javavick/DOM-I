const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

/*==================== NAV ====================*/

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Anchors
let navAnchors = document.querySelectorAll("nav a");

for (let loop = 0; loop < navAnchors.length; loop++) {
  navAnchors[loop].textContent = siteContent.nav[`nav-item-${loop + 1}`];
  navAnchors[loop].style.fontWeight = "bold";
}

/*==================== CTA ====================*/

// cta-text
document.querySelector(".cta-text").style.marginLeft = "200px";

// h1
siteContent.cta["h1"] = "DOM\nIs\nAwesome";

let ctaHeading = document.querySelector(".cta-text h1");

ctaHeading.textContent = siteContent.cta.h1;
ctaHeading.style.whiteSpace = "pre-line";

// Button
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

// Image
document
  .getElementById("cta-img")
  .setAttribute("src", siteContent.cta["img-src"]);

/*==================== MAIN CONTENT ====================*/

/*========== TOP ==========*/

// Divs (text-content)
let topDivs = document.querySelectorAll(".top-content .text-content");

topDivs.forEach(function(atr) {
  atr.style.width = "438px";
});

// h4
let topHeadings = document.querySelectorAll(".top-content .text-content h4");

topHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topHeadings[1].textContent = siteContent["main-content"]["about-h4"];

// Paragraph
let topParagraphs = document.querySelectorAll(".top-content .text-content p");

topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];

/*========== MIDDLE ==========*/

document
  .getElementById("middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

/*========== BOTTOM ==========*/

// Divs (text-content)
let bottomDivs = document.querySelectorAll(".bottom-content .text-content");

bottomDivs.forEach(function(atr) {
  atr.style.width = "290px";
});

// h4
let bottomHeadings = document.querySelectorAll(
  ".bottom-content .text-content h4"
);

bottomHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeadings[2].textContent = siteContent["main-content"]["vision-h4"];

// Paragraph
let bottomParagraphs = document.querySelectorAll(
  ".bottom-content .text-content p"
);

bottomParagraphs[0].textContent =
  siteContent["main-content"]["services-content"];
bottomParagraphs[1].textContent =
  siteContent["main-content"]["product-content"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

/*==================== CONTACT ====================*/

// h4
document.querySelector(".contact h4").textContent =
  siteContent["contact"]["contact-h4"];

// Paragraphs
let contactParagraphs = document.querySelectorAll(".contact p");

contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];
