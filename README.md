# JS Quiz
#### This application provides the user with a quiz on Javascript concepts. Checks the score and gives the user comments based on these scores., 02/2019
#### By **Ian Jaccojwang**
## Description
The user loads the website and gets instructions on how to answer the questions. On going through each question and providing an answer, the user gets feedback, namely:
* Questions answered
* Questions left blank
* Raw score
* Percentage score
* A comment
## Setup/Installation Requirements
* Go to the deployed site on: https://ijaccojwang.github.io/js-quiz/
* Answer all the questions. If not sure, you can leave the question blank.
* Submit the test and await your scores.
## Future Improvemnts
I would like to add a timer to make the test timed hence fair to all test takers. I would also like to add a scoreboard that records scores of all test takers.
## Technologies Used
This project was coded in:
* Html
* CSS
* JavaScript
Bootsrtap and Jquery were used as well.
## Behaviour driven development/ input and output checking
* The user will load the page and get instructions to answer the questions.
* Each question will have choices(Radio buttons) and the user will select one.
* The program will calculate the user's score and give feedback based on this.
* The user will get the following recommendations:
* Above 80%: Excellently passed.
* 50% to 80%: Fairly passed, Consider retake to improve.
* Below 50%: Failed, Retake test.

| Behaviour                                | Sample input         | Expected output                             |
|------------------------------------------|----------------------|---------------------------------------------|
| Accepts null values                      | Empty(no input)      | Counted as a blank question(not attempted)   |
| Shows one question at a time             | (Next button) Click  | Takes user to the next question/ section    |
| Gives feedback based on the user's score | (Score) Above 80%    | Excellently passed.                         |
|                                          | (Score) 50% to 80%   | Fairly passed, Consider retake to improve.  |
|                                          | (Score) Below 50%    | Failed, Retake test.                        |
## Support and contact details
For any questions, troubleshooting or contributions,  find me on:
* Mobile: +254702178825
* Email: danolago@gmail.com
### License
MIT License
Copyright (c) {2019} **Ian Olago Jaccojwang**
