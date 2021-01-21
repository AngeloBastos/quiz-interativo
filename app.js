const form = document.querySelector('.quiz-form')
const userFeedback = document.querySelector('[data-feedback="user-feedback"]')

const correctAnswers = ['V', 'M', 'V', 'M', 'V']

let score = 0

const successMessageFeedback = {
  title: 'Parabens!',
  className: 'alert-success',
  referenceTag: userFeedback
}

const errorMessageFeedback = {
  title: 'Opss!',
  className: 'alert-danger',
  referenceTag: userFeedback
}

const insertUserFeedbackInfoInToDOM = (score, infoFeedback) => {
  const { title, className, referenceTag } = infoFeedback
  referenceTag.setAttribute('class',`alert ${className}`)
  referenceTag.innerHTML = `
    <h4 class="alert-heading">${title}</h4>
    <p class="h6">Você marcou ${score} pontos em um total de 100 pontos.</p>
    <hr>
    <p class="mb-0 lead">Recarregue a página para tentar novamente ;)</p>
  `
}

const showMessageAlertUserFeedback = () => {
  if (score === 0) {
    form.style.display = 'none'
    insertUserFeedbackInfoInToDOM(score,errorMessageFeedback)
    return
  }
  
  form.style.display = 'none'
  insertUserFeedbackInfoInToDOM(score, successMessageFeedback)
}

const sumScoreOfUser = (userAnswer, index) => {
  const isCorrectAnswer = userAnswer === correctAnswers[index]
  if (isCorrectAnswer) {
    score += 20
  }
}

const handleSubmitForm = event => {
  event.preventDefault()
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]
  
  userAnswers.forEach(sumScoreOfUser)

  showMessageAlertUserFeedback()
}

form.addEventListener('submit', handleSubmitForm)