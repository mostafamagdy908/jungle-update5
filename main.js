const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnlog = document.querySelector(".btn-log");
const iconclose = document.querySelector(".icon-close");

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active')
})

btnlog.addEventListener('click',()=> {
  wrapper.classList.add('active-btn')
})

iconclose.addEventListener('click', () => {
  wrapper.classList.remove('active-btn')
})