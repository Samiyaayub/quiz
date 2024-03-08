//Question 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users:string[] = ["Noah", "Jack", "William", "Naime"]
let new_users:string[] = ["Peter", "Cristine", "Polard", "Berlin"]

function checkUsername(current_users:string[], new_users:string[]):void {
     let lower_current_users = current_users.map(user => user.toLowerCase());
     for(let user of new_users) {
      let lower_new_users = user.toLocaleLowerCase();
      if(lower_current_users.includes(lower_new_users)) {
        console.log(`Username "${user} is already here.Please Enter a new Username."`);
      } else {
        console.log(`Username "${user}" is Available.`);
      }
     }
}

checkUsername(current_users, new_users);