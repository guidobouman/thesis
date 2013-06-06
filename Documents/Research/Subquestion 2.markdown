## Sub question 2
> What is the current status of communication & information exchange between the human brain and computers / the internet?

In terms of connectivity there's a lot to explore. At the moment we're using mouse, keyboard and touch screens to interact with computers. This is an extra layer which might be removed to have a more direct connection with the human brain. In this subquestion the realms of brain computer interfaces and their accompanying technologies are explored.

### MRI & EEG
These are two vastly interesting techniques which allow us to read information from the human brain. Unfortunately they're unidirectional which means they're only able to read information from the mind, and not write, which we would require.

### Neuroprosthetics
Where MRI and EEG are non-intrusive technologies, there are a lot of interesting advancements being made on the field of neuroprosthetics (or brain implants). One example is a cochlear implant. They stimulate the cochlea (inner most part of the ear) through the use of electric pulses to let it think it's receiving sound.

While part of this implant is in fact a neuroprosthetic, this is no implant in the the human brain. The first true brain implants have already been designed, and they are currently being tested. Take for example the hippocampus, the part of your brain that amongst other tasks takes care of storing and retrieving memories. Currently a brain implant is under development that could mimic part of the hippocampus' abilities and help someone with brain damage to the hippocampus store & retrieve new memories again. [Berger, 2005][#Berger:2005]

### Optogenetics
This is a fairly new technique and most likely best suited for reading and writing to the brain. By altering the genetics of individual neurons in the brain, scientists are able to see and alter the state of individual neurons with lasers. By inserting a controlled virus into the brain, certain neurons will be genetically modified which will in turn make the neurons light dependent. This allows the neuron to be controlled and read by light. [Boyden, 2011, 05:55][#Boyden:2011]

Devices for Optogenetics are fairly low cost and it’s possible to utilise this technology with with a laser and some cheap electronics like an Arduino. [SNG, 2011][#SNG:2011]

This is still quite vague, lets give an example of what this technology is capable of. What it does is switch parts of the brain on or off. In a way you can forcefully enable parts of the brain to trigger for example the idea of an earthquake taking place or that you just achieved a goal. Also by disabling part of the brain, you can prevent a fear reaction from taking place. In Ed Boyden's tests, they stopped a pavlovian conditioned mouse from freezing after hearing a tone. This means that optogenetics can possibly cure harsh forms of phobias. [Boyden, 2011][#Boyden:2011]

Wether or not we can actually read from and write to the human brain remains to be seen. But repeatedly activating parts of the human brain and strengthening synapses is exactly what defines learning. [Hawkins, 2011][#Hawkins:2004]

> By inserting channelrhodopsin and GFP genes into a neuron, one can make it fire at will and visually confirm that it has fired, simply by shining light of various wavelengths at it through a fiber-optic cable. The fiber-optic cable lets one activate cells and confirm their firing at the same time. In other words, it makes it possible to “write” to an area of the brain and “read” from it at the same time, using the same cable. That is, to invoke two-way information flow. [Chorost, 2011, p. 120][#Chorost:2011]

So, by permanently changing the neurons we can make them sensitive to light. When the light is not active, the human brain functions as normal. But when the light is fired, various wavelengths of light can force parts of the brain on or off. Unfortunately, to be able to read and/or manipulate the state of a function within the human brain we need to know it's exact location. So, we can read the state of a part of the brain, but to read a memory we need to know exactly where it's stored in that human brain. The issue lays within the design of the human brain, because it's plasticity you can't expect anything to be at an exact location. For example "Oh, that memory of you being hit by a bus is stored 2.128mm south east of the center of the neocortex." wil not work. The moment we start to monitor the brain, we can read it's memories from that point in time onwards. But when we have not whitnessed the memory being stored, it's currently not possible for us to discover what pattern of neurons firing resemble what memory.

### Neuromorphic microcontrollers
Neuromorphic microcontrollers are silicon chips which try to mimic the way the human brain works by using memristors & bipolar spin neurons. Current progress in this field is a working chip that's able to play pong like a human does, and which is able to complete digits partially drawn by humans.

The scientists working on the DARPA SyNAPSE program, which is one of the main neuromorphic chip projects, think this technology could break Moore's law. Looking at their planning they expect to go roughly five times as fast as Moore's law. Of course this is a new technology where huge leaps can be made in relatively short amounts of time. But it seems that they're confident that neuromorphic machines can be the solution to breaking free of Moore's law.  [Darpa, 2012][#Darpa:2012]

### Alternate senses
> The neocortex is amazingly “plastic,” meaning it can change and rewire itself depending on the type of inputs flowing into it. [Hawkins, 2004, p. 106][#Hawkins:2004]

The neuroplasticity of the human brain makes it possible for blind people to "see" with their tongues. The brain doesn't care in which way it gets it's information. It will make sense of whatever stream of data you feed it. [Hawnkins, 2004, p. 110][#Hawkins:2004] In this case translating visual data to pressure points on the tongue allow blind people to see again. Of course it's not as refined as the human retina, but imagine the possibilities. 

Imagine a device that somehow feeds the internet as a sixth sense. Applied properly, your brain could make sense of the patterns being fed to it. The moment you think of a fire-truck, the device would understand that thought, and feed all of the properties of a fire-truck back to you, instantaneously fetched from the internet. 

To make a device like the one mentioned before possible we need a better understanding of the streams being fed from the human sense to the brain. We know the human brain itself doesn't see, hear or feel. Rather it makes sense of a non-stop stream of data, and especially the changes in these streams in contrast to it's expectations. [Hawkins, 2004, p. 111][#Hawkins:2004] We need to know what the streams from different senses look like and how we can mimic them to feed our custom-made "sense" to the human brain.

[#Chorost:2011]: Chorost, M. (2011). World Wide Mind. New York: Free Press.
[#Hawkins:2004]: Hawkins, J. & Blakeslee, S. (2004). On intelligence. New York: Times Books.
[#Boyden:2011]: Boyden, E. (2011). A light switch for neurons. Retrieved from: http://www.ted.com/talks/ed_boyden.html
[#SNG:2011]: Synthetic Neurobiology Memo #4. (2011). Very Simple Off-The-Shelf Laser and Viral Injector Systems for In Vivo Optical Neuromodulation. Retrieved from: http://syntheticneurobiology.org/protocols/protocoldetail/35/9
[#Darpa:2012]: Next Big Future. (2012). DARPA Synapse Project Status. Retrieved from: http://nextbigfuture.com/2012/06/darpa-synapse-project-status.html
[#Berger:2005]: Berger, T. W., Ahuja, A., Courellis, S. H., Deadwyler, S. A., Erinjippurath, G., Gerhardt, G. A., et al. (2005). Restoring lost cognitive function. Ieee Engineering in Medicine and Biology Magazine, 24(5), 30-44.
[#Wiki:BCI]: Wikipedia. (14:30, 15 October 2012) Brain-computer interface. Retrieved from: http://en.wikipedia.org/wiki/Brain-computer_interface
[#Wiki:Neuroprosthetics]: Wikipedia. (14:41, 28 August 2012‎) Neuroprosthetics. Retrieved from: http://en.wikipedia.org/wiki/Neuroprosthetics
