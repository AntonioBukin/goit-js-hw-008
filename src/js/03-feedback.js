import throttle from "lodash.throttle";

const KEY = 'feedback-form-state';


const formSite = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form  textarea'),
};

let formSiteDate = {email: formSite.input.value, message: formSite.textarea.value};

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
}

function updateInput() {
    const savedSiteValues = localStorage.getItem(KEY);

    if (savedSiteValues) {
        formSiteDate = JSON.parse(savedSiteValues);
        console.log(formSiteDate);
        formSite.input.value = formSiteDate.email;
        formSite.textarea.value = formSiteDate.message;
    }
}