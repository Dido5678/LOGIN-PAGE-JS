


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

burger.addEventListener('click', ()=> {
  navigation.classList.toggle('active');
});

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});


// INPUT MUTQAGRMAN DASHT

const validator = new JustValidate("#form",{
  validateBeforeSubmitting: true
})
validator
.addField("[name='email']",[
  {
     rule:"required",
     errorMessage: "add to email"
  },
  {
     rule:"email",
     errorMessage: "fill in correctly email"
  }
])
.addField("[name='password']",[
  {
     rule:"required",
     errorMessage: "add to corrently password"
  },
  {
    rule:"password",
    errorMessage: "fill in correctly email"
 }
])


// const validatorRegistr = new JustValidate("#registrform",{
//   validateBeforeSubmitting: true
// })
// validatorRegistr

// .addField("[name='name']",[
//   {
//      rule:"required",
//      errorMessage: "add to username"
//   },
//   {
//      rule:"name",
//      errorMessage: "fill in correctly username"
//   }
// ])
// .addField("[name='mail']",[
//   {
//      rule:"required",
//      errorMessage: "add to email"
//   },
//   {
//      rule:"mail",
//      errorMessage: "fill in correctly email"
//   }
// ])
// .addField("[name='passid']",[
//   {
//      rule:"required",
//      errorMessage: "add to corrently password"
//   },
//   {
//     rule:"passid",
//     errorMessage: "fill in correctly password"
//  }
// ])
