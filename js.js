function fade(){
    document.getElementById("Aryan").classList.add("fade-in");
}
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        document.getElementById("ImageSection").classList.add("hide")
    })
})


window.addEventListener("scroll", () => {
  const section = document.getElementById("c");
  const trigger = window.innerHeight - 100;
  const top = section.getBoundingClientRect().top;

  if (top < trigger) {
    section.classList.add("show");
  }
});


