link to style guide: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

first assignment, I learned that Github takes some practice and it's hard to remember the syntax for all the commands. And don't blindly merge, ever. Fix the merge error first.


first server IP address using elastic IP: http://98.83.61.89
command to ssh into the srver:ssh -i ~/.ssh/keypaircs20.pem ubuntu@98.83.61.89 (44.222.194.12)
'exit' to exit

the .pem key is saved to my .shh folder and only I can see it



Once you have developed your application to where you want it, you need to release it to your production environment. Copy the deployFiles.sh script from the Simon HTML repository to your startup repository and use startup for the service parameter (-s)

./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
For example,

./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup
⚠ Make sure you using a POSIX compliant console (not PowerShell or CMD) and that you run deployFiles.sh from the project directory that you want to deploy.

Doing this will make this deliverable of your startup available from https://startup.yourdomainname.

Review for Midterm:
HTML and CSS Concepts

1. What does the `<link>` element do?
   - Explanation: It links external resources to the HTML, such as CSS stylesheets.
   - Example:
     ```html
     <link rel="stylesheet" href="styles.css">
     ```
   - Purpose: This connects your HTML to an external CSS file to apply styles.

2. What does a `<div>` tag do?
   - Explanation: The `<div>` is a generic container for other HTML elements.
   - Example:
     ```html
     <div class="container">
       <p>Hello, World!</p>
     </div>
     ```
   - Purpose: It’s used to group content, apply CSS styles, or make layouts.

3. Difference between `#title` and `.grid` selectors?
   - Explanation:
     - `#title` targets an element with the id “title” (unique).
     - `.grid` targets all elements with the class "grid".
   - Example:
     ```css
     #title { font-size: 20px; }
     .grid { display: grid; }
     ```
   - Key Difference: ID is unique (only one element), Class can be reused.

4. Difference between Padding and Margin?
   - Explanation: Both are spacing-related but have distinct purposes:
     - Padding: Space inside the element, between content and border.
     - Margin: Space outside the element, between the element and neighbors.
   - Example:
     ```css
     div {
       padding: 10px;
       margin: 20px;
     }
     ```
   - Visual Tip: Think of it as content → padding → border → margin → outside world.



 Flexbox and Layouts

5. How will images be displayed using Flex?
   - Explanation: `display: flex;` arranges child elements in a row or column.
   - Example:
     ```html
     <div style="display: flex;">
       <img src="img1.jpg">
       <img src="img2.jpg">
     </div>
     ```
   - Output: Images will be aligned horizontally in a row by default.

6. What does the following padding CSS do?
   - Example: 
     ```css
     padding: 10px 20px;
     ```
   - Explanation: 
     - 10px top/bottom, 20px left/right.
   - Shorthand: Think: Top-Bottom | Left-Right.



 JavaScript Examples

7. Arrow Syntax Function Example:
   ```javascript
   const add = (a, b) => a + b;
   console.log(add(2, 3));
   ```
   - Output: 5
   - Explanation: Arrow functions are shorthand ways to write functions.

8. Using `map` on an array:
   ```javascript
   const nums = [1, 2, 3];
   const doubled = nums.map(n => n * 2);
   console.log(doubled);
   ```
   - Output: `[2, 4, 6]`
   - Explanation: `map()` applies a function to each element of the array.

9. Using `getElementById` and `addEventListener`:
   ```javascript
   document.getElementById('btn').addEventListener('click', () => {
     console.log('Button clicked!');
   });
   ```
   - Output: Prints "Button clicked!" when the button is clicked.

10. Using a `#` selector:
    ```javascript
    document.querySelector('#title').textContent = 'New Title';
    ```
    - Explanation: Selects the element with ID `title` and changes its text.



 HTML Basics

11. Default CSS display for `<span>`:
    - Answer: `inline`

12. Change all `<div>` elements to have a red background:
    ```css
    div {
      background-color: red;
    }
    ```

13. Display an image with a hyperlink in HTML:
    ```html
    <a href="https://example.com">
      <img src="image.jpg" alt="Image">
    </a>
    ```

14. CSS Box Model Order:
    - Order: Content → Padding → Border → Margin

15. Set "trouble" to green but leave "double" unaffected:
    ```html
    <p><span class="trouble">trouble</span>double</p>
    <style>
      .trouble { color: green; }
    </style>
    ```



 JavaScript Operations

16. For Loop with `console.log`:
    ```javascript
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    ```
    - Output: 
      ```
      0
      1
      2
      ```

17. Change the text color of an element with ID "byu" to green:
    ```javascript
    document.getElementById('byu').style.color = 'green';
    ```



 HTML Tags

18. Opening HTML Tags:
    - Paragraph: `<p>`
    - Ordered List: `<ol>`
    - Unordered List: `<ul>`
    - Second Level Heading: `<h2>`
    - First Level Heading: `<h1>`
    - Third Level Heading: `<h3>`

19. Declare the document type as HTML:
    ```html
    <!DOCTYPE html>
    ```



 JavaScript Syntax and Objects

20. Valid JavaScript Syntax for Control Structures:
    ```javascript
    if (condition) {  }
    else {  }
    
    for (let i = 0; i < 10; i++) {  }
    
    while (condition) {  }
    
    switch (value) {
      case 1:  break;
      default: 
    }
    ```

21. Creating a JavaScript Object:
    ```javascript
    const person = { name: 'John', age: 30 };
    ```

22. Adding New Properties to Objects:
    ```javascript
    person.job = 'Developer';
    ```

23. Tag to Include JavaScript on a Page:
    ```html
    <script src="script.js"></script>
    ```

24. Change "animal" text to "crow" using JavaScript:
    ```javascript
    document.querySelector('.animal').textContent = 'crow';
    ```



 JSON and Command Line

25. What is JSON?
    - Explanation: JSON (JavaScript Object Notation) is a lightweight data format, used to exchange data.
    - Example:
      ```json
      { "name": "John", "age": 30 }
      ```

26. Console Commands:
    - `chmod`: Change file permissions.
    - `pwd`: Print working directory.
    - `cd`: Change directory.
    - `ls`: List directory contents.
    - `vim` / `nano`: Text editors.
    - `mkdir`: Make a directory.
    - `mv`: Move or rename files.
    - `rm`: Remove files.
    - `man`: Manual for commands.
    - `ssh`: Secure shell session.
    - `wget`: Download files from the web.
    - `sudo`: Run command as superuser.

27. Remote Shell Session Command:
    - Answer: `ssh`

28. What does `ls -la` do?
    - Answer: Lists all files, including hidden ones, with detailed info.

29. Domain Parts:
    - Top-level domain: `.click`
    - Subdomain: `banana`
    - Root domain: `fruit.bozo.click`

30. Is a Web Certificate Necessary for HTTPS?
    - Answer: Yes

31. DNS A Record:
    - Answer: Points to an IP address.

32. Reserved Ports:
    - Port 443: HTTPS
    - Port 80: HTTP
    - Port 22: SSH



 JavaScript Promises Example

33. Promises Output:
    ```javascript
    new Promise((resolve) => resolve('Done')).then(console.log);
    ```
    - Output: `"Done"`


