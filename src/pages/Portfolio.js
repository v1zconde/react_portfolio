import React from "react";
import Container from "../components/Container";
import Projects from "../components/Projects";


function Search () {

  const portfolio = [{
    title: "The Guilty One",
    picture: "./img/the_guilty_one.gif",
    description: "An app that helps users understand how much exercise would be required to offset a given food. This app does send user data to a server for processing.",
    github: "https://github.com/v1zconde/The_Guilty_One",
    deployed: "https://v1zconde.github.io/The_Guilty_One/"
  },
  {
    title: "Dragon Ball Quiz",
    picture: "./img/code_quiz.gif",
    description: "Its a timed Dragon Ball quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.",
    github: "https://github.com/v1zconde/code_Quiz",
    deployed: "https://v1zconde.github.io/code_Quiz/"
  },
  {
    title: "The Weather Dashboard",
    picture: "./img/weather_full_page.png",
    description: "Using the OpenWeather API to retrieve weather data for cities. Using local storage you can save couple cities and keep them in your favorite list.",
    github: "https://github.com/v1zconde/weather_Dashboard",
    deployed: "https://v1zconde.github.io/weather_Dashboard/"
  },
  {
    title: "Burger Logger",
    picture: "./img/index.png",
    description: "Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML. ",
    github: "https://github.com/v1zconde/burger_logger",
    deployed: "https://burger-logger3.herokuapp.com/"
  },
  {
    title: "Movie Gurus",
    picture: "./img/moviegurus.png",
    description: "Since the pandemic begins, the increase in views and search for movies and shows has increased significantly, we are planning to create a movie app that helps users to manage their tv shows and movies watch list based on their preferences of actors, release dates, genres, etc… Also users can create their own watch list to keep tracks of their movies. Functions to for users to check if they already watch the movie.",
    github: "https://github.com/v1zconde/movie-gurus",
    deployed: "https://salty-citadel-41373.herokuapp.com/"
  },
  {
    title: "Team Generator",
    picture: "./img/employee-full-page.png",
    description: "As a manager I want to generate a webpage that displays my team's basic info so that I have quick access to emails and GitHub profiles",
    github: "https://github.com/v1zconde/employee_summary",
    deployed: "https://v1zconde.github.io/employee_summary/"
  }]

    return (
      <div className="background-portfolio">
        <Container style={{ minHeight: "80%" }} >
          <h1 className="text-center">Projects</h1>
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          /> */}
          <Projects results={portfolio} />
        </Container>
      </div>
    );
  }


export default Search;
