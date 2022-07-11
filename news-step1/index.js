const content = document.createElement('div');
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
/*
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
*/

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        const ul = document.createElement("ul");
        for(let i=0; i<10; i++){
            const li = document.createElement("li");
            li.innerHTML = result[i].title
            ul.appendChild(li);
        }
        document.getElementById("root").appendChild(ul);
    })
    .catch(error => console.log('error', error));