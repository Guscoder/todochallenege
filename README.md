### Use and installation

1. Download the repo
2. Change directory to server and run 'npm install'
3. Go back to parent directory and change dir to client and run 'npm install'
4. Go back to parent directory and run 'npm start' (both front/back servers will boot up)
5. React UI should appear at localhost:3000, Server on localhost:500;

### My Comments

I wanted to share a few thoughts on the challenge:

1. I used a file object (in the data/mockDB.js) to function as the database in this exampe, simply because it was simplest and a way to persist the user data for this example as I could not include an actual database with the code or authentication info for a db. I could just subsitstute MongDB or Firebase fairly easily as the data store and hook it up using the API

2. I put the routes in the routes/api file so that they are cleary separated and can be accessed/change eaasily.

3. Some of the functionality of the callbacks in the api routes could be removed and put into a controller file instead if I was refactoring this.

4. Another change I could make is to alter the data store from an array to an object. This would allow faster access, particularly for read/deletion purposes.

#

## Front End Notes

1. I created an API client component to hold the API access functionality and separate the data fetching from the presentational components.

2. I have a utils file that would be used for some of the functions like filtering active todos--these functions could be extracted to this utils file in a refactor.

3. There are many ways to style React components, I chose to do a single sass file for each component which keeps the styling out of the react component code, a little clearer. I also have a file for the main sass variables that are used throughout the app. This makes it easier to change styles.

4. I created a variety of React components to make it as modular as possible and changes easy to deal with.

5. As I review my code, one area of refactoring would be to reduce the amount of props being passed down. I think I could use Context or perhaps reformat some of the components or their organization.

### Objective

Your challenge is to build out this todo app and get it looking as close to the design as possible.

### Brief

Using JavaScript and React, your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design to work to. The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. There is also a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

Your users should be able to:

- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos

### Evaluation Criteria

- **JavaScript** best practices
- Show us your work through your commit history
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

### Deliverables

Make sure to include all source code in the repository.

### CodeSubmit

Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,
