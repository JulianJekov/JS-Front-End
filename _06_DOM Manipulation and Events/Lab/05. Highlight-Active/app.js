function focused() {
    const sections = document.querySelectorAll('input[type="text"]');
    let sectionArr = Array.from(sections);

    for (const section of sectionArr) {
        section.addEventListener('focus', () => {
            section.parentElement.className = 'focused';
        });

        section.addEventListener('blur', () => {
            section.parentElement.className = '';
        });
    }
}



// const sections = document.querySelectorAll('input');
    
// const sectionArr = Array.from(sections);

// for (const section of sectionArr) {
//     section.addEventListener('focus', () => {
//         section.parentElement.className = 'focused';
//     });

//     section.addEventListener('blur', () => {
//         section.parentElement.className = '';
//     });
// }