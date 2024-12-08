function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    const arrow = questionElement.querySelector('.arrow');
    
    // Toggle active class for answer and arrow
    answerElement.classList.toggle('active');
    arrow.classList.toggle('active');
    
    // Adjust max-height dynamically for smooth transition
    if (answerElement.classList.contains('active')) {
        answerElement.style.maxHeight = answerElement.scrollHeight + "px";
    } else {
        answerElement.style.maxHeight = "0";
    }
}