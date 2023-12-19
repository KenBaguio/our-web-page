let img = document.querySelector('#img');
let imgInput = document.querySelector('#imageInput');
const imgViewer = document.querySelector('.img-container');
const post = document.querySelector('#post');
const captionInput = document.querySelector('#captionInput');
const postContainer = document.querySelector('.contents-el');
let imgLink;

console.log(imgLink);

img.addEventListener('click',()=>{

    imgInput.click();

    imgInput.addEventListener('change',()=>{
        imgLink = URL.createObjectURL(imgInput.files[0]);

        imgViewer.innerHTML = `
        <img src="${imgLink}" alt="">
            `
    })

})

post.addEventListener('click',()=>{

    if(captionInput.value === "" && imgLink === undefined){
        alert('Please input something');
    }else{

        const randomHeart = Math.floor(Math.random() * 40000 + 500);
        const randomShares = Math.floor(Math.random() * 30000 + 500);

        const postEl = document.createElement('div');
    postEl.classList.add('post-el');

    postEl.innerHTML = `
    <div class="caption">
    <p>
      ${captionInput.value}
    </p>
  </div>
  ${(imgLink === undefined) ? "" : `<img src="${imgLink}" alt="" />`}
  <div class="post-prof">
    <div class="name">
      ${(imgLink === undefined) ? "" : `<img src="${imgLink}" alt="" />`}
      <p>Arvs gwaps</p>
    </div>
    <div class="likes">
      <div class="heart">
        <i class="fa-solid fa-heart"></i>
        <p>${randomHeart}</p>
      </div>
      <div class="share">
        <i class="fa-solid fa-share"></i>
        <p>${randomShares}</p>
      </div>
    </div>
  </div>
    `

    postContainer.appendChild(postEl);


    }

})