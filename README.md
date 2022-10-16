# README-generator
An application that can create a quality README for your projects

## Description

Through the use of this application, developers are able to generate a professsional README file by answering the prompts presented by the application. Once all the questions are answered, this will create a README.md with all the necessary headings and information inputted through the application. 

In creating this application the following was undertaken:
- Importing and utilising the Inquirer package npm. 
- An array is used to list the questions.
- A function was created to use the inquirer package to refer to the questions and the type of inputs that are expected from the users. This essentially forms the prompts that the user will encounter when interacting with the interface.
- The same function also writes the answers to the README.
- A separate function was used to string together the details entered by the user into their respective places in the README file. There is also where other components are added - such as headings, contents, links etc.


## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage

To view the repository please follow this link: (https://github.com/NT399/README-generator)
Video walkthrough link: (https://drive.google.com/file/d/141SFMIXCy_Jfzw-pNiK_l2YLWvQKp8nn/view)

To use the application, please follow the steps below:
1. Clone the repository into your local drive. 
2. Ensure you have VS code or any other terminal platform installed.
3. Navigate to the directory in which you cloned the repository via the terminal.
4. Then enter 'node index.js'.
5. Answer the questions as they appear. 
6. Once completed, a README file should appear in the same directory. 


## Credits

The following links were helpful for the completion of this project:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://www.npmjs.com/package/inquirer/v/8.2.4
- https://nodejs.dev/en/learn/writing-files-with-nodejs/


## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
