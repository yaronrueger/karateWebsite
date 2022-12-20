 /* ScrollReveal allg. Einstellungen */ 
 ScrollReveal({
    reset: false,
    distance: "70px",
    duration: 2500,
    delay: 100,
  });
  
  /* genaue Definierung der einzelnen Divs */
  ScrollReveal().reveal(".menu", {
    delay: 150,
    origin: "top",
  });

  ScrollReveal().reveal(".mainTitle, .sectionTitle", {
    delay: 150,
    origin: "left",
  });

  ScrollReveal().reveal(".firstSection .imageMain", {
    delay: 150,
    origin: "bottom",
  });

  ScrollReveal().reveal(".infoBox", {
    delay: 200,
    origin: "right",
  });

  ScrollReveal().reveal(".secondSection .image", {
    delay: 150,
    origin: "bottom",
  });

  ScrollReveal().reveal(".infoBox2", {
    delay: 150,
    origin: "right",
  });

  ScrollReveal().reveal(".secondOneSection .image", {
    delay: 150,
    origin: "right",
  });

  ScrollReveal().reveal(".infoTraining", {
    delay: 145,
    origin: "bottom",
  });  
  /**/
  ScrollReveal().reveal(".thirdSection .image",{
    delay: 145,
    origin: "bottom",
  });

  ScrollReveal().reveal(".thirdOneSection .image",{
    delay: 145,
    origin: "right",
  });

  ScrollReveal().reveal(".infoKontakt",{
    delay: 145,
    origin: "top",
  });

  ScrollReveal().reveal(".fourthSection .image", {
    delay: 145,
    origin: "right",
  });

  ScrollReveal().reveal(".infoMemorie", {
    delay: 145,
    origin: "right",
  });

  ScrollReveal().reveal(".mediaInfo li", {
    delay: 100,
    origin: "top",
    interval: 50,
  });