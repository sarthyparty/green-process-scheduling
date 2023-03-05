# Green Process Scheduling

## Overview

The following project allows programmers to deploy any job (e.g. bash script to train an AI model) at the time where they will use the most clean energy.
Why is this helpful? 
1. Machine learning models contribute large amounts of energy consumption ultimately translating to large amounts of CO2 emissions and placing an even larger human carbon footprint on this world.
2. Google says over 15% of their total energy consumption went towards ML related computing. Additionally, some large language models can use upwards of 552 tons of CO2 energy. To put this into perspective the average person uses 16.4 tons of CO2 energy a year, so the carbon footprint of one large language model is approximately 34 times that of the average person. THere are many other ML models that are run every year that utilize large amounts of carbon emissions.
3. Many of these large models are not time sensitive and can be run at any time throughout the day. If run at the correct time these carbon emissions can be reduced by 15% and if ran in a green locaiton the carbon emissions can be reduced by up to 50%. 

## Usage

To Create a Schedule Job:

```
gschedule create
      --name=<name> 
      --command="<command or script to run>" 
      --eta=<hours:minutes> 
      --range=<must in run in this many hours>
 ```

Example:

``gschedule create --name=test --command="echo HELLO" --eta=0:5 --range=12``

## How it Works

The program works by retrieving the user's IP address and subsequently their geolocation using cURL. 

It uses their latitude and longitude to use the National Weather Service's API to grab data about the weather for a specified range (max: 24 hours) into the future. 

Using weather data along with calculations using data about wind turbines and solar panels in all 50 states, the program finds the time where the most renewable energy is being used and deploys the program when it has the least negative impact on the environment. 



