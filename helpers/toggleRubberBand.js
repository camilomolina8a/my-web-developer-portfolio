export const toggleRubberBand = (e) => {
    const letter = e.target;
    letter.classList.add("bouncing");
    setTimeout(() => {
        letter.classList.remove("bouncing");
    }, 800);
};