# The communication chain
> _A chain is only as strong as its weakest link._

Lets play a game, it's called ÔChinese WhispersÕ. For those of you who don't know it by name, you probably played it when you were young. The game starts with a group of people forming a chain. The first person makes up a sentence, which is whispered in the next person's ear. This continues until the sentence reaches the last person. He or she pronounces the sentence out loud. Usually the sentence changes throughout the game. The longer the chain, the higher the chance that the end result will differ from the first sentence. This is due to the increasing amount of steps where something can go wrong. 

This brings us to the quote; "A chain is only as strong as its weakest link" The problem is that information is interpreted and processed during each step of a chain. After interpretation and processing, it's passed through to the next step. It's only logical to conclude that with every step an error can occur. By reducing the the amount of steps, and thus the complexity of the chain, the chance of a error occurring, and the chain breaking, can be reduced greatly.

> Kandinsky quote
Kandinsky is an artist whom put a lot of time thinking about effectiveness of a messages through his paintings. He wanted to put a message into the world with minimal effort and concreteness, because everything you define excludes other possibilities.

Since the birth of the internet in 1989, it's underlying structure hasn't changed a lot. Sure, a lot of new layers, services and techniques have been added. The internet was officially intended to store and share data. While in the current day this is still the main use, the definition of storing and sharing data has been stretched a lot. There's Netflix for video, Spotify for audio, and Bookmate for complete books. You could conclude that the internet has become truly multi-medial. Not only the content has changed though. The way this information is presented to the end user has changed a lot as well. From simple pages filled with text. That until the birth of HTML4 in 1997 officially didn't even have any form of visual markup. To large web applications with specifically designed interfaces.

All of these advancements have been achieved on the same structure that was basically designed back in 1989 by Tim Berners Lee. Of course, computers have become more powerful, and techniques like css, ajax and sockets were introduced in the last decades. But still, it's a remarkable fact that this is all still possible on the same structure that was built for text pages.

Is it time to apply KandinskyÕs vision to web technologies? Is it time to slim the stack of layers which make the current internet?

## Slim down or pile up?
If youÕre developing software youÕre mostly defining behaviour of the application. This behaviour are the exceptions based on cultural diferences between the user and the programming language/framework. The user needs to be able to communicate with the system after all. Think for example of localization and time zone differerences, but also different user roles, security, user preferences etc.

//So imaging youÕre programming. Adding features.

//Quotes: Losing Control: Students at the ... university learn that in order to develop the behaviour of a robot, you need to add functionality on top of the faulty once. You need to pile up features.  

This also counts for the protocol and application stack of the www. In order to serve the web to a immensly varied user base a lot of behavior/cultural differences and needs needed to be defined. 

Is this the right thing or should we go for a minimal approach like KandinskyÕs? Going for a minimal interaction by defining as less as possible? Handing over information as abstract as possible?

### HTML
Let's start with the beginning of HTML. HTML is a markup language designed to publish text with hyperlinks. This allows people to publish articles with references to other articles on other machines. You write a page in html syntax and then serve it with a web server, a computer directly connected to the internet which runs a server application.

HTML started out as a simple standardised set of tags, for rich text, based on SGML. Web browsers (like Netscape) began to add their own functionality to HTML. Most of the time not in line with the standards set earlier. This caused many confusion among developers, web browsers etc. 

## Flaws
Even though all of this is possible on a 24 year old structure, it has it's flaws. HTML was designed to serve information and close the connection to the server afterwards. Because there was no reason to keep the connection open, closing it straight after serving the information seemed like a logical design choice. You'd free up resources on the server which in turn could be used to serve information to other users.

Back then, web applications didn't exist yet. Though desktop applications had sockets for ongoing communication with the servers. The web didn't have such technologies until 1996. And a native implementation didn't even exist until 13 years later in 2009. The native implementation of WebSockets was a huge improvement for the internet. WebSockets allow real-time two-way communication between clients and servers. With multiple clients connected to a server this in turn allows for real-time two-way communication between two or more clients.

> The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.

[The World Wide Web Consortium](http://www.w3.org/)

Since the creation of HTML 1 in 1989, the internet has been steadily improving. The community behind W3C has been working hard to get browsers to comply to their standards. More and more modern browsers are following the standards and are focused on adopting new technologies and standards as they arise. This behaviour is a great improvement. It has allowed for a lot of flaws to be tackled. Though there are still quite some flaws a browser vendor can't fix.

### Semantics
The internet is not easily readable by machines. The web unfortunately is not readable like a database with structured data. This is because of the loose structure in html.

Readable for humans <> Readable for machines.

#### The Semantic Web
The Semantic Web, a W3C movement lead by the Tim Berners Lee aims to make unstructured data into a 'web of data'. 
semantics, needed to have machine readability. By adding tags to indicate what type the content is.

> Semantic HTML refers to the traditional HTML practice of markup following intention, rather than specifying layout details directly. For example, the use of "em" denoting "emphasis" rather than "i", which specifies italics.

http://www.schema.org/ (Bloated?)

One of the proposals of the Semantic Web movement is RDF (Resource Description Framework). It's is one of the attempts of W3C to bring query-able and machine readable metadata to the web, a specification for  xml. It is designed to be the  Lingua franca (a language bridging between to other languages) "to allow data to be processed outside the particular environment in which it was created, in a fashion that can work at Internet scale"[1](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#section-motivation) and "Interworking among applications: combining data from several applications to arrive at new information."[2](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#section-motivation) SPARQL is the accompanying query language for RDF, which allows to easily search through RDF data.

#### Metacrap
Unfortunately there are not many Real World examples of the usage RDF and Cory Doctorow has 7 arguments for this in his essay ["Metacrap: Putting the torch to seven straw-men of the meta-utopia"](http://www.well.com/~doctorow/metacrap.htm). He states that itÕs practicly not possible because of the lack of discipline from the users side. In short: describing data is free interpretable, prone to errors, subjective and requires a lot of work from user point of view.

> 1. People lie
2. People are lazy
3. People are stupid
4. Mission Impossible: know thyself
5. Schemas are not neutral
6. Metrics influence results
7. There's more than one way to describe something

### Graphical interface layer
Even in a perfect world where all data is structured semantical, The presentation layer is still freely interpretable. Deciding which data should be presented to the end-user at what time is something that is decided by the designer of a website. Websites are designed by different people and by definition will have different ways of presenting data. Methods and patterns can be copied. But in the end, designing a website is manual labor.

A designer can choose what data is relevant in which situation and present it to the user. The problem with this is that the data decided to be left out is missing. It might have been done because the designer thought the relevant data would be easier to be find. Or because the remaining data just didn't fit the interface. Even though the data might've been available it's just not there for the end-user to be found.

If you're lucky, a content strategist was present during the creation of a website. Someone who's specialty it is to find out what information should be presented to the user at each specific moment. But even then, even when all of the right information is present when you need it. The interface layer can still make the information hard to navigate.

What can we do about it? Nothing. It's easy like that. Every website needs to be designed. Yes, services like Silk exist to create a semantic web. But we're still limited by the limits of the creator. The information still needs to be entered and presented. The theory behind Metacrap even applies to the creators of the content.

### Page based navigation
The web is designed to be browsed like pages from a book, going from page to page.

Hunting links to find the right data.

### Data
Every step in the chain manipulates and loses data. In a typical web application you go from a complete dataset to tiny bit of data. This is because it's easier to transfer, process and / or comprehend.

Having the data but not being able find the stuff you need.

## Communication chain
The global overview of communication between user and the internet is like the following diagram:  
End user <-> Interface <-> Processing <-> Storage

### Enduser
This is you, the internet user while browsing the web.

Sensory inputs are part of the communication chain as well. Currently we don't have much control over this because information is mostly send visually. Seeing and reading the information on the internet. Interpreting texts.

### Interface
The interface for the internet is often a computer, handheld or desktop.

  * Input
     * Keyboard, Mouse, Touchscreen
  * Output
     * Front-end -> Web browser -> Screen

### Processing/Backend
The processing part in the chain is often called the backend. The backend often provides an endpoint (urls, parameters) for the front-end through http requests. This is called an API. The API allows the user to authenticate and access the database.

The purpose of having a backend is:

* to serve information from the database in a less chunky format  
* managing access of the database, shielding off certain actions  
* maintaining the database (often workers, not included in the communication chain)  
* handling files
* doing advanced calculations on the database data

### Storage
The internet is about storing information, often this data is stored in a database.

## Optimisations
### Tradeoffs
What does optimising the communication chain exactly mean? Should it be more flexible, or should it be easier to use? Should the communication chain be strengthened against miscommunications or is that the responsibility of the service provider? Each choice always has it's own set of tradeoffs. With each change you make to improve the current structure, a new set of challenges wil arise.

There's a constant struggle between simplicity and flexibility. Should we allow more ways of working with our data? Hence increasing the flexibility. Or should we make it easier to use? Increasing the simplicity of the communication chain.

Increasing simplicity also has another advantage. It increases the reliability. Doing one task, and doing it really well makes a technology more reliable. Where another one that does a lot of tasks, but is occasionally not working is not reliable at all. At the same time one service doing a lot of different tasks could be flexible and reliable too. Reliable in a way that all of the tasks should be executable in a similar manner.

### Front-end as a server
Over the last years web browsers started getting faster. This was not only because the computers they're running on are getting ever more powerful. But also because a lot of improvements have been made on the rendering engines for HTML, CSS and Javascript. This means that the browser is slowly getting more and more capable of running application logic without the need of a back-end building HTML pages and processing data.

Back-ends could literally be rendered useless. With a database that serves it's data over http, and a front-end which contains all of the application logic there would be no need for a back-end. Periodic tasks and heavy calculations should still be done on workers, but they could run on much smaller machines independent from a back-end. In a way they would just behave as end-users, but with higher privileges because of elevated logins.


### A more direct interface
The human brain is amazing when it comes to input from the senses. It adjust itself to whatever sensory input it gets and what function is used the most. This is called neuroplasticity. [p. 106][#Hawkins:2004] This is due to the fact of that every sense which comes in the form of spikes, electrical pulses. The brain learns how to handle these pulses by recognising patterns.
  
There's a [real world example](http://discovermagazine.com/2008/jul/23-the-blind-climber-who-sees-through-his-tongue) of a men with retinoschisis, a rare disease which makes you blind after a couple of years, whom was able to see again through a special device. The device, called [Brainport](http://science.howstuffworks.com/brainport.htm), is basically a webcam which is wired to output electrotactile stimulation to the users tongue.

![](http://static.ddmcdn.com/gif/brainport-vision-diagram.jpg)

An other example is a colourblind man who is able to percieve colours through sound. Movie:

<Zcript src="http://player.ooyala.com/player.js?embedCode=1wOWpuYTpGxn6mxeyoAmXnnbLp-NUEzt&video_pcode=JqcWY6ikg5nwtXilzVurvI-vU6Ik&width=640&deepLinkEmbedCode=1wOWpuYTpGxn6mxeyoAmXnnbLp-NUEzt&height=360"></script>
[World's first cyborg](http://motherboard.vice.com/nl/read/met-een-cyborg-naar-het-stedelijk-video)

Imagine a device that somehow feeds the internet as a sixth sense. No need of a screen or keyboard. Applied properly, your brain could make sense of the patterns being fed to it. The moment you think of a fire-truck, the device would understand that thought, and feed all of the properties of a fire-truck back to you, instantaneously fetched from the internet.

Using it just as a screen would make the chain smaller, but imaging what would happen if you would connect it to twitters firehose?

### Removing the processing layer
End user <-> Interface <-> Storage
Find a way how to ditch authentication and security; federated data.

### Removing the interface layer
Brain Computer Interface or BCI¿s are devices which enable to read the mind by translating electronical activity to signals which can be interpreted by computers. 

### Federating data
One of the flaws of the
[Federated databases](http://en.wikipedia.org/wiki/Federated_database_system)

### Revisioned redudant data

## Short term solution
Thinking of longterm goals and solutions is fun, but you need tiny steps to move in that direction. There is a vast amount of optimisations which have already been put into use or are currently being developed.

### API enabled databases
CouchDB is a new database which doesn't need a backend. It exposes it's data directly over http through the use of a restful API. Which means that you don't need a server to request the data from the database and serve it to the end user. The database can take care of that by itself.

By exposing your data directly through http you also allow people with malicious intentions to access that same data without a going throught the back-end layer. Data security and the shielding of specific user data is something that the database is also designed to take care of. Here a possible issue arrises. You integrate your data storage and data security into one package. When an exploit becomes available for that package, not only your security but at the same time also your data will be vulnerable.

While it removes the processing / backend layer from the chain of communication, it also brings limitations. Referring to threshold in complexity/ flexibity

### Darknets
To take care of decentralisation and federation of data people have invented Darknets and Peer2Peer networks like Tor (UnionNet), FreeNet and Bittorrent. Field research (online) Problem lies in readability. Harder to index, no/less search engines.

The design of the Darknet itself is also it's flaw for our purpose. As a Darknet is shielded from the regular internet, it's really hard to access and index data. There are search engines but they are not like google scanning content of the pages, merely titles.

### Alternative input methods
Keyboards and computer mouses have been a long standing standard. but new input methods are arising. Gesture based control seems to be a trend. The apple touchpad allows for touch based gestures. Where devices like Kinect, Leap and Myo take a different approach. They track your movements and allow you to freely interact with an electronic device. Usually freeing you from your desk or at least replacing (partial) functionality of the mouse. [Natural gestures might be less error prone than manually inputting through a mouse click]

The Kinect has a camera that tracks your whole body and it movements. It's still quite rough though. Large movements are needed to trigger an action. The LEAP takes a different approach, only tracking your hands in front of a device. By limiting the area, the movements can be tracked on a much more granular level. Precise finger gestures make the LEAP very usable for interaction with applications that require precise control rather than large gestures. The Myo takes this even a step further by removing the camera and tracking muscle tension on the lower arm. Which results in freeing the user from any location or direction based limitation.

Of these technologies, the only one that's in production and has been actively used for different projects is the Kinect. The device was originally intended for Microsoft's XBox360. Even though the device is connected through USB, no drivers had been made available for other platforms than the XBox. Quickly after it's release independent developers created their own drivers, and soon it could be used to control platforms other than the the XBox360. This lack of open support for the device prevented a wide use case.

The LEAP has already gone through a developer beta phase and will start shipping first production models starting May 13. A collaboration with HP has been announced, the goal will be to integrate the LEAP into HP's hardware. A device like the LEAP won't appear in mobile devices anytime soon, as its hardware is still to large. But a next iteration of the product in the near future could already slim it down significantly. The involvement of a big partner like HP might provide the company with the needed money and resources to quickly push the LEAP to a certain maturity, and allow it to become an industry standard. Wether or not this technique provides an optimisation to the communication chain still is to be proven. But the granularity of it's control might give it advantage over the kinect. Especially if it gets integrated with mobile devices.

The MYO is set to ship early 2014. If it's able to deliver, it could change the way we control our devices. Using it as a remote for about any electronic device in our home. That is, if it's able to manage target selection well. In other words, the device should know what device you're targeting with every gesture. When you turn the volume of your hifi setup down, you don't want it to go back up when you try to answer an incoming phone call.

[talk about gorilla arm (fatigue of shoulders because of holding your arms horizontally for gestures] Not an issue with MYO, defintely an issue for LEAP.

## Utopia (long term solution)
We think a direct connection between brains and the internet would be the most direct interface possible. Also it would be ideal not to surf pages anymore but retrieving the data directly from the database as you think. How would it be to have wikipedia in your brain? 

Difference artificial intelligence and singularity

### Brain <-> Internet

### Brain & Computer
#### Calculations are for computers, making connections and conclusions is for humans.
Unity between humans and computers. Computers are expandable, humans are not.

federated data exchange > plug in federated data

 - A web of brains
 - Collective data
 - Knowledge is given, no need to memorise trivial facts
 - Creating relations as future of learning

A sketch on the possibilities with BCI.
Warning speculations 

### First stage: Brains to internet
A lot of problems if it would be the current internet. Rethink semantics?
Connecting a couple of database just like apps to the human mind. From limited to unlimited. I suspect Wikipedia will be first. 

#### Problems
Truth will become a problem. On the current internet there is no difference between truth and lies. Satirical websites like The Union News network and The Speld provide entertainment through fake made up news for example. For a computer, but also for a direct connection to the brain this is a problem. If a lie occurs in the database it is true for the masses because its directly being piped into others people's brain if they query the data.

While the truth will become relative, facts will still be facts. And they could be checked at the source. The issue with that would be, what is the source? And how do we know the source actually is the source we expect it to be? In other words: Is the source legit?

#### Opportunities

#### Function of the internet:
Common knowledge
Calculation power

#### Function of humans:
Being able to get common knowledge instantly from a limited amount off sources. No more need to learn facts or get common knowledge

### Second stage: brains to brains over the internet
Directly tap into someones brain. People don't have to put info on the internet in a certain database first. Everybody 'owns' everyones data.  
Problem of machine readability and semantics is solved.  
Problem of lies is solved. No more global truth, just individual nodes in a global bank. Just make your own conclusion with others facts.

#### Functions of computer 
will still be computational power and function as a back up for people passing away.

Humans are there to solve problems by connecting the dots. World wide mind.

Humans 
Privacy issues


Does somebody's memory disappear on death?

#### Education
With the birth of BCI's education in its current for will fade away completely. Education is no longer about knowledge, but about creativity and experience instead. People need to be able to make conclusion fast out by connecting dots. The speed of these conclusions are fed by the associative functions of the brain, the creative part. Children need to be taught to be creative to train the associative functions. 

Experience is also needed to increase number of nodes in the brain. The more nodes, the easier is its to connect external sources to the brain. 'School' should provide this rich experiences.

## Sources
[#Hawkins:2004]: Hawkins, J. & Blakeslee, S. (2004). On intelligence. New York: Times Books.

## Contributors

### Jelle Akkerman
m@jellea.nl

### Guido Bouman
m@guido.cv

## Log
### Meetings
* Conversations with Maarten and Raymond
