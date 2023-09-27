const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userInfo = []

rl.question('What\'s your name or nickname? ', (answer) => {
  userInfo.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    userInfo.push(answer);
    rl.question('What do you listen to while doing that?', (answer) => {
      userInfo.push(answer)
      rl.question('Which meal is your favourite (eg: dinner, brunch etc.)? ', (answer) => {
        userInfo.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          userInfo.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            userInfo.push(answer); 
            rl.question('What is your superpower? In a few words, tell us what you are amazing at. ', (answer) => {
              userInfo.push(answer);
              console.log(`${userInfo[0]} loves listening to ${userInfo[2]} while ${userInfo[1]}, devouring ${userInfo[4]} for ${userInfo[3]}, prefers ${userInfo[5]} over any other sport, and is amazing at ${userInfo[6]}.`)
  rl.close();
            });
          });
        });         
      });
    });
  });
});




// Expecte output
// Devani loves listening to Ludovico Einaudi while coding, 
// devouring Yak Momos for brunch, prefers Tennis over any other sport, 
// and is amazing at dropping mad puns at inopportune times.