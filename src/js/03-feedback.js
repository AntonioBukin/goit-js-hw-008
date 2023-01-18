import throttle from "lodash.throttle";

const KEY = 'feedback-form-state';
let formSiteDate = {};

const formSite = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form  email'),
    message: document.querySelector('.feedback-form  message'),
};

formSite.form.addEventListener('input', throttle(storageFormData, 500));
formSite.form.addEventListener('submit', onFormSubmit);

updateInput();

function storageFormData(event) {
    formSiteDate[event.target.name] = event.target.value.trim();
    localStorage.setItem(KEY, JSON.stringify(formSiteDate));
}

function onFormSubmit(event) {
    event.preventDefault();

    const savedSiteData = JSON.parse(localStorage.getItem(KEY));
    console.log(savedSiteData);

    event.currentTarget.reset();
    localStorage.removeItem(KEY);
    formSiteDate = {};
}

function updateInput() {
    const savedSiteValues = localStorage.getItem(KEY);

    if (savedSiteValues) {
        formSiteDate = JSON.parse(savedSiteValues);
        console.log(formSiteDate);
        formSite.email.value = formSiteDate.email;
        formSite.message.value = formSiteDate.message;
    }
}