Work in Progress, check our [log](/thesis/#/Log) for latest additions!


## Introduction

### Chinese Whispers
> _A chain is only as strong as its weakest link._

Lets play a game, it's called ‘Chinese Whispers’. For those of you who don't know it by name, you probably played it when you were young. The game starts with a group of people forming a chain. The first person makes up a sentence, which is whispered in the next person's ear. This continues until the sentence reaches the last person. He or she pronounces the sentence out loud. Usually the sentence changes throughout the game. The longer the chain, the higher the chance that the end result will differ from the first sentence. This is due to the increasing amount of steps where something can go wrong.

This brings us to the quote; "A chain is only as strong as its weakest link". The problem is that information is interpreted and processed during each step of a chain. After interpretation and processing, it's passed through to the next step. It's only logical to conclude that with every step an error can occur. By reducing the the amount of steps, and thus the complexity of the chain, the chance of an error occurring, and the chain breaking, can be reduced greatly.

### Slim down or pile up?
Since the birth of the internet in 1989, it's underlying structure hasn't changed a lot. Sure, a lot of new layers, services and techniques have been added. The internet was officially intended to store and share data. While in the current day this is still the main use, the definition of storing and sharing data has been stretched a lot. There's Netflix for video, Spotify for audio, and Bookmate for complete books. You could conclude that the internet has become truly multi-medial. Not only the content has changed though. The way this information is presented to the end user has changed a lot as well. From simple pages filled with text, structured through a script language called HTML. That until the birth of version HTML4 in 1997 officially didn't even have any form of visual markup. To large web applications with specifically designed interfaces.

All of these advancements have been achieved on the same structure that was basically designed back in 1989 by Tim Berners Lee. Of course, computers have become more powerful, and techniques like css, ajax and sockets were introduced in the last decade. But still, it's a remarkable fact that this is all still possible on the same structure that was built for text pages.

If you’re developing software you’re mostly defining behaviour of the application. This behaviour is a set of exceptions based on cultural differences between the user and the programming language or framework. The user needs to be able to communicate with the system after all. Think for example of localisation and time zone differences, but also different user roles, security, user preferences and authentication. They're all real life habits and standards which we're trying our hardest to port to the computers.

This also counts for the protocol and application stack of the world wide web. In order to serve the web to a immensely varied user base a lot of behaviour/cultural differences and needs needed to be defined. But somehow this feels wrong.

### The internet as a tool for humans

> **tool|tuːl|noun**
A device or implement, esp. one held in the hand, used to carry out a particular function.

Tools are extensions of humans which enables them to do stuff which they normally can't do. A hammer extends the arm and is able to deliver an precise and more heavy impact to an object, a nail for example. Without this hammer, humans wouldn’t be capable of driving a nail into wood.

The internet is functioning as a tool for exchange of information and communication and thus functions as an extension of humans. Where as you wouldn’t create a hammer with laser pointer and interchangeable head and all other sorts of extra features to achieve your goal. The same applies to communication. You want to keep it as simple and effective as possible.

### The problem
We think the communication process might have the possibility to be improved. We want to slim down the complexity of the chain between humans and the resource. Currently information travels through a lot of chains or proxies like servers, software and devices (laptops or mobile phones for example). By removing or optimising as much steps in the chain as possible, we think we could make the whole process of using internet services easier, and less prone to errors.

We asked ourselves:

> How can the connection between a human and the internet become more efficient?

To allow us to create a new future vision in which we answer that question, we need a solid understanding of the current communication chain.

## Communication chain
![Communication chain overview](communication%20chain%20overview-03.png)
*Figure 1.* Overview of the communication chain according to us.

We view the communication chain as a chain of 4 steps, or layers, allowing a user to interact with information in an easy and quick way.

### End user
This is you, the user that's trying to interact with a resource. Using your body to control a mouse or any other input device. Navigating through information on the interface which your senses in turn interpret. For example your voice controlling a phone, which gives audio feedback that your ears in turn interpret. Or another example, your fingers controlling a touchscreen which presents information on the screen that your eyes can read.

### Interface
The interface is the gate or proxy between the end-user and the data. The processing layer prepares the data, and the interface tries to present this information to the user as seamless as possible. It receives information from the processing (or storage, more on that later) layer which the user requested. Then tries to render the information as intended and presents this to the user, ready for the user to be interpreted.

### Processing
The processing layer serves the resource, making it accessible to the public. It processes the request from the interface, retrieves the data from the resource, and usually returns a usable form of the resource back to the interface. It often takes care of the shielding of the resource as well. Only granting the right users access to it.

### Resource
The resource is the data the user is requesting. It can be stored through the use of a database or any other form of storage, processed by a special algorithm or not. The data can be stored, retrieved, manipulated or removed. 

## Optimisations
Now that we know about the current communication chain, we would like to suggest a set of optimisations which we think will optimise the communication chain. These optimisations are based on our findings during our research or real-life experiences. Some of which we have already been able to test and find out to be working.

### Semantics, Optimising data itself
> **semantics |sɪˈmantɪks| plural noun**
The branch of linguistics and logic concerned with meaning. The two main areas are logical semantics, concerned with matters such as sense and reference and presupposition and implication, and lexical semantics, concerned with the analysis of word meanings and relations between them.

The web unfortunately is not readable like a database with structured data. This is because of the loose structure in HTML. HTML was intended to be easy to use, flexible. But because it's so flexible, you can omit a lot of descriptional information about your data. For easy machine readability, computers need context and a specified set of rules. If a human reads an article on the internet, he could quickly distinguish the topic, writer and other data from the text. On top of that, based on the websites the user was browsing before, and the context of the current one, a lot of extra information could be extracted. Computers don't work this way. By default they're not flexible at all. Based on the rules mentioned before, they will try to interpret the data and it's structure, and grab everything they understand. When there's no ruleset, the computer does not understand the information.

#### The Semantic Web
The Semantic Web, a W3C movement lead by the Tim Berners Lee aims to make unstructured data into a 'web of data'.

> Semantic HTML refers to the traditional HTML practice of markup following intention, rather than specifying layout details directly. For example, the use of "em" denoting "emphasis" rather than "i", which specifies italics.

One of the proposals of the Semantic Web movement is RDF (Resource Description Framework). It's is one of the attempts of W3C to bring query-able and machine readable metadata to the web, a specification for  xml. It is designed to be the  Lingua franca (a language bridging between two other languages) "to allow data to be processed outside the particular environment in which it was created, in a fashion that can work at Internet scale" and "Interworking among applications: combining data from several applications to arrive at new information." [Klyne, 2004][#Klyne:2004] SPARQL is the accompanying query language for RDF, which allows the user to easily search through RDF data.

#### Metacrap
Unfortunately there are not many real world examples of the usage of RDF. [Cory Doctorow](http://craphound.com/) has 7 arguments for this in his essay ["Metacrap: Putting the torch to seven straw-men of the meta-utopia"](http://www.well.com/~doctorow/metacrap.htm). He states that it’s practically not possible because of the lack of discipline from the users side. In short: describing data is freely interpretable, prone to errors, subjective and requires a lot of work from the user side.

We can’t expect people to organise their data semantically. There’s a big difference between ordered data for computers to calculations over and unordered data for humans. The easiest way would be by not having to add an extra translation layer. Keep data from humans for humans and data from computers for computers. Unfortunately this is not yet the case. We still need to pipe data from humans through computers.

### Graphical interface layer
Even in a perfect world where all data is structured semantical, the presentation of the interface layer is still freely interpretable. Deciding which data should be presented to the end-user at what time is something that is decided by the interface designer. Interfaces are designed by different people and by definition will have different ways of presenting data. Methods and patterns can be copied. But in the end, designing an interface is manual labor.

A designer can choose what data is relevant in which situation and present it to the user. The problem with this is that the data decided to be left out is missing. It might have been done because the designer thought the relevant data would be easier to be find. Or because the remaining data just didn't fit the interface. Even though the data might've been available, it's just not there for the end-user to be found.

If you're lucky, a content strategist was present during the creation of a website. Someone who's specialty it is to find out what information should be presented to the user at each specific moment. But even then, even when all of the right information is present when you need it. The interface layer can still make the information hard to navigate.

What can we do about it? Nothing. It's easy like that. Every website needs to be designed. But we're still limited by the limits of the creator. The information still needs to be entered and presented. The theory behind Metacrap even applies to the designers of the interface.

### Page based navigation
The web is designed to be browsed like pages from a book. Going from one page to another by flipping pages. Searching the knowledge we're looking for. But instead of taking the page corner the web provides hyperlinks. Because there can be more than one hyperlink on a webpage, the reading experience has become non-linear. Different paths can be taken to end up with the desired data.

According to Steve Krug, interaction designer and author of Don't make me think, we feverishly scan webpages. Looking for anything that slightly resembles what we're looking for. When the page appears not being the one we were looking for we're back where we started with one click of the back button. [Krug, 2005, p. 21][#Krug:2005]

This behaviour is natural to us humans. While web pages are designed to have a structure and make it easy for us to navigate through websites. We rarely ever read all of the content.

// What’s the optimisation?

### Removing the processing layer
We believe that removing the processing layer from the communication chain is a possible optimisation. If we want to make this possible we have to come up with a solution that completely renders the processing layer useless. Other layers in the communication chain will have to take over it's current responsibilities.

#### Interface taking over processing
Over the last years interfaces started getting a lot more powerful. This means that the interface is slowly getting more and more capable of running heavy calculations without the need of a processing layer parsing and formatting data. All of the processing and formatting can nowadays easily be done in a modern-day interface.

The processing step in the communication chain could literally be rendered useless. With a resource which is directly accessible from the interface, and an interface which contains all  the processing, there would be no need for the processing step. Periodic tasks and very heavy calculations on large datasets can be delegated to dedicated processing platforms where needed.

This allows us to strip one of the steps in the communication chain, and thus move towards a better optimised communication chain. There is one issue though, we need an internet faced resource to make this happen.

#### Internet faced resource
Typical resources as we know it (databases for example) are not accessible to the interface. And even when they are, are not designed to be accessed directly by a large public of users through the interface. Resources which are designed to handle a direct connection from the interface can help in rendering the processing step useless.

The problem is that, these resources have to be able to take care of different users and their privileges. When a resource is exposed to the public, you want to make sure that your personal data actually is personal and can not be viewed or even altered by someone else. This increases the responsibilities for the resource layer. Managing authentication, and who has access to what data is currently one of the responsibilities of the processing layer.

During our research we’ve tested a resource called CouchDB. Essentially it’s a resource which exposes it’s data to the internet. It allows the interface to read data directly from the resource. Which means that you don't need a processing layer to request the data from the database, process it and serve it to the interface. The database can take care of the serving of information by itself. And the interface can do it’s own processing on the incoming data.

A setup which, combined with the previous step of the interface taking over the processing layer, truly renders the current processing layer useless.

### Alternative input
Keyboards and computer mouses have been a standard for a long time, but new more intuitive input methods are arising. The reason for this is that the current input methods aren't as natural as our everyday interactions with objects. The level of control in real life is so much more granular. A lot of improvements can still be made in the field of input methods. [Victor, 2011][#Victor:2011] Allowing the end user to have a more efficient or natural connection with the interface.

#### Gesture based input
Gesture based control seems to be a trend. Touch screens and the Apple touchpad allow for touch based gestures. Where devices like Kinect, Leap and Myo take a different approach. They track your movements and allow you to freely interact with an electronic device in 3D space. Usually freeing you from your desk or at least replacing (partial) functionality of the mouse. Natural gestures could be faster and less error prone than through the use of a mouse click.

The Kinect has a camera that tracks your whole body and it movements. It's still quite rough though. Large movements are needed to trigger an action. The LEAP takes a different approach, only tracking your hands in front of a device. By limiting the area, the movements can be tracked on a much more granular level. Precise finger gestures make the LEAP very usable for interaction with applications that require precise control rather than large gestures. The MYO takes this even a step further by removing the camera and tracking muscle tension on the lower arm. Which results in freeing the user from any location or direction based limitation.

Of these technologies, the only one that's in production and has been actively used for different projects is the Kinect. The device was originally intended for Microsoft's XBox360. Even though the device is connected through USB, no drivers had been made available for other platforms than the XBox. Quickly after it's release independent developers created their own drivers, and soon it could be used to control platforms other than the the XBox360. Yet, this lack of open support for the device prevented a wide adoption of the product. Nowadays Microsoft does provide an SDK and drivers for windows. Unfortunately, it did not help the device become a standard. Mainly because it lacks granular control which newer announced devices do have. [Microsoft, 2013][#Microsoft:2013]

The LEAP has already gone through a developer beta phase and will start shipping first production models starting May 13. A collaboration with HP has been announced, the goal will be to integrate the LEAP into HP's hardware. A device like the LEAP won't appear in mobile devices anytime soon, as its hardware is still to large. But a next iteration of the product in the near future could already slim it down significantly. The involvement of a big partner like HP might provide the company with the needed money and resources to quickly push the LEAP to a certain maturity, and allow it to become an industry standard. Wether or not this technique provides an optimisation to the communication chain is still to be proven. But the granularity of it's control might give it advantage over the kinect. Especially if it gets integrated with mobile devices. [Leap Motion, 2013][#Leap:2013]

The MYO is set to ship late 2013, early 2014. If it's able to deliver, it could change the way we control our devices. Using it as a remote for about any electronic device in our home. That is, if it's able to manage target selection well. In other words, the device should know what device you're targeting with every gesture. When you turn the volume of your hi fi setup down, you don't want it to go back up when you try to answer an incoming phone call 5 seconds later. [Thalmic Labs, 2013][#Thalmic:2013]

There is an issue with these alternative inputs though. It's a term from the 1980's called "Gorilla arm". When you use a desktop monitor with touchscreen functionality, your arms and shoulders will quickly fatigue. This happens because of holding your arms horizontally and reaching out to the monitor for long durations to constantly touch the screen. This same phenomenon could be applicable for gesture based input devices. The Kinect requires you to do large gestures, allowing you to use a lot of different muscles, and not stressing a couple of them for a longer period of time. The LEAP on the other hand (for now) relies heavily on pointing to your screen, this could replicate the gorilla arm phenomenon. Because the MYO is completely location & direction agnostic, it would be highly unlikely for it's users to suffer from this problem. [Pogue, 2013][#Pogue:2013]

#### Voice based input
Voice command algorithms have been around since the 1970's. [Berkman, 2013][#Berkman:2013] But only recently have they become decently usable. Because of the high complexity of human speech, it's hard to write good algorithms that understand each person's voice. Using simple commands to control a phone, to call a friend for example, can often prove difficult. The recent evolution behind the voice recognition software is driven by the use of a neural network, in short they used an algorithm that works like your brain. [McMillan, 2013][#McMillan:2013]

With the recent breakthrough, voice recognition has the potential to become an input method that could outperform the mouse and keyboard standards we're currently used to for desktop interfaces. The problem is that it's still too error prone to replace either of the two. For mobile interfaces it's already able to enhance the experience significantly. This is because input methods on mobile interfaces are not as effective as on the larger desktop counterparts.

// Conclusion

### Wearable interface
With the announcement of Google Glass back in april 2012, a new kind of interface has the potential to become a mainstream interface. The wearable or natural interface. The concept of a wearable interface is already rather old, Steve Mann started working on this topic back in the 80's. But with recent developments in wireless technologies, energy and computational power, wearable devices are finally approaching unobtrusive forms. Google Glass for example is almost the size of a regular pair of glasses. And the near future could see the whole technology integrated into the rim of regular glasses.

Manufacturers are expecting their technology to become ever more powerful and smaller. Based on historical progress, we can expect wearable interfaces to integrate into our bodies or accessories in the foreseeable future.

// Conclusion

### Brain Computer Interfaces
Let’s take a closer look at the end user. The human brain is amazing when it comes to input from the senses. It adjusts itself to whatever sensory input it gets and what function is used the most. This is called neuroplasticity. [Hawkins, 2004, p. 106][#Hawkins:2004] This is due to the fact of that every sense comes in the form of spikes, electrical pulses. The brain is capable of learning how to handle these pulses by recognising patterns. This way you could design a completely new type of interface which integrates better with the end user.

These interfaces are called Brain Computer Interface or BCI’s which are devices  which enable to read (and in the future write to) the mind by translating electrical activity to signals which can be interpreted by computers.

#### The plasticity of the brain
There's a real world example of a man with retinoschisis, a rare disease which makes you blind after a couple of years, whom was able to see again through a special device. The device, called [Brainport](http://science.howstuffworks.com/brainport.htm)
, is basically a webcam which is wired to output little electrical pulses to the users tongue. So, the webcam sends its digital signals directly to the tongue. [Layton, 2006][#Layton:2006] After three months the man was able to see again after being accustomed to the signals coming in. This is one amazing example of the plasticity of the brain. [Levy, 2008][#Levy:2008]

![](http://static.ddmcdn.com/gif/brainport-vision-diagram.jpg)

An other example is a colourblind man who is able to perceive colours through sound. Movie [World's first cyborg](http://motherboard.vice.com/nl/read/met-een-cyborg-naar-het-stedelijk-video)

<object type="application/x-shockwave-flash" width="640" height="360" id="ooyalaPlayer227306431_th1ga0tw90" class="OoyalaVideoPlayer" data="http://player.ooyala.com/player_v2.swf"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="bgcolor" value="#000000"><param name="wmode" value="window"><param name="flashvars" value="me=ooyalaPlayer227306431_th1ga0tw90&amp;embedCode=1wOWpuYTpGxn6mxeyoAmXnnbLp-NUEzt&amp;width=640&amp;height=360&amp;deepLinkEmbedCode=1wOWpuYTpGxn6mxeyoAmXnnbLp-NUEzt&amp;video_pcode=JqcWY6ikg5nwtXilzVurvI-vU6Ik&amp;contactServer=player.ooyala.com/Q2HGKJ-PryQsG7CT&amp;docUrl=http%3A//localhost%3A8889/thesis/&amp;loadStartTime=1369906122211"></object>

Imagine a device that somehow feeds the internet as a sixth sense. No need of a screen or keyboard. Applied properly, your brain could make sense of the patterns being fed to it. The moment you think of a fire-truck, the device would understand that thought, and feed all of the properties of a fire-truck back to you, instantaneously fetched from the internet.

Also it would be ideal not to surf pages anymore but retrieving the data directly from the resource as you think. This way the internet becomes an extension of the human brain, like a portable hard drive for a computer. Seamlessly integrating with the users memory.  How would it be to have wikipedia in your brain?

Let’s elaborate on the possibilities with BCIs as it is the most direct connection between brains and the internet.

#### Optogenetics
Optogenetics is a fairly new technique and best suiting for reading and writing to the brain. By altering the genetics of individual neurons in the brain scientists are able to see and alter the state of individual neurons with lasers.

By inserting a controlled virus into the brain, certain neurons will be genetically modified and will make the neurons light dependent. This allows the spikes of neurons to be controlled and read by light. [video][1]

This is all theoretically possible already, but not tested on humans yet. From the practical perspective, scientists need to find a way to make it easy to implement this.

// More about the interface of the BCI, integration. Activatiecommando?

#### The internet as an extension
Let’s refer back to the metaphor of the hammer. Often a tool is meant for one goal, but the internet got quite diverse in it's functionality. So in order to make it a more precise fit we need to look on both the internet and the human brain it's strengths and weaknesses.

##### Memory
Let's see what's more capable of storing lots of data, the brain or a computer. There's lots of speculations around the total size of the human brain translated to digital terms. Estimations vary from 1 Terabyte to 1 Petabyte (1000TB) (TODO citation needed).

The big advantage of a computer on terms of capacity is it's ability to scale. Produce more memory, get more storage. With humans this is different. Although the human memory is scaling as well, there's not much know about the limit. (TODO citation needed).

The brain keeps track on what memory is more important and what not, it stores data in hierarchy.  The more important memory have more and thicker connections than others. [Hawkins, 2004, p. 133][#Hawkins:2004] Memory's are forgotten if they are not being accessed often enough. Also there is the transition from short-term to long-term memory which requires a certain threshold in strength of the memory. [Swaab, 2010, p. 555][#Swaab:2010]

Computer hard drives, in contrast, store everything you want for you. No matter how important, no matter how long as long as you can translate it into bits and bytes.

##### Computational power
> Neurons are quite slow compared to the transistors in a computer. A neuron collects inputs from its synapses, and combines these inputs together to decide when to output a spike to other neurons. A typical neuron can do this and reset itself in about five milliseconds (5 ms), or around two hundred times per second. This may seem fast, but a modern silicon-based computer can do one billion operations in a second. [Hawkins, 2004, p. 127][#Hawkins:2004]

> No matter how many workers you hire, the problem cannot be solved in less time than it takes to walk a million steps. The same is true for parallel computers. [Hawkins, 2004, p. 130][#Hawkins:2004]

Try this: How much is 12345 times 54321? While you're grabbing a piece of paper and a pen, the computer already gave the result in a millisecond: 670 592 745. The computer is made for making linear logical calculations like this.

To be able to make calculations like this doesn't make a computer intelligent. The computer is programmed to do calculations like this, but didn't think and programmed it themselves. Hawkins predicts that computers will never be able to think of themselves, that there's no future in what we call artificial intelligence. His argument is that they can't reprogram their complete own workings except for some small parameters (which are programmed in advance) and thus are not intelligent, like us humans.

Because of the brain plasticity, described above, people are able to 'reprogram' themselves. Any input and/or conclusion is changing the internal structure of the brain and making the brain more intelligent. This is also called learning. Computers are not able to learn. There is this thing called machine learning, which is used to make predictions, but it will never be able to stop it’s main task and completely rewrite it. Sure you can make really sophisticated machines and behaviour, but it won’t be able to quit it’s job as a computer and continue on as a butler.

A good example of the power of computer calculations is computational knowledge platform Wolfram Alpha. It allows you to do advanced mathematical computations, but also analysis over big data sets on the internet.

So, the computer is perfect for making advanced calculations like they do with the Wolfram Alpha platform. If you look from the tool perspective, this is one of the things computers are made for, making it an advanced calculator with a simple interface.

##### Sharing
// Why sharing?

The only way for a human to share the information is in the form of a conversation and writing. We don't have the ability to make connections with other brains like computers can. A conversation can be done over the phone, but the information has to be explained before the receiver can make sense of the data.

With computers you can just send documents, images, sounds or videos to another computer without the need to explain the information and at great speed. Imagine how long it would take to read the whole wikipedia (18gb)[Kiwix, 2013][#kiwix:2013] for somebody else. The in advance defined standards of the computer really help here. Because computers expect data to be formatted in a specific way, they can make sense of the raw data. Much like it would be to feed the stream of data coming from your retina (eye) to another human brain.

##### Roundup
Calculations are for computers, making connections and conclusions is for humans, said the human.

A conclusion you can draw from this is that computer is meant for linear tasks, where humans are way better at doing the non linear tasks.
-->

## Vision
Now that we looked at possible optimisations for the communication chain we would like to share our future vision with these possibilities.

### Stage one: Optimisations

### Stage Two: Brains on the internet
> In 2057, the internet will be beamed directly to your brain from the cloud. We strongly recommend ad-blocking software. [Rackspace, 2010][#Rackspace:2010]

It might have been a small joke, but their expectation does actually align with ours.

A chip in our brains could possibly create a direct link between our brains and the internet. Even though our brains are really flexible (See "A more direct interface" in "Optimisations"), we are unsure if the human brain would be able to cope with the unorganised mess that is the current internet being fed to it.

We think that connecting an open set of databases to the human mind could work well. The databases would function just like apps on a mobile phone. With each new database extra functionality is added, yet none is required. Information in one database can reference to information in another database. It's up to the user to connect to that new database or not. Much like the original design of the internet, but with raw data and no markup. Your brain is the reader, it will process the data.

The available data on this new implementation would be very limited at first. Websites and -services like encyclopaedias or other large data sets would be perfect as first services to start providing data in this way. By providing an open format everyone can contribute to it. The available information would rapidly increase, and services could provide open end-points for their datasets.

#### Problems
Wether or not something is a truth will become a problem. On the current internet there is no difference between truth and lies. Satirical websites like The Union News network and De Speld provide entertainment through fake made up news for example. For a computer, but also for a direct connection to the brain this is a problem. If a lie occurs in the database it can be interpreted as true for the masses because its directly being piped into others people's brain when they query the data.

While the truth will become relative, facts will still be facts. And they could be checked at the source. The issue with that would be, what is the source? And how do we know the source actually is the source we expect it to be? In other words: Is the source legit? Only by providing a proper identity system we can solve this problem. This system would make sure someone is who he says he is. Providing an author is not required, as you want to enable anonymous posts as well. But when you do provide an author, it should be authenticated.

We're only touching the surface here, and that's by intention. Going into detail about an identity system, its possible weaknesses and how to counter them is something we could write a complete book about. That's not what we want, we're just trying to convey our vision here.

#### Opportunities
This first step could enable everyone to seamlessly contribute their knowledge to the internet. Creating a collective knowledge if you will. Of course there are already solutions for this on the current internet, but not in a way like this. No interfaces, questions, or programming languages. Just a "share this idea" thought, and it's out there. In your favourite database, anonymous or not, for everyone to be accessed.

People can freely reference you or your work. Getting credit for your work has never been more easy. And all the same for giving credit to someone else as well of course.

#### Function of computers
While computers will be used for serving data and calculation power. There will be a shift in it's use. As there's no need for a graphical interface, websites would be obsolete, and the only thing needed from computers is serving the actual data and performing tasks it's better at than the human brain. Collecting data or calculating statistics for example.

#### Function of humans
Being able to get common knowledge instantly from a limited amount of sources. No more need to learn facts or get common knowledge. The way we think of learning could completely change. Facts are a given, there's no need to learn them.

### Stage three: Brains to brains over the internet
Directly tap into someones brain. People don't have to put info on the internet in a certain database first. Everybody 'owns' everyones data.
Problem of machine readability and semantics is solved.
Problem of lies is solved. No more global truth, just individual nodes in a global bank. Just make your own conclusion with others' facts.

#### Problems
// TODO
Privacy issues
Not connected
People pulling their knowledge

#### Opportunities
// TODO
Faster peer to peer communication and mind sharing.

The opportunities are vast. Linking brains to each other & creating a distributed opt-out network could

#### Function of computers
Computers will still be used for their computational power and function as a back up for people passing away.

#### Function of humans
The advantage of the human brain as discussed earlier is intelligence and the power to draw conclusions. We predict this will stay this way and will not be replaced by computers. People are there to combine pieces of knowledge and draw the conclusion.

People are able to perceive connections like these and make conclusions over it.  Imagine how a better connectivity with the information on the web could facilitate the sprouting of new ideas. New ideas and hypothesis sprout after getting new information/data. A new idea or hypothesis always is the combination of two pieces of information. A beautiful example: a 15 year old boy called Jack Andraka got an insight after reading a web page connecting the facts from those page to his biology lesson that day. This insight lead him to a hypothesis which made him find a way to test different sorts of cancer in a fast and effective way. [Nosta, 2013][#Nosta:2013] All of this because he found a link between two facts and and saw a connection. What if we could fully facilitate this discovery?

### Timeline

<iframe class='timeline' src='http://embed.verite.co/timeline/?source=0Aka4DvTeP82GdFpWcjlVOEJWU1YxUFBtRkN6OF9SSnc&font=Georgia-Helvetica&maptype=toner&lang=en&height=650' width='100%' height='650' frameborder='0'></iframe>


## Conclusion
// TODO


[#Chorost:2011]: Chorost, M. (2011). World Wide Mind. New York: Free Press.
[#Hawkins:2004]: Hawkins, J. & Blakeslee, S. (2004). On intelligence. New York: Times Books.
[#Michelon:2008]: Michelon, P. (2008). Brain Plasticity: How learning changes your brain. Retrieved from: http://www.sharpbrains.com/blog/2008/02/26/brain-plasticity-how-learning-changes-your-brain/
[#Klemm:2008]: Klemm, B. (2008) New Neurons: Good News, Bad News. Retrieved from: http://www.sharpbrains.com/blog/2008/04/25/new-neurons-good-news-bad-news/
[#Boyden:2011]: Boyden, E. (2011). A light switch for neurons. Retrieved from: http://www.ted.com/talks/ed_boyden.html
[#Pogue:2013]: Pogue, D. (2013). Why touch screens will not take over. Retrieved from: https://www.scientificamerican.com/article.cfm?id=why-touch-screens-will-not-take-over
[#Nosta:2013]: Nosta, J. (2013). Cancer, Innovation and a Boy Named Jack. Retrieved from: http://www.forbes.com/sites/johnnosta/2013/02/01/cancer-innovation-and-a-boy-named-jack/
[#Layton:2006]: Layton, J. (2008). How BrainPort Works. Retrieved from: http://www.howstuffworks.com/brainport1.htm
[#Levy:2008]: Levy, B. (2008). The Blind Climber Who "Sees" With His Tongue. Retrieved from: http://discovermagazine.com/2008/jul/23-the-blind-climber-who-sees-through-his-tongue
[#Krug:2005]: Krug, S. (2005). Don'T Make Me Think! New Jersey: Pearson Education (US)
[#Swaab:2010]: Swaab, D, F. (2010). Wij zijn ons brein.
[#Gazzaniga:2008]: Michael S. Gazzaniga (2008). Human: The Science Behind What Makes Us Unique.
[#Rackspace:2010]: Rackspace. (2010). The Evolution of HTML. Retrieved from: http://broadcast.rackspace.com/blog/HTMLtimeline/index.html (http://www.rackspace.com/blog/internet-history-html-evolution/)
[#Kelly:1995]: Kelly, K. (1995). Out of Control: The New Biology of Machines, Social Systems, & the Economic World
[#Kiwix:2013]: Kiwix. (2013). Retrieved from http://kiwix.org
[#Klyne:2004]: Klyne, G, Jeremy, J & McBride B. (2004). Resource Description Framework (RDF): Concepts and Abstract Syntax. Retrieved from: http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/
[#Microsoft:2013]: Microsoft. (2013). Kinect for Windows. Retrieved from: http://www.microsoft.com/en-us/kinectforwindows/
[#Leap:2013]: Leap Motion. (2013). Leap Motion. Retrieved from: https://www.leapmotion.com
[#Thalmic:2013]: Thalmic Labs. (2013) MYO - The Gesture Control Armband. Retrieved from: https://www.thalmic.com/myo/
[#Berkman:2013]: Berkman, F. (2012). Voice Command: Capturing Nerdy Imaginations Since the 1800s. Retrieved from: http://mashable.com/2012/10/26/voice-command/
[#Victor:2011]: Victor, B. (2011) A Brief Rant on the Future of Interaction Design. Retrieved from: http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/
[#McMillan:2013]: McMillan, R. (2013). How Google Retooled Android With Help From Your Brain. Retrieved from: http://www.wired.com/wiredenterprise/2013/02/android-neural-network/
