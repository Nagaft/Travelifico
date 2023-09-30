const userData = {
  email: '',
  phone: '',
};

function setEmail(email) {
  const userEmailElement = document.getElementById("user-email");
  if (userEmailElement) {
    userEmailElement.textContent = email;
    console.log(email); // Corrected to log the email va
    return userEmailElement;
  }
}

function setPhone(phone) {
  const userPhoneElement = document.getElementById("user-phone");
  if (userPhoneElement) {
    userPhoneElement.textContent = phone;
    console.log(phone); // Corrected to log the phone variable
  }
}

function populateUserInfo() {
  setEmail(userData.email);

  setPhone(userData.phone);
   // Corrected to log the phone number
}

document.addEventListener("DOMContentLoaded", () => {
  populateUserInfo();
});

module.exports = {userData, setEmail, setPhone, populateUserInfo};