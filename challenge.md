# Password Management
We all have a large number of usernames and passwords that we must remember. Each
site/app tends to have a different password policy, and sometimes they assign our usernames
to us so we have varied usernames and passwords.
Unfortunately, for the sites/apps we only use occasionally, we are forced to go through a
“forgot your password” and/or “forgot your username” process because we simply cannot
recall what they are.

Let’s fix this problem! We would like you to create a simple password management application
so we can see how you code and how you think.
Of course, we aren’t asking you to develop a market-ready, feature complete, password
management solution like LastPass. But let’s utilize LastPass as an example of what we’d like
you to do - primarily in terms of “cards” and “card contents.”

Here is an overview of LastPass: https://www.youtube.com/watch?v=a86PbT5XZt8
- Please review these two things in the video to keep this simple:
    - At 26 seconds into the video – note the cards on the screen - one card for each
application or website with the user specified name visible
    - At 30 seconds - card contents: URL, Name, Folder, Username, Password, and
Notes

- We would like you to limit the card contents to:
    - URL: Will be typed in or cut/pasted into the field
    - Name: Whatever the user wants to put for that application or site
    - Username and Password: Self-explanatory

Your user interface should:
- Present “cards” that tile across the screen and allow the user to scroll down through them
- Provide the ability to create new cards. Notice that URL, Name, Username and Password must be required.
- Provide the ability to edit cards
- Provide the ability to delete cards
- For the Password field, provide support for it to be obscured or unobscured. And provide the ability to copy the password into the clipboard so the user can paste it into a password field when signing into an application of website.
- Provide a simple search/filtering – use only the Name field
- Provide the following REST API endpoints:
    - /password-cards
        - GET Get all “cards”
        - POST Creation of a new “card”
    - /password-cards/{id}
        - PUT Editing of a specific “card”
        - DELETE Removing of a specific “card”

Don't use a database. Please store data in memory, in a single file or serialize objects as
needed. There is no need to retain anything afterward.

# Algorithm & Approach
Please provide a written summary (just a few sentences or paragraph) describing your architecture/approach and how you decided to break apart various components and why. Please tell us about any assumptions and limitations in your solution, and why you chose those assumptions and limitations.

# Best Practices
Be sure that your solution is well documented and follows best practices. Be sure that your
code is readable and easy to follow. Please also follow these instructions:
- Write as few lines as possible of legible code
- Segment blocks of code in the same section
- Use indentation to mark the beginning and end of control structures, methods, and/or
functions used and developed throughout the project
- Write portable code. That way it will work on any environment.

# Bonus Points
If you have time (we completely understand you may have time constraints with a current job,
family, and more), please detail a unit and/or quality assurance test plan with test case
examples where appropriate to show your understanding of a sound testing process.

# Technical Dependencies and Libraries
Please add or explain any dependencies and/or libraries that you are using in your solution.
Also, do not forget to add the framework versions and applications you are using to write,
compile, and execute your code (e.g., Visual Code or Microsoft Visual Studio).