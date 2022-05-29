```
                        ████████ ██████  ███    ██  ██████  ██    ██ ████████ 
                           ██    ██   ██ ████   ██ ██    ██ ██    ██    ██    
                           ██    ██████  ██ ██  ██ ██    ██ ██    ██    ██    
                           ██    ██   ██ ██  ██ ██ ██    ██ ██    ██    ██    
                           ██    ██   ██ ██   ████  ██████   ██████     ██    
                                                    
```
## Table of Contents
* [Overview](#overview)
* [External Dependencies](#external-dependencies)
* [Project Dependencies](#project-dependencies)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Project Roadmap](#project-roadmap)
* [Contributing](#contributing)
* [Copyright](#copyright)

## Overview
Have you always wondered how many attendees were signed up for your event? How about wishing to keep an official list on who actually showed up your event? Well, **TrnOut** is every event organizers dream tool. Paired with the Meet Up API it provides powerful insight and management capabilities for event organizing. It can do the following:
* Retrieves event details and information
* Display list of events associated with your Meet Up Group
* Update attendance information and provide metrics of event turnout.


## External Dependencies
* [Meet Up API](https://www.meetup.com/api/guide/)

## Project Dependencies
* Node.JS v11.12.0
* NPM v6
* React.JS
* MongoDB v4.0
* Docker

## Setup Requirements
* Install [Docker](https://docs.docker.com/get-docker/)
* Install [MongoDB](https://www.mongodb.com/try/download/community)
* Install [NVM](https://github.com/nvm-sh/nvm)
* Install [Node.JS](https://nodejs.org/en/download/)

## Installation
### Client
1. Run `nvm use` to have correct version of Node.js
1. Switch to client directory `cd client`
2. Run `npm install` to download client dependencies

### Server
1. Run `nvm use` to have correct version of Node.js
1. Switch to server directory `cd server`
2. Run `npm install` to download server dependencies

## Getting Started 
### via Node
To develop on the TrnOut application it is recommended to run the application via NodeJS. 

**Server**

1.Run `npm run start:server` to start the server.
2.Go to http://localhost:6543/status to verify that the server is running correctly.

**Client**
1. Run `npm run start:client` to start the client
2. Go to http://localhost:3000 to view the TrnOut application.

**Database**
1. Use Homebrew and run `brew services start mongodb-community@4.0` to start MongoDB
2. Use MongoDB's GUI [Compass](https://www.mongodb.com/try/download/compass) to view and manage data.

### via Docker
1. Run `docker-compose build` to **build** all application components.
2. Run `docker-compose up` to **start** all application components.
3. Go to http://localhost:3000 to view the TrnOut Application

## Project Roadmap
- [ ] Add Unit Test
- [ ] Add Docs to Server
- [ ] Add Integration Test
- [ ] Convert to Typescript
- [ ] Integrate with Docker
- [ ] Integrate with Eventbrite API
- [ ] Features
  - [ ] Endpoint to search for events
  - [ ] Information Page from mockup
- [ ] Integrate with other Event Management Platforms
  - [ ] Eventbrite

## Contributing
_Coming Soon!_

## Copyright
All licenses in this repository are copyrighted by their respective authors.
Everything else is released under MIT. See [`LICENSE`](./LICENSE) for details.
