import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'E-Learning Platform',
      summary: 'The E-Learning platform is a comprehensive web application designed to facilitate online learning experiences. The platform is built using Angular for the frontend and Spring Boot for the backend, integrating technologies like HTML, CSS, JavaScript, and TypeScript to create an interactive, user-friendly interface. The platform supports various user roles, including Admin, Professor, and Student. It enables the management of courses, lessons, user authentication, and payment integration (via Stripe for online payments).',
      description:'The application is secured with Spring Security and JWT (JSON Web Tokens) for user authentication and role-based access control.\n' +
          '\n' +
          'Summary: The E-Learning platform is a dynamic and scalable system that provides a fully-featured environment for both students and educators. With an easy-to-navigate interface, secure authentication, and robust features for course and user management, the platform offers a seamless experience for remote learning. Admins can oversee all platform activities, professors can efficiently manage courses and interact with students, and students can track their learning progress. Additionally, the integration of a payment gateway (Stripe) allows for easy and secure course enrollments. The platform’s backend is powered by Spring Boot and secured with JWT authentication, ensuring a reliable and safe learning environment.',
      projectLink: 'https://github.com/NoureddineBzr/E-Learning-platform-Fill-Rouge-.git',
      tags: [Tag.SPRINGBOOT, Tag.ANGULAR, Tag.JAVA, Tag.JAVASCRIPT, Tag.POSTGRESQL, Tag.POSTMAN, Tag.DOCKERCOMPOSE, Tag.DOCKER, Tag.TYPESCRIPT],
      pictures: ["../../assets/pokedex_01.png", "../../assets/pokedex_02.png", "../../assets/pokedex_03.png", "../../assets/pokedex_04.png"]

    },
    {
      id: 2,
      name: 'Constructionxper-microservices',
      summary:'The ConstructionXpert microservices platform is a robust and scalable application designed to manage various aspects of construction projects. The system is built using a microservices architecture, where each service is responsible for a distinct part of the platform\'s functionality. These services communicate with each other via secure RESTful APIs. The platform is designed to handle various workflows related to construction projects, including project management, resource allocation, budgeting, and reporting.',
      description:'Each microservice is independently deployable and is developed using technologies like Spring Boot for the backend, PostgreSQL or MySQL for database management, and Docker for containerization. The platform also integrates with tools like Spring Cloud for service discovery, ensuring scalability and resilience.\n' +
          '\n' +
          'Summary: The ConstructionXpert platform is an enterprise-grade application designed to streamline the management of construction projects through a microservices-based approach. The modular structure ensures that different teams can work independently on various components of the platform, which results in increased productivity and flexibility. The platform enables efficient management of project resources, budgeting, and reporting, all while providing real-time insights into project progress. With the use of Spring Boot for backend services and Docker for deployment, the platform is highly scalable, resilient, and easy to maintain, making it an ideal solution for modern construction project management.',
      projectLink: 'https://github.com/NoureddineBzr/Constructionxper-microservices.git',
      tags: [Tag.JAVA, Tag.JAVASCRIPT, Tag.MOCKITO, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.SQLITE],
      pictures: ["../../assets/casino01.png", "../../assets/casino02.png"]},
    // {
    //   id: 3,
    //   name: 'TeamTrack',
    //   summary: 'TeamTrack is an application for visualizing projects with "open" status to keep track of your customers and activities.',
    //   description: 'TeamTrack was developed by me with the aim of facilitating project, customer, and task management, offering an intuitive interface and requested functionalities, similar to a watchdog. The combination of Spring Boot on the backend and Vue.js on the frontend provides an efficient application that is easy to maintain. We hope this system meets your needs and facilitates tracking your daily activities.',
    //   projectLink: 'https://github.com/barbaracalderon/teamtrack',
    //   tags: [Tag.VUEJS, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.JAVA, Tag.JPA, Tag.JDBC, Tag.JUNIT, Tag.MOCKITO, Tag.HIBERNATE, Tag.LOMBOK, Tag.SPRINGBOOT, Tag.SPRINGWEB],
    //   pictures: ["../../assets/teamtrack_06.png", "../../assets/teamtrack_07.png", "../../assets/teamtrack_08.png", "../../assets/teamtrack_09.png", "../../assets/teamtrack_10.png"]
    // },
    {
      id: 4,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by BOUZIRE Noutred-dine.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: 'https://github.com/NoureddineBzr/Portfolio.git',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_04.png", ]
    },
    // {
    //   id: 5,
    //   name: 'The Brazilian State Official Gazettes Restful API',
    //   summary: "The 'Diário Oficial da União' (DOU) Web Restful API developed in the thesis for the bachelor's degree in Information Systems at UFSC.",
    //   description: "The Diário Oficial da União (DOU) serves as an official communication medium of the Brazilian state to its nationals and interested parties, established in 1862. Traditionally printed by the National Press, the DOU underwent a transformation in 2017, becoming fully digitized and accessible only online. This work focuses on a case study capturing data from DOUs between 2020-2022. The project provides accessibility through a Web Restful API using the Swagger framework for documentation. For this project, a data model was developed to extract information about signers of documents in a DOU article, the type of its publication (dispatch, ordinance, etc.), main category (ministry, secretariat, etc.), publication date, and more.",
    //   projectLink: 'https://github.com/barbaracalderon/dou-rest-api',
    //   tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.INSOMNIA, Tag.POSTGRESQL, Tag.SQLALCHEMY, Tag.SQL],
    //   pictures: ["../../assets/dou_01.png", "../../assets/dou_02.png", "../../assets/dou_03.png"]
    // },
    // {
    //   id: 6,
    //   name: 'Slot Machine Game',
    //   summary: 'The slot machine game played in Casinos, with three spinning reels, recreated in Javascript, HTML5 and CSS3.',
    //   description: "This is a simple slot machine game built using HTML, CSS, and JavaScript. The game features three reels with various images, a start button to spin the reels, and dynamic display of balance and bet values. The slot machine game was created as a challenge project to explore frontend skills and JavaScript programming. Initially, the intention was to use Pixi.js for graphics rendering, but due to time constraints and a steep learning curve (first time dealing with it), a simpler approach with basic HTML, CSS, and JavaScript was chosen. I also had plans to add a slot lever sound effect when pressing play, but was unable to find a free resource available.",
    //   projectLink: 'https://github.com/barbaracalderon/simple-slot-machine-game',
    //   tags: [Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
    //   pictures: ["../../assets/sm_01.png", "../../assets/sm_02.png", "../../assets/sm_03.png"]
    // },
    // {
    //   id: 7,
    //   name: 'EduConnect API',
    //   summary: 'EduConnect Application is a RESTful API for educational management, handling students, teachers, courses, grades, subjects, and more. Developed in Java with Spring Boot and PostgreSQL, it provides CRUD operations and access control using JWToken.',
    //   description: "EduConnect is an educational management system designed to provide a RESTful API that simplifies the administration of educational institutions. Developed in Java using Spring Boot, the system facilitates the management of students, teachers, courses, grades, and other educational data. The API allows users to perform various operations such as creating, updating, retrieving, and deleting data stored in the PostgreSQL database, as well as authenticating users and controlling access to endpoints based on their roles and permissions. The project aims to adopt the Single Responsibility Principle (SRP), extensively described in the Object-Oriented Programming (OOP) paradigm by Robert C. Martin. This principle ensures that classes have only one responsibility. In the context of this project, SRP was implemented by structuring the codebase into distinct layers. Controller classes are tasked with receiving HTTP requests and delegating the processing to service classes, solely returning appropriate responses to the client. Service classes are responsible for implementing the business logic of the application, encapsulating operations such as validations, calculations, and data access through communication with repository classes. Repository classes provide methods to access and manipulate data in the database, sometimes creating specific methods within the JpaRepository extension. DTO (Data Transfer Object) classes handle the transportation of data between application layers, containing only attributes and access methods without any business logic. Interface classes define the contract with the service, specifying methods related to specific application functionality. This API also control routing access to users based on their role.",
    //   projectLink: 'https://github.com/barbaracalderon/fmt-educonnect',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
    //   pictures: ["../../assets/ec_01.png", "../../assets/ec_02.png", "../../assets/ec_03.png"]
    // },
    // {
    //   id: 8,
    //   name: '12 Barcodes API',
    //   summary: 'The 12 Barcodes API is a user-friendly RESTful API designed to provide a simple and practical solution for generating barcodes in applications.',
    //   description: "This RESTful API serves as a playground to explore and master technologies from the Flask ecosystem and some software design. Embracing the Model-View-Controller (MVC) architecture and DRY principle, I strive for a clean, organized codebase that fosters maintainability and scalability - in the rare chance this project ever grows to something unexpected. To ensure clarity and ease of use, I've meticulously documented this project according to the OpenAPI standard with Swagger. One unique aspect of this project is its reliance on lightweight data processing, foregoing the need for a traditional database. To achieve this, I crafted a buffer to handle images so it deals with image data directly in memory, avoiding the need to write it down. This may impact latency since the images are served without the need for a retrieval move. No need for a persistent storage. This decision reflects my commitment to simplicity. You need a barcode image, you get it. You need a little bit of information for that type of barcode, you get it. ",
    //   projectLink: 'https://github.com/barbaracalderon/the-12-barcodes-api',
    //   tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.POSTMAN],
    //   pictures: ["../../assets/12_01.png", "../../assets/12_02.png", "../../assets/12_03.png", "../../assets/12_04.png", "../../assets/12_05.png"]
    // },
    // {
    //   id: 9,
    //   name: 'Notelock API',
    //   summary: 'Notelock is a Restful API in Java that uses Spring Boot and JWT for authentication and security. Its endpoints are designed to manage resources such as notebooks and notes, with data persisted in a PostgreSQL database.',
    //   description: "Notelock is a robust RESTful API designed to manage notebooks and notes efficiently. Developed using Java with Spring Boot and JWT authentication, Notelock offers endpoints to handle various resources, including notebooks and notes, with data persistence in a PostgreSQL database. With Notelock, users can perform CRUD (Create, Read, Update, Delete) operations on notebooks and notes, facilitating the organization and management of their digital notes. The API prioritizes security and authentication, utilizing JWT tokens for secure user authentication. Built with scalability and reliability in mind, Notelock ensures seamless integration with other systems and applications. Its user-friendly interface and intuitive design make it ideal for developers seeking a reliable solution for managing digital notebooks and notes. Whether you're a developer looking to streamline note management in your applications or an organization in need of a robust note-taking solution, Notelock provides the tools and functionalities to meet your needs effectively.",
    //   projectLink: 'https://github.com/barbaracalderon/notelock',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
    //   pictures: ["../../assets/n_01.png", "../../assets/n_02.png"]
    // },
    // {
    //   id: 10,
    //   name: 'Majority App',
    //   summary: 'Majority App is a web application built using the Dash framework in Python. It provides insights into the voting behavior of US legislators on various bills.',
    //   description: "Majority App is a web application created using Dash, a Python framework designed for building analytical web applications. The primary purpose of Majority App is to provide insights into the voting behavior of US legislators on various bills. This makes it a valuable tool for public affairs professionals and political analysts who seek detailed information about legislative activities. As a mock application developed for educational purposes, Majority App offers several features that facilitate the exploration of legislative data. It includes a tab navigation system that allows users to move between different sections, such as information about the application, details on various bills, and data on individual legislators. The 'About Us' tab provides an overview of the application's capabilities, outlining the tools and features available. The 'Bills' tab allows users to select a specific bill and view comprehensive details, including the primary sponsor and the tally of votes for and against the bill. Meanwhile, the 'Legislators' tab enables users to examine the voting behavior of individual legislators, offering insights into the number of bills they have supported or opposed.",
    //   projectLink: 'https://github.com/barbaracalderon/majority-mock-app',
    //   tags: [Tag.PYTHON, Tag.DASH, Tag.PLOTLY],
    //   pictures: ["../../assets/ma_01.png", "../../assets/ma_02.png", "../../assets/ma_03.png"]
    // },
    // {
    //   id: 11,
    //   name: 'Tutor Mate API',
    //   summary: 'This project is a RESTful API developed in Java and Spring Boot to manage appointments between students and tutors. It uses JDK 17 and PostgreSQL database with the specified database schema.',
    //   description: "Tutor-Mate is a RESTful API developed in Java using Spring Boot, designed to manage appointments between students and tutors. It utilizes JDK 17 and PostgreSQL for database management with a specified schema. The API provides various endpoints to handle resources such as students, tutors, schedules, materials, and appointments. The API's endpoints allow users to perform CRUD operations, enabling the creation, reading, updating, and deletion of records. For instance, the /alunos endpoint manages student data, while the /tutores endpoint manages tutor data. Schedules can be managed via the /agendas endpoint, and educational materials are handled through the /materiais endpoint. The /agendamentos endpoint facilitates viewing and managing appointments specific to students or tutors. Built with a robust set of technologies, the Tutor-Mate API uses Java 17, Spring Boot for application development, Spring Boot Starter Data JPA for data persistence, Spring Boot Starter Web for web application development, and Spring Boot DevTools for enhanced productivity during development. PostgreSQL serves as the relational database, and Project Lombok helps reduce boilerplate code in Java. Maven is used as the dependency management and build automation tool.",
    //   projectLink: 'https://github.com/barbaracalderon/fmt-tutor-mate',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
    //   pictures: ["../../assets/tm_01.png", "../../assets/tm_02.png", "../../assets/tm_03.png"]
    // },
    // {
    //   id: 12,
    //   name: 'The Music Time Machine Project',
    //   summary: 'Choose a day in time and automatically create a Spotify playlist of the top songs playing in the world in that moment.',
    //   description: "This project involves creating a program that interacts with Spotify to transport users back in time musically by retrieving and playing songs from a specific date in the past. To run the Music Time Machine Project, you need Python installed on your computer, a Spotify account, and a Spotify app created through the Spotify Developer Dashboard. The app created in the Developer Dashboard will serve as the project’s base, providing necessary credentials like CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI. These credentials are essential for authenticating and interacting with Spotify's API, and should be securely stored as environment variables in your operating system to protect them from unauthorized access. Once the setup is complete, users can input a specific date in the format YYYY-MM-DD (year-month-day) to use the application. The program will then fetch and play songs that were popular on Spotify on that date, effectively creating a musical time-travel experience. The project includes detailed instructions on how to create a Spotify app and obtain the necessary credentials, as well as how to set environment variables. Screenshots of the app running are also provided for reference. The Music Time Machine Project showcases an ability to integrate Python with external APIs, demonstrating skills in application development and secure credential management. The goal of the project is to provide a nostalgic musical journey for users, allowing them to relive the hits from a specific date in the past through Spotify.",
    //   projectLink: 'https://github.com/barbaracalderon/music-time-machine-spotify',
    //   tags: [Tag.PYTHON, Tag.BEAUTIFULSOUP],
    //   pictures: ["../../assets/mt_01.png", "../../assets/mt_02.png", "../../assets/mt_03.png", "../../assets/mt_04.png"]
    // },
    // {
    //   id: 13,
    //   name: 'Library Manager API',
    //   summary: 'This project is a RESTful API for managing a simple library. It uses JDK 17 and PostgreSQL for the database with the specified database schema.',
    //   description: "The Library Manager API offers various endpoints to handle different entities within a library system, such as librarians, books, members, loans, and visitors. The API allows for creating, reading, updating, and deleting records for each of these entities, ensuring comprehensive management capabilities for the library. The database schema for the project was designed by myself and defined in such a way to allow for structured and organized data storage. The endpoints for managing librarians include operations to create new librarians, retrieve all or specific librarians, update their details, delete them, return their emails, and update their passwords. For loans, the API supports creating new loans, retrieving all or specific loans, updating loan details, and deleting loans. Book management endpoints enable operations to create, retrieve, update, and delete books, as well as list all book titles and authors. The member endpoints allow for the creation of new members, retrieval of all or specific members, updating member details, deleting members, listing member names, and phone numbers, and updating member phone numbers. Similarly, visitor endpoints cover creating new visitors, retrieving all or specific visitors, updating visitor details, and deleting visitors.",
    //   projectLink: 'https://github.com/barbaracalderon/fmt-library-manager',
    //   tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
    //   pictures: ["../../assets/lm_01.png", "../../assets/lm_02.png", "../../assets/lm_03.png"]
    // },


  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BOUZIRE Noured-dine | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}