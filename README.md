Green Process Scheduling

The following project allows programmers to deploy any job (e.g. bash script to train an AI model) at the time where they will use the most clean energy.
The program works by retrieving the user's IP address and subsequently their geolocation using cURL. It uses their latitude and longitude to use the 
National Weather Service's API to grab data about the weather for a specified range (max: 24 hours) into the future. Using weather data along with
calculations using data about wind turbines and solar panels in all 50 states, the program finds the time where the most renewable energy is being used
and deploys the program when it has the least negative impact on the environment. 



