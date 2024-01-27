var questionsElements = document.querySelectorAll('.question')

questionsElements.forEach(function (question) {
    question.addEventListener('click', function ()  {
        question.classList.toggle('active')
    } )
} )