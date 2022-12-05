/*
console.log("Before");
//asynchronous code that uses that callback approach
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});
console.log("After");
*/

//write this using promises
console.log("Before");
//asynchronous code that uses that callback approach

// const p = getUser(1);
// p.then((user) => console.log(user));

getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits", commits))
  .catch((err) => console.log("Error", err.message));

console.log("After");

/*
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}
*/

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

/*
function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
*/

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

/*
function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["commit"]);
  }, 2000);
}
*/

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
