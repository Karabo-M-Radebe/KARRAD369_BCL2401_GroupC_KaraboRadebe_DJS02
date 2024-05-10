# DJS02 Project Brief: Whole Number Divider

# Project Overview
This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. It challenges one to think critically about user input, error handling, and providing a seamless user experience.

# Project Brief
The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. My task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

1. **Review the Starter Code**: Understand the current implementation and its limitations.
2. **Implement User Stories**: Modify the code to fulfill all unresolved user stories. Pay attention to error handling and user input validation.
3. **Error Handling**: Ensure the application handles errors gracefully, providing clear feedback to the user without crashing.
4. **Testing**: Test your application thoroughly with various inputs to ensure it meets all the user stories.

#### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

#### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom
  
#### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown

#### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 
#### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely
 
#### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.

# Elements included 
- Updated HTML and JavaScript files.
- Submit your project to the LMS Project Tab for DJS02

# Reflections 

### Areas of mastery 
If there is one area I can say that I confidently understand from this project, it would have to be the logic and syntax of conditional statements. Having tested a few iterations of code so that I could find the most suitable line of code, helped me explore much of the logic behind conditional statements, and the repetitive nature of testing helped me get the syntax down. 

### Challenges faced 
I faced a lot of pushback from the coding challenge when dealing with the final scenario. This scenario overrode a lot of my previous code and it took me a significant amount of time to debug and find the required solution. 

### Areas of Improvement 
- Refactoring: not entirely happy with the way my code has been presented because there is a lot of repetition, however in my pursuit of trying to refactor all the repetitive code, I kept bumping into issues that crashed my code and produced unwanted results. 

## Overall learning experience
This project was a great way to practice my skills in JavaScript and to learn more about the logic behind conditional statements. I was able to apply my knowledge of error handling and user input validation to the project. I learnt quite a lot during this process, I do however, feel as though my experience was not much of a positive one due to personal reasons and the frustration behind trying to code solutions that are elegant and have sound logic. 