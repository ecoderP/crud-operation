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
        input.value = "";
        msg.innerHTML = "";

        acceptData();
    }
};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};

let createPost = () => {
    posts.innerHTML += ``;
}