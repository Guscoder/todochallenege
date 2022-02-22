const express = require('express');
const router = express.Router();

router.get('/todolist', (req, res, next) => {
  res.send(req.todolist);
});

router.post('/todolist/new', (req, res) => {
  req.todolist.push({
    task: req.body.task,
    isComplete: false,
    id: Date.now(), // this is just to have different ids--would never do this in production
  });

  res.send(req.todolist);
});

// split out callback functions!!!
router.put('/todolist/:todoId', (req, res) => {
  let { todoId } = { ...req.params };
  let todoIndex = req.todolist.findIndex((todo) => todo.id === Number(todoId));
  let list = req.todolist;
  list[todoIndex].isComplete
    ? (list[todoIndex].isComplete = false)
    : (list[todoIndex].isComplete = true);
  todoIndex !== -1 ? res.sendStatus(204) : res.sendStatus(200);
});

router.delete('/todolist/:todoId', (req, res) => {
  let { todoId } = { ...req.params };

  // need to check if item exists?
  let deleteIndex = req.todolist.findIndex(
    (todo) => todo.id === Number(todoId)
  );
  req.todolist.splice(deleteIndex, 1);
  res.sendStatus(204);
});

router.delete('/todolist', (req, res) => {
  while (true) {
    let indexNum = req.todolist.findIndex((todo) => todo.isComplete);
    if (indexNum === -1) break;
    req.todolist.splice(indexNum, 1);
  }
  res.sendStatus(204);
});

module.exports = router;

// router.get('/todolist', (req, res, next) => {
//   res.send(req.session.todolist);
// });

// router.post('/todolist/new', (req, res) => {
//   req.session.todolist.push({
//     task: req.body.task,
//     isComplete: false,
//     id: Date.now(), // this is just to have different ids--would never do this in production
//   });
//   console.log(req.session.todolist);

//   res.send(req.session.todolist);
// });

// // split out callback functions!!!
// router.put('/todolist/:todoId', (req, res) => {
//   let { todoId } = { ...req.params };
//   let todoIndex = req.session.todolist.findIndex(
//     (todo) => todo.id === Number(todoId)
//   );
//   console.log(todoIndex);
//   let list = req.session.todolist;
//   list[todoIndex].isComplete
//     ? (list[todoIndex].isComplete = false)
//     : (list[todoIndex].isComplete = true);
//   todoIndex !== -1 ? res.sendStatus(204) : res.sendStatus(200);

//   // todoObj[todoId] = {...todoObj[todoId], isComplete: true }
// });

// router.delete('/todolist/:todoId', (req, res) => {
//   let { todoId } = { ...req.params };
//   // need to check if item exists?

//   let newList = req.session.todolist.filter(
//     (todo) => todo.id !== Number(todoId)
//   );
//   delete req.session.todolist;
//   console.log('deleted?:', req.session.todolist);
//   req.session.todolist = newList;

//   console.log('newsession:', req.session.todolist);

//   // delete req.session.todoObj[todoId];
//   res.sendStatus(204);
// });

// router.delete('/todolist', (req, res) => {
//   req.session.todolist = req.session.todolist.filter(
//     (todo) => !todo.isComplete
//   );
//   console.log(req.session.todolist);
//   // Object.entries(req.session.todoObj)
//   res.sendStatus(204);
// });
