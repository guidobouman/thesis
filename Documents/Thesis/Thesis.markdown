# The communication chain
Since the birth of the internet in 1989, it's underlying structure hasn't changed a lot. Sure, a lot of new layers, services, and techniques have been added. But if we got the chance to design the internet all over with our current knowledge of communication systems. What would it look like? Would we use the same protocols?

The internet was officially intended to store and share data. While in the current day this is still the main use, the definition of storing and sharing data has been stretched a lot. There's Netflix for video, Spotify for audio, and Bookmate for complete books. You could conclude that the internet has become truly multimedial. Not only the content has changed though. The way this information is presented to the end user has changed a lot aswel. From simple pages filled with text. That until the birth of HTML4 in 1997 officially didn't even have any form of visual markup. To large web applications with specifically designed interfaces.

All of these advancements have been achieved on the same structure that was basically designed back in 1989 by Tim Berners Lee. Of course, computers have become more powerful, and techniques like css, ajax and sockets were introduced in the last decades. But still, it's a remarkable fact that this is all still possible on the same structure that was built for text pages.

### HTML
Let's start with the beginning of HTML. HTML is a markup language designed to publish text with hyperlinks. This allows people to publish articles with references to other articles on other machines. You write a page in html syntax and then serve it with a web server, a computer directly connected to the internet which runs a server application.

HTML started out as a simple standardized set of tags, for rich text, based on SGML. Web browsers (like Netscape) began to add own functionality their own functionality to HTML totally not in line with the standards set earlier. This caused many confusion among developers, webbrowsers etc. 


HTML Version
Try browsing the internet with Lynx...
AJAX

## Flaws and it's solutions
Even though all of this is possible on a 24 year old structure, it has it's flaws. HTML was designed to serve information and close the connection to the server afterwards. Because there was no reason to keep the connection open, closing it straight after serving the information seemed like a logical design choice. You'd free up resources on the server which in turn could be used to serve information to other users. Back then, web applications didn't exist yet. Though desktop applications had sockets for ongoing communication with the servers. The web didn't have such technologies until 1996. And a native implementation didn't even exist until 13 years later in 2009.

The native implementation of WebSockets was a huge improvement for the internet. WebSockets allow real-time two-way communication between clients and servers. With multiple clients connected to a server this in turn allows for real-time two-way communication between two or more clients. 

### Semantics
semantics, needed to have machine readability.
http://www.schema.org/ (Bloated?)

// Maybe we shouldn't make stuff machine readable? But aim for humans instead?

Graphical user
An example of a flaw in of the graphical interface layer of the internet is it's readability. GEOCITIES FTW!

Over time the usage of the internet has vastly shifted from just storing and sharing information to a massive network that currently powers and controls nearly every aspect of the world. Nowadays the internet is also used for a different purpose, entertainment. Because of this extra purpose, people started adding other technologies to enable features. The internet became bloated with new functions and structures.

## Communication chain
The global overview of communication between user and the internet is like the following diagram:  
End user <-> Interface <-> Processing <-> Storage

### Enduser
This is you, the internet user while browsing the web. Interpretation

### Interface
The interface for the internet is often a computer, handheld or desktop.

  * Input
     * Keyboard, Mouse, Touchscreen
  * Output
     * Frontend -> Webbrowser -> Screen

### Processing/Backend
The processing part in the chain is often called the backend. The backend often provides an endpoint (urls, parameters) for the frontend through http requests. This is called an API. The API allows the user to authenticate and access the database.

The purpose of having a backend is:

* to serve information from the database in a less chunky format  
* managing access of the database, shielding off certain actions  
* maintaining the database (often workers, not included in the communication chain)  
* handling files
* doing advanced calculations on the database data

### Storage
The internet is about storing information, often this data is stored in a database.

## Distortions
Getting rid of distortions in the chain.

### Heavily slimmed down data
Dataloss

### Not finding the stuff you need
Having the data but not being able find the stuff you need.

### Timeloss because of interpretation


## Optimisations
### Tradeoffs
What does optimising the communication chain exactly mean? Should it be more flexible, or should it be easier to use? Should the communication chain be strengthened against miscommunications or is that the responsibility of the service provider? Each choice always has it's own set of tradeoffs. Which each change you make to improve the current structure, a new set of 

#### Complexity vs. Flexibility

Example: Fat versus lean front- and back-ends

With the arrival of Single Page Web Applications the way of building web apps changed to fat frontend and thin backends. This because

### A more direct interface
Sensory inputs and interpretation of the collected data. The human senses are extremely flexible, they have the power to adjust themselves to whatever is fed to them. [Link to turning vision upside down & seeing with your tongue] On the other hand, because the human senses are a natural interface, they're highly unpredictable.

### Getting rid of the processing layer
End user <-> Interface <-> Storage
Find a way how to ditch authentication and security; federated data.

### Getting rid of the interface layer
Brain Computer Interface or BCI’s are devices which enable to read the mind by translating electronical activity to signals which can be interpreted by computers. 

### Federating data
[Federated databases](http://en.wikipedia.org/wiki/Federated_database_system)

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
 - Knowledge is given, no need to memorize trivial facts
 - Creating relations as future of learning

A sketch on the possibilities with BCI.
Warning speculations 

## First stage: Brains to internet
Alot of problems if it would be the current internet. Rethink semantics?
Connecting a couple of database just like apps to the human mind. From limited to unlimited. I suspect Wikipedia will be first. 

### Problems
Truth will become a problem. On the current internet there is no difference between truth and lies. Satirical websites like The Union News network and The Speld provide entertainment through fake made up news for example. For a computer, but also for a direct connection to the brain this is a problem. If a lie occurs in the database it is true for the masses because its directly being piped into others people's brain if the query the data.

### Opportunities

### Function of the internet:
Common knowledge
Calculation power

### Function of humans:
Being able to get common knowledge instantly from a limited amount off sources. No more need to learn facts or get common knowledge

## Second stage: brains to brains over the internet
Directly tap into someones brain. People don't have to put info on the internet in a certain database first. Everybody 'owns' everyones data.

Problem of machine readability and semantics is solved.
Problem of lies is solved. No more global truth, just individual nodes in a global bank. Just make your own conclusion with others facts.

### Functions of computer 
will still be computational power and function as a back up for people passing away.

Humans are there to solve problems by connecting the dots. World wide mind.

Humans 
Privacy issues


Does somebodys memory dissapear on death?

## Education
With the birth of BCI's education in its current for will fade away completely. Education is no longer about knowledge, but about creativity and experience instead. People need to be able to make conclusion fast out by connecting dots. The speed of these conclusions are fed by the associative functions of the brain, the creative part. Children need to be teached to be creative to train the associative functions. 

Experience is also needed to increase number of nodes in the brain. The more nodes, the easier is its to connect external sources to the brain. 'School' should provide this rich experiences.

## Short term solution
Thinking of longterm goals and solutions is fun, but you need tiny steps to move in that directions. There are some optimisations which can be done already.

### CouchDB
CouchDB is a new database which doesn't need a backend.

#### Conclusion
Yes, it removes the processing/backend from chain in development, but it brings limitations.

### Darknets
Federated data

### Kinect, MYO, Leap etc.
Alternative interfaces for mouse and keyboard

## Contributors

### Jelle Akkerman
m@jellea.nl

### Guido Bouman
m@guido.cv

## Log
### Meetings
* Conversations with Maarten and Raymond