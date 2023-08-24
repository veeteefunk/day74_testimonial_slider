const testimonials = [
    {
        name: "Lisa Lee",
        job: "CEO, Lee Designs",
        image: "1.jpg",
        testimonial:
            "Victor is the best. Victor is the best. Victor is the best. Victor is the best. Victor is the best. Victor is the best Victor is the best. Victor is the best. Victor is the best"
            
    },
    {
        name: "Mary Smith",
        job: "CEO, Smith Designs",
        image: "2.jpg",
        testimonial:
        "Victor is the best. Victor is the best. Victor is the best. Victor is the best. Victor is the best. Victor is the best Victor is the best. Victor is the best. Victor is the best"
            
    },
    {
        name: "Melissa Buckworth",
        job: "CEO, Buckworth",
        image: "3.jpg",
        testimonial:
        "Victor is the best. Victor is the best. Victor is the best. Victor is the best. Victor is the best. Victor is the best Victor is the best. Victor is the best. Victor is the best"
            
    },
]

let i = 0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j
    displayTestimonial()
})

prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j
    displayTestimonial()
})

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
        <img src=${testimonials[i].image}>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
    `
    window.onload = displayTestimonial;
}

window.onload = displayTestimonial