## Passport Intro

Key Take-Away:

- req.isAuthenticated() - true is user is logged in; false if otherwise
- req.user - gives you the logged in user information
- rejectUnauthenticated - middleware to protect routes from access by the public or people not logged in 

## User Types or Groups
- Add a porperty to your user table
--could do admin property as a boolean true/false
--'user_type' property as String with know values like "admin", "group_1", whatever
--Or connect to other table with user types (but this is maybe more complicated than needs to be for solo project)
