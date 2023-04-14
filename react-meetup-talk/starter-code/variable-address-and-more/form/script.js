const form1 = document.querySelector('#form-1')
const usernameInput = document.querySelector('[name="username"]')
const passwordInput = document.querySelector('[name="password"]')

form1.addEventListener('submit', (e) => {
  e.preventDefault()

  // const tamperedInput = checkTamperedInputs([usernameInput, passwordInput])

  // if(tamperedInput.length) {
  //   console.log('Sorry, you have tried to tamper some input fields.');
  //   return
  // }

  const formData = getFormData(form1)
  console.log(formData);
  console.log('Form Submitted');
})

function getFormData(form) {
  const formData = new FormData(form)
  const extractedFormData = {}

  for (const [key, value] of formData) {
    extractedFormData[key] = value
  }

  return extractedFormData
}

function checkTamperedInputs(inputs) {
    const tamperedInputs = []
    for(const input of inputs) {
        if(input.onpaste?.() !== false || input.oncopy?.() !== false)
        tamperedInputs.push(input)
    }
    return tamperedInputs
}