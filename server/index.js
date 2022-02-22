const express = require('express');
const apiRoutes = require('./routes/api');
const cors = require('cors');
const port = 5000;

const app = express();
const db = require('./data/mockDB');

// const session = require('express-session');
// const store = require('connect-loki');
// const LokiStore = store(session);

console.log(db.todolist);
const todolist = db.todolist;

const clone = (object) => {
  return JSON.parse(JSON.stringify(object));
};

app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use(express.static(__dirname + '/public/ui_react'));

app.use(express.json());

// app.use(
//   session({
//     cookie: {
//       httpOnly: true,
//       maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
//       path: '/',
//       secure: false,
//     },
//     name: 'balancehomes-todolist-app',
//     resave: false,
//     saveUninitialized: true,
//     // secret would normally auto-generated and obtained from another source like a database
//     secret: 'randomstring',
//     store: new LokiStore({}),
//   })
// );

// Put this code after `app.use(session(...))`

// app.use((req, res, next) => {
//   if (!('todolist' in req.session)) {
//     console.log('showo toto', req.session.todolist);

//     console.log('make new todolist in api', req.sessionID);
//     req.session.todolist = todolist;
//   }

//   next();
// });

app.use((req, res, next) => {
  if (!('todolist' in req)) {
    console.log('make new todolist in api');
    req.todolist = todolist;
  }
  next();
});

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
