

Coding Challenge for Skip The Dishes
====================================

* **Name:** Marcos Almeida Jr.
* **Position:** Mobile Developer
* **Email:** junalmeida@gmail.com
* **App Purpose:** Store personal reviews of restaurants nearby. You can choose any restaurant nearby and them choose a category and write your review. 
* **Ideas for next versions:**
    1. Publish all reviews to an Api that can store and retrieve user's reviews.
    2. Build a ranking system so users can vote the best reviews
    3. Ask the user to review a nearby restaurant that has not been reviewed.
    4. Check if the place chosen is a real restaurant.


See it running
--------------

<p align="center">
    ![See it running](./docs/vh-video.gif)
</p>

* For this Hackaton any email and 4 chars password will do.
 
Architecture
------------

1. React Native App
2. MobX
3. Google Places API
4. Jest for test runner

Google Api Key: (to be stored and protected by a CI/CD tool)  
> AIzaSyDXSPQqjeKtObRqkAy9GV3dH2AL4lemors

Requirements
------------

1. NodeJS v8+
2. npm
3. yarn (npm install -g yarn)
4. react-native (npm install -g react-native)
5. Android SDK (to compile for Android)
6. Mac and XCode (to compile for iOS)

IDE
---
If you like vscode, I recommend the following extensions:

* ESLint
* Java Extension Pack
* npm
* React Native Tools
* yarn

Open the root folder. Open the command bar and type React Native: Run Android on Device (or iOS Simulator)


Running
-------

1. install all requirements listed
1. get the sources
2. cd to the root path
3. yarn install
4. at android emulator, set gps to: 
> Longitude: -46.6898  
> Latitude: -23.5840

5. open an android emulator or connect a real device with adb
6. yarn android (to run on android device or simulator)


Coding Challenge Task
---------------------

We want to leave this event as an open hackathon to promote creativity and learning. Above is a list of technologies that Skip uses that you may use as a guideline for possible technologies to use for your project. You may also use any other technology you wish. In terms of what to build we aren't looking for anything too specific, but just something that you can build in 8 hours here that will impress us. Consider using an api like Google Places Api - if you are a FE/Mobile dev you could build a data visualization app, or if you are BE then perhaps Path optimization or some kind of interesting data manipulation for restaurants in Sao Paulo. Or if you want to make a project about the World Cup or anything else that's fine too. Feel free to work alone with existing data or apis, or in groups where a Java dev can build an API for a mobile or FE dev, devops can build a CICD pipeline for the project and the data engineer can design a solution to make sure the application would scale to millions of users. 



We ask that you provide documentation for your project in the form of system diagrams, mockups, screenshots and justifications for the technology you choose to use. Please do not work on any existing personal projects you may have, we want to see what you can do today.



We are aware that we will talk to some of you early on before you have much chance to work on your projects, do not worry. The first interview will be more about you and your experience, we will be looking at completed projects later on and we may discuss them in your follow up interview at the end of the day as well. Please just ensure that your project is something we can look at later on with proper documentation, screenshots, examples, or instructions.


