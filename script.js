function init() {
            
            const selectedRadioButton = document.querySelector('input[name="theme"]:checked');

            if (selectedRadioButton) {
                handleClick(selectedRadioButton);
            }
        }
    

function handleClick(radioButton) {
        const bodyElement = document.querySelector('body');
        const selectedTheme = radioButton.value;
        const themeRadios = document.getElementsByName('theme');

        
        bodyElement.classList.remove('theme-dark', 'theme-light', 'theme-violet');

        
        for (let i = 0; i < themeRadios.length; i++) {
            if (themeRadios[i].checked) {
                if (selectedTheme === '1') {
                    bodyElement.classList.add('theme-dark');
                } else if (selectedTheme === '2') {
                    bodyElement.classList.add('theme-light');
                } else if (selectedTheme === '3') {
                    bodyElement.classList.add('theme-violet');
                }
                break; 
            }
        }
}
init();

