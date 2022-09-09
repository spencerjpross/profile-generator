# profile-generator

** Table of Contents **
- Description
- Usage
- Installation
- Features
- Learnings
- Challenges
- Future Iterations


** Description **
This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This is focusing on Module 10 for OOP (Object Oriented Programming).

** Usage **
![screenshot](./assets/images/Screen%20Shot%202022-09-08%20at%208.32.49%20PM.png)
Video - (https://drive.google.com/file/d/1tp8GFWxVbbSPGLEozx02zLzMT-uBtkuo/view?usp=sharing)

** Installation **
- Install Jest and Inquirer 

** Credits **
- Had help with some tutors from the bootcamp and TA's during office hours

** Features **

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

** Things I learned in this project **
- creating functions that invoke the inquirer prompt
- creating a template literate with a full HTML template in it
- creating Classes and linking them into the index.js

** Challenges **
- creating a template file and then figuring out how to add it to the htmlFile function on index.js in the parameters.  
- 


** Future Iterations **
- I'd like to learn how to add new cards without creating a new html file each time.