# TodoApp-nodejs-course-MongoDB-RestApi
  Implement RestApi for ToDo App. 
## Implementation
  ### Node.js -
  - Users Api \
      POST: /users - If not ragistered, create new user record on Mongo \
      GET: /users/me - Return json for login user include: id, email \
      DELETE: /users/me/token - Logout user by remove his x-auth token \
      POST: /users/login - Login user by generate new x-auth token 
  - Todo Api \
      POST: /todos - Create new Todo record \
      GET: /todos - Fatch all Todos records \
      GET: /todos/:id - Fatch specific Todo record by his id \
      DELTE: /todos/:id - Delete specific Todo record by his id \
      PATCH: /todos/:id - Update specific Todo record by his id 
  - Middleware \
      authenticate.js - Used to private route for RestApi. compare x-auth to user uniq token.
  ### MongoDB
  Holds two sets of data: Todos and Users
  ### Tests
  Used 'supertest' and 'expect' libreries \
  'Seed' folder - Hold initial instructions for tests.
## Get Started(Using Postman)
  1. Download 'Postman' (Link bellow)
  2. Download 'Todo App.postman_collection.json' from this git
  3. Load 'Todo App.postman_collection.json' to 'Postman'
  4. Update environment to this link https://still-sea-35917.herokuapp.com
  4. Try all request(remember to ragister first with POST /users)
  5. Feel free to send a message in any issue
## Project status
  done
      
