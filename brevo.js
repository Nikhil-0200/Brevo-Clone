let evel1 = document.getElementById('#one');
let evel2 = document.getElementById('#two');
let evel3 = document.getElementById('#three');
let evel4 = document.getElementById('#four');
let evel5 = document.getElementById('#five');

let imageArr = [
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/SMBS-1.jpg",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/startups_2x.webp",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/agencies_1x.webp",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/agencies_1x.webp",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/enterprise_2x.webp",
];

let image = document.querySelector('#right-img > img');



let currentimg = 0;
let currentimg1 = 1;

image.setAttribute('src',imageArr[i])
evel1.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[currentimg]);
});
evel2.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[currentimg1]);
})
evel3.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[5]);
})
evel4.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[1]);
})
evel5.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[1]);
})

