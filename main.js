var submit = document.getElementById('submit');

submit.addEventListener('click', function () {
  var userName = document.getElementById('name').value;
  var userInput = document.getElementById('message').value;
  var newPost = document.createElement('div');
  var postAuthor = document.createElement('div');
  var userNameElement = document.createTextNode('Posted By: ' + userName);
  var userInputElement = document.createTextNode(userInput);

  newPost.appendChild(userInputElement);
  postAuthor.appendChild(userNameElement);
  
  document.getElementsByClassName('posts')[0].append(newPost);
  document.getElementsByClassName('posts')[0].append(postAuthor);
});