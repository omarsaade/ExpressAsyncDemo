console.log("Before");
getUser(1, getRepositories);
console.log("After");

// we have 3 patterns to deal with async code
//callbacks
//promises
//Async/await

//named function
function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "omar" });
  }, 2000);
}

//asynchronous function
function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Reading a user from a data...");
    callback([1, 2, 3]);
  }, 2000);
}
