let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

let data = {}; //To hold submitted data


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('button clicked');

    formValidation();
});

let formValidation = () => {
    if(input.value === "") {
        msg.innerHTML = "Posts cannot be blank";
        console.log('failed to submit')
    } else {
        console.log('success');
        msg.innerHTML = "";

        acceptData();
    }
};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
                    <p>${data.text}</p>
                    <span class="options">
                        <i onClick="editPost(this)" class="fa fa-edit"></i>
                        <i onClick="deletePost(this)" class="fa fa-trash"></i>
                    </span>
                </div>
    `;

    input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
