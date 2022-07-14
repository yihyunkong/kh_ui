const main = document.querySelector("main");

main.addEventListener('click', (e) => {
    console.log(`${e.target}, ${e.currentTarget}`); // 더블링?
});