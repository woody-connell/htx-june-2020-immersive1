const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

let password = "some user password";

// password + salt -> crypto algorithm -> store in database

// salts are randomized characters that you add to help protect the password

let salt = crypto.randomBytes(20).toString('hex');

// hash combination of password & salt

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');

let hash = key.toString('hex');

let stored_pass = `pbkdf2_sha256$3600$${salt}$${hash}`;


// Now a person is logging back in (below is the code for when this happens)

let myString = "hello"

// ['pbkdf2_sha256', '3600', 'salt', 'hash']

let pass_ports = stored_pass.split('$');

let newPassword = "some user password"; // try with a different password from the first one

let keyNewLogin = pbkdf2.pbkdf2Sync(
  newPassword,
  pass_parts[2],
  parseInt(pass_parts[1]),
  256,
  'sha256'
)

let hashNewLogin = keyNewLogin.toString('hex');

if (hashNewLogin == pass_parts[3]){
  console.log('Passwords match.');
}
else{
  console.log('Passwords do not match. Try Again.');
}
3