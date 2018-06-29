[![Build Status](https://travis-ci.com/Confalone/14-relationship-modeling.svg?branch=master)](https://travis-ci.com/Confalone/14-relationship-modeling)

# Lab 14 Relationship Modeling
## Models

### Team Model

### Properties
  * `name ` (required)
  * `mascot`
  * `location` (required)
  * `players` (an array populated if a team has players)

### Players Model

### Properties
  * `name` (required)
  * `position` 
  * `number` (required)
  * `team` (required - associated with the team model)

## Server Endpoints
### `/api/v1/team` && `/api/v1/players`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new team or player
### `api/v1/team` && `api/v1/players`
* `GET` request
* Fetch all teams or players
### `/api/v1/team/:id` &&`/api/v1/players/:id`
* `GET` request
  * should pass the id of a team or player through the url endpoint to get a specific team or player
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to overwrite a pre-existing team or player
* `DELETE` request
  * should pass the id of a team or a player though the url endpoint to delete a specific team or player

### Tests
 * `GET` - test 200, returns a resource with a valid body
 * `GET` - test 404, respond with 'not found' for valid requests made with an id that was not found
 * `PUT` - test 200, returns a resource with an updated body
 * `PUT` - test 400, responds with 'bad request' if no request body was provided
 * `PUT` - test 404, responds with 'not found' for valid requests made with an id that was not found
 * `POST` - test 400, responds with 'bad request' if no request body was provided
 * `POST` - test 200, returns a resource for requests made with a valid body


### License

MIT © Tyler Confalone