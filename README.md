# INST377 Final Project: Weather Hub
# Contributors: Aban Jones, Aneesa Munir, Robert Dang
Our project is focused on solving the accessibility and accuracy challenges associated with weather data. The goal is to empower individuals to make informed decisions about their outdoor activities by providing real-time, reliable data. The project involves a two-tiered approach: a back-end API fetching up-to-the-minute weather data and connecting to an external database, and a user-friendly front-end web application. This system caters to the concerns of the general public, who are keen on monitoring their health and well-being, and health organizations seeking to promote public health.
The target browsers are popular web browsers such as Google Chrome and Microsoft edge for desktop users.
# User Manual:
Explore Weather Hub's Weather by City page, offering real-time weather updates for various cities. Navigate effortlessly with links like "Home," "Weather Charts," and "Weather by City." Choose your city from the dropdown menu, click "Get Weather," and access instant details on temperature, windspeed, and weather codes. The user-friendly design ensures a smooth experience. Additionally, Weather Hub's Weather Charts page provides dynamic weather visualizations. Use the "Use My Location" button for current coordinates or "Use Custom Location" for specific latitude and longitude. Input custom coordinates and click "Submit" for tailored weather data. The page incorporates Plotly.js for interactive temperature charts. Whether exploring charts or city-specific weather, Weather Hub delivers accurate and up-to-date information. 
# Dev Manual:
## Overview:
The Weather App is a web application designed to provide real-time weather information for selected cities. This document guides future developers through the setup, execution, testing, API documentation, known bugs, and future development roadmap.
## Installation/Setup:
First make sure that supabase and express are installed as they are both required. Navigate to the project's directory in the terminal and run: npm init -y
npm install express
npm install @supabase/supabase-js

## Starting Server:
 Still in the directory where the project's files are located, run the command: node server.js. This should display this message: "Server is running at http://localhost:3000"

## API Docs:
City Endpoints:
Get Cities:
Endpoint: /cities
Method: GET
Description: Fetches a list of city names from supabase database.

Get City Location:
Endpoint: /city/:cityName
Method: GET
Parameters: :cityName - Name of the city
Description: Retrieves detailed information for a specific city.


Weather Endpoints:
Get Weather Information:
Endpoint: /weather/:cityName
Method: GET
Parameters: longitude, & latitude - of the chosen city
Description: Fetches real-time weather data for the specified city.
 
