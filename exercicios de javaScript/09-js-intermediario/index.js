const inputs = document.querySelectorAll('.inputs')

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value !== ""){
            input.classList.add('borderGreen')
        } else {
            input.classList.remove('borderGreen')
        }
    })
})