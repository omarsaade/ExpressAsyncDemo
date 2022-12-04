/*

function momo(id){
  console.log("good" + id);  
}

function gogo(callback){
    callback(2);
}

gogo(momo);


*/

console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
  //Get the repositories
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});
console.log("After");

// we have 3 patterns to deal with async code
//callbacks
//promises
//Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "omar" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
