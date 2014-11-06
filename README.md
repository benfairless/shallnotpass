shallnotpass
============

Shallnotpass is a simple web application providing password generation and
recovery without the need for a encrypted password store.

All password generation is done client-side in your web browser so **your
information never leaves your machine and is never saved anywhere**.

![Screenshot](img/screenshot.png?raw=true)

## Raison d'être

Traditional password management tools have two main issues:

- Passwords are stored in an encrypted database; all stored passwords can be
  accessed in plain-text once the database is opened.
- Users require access to the encrypted database every time stored login
  details are required.

Shallnotpass mitigates these issues by relying on the consistent nature of
hashing algorithms. Using a similar principle to how passwords are secured in
most server-side databases, passwords are never actually stored anywhere and
instead a repeatable process of generating a consistent password hash is used.

## Usage

To generate a password simply input the name of an account you wish to generate
a password for (eg. github.com) and a master password into the input fields and
then press 'Enter' on your keyboard. A password will be generated immediately
in your browser. Press the trashcan to clear the password when you've used it.

There is no need to have a particularly strong master password, but it is
extremely important that it is memorable. There is no 'Forgot my password'
facility in shallnotpass, so if you forget the master password your account
passwords will be lost forever!
