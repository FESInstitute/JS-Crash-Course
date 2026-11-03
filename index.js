let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classlist += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_1q7jbww',
        'template_gzl86a1',
        event.target,
        'kZ_SiSeVO0cVswd3S'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(    
        "The email service is currently unavailable. Please contact me directly on kafui.akakpo@gmail.com and let's see what this looks like."
    );
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
isModalOpen = true;
    document.body.classList += " modal--open";
}