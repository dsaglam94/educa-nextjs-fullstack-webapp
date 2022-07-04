<div align="center">
  
  # Educa 
  #### It's still in progress. No Live site available yet. But here is the video of current version:
 
  https://user-images.githubusercontent.com/98871279/177133743-99e8f260-977c-4630-8b03-fb82fb638086.mov


</div>
  
  ### Tech stack used: 
  - Next.js
  - MongoDB (Mongoose)
  - TailwindCSS
  - NextAuth 
  
  ### Why this project
  
  It's a project where I practice my recent tech stack. It's my 100h+ full-stack solo project. I've built the same project with vanilla JavaScript and SCSS without any back-end functionality a few months ago. This one is an improved version of the same project with the same design.
  
  > https://github.com/dsaglam94/Education_multipage.git here is the repo of the old one.
  
 So far I implemented the authentication functionality with the help of NextAuth. 
 - The web application will provide "Google" and "GitHub" providers to authenticate the user along with the "Custom Email" provider. 
 - The user's information is kept in MongoDB. 
 - The user can publish their reviews.
 - For email authentication, only exemple@educa.com mail addresses are allowed to enter. Hence only teachers.
 
 ### Todo: 

- User role-based authorization: Teacher or Student
- Creating a separate REST API to get Courses Data
- Creating a separate REST API to get Teachers Data
- Adding dynamic routing for each course
- Booking function for the lessons / students
- Enter available slots for the lessons / teachers

### To check the app:
Open your terminal and:

- type `git clone https://github.com/dsaglam94/educa-nextjs-fullstack-webapp.git`
- type `npm install` command to install dependencies
- add `.env` file to root of the folder and necessary keys for providers and database

![Screen Shot 2022-07-04 at 13 37 21](https://user-images.githubusercontent.com/98871279/177138178-257734a4-fd1f-494f-8815-8dec605fd124.png)

 
