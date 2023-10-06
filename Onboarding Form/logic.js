function nextStep(step) {
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
}