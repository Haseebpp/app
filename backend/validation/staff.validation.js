const isEmpty = require('./isEmpty')
const validator = require('validator')

const validateRegister = (data) => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.role = !isEmpty(data.role) ? data.role : ''

  if (validator.isEmpty(data.name)) {
    errors.nameError = 'Name is required'
  }

  if (validator.isEmpty(data.phone)) {
    errors.phoneError = 'Phone number is required'
  } else if (data.phone.length !== 10) {
    errors.phoneError = 'Phone number must be 10 digit'
  }

  if (validator.isEmpty(data.password)) {
    errors.passwordError = 'Password is required'
  } else if (data.password.length < 4) {
    errors.passwordError = 'Password length must be greater than 3 characters'
  }

  if (validator.isEmpty(data.role)) {
    errors.roleError = 'Role is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateLogin = (data) => {
  let errors = {}

  data.phone = !isEmpty(data.phone) ? data.phone : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  if (validator.isEmpty(data.phone)) {
    errors.phoneError = 'Phone number is required'
  } else if (data.phone.length !== 10) {
    errors.phoneError = 'Phone number must be 10 digit'
  }

  if (validator.isEmpty(data.password)) {
    errors.passwordError = 'Password is required'
  } else if (data.password.length < 4) {
    errors.passwordError = 'Password length must be greater than 4 characters'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

module.exports = {
  validateRegister,
  validateLogin,
}