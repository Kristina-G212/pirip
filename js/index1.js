const avatarFileUpload = document.getElementById('AvatarFileUpload')
const imageViewer = avatarFileUpload.querySelector('.selected-image-holder>img')
const imageSelector = avatarFileUpload.querySelector('.avatar-selector-btn')
const imageInput = avatarFileUpload.querySelector('input[name="avatar"]')

imageSelector.addEventListener('click', e => {
    e.preventDefault()
    imageInput.click()
})

imageInput.addEventListener('change', e => {
    let reader = new FileReader();
    reader.onload = function(){
        imageViewer.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
})

const mainDivComments = document.getElementById('comments');
const btnToComment = document.getElementById('to_comment');


btnToComment.addEventListener('click', function () {
    let inputCom = document.getElementById('input_nickname').value;
    let textareaCom = document.getElementById('textarea_comment').value;
    let imgAvatar = document.getElementById('img-avatar').src;

    let newCom = document.createElement('div');

    newCom.classList.add('comment');

    newCom.innerHTML = `<img class="AvatarFileUpload" src="${imgAvatar}">
                     <div class="nickname_and_box-comment_text">
                     <p class="nickname">${inputCom}</p>
                     <p class="text">${textareaCom}</p>
                     </div>`;

    mainDivComments.appendChild(newCom);

    inputCom.reset;
    textareaCom.reset;
    imgAvatar.reset;
})

