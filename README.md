<h1><img width=25px margin-left=15px src='https://github.com/DKsix/pass-in-web/blob/main/src/assets/github/nlw-icon.png'> Pass In </h1>
 
<div style=''>
 
 <img width=726px flex src='https://github.com/DKsix/pass-in-web/blob/main/src/assets/github/pass-in-preview.png'>
</div>

## 🤔 What is Pass In?

Pass In is a web application designed to help event organizers manage participants efficiently. It provides features such as participant registration, attendee list management, check-in functionality, and more. With its user-friendly interface and robust backend, Pass In simplifies the process of handling event attendees.

## 👨‍🏫 Installation

### Back-end
To set up the backend for Pass In, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

2. Clone the repository [https://github.com/rocketseat-education/nlw-unite-nodejs](https://github.com/rocketseat-education/nlw-unite-nodejs).

3. Navigate into the cloned repository's directory.

4. Install dependencies by running:

    ```
    npm install
    ```

5. Create a file named `.env` in the root directory of the project and add the following line:

    ```
    DATABASE_URL="file:./dev.db"
    ```

6. Execute the following command to seed the database:

    ```
    npx prisma db seed
    ```

7. Finally, start the backend server by running:

    ```
    npm run dev
    ```
    
Once the backend is set up and running, you can proceed with setting up the frontend of Pass In. Make sure to configure the backend correctly before proceeding with the frontend setup.

### Front-end

To set up the frontend for Pass In, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

2. Clone the repository [https://github.com/DKsix/pass-in-web](https://github.com/DKsix/pass-in-web).

3. Navigate into the cloned repository's directory.

4. Install dependencies by running:

    ```
    npm install
    ```

5. Once the dependencies are installed, start the frontend development server by running:

    ```
    npm run dev
    ```

Now, both the backend and frontend of Pass In should be set up and running. You can access the application by opening it in your web browser.

## Features

Pass In comes with the following features:

- Integrated with Node.js API: Pass In is integrated with a backend API built using Node.js, providing seamless communication between frontend and backend.
- Attendee search: Pass In allows users to search for attendees by name, facilitating easy access to participant information.
- Pagination: Pass In implements pagination for managing large lists of attendees, ensuring smooth navigation and improved performance.
- State persistence with dynamic URLs: Pass In utilizes dynamic URLs to persist state, enabling users to share specific views within the application.

These features enhance the usability and functionality of Pass In, making it a powerful tool for event management.

## License

Pass In is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

Pass In was originally designed by RocketSeat and further developed by [Carlos Eduardo](https://github.com/DKsix).




