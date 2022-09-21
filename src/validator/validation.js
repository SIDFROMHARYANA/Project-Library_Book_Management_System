

const isValidName = function (name) {
    if (typeof name === "undefined" || name === null) return false;
    if (typeof name === "string" && name.trim().length > 0) return true;
    return false;
  };

  const isValidTitle = function (title) {
    return ["Mr", "Mrs", "Miss"].includes(title);
  };
  
  const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
  };
  const isValidMobile = function (value){
    const phone = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
    return phone.test(value)
  }
  const isValidEmail = function (value) {
    const regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexForEmail.test(value)
  }        
  
  const regixValidator = function (value) {
    let regex = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/ 
    return regex.test(value)
  }
  
  const isValidPincode = function (pincode) {
    if ( /^\+?([1-9]{1})\)?([0-9]{5})$/.test(pincode)) return true
}

const isValidPassword = function (password) {
    if (/^[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(password)) return true
}


module.exports ={
    isValidName, 
    isValidTitle,
    isValidRequestBody,
    isValidMobile,
    isValidEmail,
    regixValidator,
    isValidPincode,
    isValidPassword
}