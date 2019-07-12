


<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/laudable_logo.png" target="_blank">


##### Laudable is an Audible clone created by Marc Schlossberg. It replicates some of the core features and styling of the original site using Node, Rails, React, and Redux.

### [Laudable Live](https://laudable.herokuapp.com/#/)

<hr />

| Core Features | Details | 
| ------------- | --- | 
| [User Auth](https://github.com/mschl0ss/laudable/blob/master/README.md#user-auth)     | Bootstrap, Login/Signup, Auth/Protected Pages |
| [Search & Nav](https://github.com/mschl0ss/laudable/blob/master/README.md#search--nav)  | Search, Browse, Sign In/Out |
| [Categories](https://github.com/mschl0ss/laudable/blob/master/README.md#categories)    | Index, Show| 
| [Books](https://github.com/mschl0ss/laudable/blob/master/README.md#books) | Display, Reviews, Add New Review| 

<hr />

## User Auth
<hr />

* Laudable implements a standard Rails backend auth pattern (`session_token`, `password_digest`) and connects that to React by bootstrapping the current user to the window.

##### Bootstrap

<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/bootstrap.png" width="40%">

<hr />

#### Users can login/signup, with errors on form submit validated at the model level and passed back up to the front end.

* Password (and password re-entry on sign up) use model level validations ***but don't store the values in the database***

##### Login w/ Errors


<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/login.png" width="40%"><img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/login_errors.png" width="40%">


.

##### Signup w/ Errors
<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/create.png" width="40%"><img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/create_errors.png" width="40%">

<hr />

#### Auth/Protected Routes

* **Auth** pages are only accessible when no user is logged in *(login, signup, auth splash)*

* **Protected** pages are only accessible when there is a logged in user *(categories, books, reviews)*

##### Auth Splash

<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/a_splash.png" width="80%">

##### Protected Splash

<img src="https://raw.githubusercontent.com/mschl0ss/laudable/master/public/readme%20images/p_splash.png" width="80%">


<hr />

## Search & Nav
<hr />

* User navigates the site using the nav bar at the top.  They can browse, search, and sign in/out.

<hr />

## Categories
<hr />

<hr />

## Book Show
<hr />


<hr /><hr />

