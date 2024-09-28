link to style guide: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

first assignment, I learned that Github takes some practice and it's hard to remember the syntax for all the commands. And don't blindly merge, ever. Fix the merge error first.


first server IP address using elastic IP: http://98.83.61.89
command to ssh into the srver:ssh -i ~/.ssh/keypaircs20.pem ubuntu@98.83.61.89 (44.222.194.12)
'exit' to exit

the .pem key is saved to my .shh folder and only I can see it

...

Once you have developed your application to where you want it, you need to release it to your production environment. Copy the deployFiles.sh script from the Simon HTML repository to your startup repository and use startup for the service parameter (-s)

./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
For example,

./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup
⚠ Make sure you using a POSIX compliant console (not PowerShell or CMD) and that you run deployFiles.sh from the project directory that you want to deploy.

Doing this will make this deliverable of your startup available from https://startup.yourdomainname.

