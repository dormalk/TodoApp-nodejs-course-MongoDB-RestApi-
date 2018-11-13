﻿# TodoApp-nodejs-course-MongoDB-RestApi
  Implement RestApi for ToDo App. 
## Implementation
  Node.js - \
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
  - Middleware 
      authenticate.js - Used to private route for RestApi 
      
