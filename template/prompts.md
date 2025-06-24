
# String Reverser Web Tool
We are developing a lightweight web application that allows users to reverse any input string in real time.

## Technology stack:
- HTML5
- Javascript
- CSS

## Objects
- We are going to create an index.html file for the UI and a file called script.js for the logic, also add a css file to give the css styles to the UI to make it look simple and minimalistic.
- In the index.html file you are going to place the title “Reverse String”, below a text field for the user to add the text string, below a button called “Reverse” containing an icon referring to the reverse action, and below display the result of the text string in an HTML p-element.
- In the script.js file add the necessary logic to reverse the input text and display the result in the UI.
- When typing more than 3 letters in the input the Reverse button must appear in the UI, otherwise it must be hidden.
- The result must be shown in real time, as you type the text in the input you must see the result.

Prompt[https://chatgpt.com/s/t_68509d4c41a8819196a3aae5e4a63b66]

-------

Solucion por AI4Dev:

Create a webpage that revere a string wrote by the user, following those acceptance criteria: Technical critera:

Separate the html and javascript code into index.html and script.js
Use JS Vanilla
Apply the SOLID principles
Implement all necesary logs in the console
Catch all possible exceptions
For CSS use tailwind
Make it responsive website
Functional criteria:

There will and input text to write the text to reverse and the button to trigger the reverse action.
The minimun lenght will be 3 characters and the maximun will be 20
If the min and max criteria aren't accomplish, mark the input with most appropiated tailwind style and show an error alert with a error message
If the text given is valid: 4.1. Reverse it and show it bellow the input, apply the style that you consider 4.2. Show a succesful alert 4.3. Clean the input 4.4. Hide the reversed text and the succesful alert after 10 seconds to be ready to use again
The reverse action also will be triggerred with the enter/return key
General criteria:

Add an attractive and funny title and description
Ask me all the extra information that you need before build it

Acá ChatGPT me hizo estas preguntas extra, las cuales le responsdí:

Here the extra info requested:

Title and Description: Do you have any specific themes or ideas in mind for the attractive and funny title and description? Or should I come up with something creative? R:/ I am taking a DEV AI course, this is the firs challenge using GPT, so, be creative

Error and Success Alerts: Is there a specific style or design you'd like for the error and success alerts? For example, should they appear as pop-up modals, inline messages, or toast notifications? Do you have any preferred error and success messages? R:/ Use the Alert tailwindui component

Tailwind CSS: Do you have a preferred method for including Tailwind CSS? Should I use a CDN link, or would you prefer that I set up Tailwind with a build process (e.g., using PostCSS)? R:/ Use CDN link

Logging: For the console logs, is there a specific format or level of detail you'd like? For instance, should logs include timestamps, or follow a certain structure? R:/ Use the most standard format

Exception Handling: Are there any specific exceptions or edge cases you'd like to be handled beyond input length validation? For example, handling non-string inputs, or unexpected errors during the reverse operation. R:/ Consider avoid empty string

Responsive Design: Are there specific devices or screen sizes you'd like the site optimized for? R:/ No, it will support most devices possible

Any Additional Preferences: Is there anything else you'd like to specify, such as color schemes, fonts, or any other functional or design aspects? R:/ if is possilbe use the colors of this website: https://www.lidr.co/
