This is a second project of three (03) in the React Developer nano degree program

# Would You Rather?

## Installation
Use `npm install`

## Start up the application
Use `yarn start` or `npm start`

## How it was done

### Step one: Identify Each View

1. Sign in view (Impersonate)

The Sign in (Impersonate) view shows the login box to select an existing user to impersonate and a button to signin

*Sign in view (Impersonate) Requirements*

* Is located at the root (`/`) route
* shows select dropdown for selecting from a list of existing users
* a button to click and signin
* when signin is successful redirect to the home view or to the intended page (if the user's action was intercepted)

2. Sign in view (Authenticate)

The Sign in (Authenticate) view shows the login box with a form with inputs for username and password and a button to signin

*Sign in view (Authenticate) Requirements*

* Is located at the authenticate (`/authenticate`) route
* shows inputs for username and password with correct validation rules
* a button to click and signin
* when signin is successful redirect to the home view or to the intended page (if the user's action was intercepted)

3. The home view

The home view displays the `answered` and `unanswered` poll categories

*Home view Requirements*

* Is located at the home route (`/home`)
* Each Category shows poll previews sorted from most recently added at the top, to oldest at the bottom
* The `unanswered` category should be the default 
* Each Poll Preview will show
    * `author name` asks 
    * The author avatar
    * Would you rather
    * Substring of the first option
    * A button to view the poll details
* Each poll should be clickable to view the poll details
* When an `unanswered` poll is clicked you should see the `unanswered` poll details view
* When an `answered` poll is clicked you should see the `answered` poll view

4. Poll Page view
This is a view for a single poll

*Poll Page view Requirements*

* Is located at `/questions/:id`
* Shows Asked by `author`
* Shows Author avatar
* If the poll has been answered by `authed user`
    * Show results
    * Results is the list of options
    * Indicate the option selected by the `authed user`
    * Each option should show
        * A percentatge bar indicating the pecentage of votes 
        * A count of votes out of total votes
* If the poll has not been answered by `authed user`
    * Show `Would you Rather...`
    * Show the poll questions
    * With Radio button on each option
    * and a submit button to submit vote
    * once a response is submitted show the results view

5. New Question Page View
This gives the `authed user` the option to create a question of their own
*New Question Page View Requirements*

* located at `/add` 
* shows `Create New Question`
* shows `Complete the question`
* shows `Would you rather...`
* shows two input for each option
* shows appropriate placeholders
* and a button to submit
* this button must be disabled if any option is empty

6. The Leader board page view
This page lists users according to the number of questions asked and answered

*The leaderboard page requirements*

* Is located at `/leaderboard`
* Shows a list of users cards ordered by sum of questions asked and questions answered
* Each user card shows
    * user name
    * user avatar
    * Number of questions the user asked
    * Number of questions the user answered
    * Total score

7. The Navigation Bar
*Navigation Bar Requirements*
* This should show on all pages 
* Should contain the following links 
    * Home
    * New Question
    * Leader Board
    * Logout
    * User profile
        * user name
        * user avatar
* if the user is logged out the following should not be shown
    * Logout
    * User profile

8. The Signup page view
This page is to create accounts for users
*Signup page Requirements*

* This is located at `/sign-up`
* This should show
    * A form with inputs
        * For username
        * Password
        * Repeat password
        * Submit button
    * Form will not submit if passwords do not match and indicate that the passwords do not match
    * If username already exists, account creation should fail with the appropriate failure message

    ### View Recap


1. Sign in view (Impersonate)

2. Sign in view (Authenticate)

3. The home view

4. Poll Page view

5. New Question Page View

6. The Leader board page view

7. The Navigation Bar

8. The Signup page view

### Step 2: Break Each View into a Hierarchy of Components

1. Sign in view (Impersonate)

* App - the overall container for the project
* Navigation - displays the navigation
* Login Box - in charge of managing login flow

2. Sign in view (Authenticate)
3. The Home view is broken up into Components
    * App - the overall container for the project
    * Navigation - displays the navigation
    * Poll Category Navigation - displays the navigation of poll categories
    * Poll list - responsible for the entire list of polls this should filter the polls based on whether they are answered or not
    * Poll Preview - in charge of displaying the content for a single poll preview

    4. Components for the poll page view

    * App - the overall container for the project
    * Navigation - displays the navigation
    * Poll Container - displays the poll info
    * Poll Questions - displays the poll questions
    * Poll Results - displays the poll results

    ### Step 3: What events happen in the App

    1. Sign in view (Impersonate)
    * get the users to impersonate
        * action type for this event: `GET_USERS`
    