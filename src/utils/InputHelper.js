export const inputHelper = {
    upInput(wrap, elem, screenParts = 4) {
        const wrapper = document.querySelector(wrap);
        wrapper.style.marginBottom = document.body.offsetHeight / screenParts  + "px"
        setTimeout(() => {
            const input = document.querySelector(elem)
            const y = input.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
        }, 100)
    },
    downInput(wrap, elem) {
        const input = document.querySelector(elem);
        const y = input.getBoundingClientRect().top + window.scrollY;
        const wrapper = document.querySelector(wrap);
        wrapper.style.marginBottom = 0
        window.scrollTo({
            top: y
        });
    }
}


// export default function inputHelper(wrap, elem) {
//     const wrapper = document.querySelector(wrap);
//     if (wrapper.style.marginBottom != 0) {
//         wrapper.style.marginBottom = document.body.offsetHeight / 4 + "px"

//         setTimeout(() => {
//             const input = document.querySelector(elem)
//             const y = input.getBoundingClientRect().top + window.scrollY;
//             window.scrollTo({
//                 top: y,
//                 behavior: "smooth"
//             });
//         }, 100)
//     } else {
//         const input = document.querySelector(elem);
//         const y = input.getBoundingClientRect().top + window.scrollY;
//         const wrapper = document.querySelector(wrap);
//         wrapper.style.marginBottom = 0
//         window.scrollTo({
//             top: y
//         });
//     }

// }