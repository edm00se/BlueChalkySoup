## ReadMe

This is the ~~Session~~ Chalk Talk for Eric McCormick's Chalk Talk, Chalk203: From Soup to Sandwich, Making MVC Java Classes and Front-End Development Work For You, presented at IBM ConnectED 2015.

Chalk Talks are guided discussions, with room AV specifically disallowed. This un-presentation is meant as a reference material for attendees, with many excellent cited resources.

### Setup

[![Deploy to Bluemix](https://bluemix.net/deploy/button_x2.png)](https://bluemix.net/deploy?repository=https://github.com/edm00se/BlueChalkySoup)

##### Getting the Code
Either download [a zip](https://github.com/edm00se/BlueChalkySoup/zipfile/v1.1) or [tar ball](https://github.com/edm00se/BlueChalkySoup/tarball/v1.1) of the latest release source or perform a clone from this release by:

1. `git clone https://github.com/edm00se/BlueChalkySoup.git`
2. `cd BlueChalkySoup`
3. `git checkout tags/v1.1`

##### Node.js
This is a Node.js application. It has been tested and used on node version `0.10.33` (originally) and `v4.2.2` (with the v1.1 update). To run the application locally, you need [Node.js and npm](https://nodejs.org/) installed, and you should only need to run: `npm install` from within the application path (wherever you cloned it to / unpacked from zip/tar).

##### Running
To start, you can use `npm start` or `node app.js`; they do the same thing (the `package.json` defines the start script to register as `node app.js` for invocation by npm). Once your shell (or command prompt) reflects the running instance on the port (defaults to 5001), you can connect at [localhost:5001](http://localhost:5001/) for the presentation, or via [localhost:5001/control](http://localhost:5001/control) for the controlling session.

##### Controlling the Presentation
The node app uses basic auth to protect the _/control_ end point. By default, these credentials (which are embedded in the _/routes/index.js_ file). Their defaults (which you are encouraged to change):
```
username: admin
password: someAmazingP@$$w0rd
```

All those connected to your instance will receive the stateful changes in your current slide via the [socket.io](http://socket.io/) implementation.

##### Deploying to A Server
To deploy this to a server, you will need to ensure the environment variable for PORT is coming into the _app.js_ file correctly (this is run time dependent, if you're using heroku or Bluemix, it should pick it up). As of this writing, it is on line 28 of the _app.js_ file. You will also need to change the socket.io config settings, located in _public/js/config.js_ and alter it to the server name and port that will be used (visible to the browser); e.g.- _http://someAmazingApp.mybluemix.net:80/_.

### Format of This Slide Deck
This is a [reveal.js](http://lab.hakim.se/reveal-js/) presentation, with the content primarily in markdown (GitHub flavored, which allows pass-through HTML). It scales (pretty well) on all devices and is served on top of a NodeJS/Express server stack. This Express app implements a socket.io connection, allowing the presenter to control (with authorization) the status and progression through the slides during the session. On completion, the presenter disconnects, and all viewers of the slides are given full and independent movement throughout.

This application stack is loosely based on the [Revealer.js app](https://github.com/shameerc/Revealer.js) in addition to elements taken from a couple other projects which achieved similar results but didn't quite make the cut. I couldn't find a single project which achieved all of:

1. using (a current version of) Express
2. using a WebSocket with Express (that wasn't outdated under the current API)
3. pushed more than just the event, but the actual partial page (#/1/2) state to the "current" slide
4. used templating other than jade (which is apparently popular, but I like seeing my HTML tags, evidently); this lets the base presentation and _/control_ users see the same presentation

At best I was getting 2 / 4 features, so I hacked together this. The content of the slides is written fully in GitHub flavored markdown (via a reveal.js plugin).


### Format of the Presentation
This slide deck is, primarily, a set of talking points and cited references. It includes a couple code samples, but is the adjusted format from the originally intended full session. This presentation includes dedicated blocks of time for group discussion, after some initial ground work being established by the presenter.
