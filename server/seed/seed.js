const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../models/todos');
const {User} = require('./../models/users');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'dormalk@gmail.com',
  password: 'myPassword',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
  }]
},{
  _id: userTwoId,
  email: 'aimeenim@gmail.com',
  password: 'myPasswordLove'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];


const populteTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
}

const populteUsers = (done) => {
  User.remove({}).then(() => {
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();

      return Promise.all([userOne,userTwo]);
  }).then(() => done());
};
module.exports = {
  todos, populteTodos,populteUsers,users
}
