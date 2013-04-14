# The communication chain
Since the birth of the internet in 1989, it's underlying structure hasn't changed a lot. Sure, a lot of new layers, services and techniques have been added. The internet was officially intended to store and share data. While in the current day this is still the main use, the definition of storing and sharing data has been stretched a lot. There's Netflix for video, Spotify for audio, and Bookmate for complete books. You could conclude that the internet has become truly multi-medial. Not only the content has changed though. The way this information is presented to the end user has changed a lot as well. From simple pages filled with text. That until the birth of HTML4 in 1997 officially didn't even have any form of visual markup. To large web applications with specifically designed interfaces.

All of these advancements have been achieved on the same structure that was basically designed back in 1989 by Tim Berners Lee. Of course, computers have become more powerful, and techniques like css, ajax and sockets were introduced in the last decades. But still, it's a remarkable fact that this is all still possible on the same structure that was built for text pages.

### HTML
Let's start with the beginning of HTML. HTML is a markup language designed to publish text with hyperlinks. This allows people to publish articles with references to other articles on other machines. You write a page in html syntax and then serve it with a web server, a computer directly connected to the internet which runs a server application.

HTML started out as a simple standardised set of tags, for rich text, based on SGML. Web browsers (like Netscape) began to add their own functionality to HTML. Most of the time not in line with the standards set earlier. This caused many confusion among developers, web browsers etc. 

HTML Version
Try browsing the internet with Lynx...
AJAX

## Flaws
Even though all of this is possible on a 24 year old structure, it has it's flaws. HTML was designed to serve information and close the connection to the server afterwards. Because there was no reason to keep the connection open, closing it straight after serving the information seemed like a logical design choice. You'd free up resources on the server which in turn could be used to serve information to other users.

Back then, web applications didn't exist yet. Though desktop applications had sockets for ongoing communication with the servers. The web didn't have such technologies until 1996. And a native implementation didn't even exist until 13 years later in 2009. The native implementation of WebSockets was a huge improvement for the internet. WebSockets allow real-time two-way communication between clients and servers. With multiple clients connected to a server this in turn allows for real-time two-way communication between two or more clients.

> The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.

[The World Wide Web Consortium](http://www.w3.org/)

Since the creation of HTML 1 in 1989, the internet has been steadily improving. The community behind W3C has been working hard to get browsers to comply to their standards. More and more modern browsers are following the standards and are focused on adopting new technologies and standards as they arise. This behaviour is a great improvement. It has allowed for a lot of flaws to be tackled. Though there are still quite some flaws a browser vendor can't fix.

### Semantics
How do you broadcast information on the internet? The internet is not easily readable by machines. The web unfortunately is not readable like a database with structured data. This is because of the loose structure in html.

Readable for humans <> Readable for machines.

#### The Semantic Web
The Semantic Web, a W3C movement lead by the Tim Berners Lee aims to make unstructured data into a 'web of data'. 
semantics, needed to have machine readability. By adding tags to indicate what type the content is.

> Semantic HTML refers to the traditional HTML practice of markup following intention, rather than specifying layout details directly. For example, the use of "em" denoting "emphasis" rather than "i", which specifies italics.

http://www.schema.org/ (Bloated?)

One of the proposals of the Semantic Web movement is RDF (Resource Description Framework). It's is one of the attempts of W3C to bring query-able and machine readable metadata to the web, a specification for  xml. It is designed to be the  Lingua franca (a language bridging between to other languages) "to allow data to be processed outside the particular environment in which it was created, in a fashion that can work at Internet scale"[1](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#section-motivation) and "Interworking among applications: combining data from several applications to arrive at new information."[2](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#section-motivation) SPARQL is the accompanying query language for RDF, which allows to easily search through RDF data.

#### Metacrap
Unfortunatly there are not many Real World examples of the usage RDF.  Metacrap, or in other words "Metadata is crap" is a term coined by Cory Doctorow in his essay ["Metacrap: Putting the torch to seven straw-men of the meta-utopia"](http://www.well.com/~doctorow/metacrap.htm). Doctorow gives 7 arguments in this essay why metadata is not an option. 

This is not because the internet itself is flawed, but because the end-user, the human, is not perfect. Describing data is free interpretable by humans, and requires work from their side. It's only natural for humans to be lazy or make errors.

> 1. People lie
2. People are lazy
3. People are stupid
4. Mission Impossible: know thyself
5. Schemas are not neutral
6. Metrics influence results
7. There's more than one way to describe something
http://en.wikipedia.org/wiki/Metacrap

The moral of this essay is that metadata is subjective and not reliable. 

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
Sensory inputs and interpretation of the collected data. The human senses are extremely flexible, they have the power to adjust themselves to whatever is fed to them. [Link to turning vision upside down & seeing with your tongue] On the other hand, because the human senses are a natural interface, they're highly unpredictable.

### Removing the processing layer
End user <-> Interface <-> Storage
Find a way how to ditch authentication and security; federated data.

### Removing the interface layer
Brain Computer Interface or BCI¿s are devices which enable to read the mind by translating electronical activity to signals which can be interpreted by computers. 

### Federating data
One of the flaws of the
[Federated databases](http://en.wikipedia.org/wiki/Federated_database_system) Darknets

### Revisioned redudant data

## Short term solution
Thinking of longterm goals and solutions is fun, but you need tiny steps to move in that directions. There are some optimisations which can be done already.

### CouchDB
CouchDB is a new database which doesn't need a backend.

#### Conclusion
Yes, it removes the processing/backend from chain in development, but it brings limitations. Referring to threshold in complexity/ flexibity

### Darknets
To care about decentralisation and federation of data people have invented Darknets and Peer2Peer networks like Tor (UnionNet), FreeNet and Bittorrent. Field research (online) Problem lies in readability. Harder to index, no/less search engines.

### Kinect, MYO, Leap etc.
Alternative interfaces for mouse and keyboard

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

## First stage: Brains to internet
A lot of problems if it would be the current internet. Rethink semantics?
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


Does somebody's memory disappear on death?

### Education
With the birth of BCI's education in its current for will fade away completely. Education is no longer about knowledge, but about creativity and experience instead. People need to be able to make conclusion fast out by connecting dots. The speed of these conclusions are fed by the associative functions of the brain, the creative part. Children need to be taught to be creative to train the associative functions. 

Experience is also needed to increase number of nodes in the brain. The more nodes, the easier is its to connect external sources to the brain. 'School' should provide this rich experiences.

## Sources

## Contributors

### Jelle Akkerman
m@jellea.nl

### Guido Bouman
m@guido.cv

## Log
### Meetings
* Conversations with Maarten and Raymond
