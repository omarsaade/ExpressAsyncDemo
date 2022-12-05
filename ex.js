console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

// we have 3 patterns to deal with async code
//callbacks
//promises
//Async/await

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    return { id: id, gitHubUsername: "omar" };
  }, 2000);
  //   return 1;
}
