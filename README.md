


<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/laudable_logo.png" >


##### Laudable is an Audible clone created by Marc Schlossberg. It replicates some of the core features and styling of the original site using Node, Rails, React, and Redux.

### [Laudable Live](https://laudable.herokuapp.com/#/)

<hr />

| Core Features | Details | Details |
| ------------- | --- | --- |
| [User Auth](https://github.com/mschl0ss/laudable/blob/master/README.md#user%20auth)     | Bootstrap |Login/Signup | Auth/Protected Pages |
| Search & Nav  | Search | Browse | Sign In/Out |
| Categories    | Index  | Show| |
| Book Show | Display Reviews | Add New Review| |

<hr />

## User Auth

Laudable implements a standard Rails backend auth pattern (`session_token`, `password_digest`) and connects that to React by bootstrapping the current user to the window.

Users can login/signup, with errors on form submit validated at the model level and passed back up to the front end.  
Password (and password re-entry on sign up) use model level validations *but don't store the values in the database*

**Auth** pages are only accessible when no user is logged in *(login, signup, auth splash)*

**Protected** pages are only accessible when there is a logged in user *(categories, books, reviews)*

<hr />

