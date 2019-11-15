#  Template Engine - Employee Summary

## Summary

This command line app prompts the user to input details about their team. It then uses the data collected to generate an html file (a basic web page) that displays the inputed team in a pleasing manner.

### Operation

The app starts by prompting the user to input details about the team manager (name, branch number, etc.). Once collected, the app asks the user if they would like to input additional team members. If the user answers "no", the app proceeds to generate the html for the inputed manager. If the user selects "yes", the app asks if the new team member is an engineer or an intern, and then proceeds to collect various data about them. After each submission, the user has an option to either add another user, or finish, at which points the html is generated.

### Functionality

The app has 2 main functions, and several supporting functions. The first main function is the teamMAker function that launches upon program start. This function introduces the user to the app, and begins collecting the required information using Inquirer prompts. Once input has been collected, a promise is activated that turns the collected data into an instance of a predefined class, and pushes that instance into an array of similar instances (a total of 3 arrays: manager, engineers, and interns). This function also uses a chain of logic statements to determine which callback function to run next - a create intern/engineer callback, or the done function.

The 2nd main function is the generateHTML function that is written on a seperate page. This function accepts the arrays created in the first part of the app, and generates a web page around them. For each of those arrays, it runs a .map method that created a card with the inputed information. Each type (manager, interns, engineers) have a different class associated with them that allows for seperate CSS colours, as well as seperate data displayed.

Once the generated HTML is returned, an asynchronous fs write function launches that creates the actual HTML file.

#### Methods and libraries used

This app uses several Node modules: fs, inquirer, and util, as well as jest for initial testing of the created classes.




