Work in Progress, check our [log](https://github.com/jellea/thesis/commits/gh-pages) for latest additions!

## Chinese Whispers
> _A chain is only as strong as its weakest link._

Lets play a game, it's called ‘Chinese Whispers’. For those of you who don't know it by name, you probably played it when you were young. The game starts with a group of people forming a chain. The first person makes up a sentence, which is whispered in the next person's ear. This continues until the sentence reaches the last person. He or she pronounces the sentence out loud. Usually the sentence changes throughout the game. The longer the chain, the higher the chance that the end result will differ from the first sentence. This is due to the increasing amount of steps where something can go wrong. 

This brings us to the quote; "A chain is only as strong as its weakest link" The problem is that information is interpreted and processed during each step of a chain. After interpretation and processing, it's passed through to the next step. It's only logical to conclude that with every step an error can occur. By reducing the the amount of steps, and thus the complexity of the chain, the chance of a error occurring, and the chain breaking, can be reduced greatly.

// TODO Kandinsky quote

Kandinsky is an artist whom put a lot of time thinking about effectiveness of a messages through his paintings. He wanted to put a message into the world with minimal effort and concreteness, because everything you define excludes other possibilities.

Since the birth of the internet in 1989, it's underlying structure hasn't changed a lot. Sure, a lot of new layers, services and techniques have been added. The internet was officially intended to store and share data. While in the current day this is still the main use, the definition of storing and sharing data has been stretched a lot. There's Netflix for video, Spotify for audio, and Bookmate for complete books. You could conclude that the internet has become truly multi-medial. Not only the content has changed though. The way this information is presented to the end user has changed a lot as well. From simple pages filled with text. That until the birth of HTML4 in 1997 officially didn't even have any form of visual markup. To large web applications with specifically designed interfaces.

All of these advancements have been achieved on the same structure that was basically designed back in 1989 by Tim Berners Lee. Of course, computers have become more powerful, and techniques like css, ajax and sockets were introduced in the last decades. But still, it's a remarkable fact that this is all still possible on the same structure that was built for text pages.

Is it time to apply Kandinsky’s vision to web technologies? Should we slim the stack of layers which make the current internet to increase simplicity? Or should extra abstraction layers be added to expand flexibility.

## Slim down or pile up?
If you’re developing software you’re mostly defining behaviour of the application. This behaviour are the exceptions based on cultural diferences between the user and the programming language or framework. The user needs to be able to communicate with the system after all. Think for example of localisation and time zone differences, but also different user roles, security, user preferences and authentication. They're all real life habits and standards which we're trying our hardest to port to the computers.

// TODO So imagine you’re programming. For every feature you add a translation from human standards and habits to computer understandable code.

// TODO Quotes: Losing Control: Students at the ... university learn that in order to develop the behaviour of a robot, you need to add functionality on top of the faulty one. You need to pile up features.

This also counts for the protocol and application stack of the www. In order to serve the web to a immensly varied user base a lot of behavior/cultural differences and needs needed to be defined. 

Is this the right thing or should we go for a minimal approach like Kandinsky’s? Going for a minimal interaction by defining as less as possible? Handing over information as abstract as possible? And letting the users handle the cultural differences themselves, on the much lower brain level.

### HTML
Let's start with the beginning of HTML. HTML is a markup language designed to publish text with hyperlinks. This allows people to publish articles with references to other articles on other machines. You write a page in html syntax and then serve it with a web server, a computer directly connected to the internet which runs a server application. It started out as a simple standardised set of tags, for rich text, based on SGML.

// TODO HTML 4 and 5

// MOVE AND USE AS METAPHOR? Web browsers (like Netscape or Internet Explorer) began to add their own functionality to HTML. Most of the time not in line with the standards set earlier. This caused a lot of confusion among developers and browsers alike. Resulting in an era where developers had to adapt their code to nearly every browser on the market. The fragmentation of browser versions and their feature support appeared with the wide adoption of internet explorer 6 in the business sector. When version 7 released, version 6 was tightly integrated in many businesses and homes. And only a small part of the daily version 6 users upgraded to version 7. It turned out that giving the user the power over wether or not upgrading to a new version was a bad idea. It was the essence of browser version fragmentation.

People tend to be unsure wether or not they should update, don't want to update because they don't trust new versions or just be plain lazy. A solution was not found until Google Chrome introduced the in-application updater. A trick which allowed browsers to seamlessly update their feature set without the need of users downloading new browser versions. This allowed browsers to adopt emerging technologies, while making sure that version fragmentation is being kept to a minimum.

## Flaws
Even though all of this is possible on a 24 year old structure, it has it's flaws. HTML was designed to serve information and close the connection to the server afterwards. Because there was no reason to keep the connection open, closing it straight after serving the information seemed like a logical design choice. You'd free up resources on the server which in turn could be used to serve information to other users.

Back then, web applications didn't exist yet. Though desktop applications had sockets for ongoing communication with the servers. The web didn't have such technologies until 1996. And a native implementation didn't even exist until 13 years later in 2009. The native implementation of WebSockets was a huge improvement for the internet. WebSockets allow real-time two-way communication between clients and servers. With multiple clients connected to a server this in turn allows for real-time two-way communication between two or more clients.

// TODO: real life example

> The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.

[The World Wide Web Consortium](http://www.w3.org/)

Since the creation of HTML 1 in 1989, the internet has been steadily improving. The community behind W3C has been working hard to get browsers to comply to their standards. More and more modern browsers are following the standards and are focused on adopting new technologies and standards as they arise. This behaviour is a great improvement. It has allowed for a lot of flaws to be tackled. Though there are still quite some flaws a browser vendor can't fix.

### Semantics
The internet is not easily readable by machines. The web unfortunately is not readable like a database with structured data. This is because of the loose structure in HTML. HTML was intended to be easy to use, flexible. But because it's so flexible, you can omit a lot of descriptional information about your data. For easy machine readability, computers need context and a specified set of rules. If a human reads an article on the internet, he could quickly distinguish the topic, writer and other data from the text. On top of that, based on the websites the user was browsing before, and the context of the current one, a lot of extra information could be extracted. Computers don't work this way. By default they're not flexible at all. Based on the rules mentioned before, they will try to interpret the data and it's structure, and grab everything they understand. When there's no ruleset, the computer does not understand the information. 

#### The Semantic Web
The Semantic Web, a W3C movement lead by the Tim Berners Lee aims to make unstructured data into a 'web of data'. 
semantics, needed to have machine readability. By adding tags to indicate what type the content is.

> Semantic HTML refers to the traditional HTML practice of markup following intention, rather than specifying layout details directly. For example, the use of "em" denoting "emphasis" rather than "i", which specifies italics.

One of the proposals of the Semantic Web movement is RDF (Resource Description Framework). It's is one of the attempts of W3C to bring query-able and machine readable metadata to the web, a specification for  xml. It is designed to be the  Lingua franca (a language bridging between two other languages) "to allow data to be processed outside the particular environment in which it was created, in a fashion that can work at Internet scale"[1](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#section-motivation) and "Interworking among applications: combining data from several applications to arrive at new information."[2](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#section-motivation) SPARQL is the accompanying query language for RDF, which allows the user to easily search through RDF data.

#### Metacrap
Unfortunately there are not many Real World examples of the usage RDF and Cory Doctorow has 7 arguments for this in his essay ["Metacrap: Putting the torch to seven straw-men of the meta-utopia"](http://www.well.com/~doctorow/metacrap.htm). He states that it’s practicly not possible because of the lack of discipline from the users side. In short: describing data is freely interpretable, prone to errors, subjective and requires a lot of work from the user side.

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
The web is designed to be browsed like pages from a book, going from page to page. Flipping pages to get the knowledge you're looking for, but instead of taking the page corner you use hyperlinks. 

Because there's no specific structure, and search features in websites are often flawed, our means of navigations over the vast amounts of the data that make up the internet has become the hunting down of links. Links that feel like they have the slightest connection with what we're looking for. 

> People feverishly scan webpages, looking for anything that slightly resembles what they're looking for. When the page appears not being the one they were looking for they're back where they started with use one click of the back button.
[][#Krug:2005]

// TODO check above quote

// MOVE Because there can be more than one hyperlink on a webpage, the reading experience has become non-linear. Different paths can be taken to end up with the desired data. It's a more efficient way of sorting trough the data as we can decide to skip to desired sections.

### Data
During every step in the chain data is being manipulated. Sometimes it means stripping it down, at other times it means putting it in a more usable format. In a typical web application you go from a complete dataset to tiny bits of data. This is because it's easier to transfer, process and / or comprehend.

// TODO Having the data but not being able find the stuff you need. 

## Communication chain
The global overview of communication between user and the internet is like the following diagram:  
End user <-> Interface <-> Processing <-> Storage

### Enduser
This is you, the internet user while browsing the web.

Sensory inputs are part of the communication chain as well. Currently we don't have much control over this because information is mostly send visually. Seeing and reading the information on the internet. Interpreting texts. Hearing incoming notifications.

We mostly use our hands to interact with the communication chain. Performing an action based on a decision we made with the information that came in through our sensory inputs.

### Interface
The interface for the internet is often a computer, handheld or desktop. Used to present the information served from the processing layer. Interaction on these devices happens between the end-user and the input methods. Common input methods include the keyboard, mouse and touchscreen. Feedback on the interaction usually happens through a display or speakers. 

The interface is the gate or a proxy between the end-user and the data. The processing layer prepares the data, and the interface tries to present this information as seamless as possible. It receives information from the processing (or storage, more on that later) layer which the user requested. Then tries to render the information as intended and pushes this to the screen. Ready for the user to be interpreted.

### Processing
The processing part in the chain is often called the backend. The backend often provides an endpoint (urls, parameters) for the front-end through http requests. This is called an API. The API allows the user to authenticate and access the database.

The purpose of having a backend is:

>* to serve information from the database in a less chunky format  
* managing access of the database, shielding off certain actions  
* maintaining the database (often workers, not included in the communication chain)  
* handling files
* doing advanced calculations on the database data

### Storage
The internet is about storing information, often this data is stored in a database.

## Optimisations
What does optimising the communication chain exactly mean? Should it be more flexible, or should it be easier to use? Should the communication chain be strengthened against miscommunications or is that the responsibility of the service provider? Each choice always has it's own set of tradeoffs. With each change you make to improve the current structure, a new set of challenges wil arise.

There's a constant struggle between simplicity and flexibility. Should we allow more ways of working with our data? Hence increasing the flexibility. Or should we make it easier to use? Increasing the simplicity of the communication chain. Ultimately the suggested optimisation should increase both.

### Front-end as a server
Over the last years web browsers started getting faster. This was not only because the computers they're running on are getting ever more powerful. But also because a lot of improvements have been made on the rendering engines for HTML, CSS and Javascript. This means that the browser is slowly getting more and more capable of running application logic without the need of a back-end building HTML pages and processing data.

Back-ends could literally be rendered useless. With a database that serves it's data over http, and a front-end which contains all of the application logic there would be no need for a back-end. Periodic tasks and heavy calculations should still be done on workers, but they could run on much smaller machines independent from a back-end. In a way they could just behave as end-users, but with higher privileges because of elevated logins.

### A more direct interface
The human brain is amazing when it comes to input from the senses. It adjusts itself to whatever sensory input it gets and what function is used the most. This is called neuroplasticity. [p. 106][#Hawkins:2004] This is due to the fact of that every sense comes in the form of spikes, electrical pulses. The brain learns how to handle these pulses by recognising patterns.

There's a [real world example][#Levy:2008] of a man with retinoschisis, a rare disease which makes you blind after a couple of years, whom was able to see again through a special device. The device, called [Brainport](http://science.howstuffworks.com/brainport.htm), is basically a webcam which is wired to output electrotactile stimulation to the users tongue.

![](http://static.ddmcdn.com/gif/brainport-vision-diagram.jpg)

An other example is a colourblind man who is able to percieve colours through sound. Movie:

<Zcript src="http://player.ooyala.com/player.js?embedCode=1wOWpuYTpGxn6mxeyoAmXnnbLp-NUEzt&video_pcode=JqcWY6ikg5nwtXilzVurvI-vU6Ik&width=640&deepLinkEmbedCode=1wOWpuYTpGxn6mxeyoAmXnnbLp-NUEzt&height=360"></script>
[World's first cyborg](http://motherboard.vice.com/nl/read/met-een-cyborg-naar-het-stedelijk-video)

Imagine a device that somehow feeds the internet as a sixth sense. No need of a screen or keyboard. Applied properly, your brain could make sense of the patterns being fed to it. The moment you think of a fire-truck, the device would understand that thought, and feed all of the properties of a fire-truck back to you, instantaneously fetched from the internet.

Using it just as a screen would make the chain smaller, but imaging what would happen if you would connect it to twitters firehose?

### Removing the processing layer
End user <-> Interface <-> Storage
Find a way how to ditch authentication and security; federated data.

TODO metaphor

#### Federating data
> federate verb |ˈfɛdəreɪt | (with reference to a number of states or organisations) form or be formed into a single centralised unit, within which each state or organization keeps some internal autonomy.




[Federated databases](http://en.wikipedia.org/wiki/Federated_database_system)
TODO


### Removing the interface layer
Brain Computer Interface or BCI’s are devices which enable to read the mind by translating electronical activity to signals which can be interpreted by computers. 

### Federating data
One of the flaws of the
[Federated databases](http://en.wikipedia.org/wiki/Federated_database_system)
TODO

### Revisioned redudant data
Data gets lost over time, not only because of faults, but also because of iterations in truth. Facts get revisions over time. 


## Short term solutions
Thinking of longterm goals and solutions is fun, but you need tiny steps to move in that direction. There is a vast amount of optimisations which have already been put into use or are currently being developed.

### API enabled databases
CouchDB is a new database which doesn't need a backend. It exposes it's data directly over http through the use of a restful API. Which means that you don't need a server to request the data from the database and serve it to the end user. The database can take care of that by itself.

By exposing your data directly through HTTP you also allow people with malicious intentions to access that same data without going through the back-end layer. Data security and the shielding of specific user data is something that the database is also part of it's responsibilities. Here a possible issue arrises. You integrate your data storage and data security into one package. When an exploit becomes available for that package, not only your security but at the same time also your data will be vulnerable.

While it removes the processing / back-end layer from the chain of communication, it also brings limitations. Referring to threshold in complexity / flexibility.

### Darknets
To take care of decentralisation and federation of data people have invented Darknets and Peer2Peer networks like Tor (UnionNet), FreeNet and Bittorrent. Field research (online) Problem lies in readability. Harder to index, no/less search engines.

The design of the Darknet itself is also it's flaw for our purpose. As a Darknet is shielded from the regular internet, it's really hard to access and index data. There are search engines but they are not like google scanning content of the pages, merely titles.

### Alternative input methods
Keyboards and computer mouses have been a long standing standard. but new input methods are arising.

#### Gesture based input
Gesture based control seems to be a trend. Touchscreens and the Apple touchpad allow for touch based gestures. Where devices like Kinect, Leap and Myo take a different approach. They track your movements and allow you to freely interact with an electronic device. Usually freeing you from your desk or at least replacing (partial) functionality of the mouse. [Natural gestures might be less error prone than manually inputting through a mouse click]

The Kinect has a camera that tracks your whole body and it movements. It's still quite rough though. Large movements are needed to trigger an action. The LEAP takes a different approach, only tracking your hands in front of a device. By limiting the area, the movements can be tracked on a much more granular level. Precise finger gestures make the LEAP very usable for interaction with applications that require precise control rather than large gestures. The MYO takes this even a step further by removing the camera and tracking muscle tension on the lower arm. Which results in freeing the user from any location or direction based limitation.

Of these technologies, the only one that's in production and has been actively used for different projects is the Kinect. The device was originally intended for Microsoft's XBox360. Even though the device is connected through USB, no drivers had been made available for other platforms than the XBox. Quickly after it's release independent developers created their own drivers, and soon it could be used to control platforms other than the the XBox360. Yet, this lack of open support for the device prevented a wide adoption of the product.

The LEAP has already gone through a developer beta phase and will start shipping first production models starting May 13. A collaboration with HP has been announced, the goal will be to integrate the LEAP into HP's hardware. A device like the LEAP won't appear in mobile devices anytime soon, as its hardware is still to large. But a next iteration of the product in the near future could already slim it down significantly. The involvement of a big partner like HP might provide the company with the needed money and resources to quickly push the LEAP to a certain maturity, and allow it to become an industry standard. Wether or not this technique provides an optimisation to the communication chain is still to be proven. But the granularity of it's control might give it advantage over the kinect. Especially if it gets integrated with mobile devices.

The MYO is set to ship late 2013, early 2014. If it's able to deliver, it could change the way we control our devices. Using it as a remote for about any electronic device in our home. That is, if it's able to manage target selection well. In other words, the device should know what device you're targeting with every gesture. When you turn the volume of your hifi setup down, you don't want it to go back up when you try to answer an incoming phone call 5 seconds later.

There is an issue with these alternative inputs though. It's a term from the 1980's called "Gorilla arm". When you use a desktop monitor with touchscreen functionality, your arms and shoulders will quickly fatigue. This happens because of holding your arms horizontally and reaching out to the monitor for long durations to constantly touch the screen. This same phenomenon could be applicable for gesture based input devices. The Kinect requires you to do large gestures, allowing you to use a lot of different muscles, and not stressing a couple of them for a longer period of time. The LEAP on the other hand (for now) relies heavily on pointing to your screen, this could replicate the gorilla arm phenomenon. Because the MYO is completely location & direction agnostic, it would be highly unlikely for it's users to suffer from this problem.  [][#Pogue:2013]

## Utopia (long term solution)
Let’s elaborate on the possibilities with BCI as it is the most direct connection between brains and the internet. Also it would be ideal not to surf pages anymore but retrieving the data directly from the database as you think. How would it be to have wikipedia in your brain? 

### Brain <-> Internet

### Brain & Computer
> tool|tuːl|noun A device or implement, esp. one held in the hand, used to carry out a particular function.

Tools are extensions of humans which enables them to do stuff which they normally can't do. A hammer extends the arm and is able to deliver an precise and more heavy impact to an object, a nail for example. Without this hammer, humans wouldn’t be capable of driving a nail into wood. The internet is functioning as a tool for exchange of information and communication and thus function as an extension of humans. How would the internet function if it would be a more direct extension of a human?

Often a tool is meant for one goal, but the internet got quite diverse in it's functionality. So in order to make it a more precise fit we need to look on both the internet and the human brain it's strengths and weaknesses.

##### Memory
Let's see what's more capable of storing lots of data, the brain or a computer. There's lots of speculations around the total size of the human brain translated to digital terms. Estimations vary from 1 Terabyte to 1 Petabyte (1000TB) (TODO citation needed).

The big advantage of a computer on terms of capacity is it's ability to scale. Produce more memory, get more storage. With humans this is different. Although the human memory is scaling as well, there's not much know about the limit. (TODO citation needed).

The brain keeps track on what memory is more important and what not, it stores data in hierarchy.  The more important memory have more and thicker connections than others. [p. 133][#Hawkins:2004] Memory's are forgotten if they are not being accessed often enough. Also there is the transition from short-term to long-term memory which requires a certain threshold in strength of the memory. [p. 555][#Swaab:2010]

Computer hard drives, in contrast, store everything you want for you. No matter how important, no matter how long as long as you can translate it into bits and bytes. 

##### Computational power
> Neurons are quite slow compared to the transistors in a computer. A neuron collects inputs from its synapses, and combines these inputs together to decide when to output a spike to other neurons. A typical neuron can do this and reset itself in about five milliseconds (5 ms), or around two hundred times per second. This may seem fast, but a modern silicon-based computer can do one billion operations in a second. [p. 127][#Hawkins:2004]

> No matter how many workers you hire, the problem cannot be solved in less time than it takes to walk a million steps. The same is true for parallel computers. [p. 130][#Hawkins:2004]

There's also the problem with max steps between connections. > TODO Quote.

Try this: How much is 12345 times 54321? While you're grabbing a piece of paper and a pen, the computer already gave the result in a millisecond: 670 592 745. The computer is made for this. Making calculations like this. TODO

> Computers have memory too, in the form of hard drives and memory chips; however, there are four attributes of neocortical memory that are fundamentally different from computer memory:
* The neocortex stores sequences of patterns.
* The neocortex recalls patterns auto-associatively.
* The neocortex stores patterns in an invariant form.
* The neocortex stores patterns in a hierarchy.


##### Intelligence
To be able to make calculations like this doesn't make a computer intelligent. The computer is programmed to do calculations like this, but didn't think and programmed it themselves. Hawkins predicts that computers will never be able to think of themselves, that there's no such thing as Artificial Intelligence. His argument is that they can't reprogram their complete own workings except for some small paramaters (which are programmed in advance as well).

Because of the brain plasticity (TODO described on page X) people are able to 'reprogram' themselves. Any input and conclusion is changing the internal structure of the human brain and making the brain more intelligent.

##### TODO Sharing
The only way for a human to share the information in the brain is in the form of a conversation. We don't have the ability to make connections with other brains like computers can. A conversation can be done over the phone, but the information has to be explained before the receiver can make sense of the data.

With computers you can just send documents, images, sounds or videos to another computer without the need to explain the information. The in advance defined standards of the computer really help here. Because computers expect data to be formatted in a specific way, they can make sense of the raw data. Much like it would be to feed the stream of data coming from your retina (eye) to another human brain.

##### Roundup
Calculations are for computers, making connections and conclusions is for humans, said the human. 

Unity between humans and computers. Computers are expandable, humans are not. Computers are strong in storing data, humans tend to forget. Humans on the other hand can very quickly associate data where computer can only try to associate data through human written algorithms.

Brute forcing, calculating all possible outcomes and trying them one by on. Distributed computing, linking processing power.
Folding at home, Dutch power cows

A conclusion you can draw from this is that computer is meant for linear tasks, where humans are way better at doing the non linear tasks.

federated data exchange > plug in federated data

 - A web of brains
 - Collective data
 - Knowledge is given, no need to memorise trivial facts
 - Creating relations as future of learning

A sketch on the possibilities with BCI.
Warning speculations 

### First stage: Brains to internet
A chip in our brains could possibly create a direct link between our brains and the internet. Even though our brains are really flexible (See "A more direct interface" in "Optimisations"), we are unsure if the human brain would be able to cope with the unorganised mess that is the current internet being fed to it.

We think that connecting an open set of databases to the human mind could work well. The databases would function just like apps on a mobile phone. With each new database extra functionality is added, yet none is required. Information in one database can reference to information in another database. It's up to the user to connect to that new database or not.

The available data on this new implementation would be very limited at first. Websites and -services like encyclopedia's or other large data sets would be perfect as first services to start providing data in this way. By providing an open format everyone can contribute to it. The available information would rapidly increase, and services could provide open end-points for their datasets.

#### Problems
Wether or not something is a truth will become a problem. On the current internet there is no difference between truth and lies. Satirical websites like The Union News network and The Speld provide entertainment through fake made up news for example. For a computer, but also for a direct connection to the brain this is a problem. If a lie occurs in the database it can be interpreted as true for the masses because its directly being piped into others people's brain when they query the data.

While the truth will become relative, facts will still be facts. And they could be checked at the source. The issue with that would be, what is the source? And how do we know the source actually is the source we expect it to be? In other words: Is the source legit? Only by providing a proper identity system we can solve this problem. This system would make sure someone is who he says he is. Providing an author is not required, as you want to enable anonymous posts as well. But when you do provide an author, it should be authenticated.

We're only touching the surface here, and  that's by intention. Going into detail about an identity system, its possible weaknesses and how to counter them is something we could write a complete book about. That's not what we want, we're just trying to convey our vision here.

#### Opportunities
This first step could enable everyone to seamlessly contribute their knowledge to the internet. Creating a collective knowledge if you will. Of course there are already solutions for this on the current internet, but not in a way like this. No interfaces, questions, or programming languages. Just a "share this idea" thought, and it's out there. In your favorite database, anonymous or not, for everyone to be accessed.

People can freely reference you or your work. Getting credit for your work has never been more easy. And all the same for giving credit to someone else as well of course.

#### Function of computers
While computers will be used for serving data and calculation power. There will be a shift in it's use. As there's no need for a graphical interface, websites would be obsolete, and the only thing needed from computers is serving the actual data and performing tasks it's better at than the human brain. Collecting data or calculating statistics for example.

#### Function of humans
Being able to get common knowledge instantly from a limited amount of sources. No more need to learn facts or get common knowledge. The way we think of learning could completely change. Facts are a given, there's no need to learn them.

### Second stage: brains to brains over the internet
Directly tap into someones brain. People don't have to put info on the internet in a certain database first. Everybody 'owns' everyones data.  
Problem of machine readability and semantics is solved.  
Problem of lies is solved. No more global truth, just individual nodes in a global bank. Just make your own conclusion with others' facts.

#### Problems
// TODO
Privacy issues

#### Opportunities
// TODO
aster peer to peer communication and mind sharing.

#### Function of computers
Computers will still be used for their computational power and function as a back up for people passing away.

#### Function of humans
The plus point of the human brain as discussed earlier is intelligence and the power to draw conclusions. We predict this will stay this way and will not be replaced by computers. People are there to combine pieces of knowledge and draw the conclusion.

TODO: not sure if this is the right place for this anecdote
New ideas and hypothesis sprout after getting new information/data. I’d like to say that a new idea or hypothesis always is knowledge A + knowledge B. A + B makes C. For example: a 15 year old boy called Jack Andraka got an insight after reading a web page connecting the facts from those page to his biology lesson that day. This insight lead him to a hypothesis which made him find a way to test different sorts of cancer in a fast and effective way. [url][#Nosta:2013] All of this because he found a link between two facts and and saw a connection.

People are able to percieve connections like these and make conclusions over it.  Imagine how a better connectivity with the information on the web could facilitate the sprouting of new ideas. 

Humans

TODO Research on somebody's memory disappearing on death?

#### Education
With the birth of BCI's education in its current form will fade away completely. Education is no longer about knowledge, but about creativity and experience instead. People will need to set up hypothesis and be able to quickly form conclusions by connecting information. The speed of these conclusions are fed by the associative functions of the brain, the creative part. Children need to be taught to be creative to train the associative functions.

As we know that learning is the process of strengthening the synapses in the brain. It's reasonable to conclude that experience is needed to increase the number of nodes in the brain. The more nodes, the easier it is to connect external sources to the brain. 'School' should provide this rich experiences. 

## Sources
[#Chorost:2011]: Chorost, M. (2011). World Wide Mind. New York: Free Press.
[#Hawkins:2004]: Hawkins, J. & Blakeslee, S. (2004). On intelligence. New York: Times Books.
[#Boyden:2011]: Boyden, E. (2011). A light switch for neurons. Retrieved from: http://www.ted.com/talks/ed_boyden.html
[#Pogue:2013]: Pogue, D. (2013). Why touch screens will not take over. Retrieved from: https://www.scientificamerican.com/article.cfm?id=why-touch-screens-will-not-take-over
[#Nosta:2013]: Nosta, J. (2013). Cancer, Innovation and a Boy Named Jack. Retrieved from: http://www.forbes.com/sites/johnnosta/2013/02/01/cancer-innovation-and-a-boy-named-jack/
[#Levy:2008]: Levy, B. (2008). The Blind Climber Who "Sees" With His Tongue. Retrieved from: http://discovermagazine.com/2008/jul/23-the-blind-climber-who-sees-through-his-tongue
[#Krug:2005]: Krug, S. (2005). Don'T Make Me Think! New Jersey: Pearson Education (US)
[#Swaab:2010]: Swaab, D, F. (2010). Wij zijn ons brein.
[#Gazzaniga:2008]: Michael S. Gazzaniga (2008). Human: The Science Behind What Makes Us Unique.

## Contributors

### Jelle Akkerman
m@jellea.nl

### Guido Bouman
m@guido.cv

## Log
### Meetings
* Conversations with Maarten and Raymond
