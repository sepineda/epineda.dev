import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2018-06-30',
  title: 'Full Stack JavaScript Interview Questions',
  summary:
    'A good selection of JavaScript interview questions for a Full Stack profile',
  image: '/images/social_media.png'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

JavaScript is in high demand nowadays, it’s become prevalent as it is possible to create applications on the full stack, back-end with Node.js, databases with a wide variety (like MongoDB or RethinkDB) and a even bigger range of options when it comes to the front-end (React, Angular, Vue, Ember, to name a few).
Given the so many opportunities, developers specialize (or they should) in a particular stack, like React or Angular in combination with Node.js and MongoDB. However, they all have something in common: JavaScript.

In this post, we’ll see what the basics every full-stack developer should master and crack some of the common questions you might face in a job interview are.
You might wonder what a recruiter, for a Full-Stack position in JavaScript is looking for, let’s summarize some of these basics:

**1. JavaScript**: Naturally, the first a recruiter wants to know is your mastery in the language. You might expect questions related to programming paradigms (Functional, OOP, Structured/procedural), scope modifiers, data types, ES6 syntax, promises, among others.

**2. Node.js**: It is essential for a Full-Stack developer in JavaScript to master Node.js, concepts go from Non-blocking I/O, callbacks, to EventEmmiter and asynchronous requests.

**3. Databases & Web Storage**: For JavaScript development, we’re especially interested in assessing knowledge in NoSQL databases and how they compare to Relational DB.

**4. HTTP & Rest**: Full Stack developers should have a strong basis on HTTP and Rest web services, as they are used in every front-end framework (React, Angular, Vue, Ember, etc.).

**5. Web Application Architecture**: Every Web developer must have good foundations on Web architecture, including Single Page Apps, Multi-page apps, monolithic vs. microservices architectures and Design Patterns.

**6. Algorithms & Data Structures**: This category is universal, it’s expected that any software developer knows how to solve these kinds of problems.

If you’re looking for questions on Full-Stack interview questions (besides JavaScript), you can find this article very useful: [10 Essential Full-stack Interview Questions](https://www.toptal.com/full-stack/interview-questions)
Then, let’s start our tour through some of the questions we can encounter in every category.

## JavaScript

## Name two programming paradigms used in JavaScript

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.

**Good to hear:**

- Prototypal inheritance (also: prototypes, OLOO).
- Functional programming (also: closures, first-class functions, lambdas).
- Object-oriented programming (even: es6 classes, super, factories, getter/setter)

**Red flags:**

- No clue what a paradigm is, no mention of prototypal oo, OOP or functional programming.

## What are two-way data binding and one-way data flow, and how are they different?

Two-way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.

One way data flow means that the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model (or “store” in React). Only the model has access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.

One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.

## What is functional programming?

Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in everyday use today.

Functional programming is an essential concept in JavaScript (one of the two pillars of JavaScript). Several common useful utilities were added to JavaScript in ES5.

## What is Object Oriented Programming?

**Object-oriented programming (OOP)** is a programming paradigm based on the concept of “objects,” which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A feature of objects is that an object’s procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of “this” or “self”). In OOP, computer programs are designed by making them out of objects that interact with one another. There is a significant diversity of OOP languages, but the most popular ones are class-based, meaning that objects are instances of classes, which typically also determine their type.

## What does “favor object composition over class inheritance” mean?

This is a quote from [“Design Patterns: Elements of Reusable Object-Oriented Software”](http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612). It means that code reuse should be achieved by assembling smaller units of functionality into new objects instead of inheriting from classes and creating object taxonomies.

In other words, use can-do, has-a, or uses-a relationships instead of is-a relationships.

**Good to hear**

- Avoid class hierarchies.
- Avoid brittle base class problem.
- Avoid tight coupling.
- Avoid rigid taxonomy (forced is-a relationships that are eventually wrong for new use cases).
- Avoid the gorilla banana problem (“what you wanted was a banana, what you got was a gorilla holding the banana, and the entire jungle”).
- Make code more flexible.

**Red flags**

- Fail to mention any of the problems above.
- Fail to articulate the difference between composition and class inheritance, or the advantages of composition.

## Coding

## How do you clone an object?

```
var obj = {a: 1 ,b: 2} var objclone = Object.assign({},obj);
```

ES2015+

```
var obj = {a: 1 ,b: 2} var objclone = {...obj}
```

## What will the following code print?

```
for (var i = 0; i < 5; i++) 
{ 
  setTimeout(function() { console.log(i); }, i * 1000 ); 
}
```

Answer: 5 5 5 5 5 

## How can modify the previous code to produce a count like 1 2 3 4 5?
```
for (let i = 0; i < 5; i++) 
{ 
  setTimeout(function() { console.log(i); }, i * 1000 ); 
}
```

## In what order will the numbers 1–4 be logged to the console when the code below is executed? Why?

```
(function() 
{ 
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4); 
})();
```

## Node.js

Node.js is a run-time JavaScript environment built on top of Chrome’s V8 engine. It uses an event-driven, non-blocking I/O model. It is lightweight and so efficient. Node.js has a package ecosystem called npm.

Node.js can be used to build different types of applications such as web application, real-time chat application, REST API server, etc. However, it is mainly used to build network programs like web servers, similar to PHP, Java, or ASP.NET. Node.js was developed by Ryan Dahl in 2009.

## What is Event-driven programming?

Event-driven programming is building our application based on and respond to events. When an event occurs, like click or keypress, we are running a callback function which is registered to the element for that event.

Event-driven programming follows mainly a publish-subscribe pattern.

## What is the difference between Asynchronous and Non-blocking?

Asynchronous literally means not synchronous. We are making HTTP requests which are asynchronous, means we are not waiting for the server response. We continue with other block and respond to the server response when we received.

The term Non-Blocking is widely used with IO. For example, non-blocking read/write calls return with whatever they can do and expect the caller to execute the request again. Read will wait until it has some data and put calling thread to sleep.

## What is EventEmitter in Node.js?

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.

## Explain callback in Node.js.

A callback function is called at the completion of a given task. This allows other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

## What does it mean “non-blocking” in node.js?

In node.js “non-blocking” means that its IO is non-blocking. Node uses “libuv” to handle its IO in a platform-agnostic way. On windows, it uses completion ports for Unix it uses epoll or kqueue, etc. So, it makes a non-blocking request, and upon a request, it queues it within the event loop which calls the JavaScript ‘callback’ on the main JavaScript thread.

## What is asynchronous programming, and why is it essential in JavaScript?

**Good to hear**

- An understanding of what blocking means, and the performance implications.
- A knowledge of event handling, and why its essential for UI code.

**Red flags:**

- Unfamiliar with the terms asynchronous or synchronous.
- Unable to articulate performance implications or the relationship between asynchronous code and UI code.

## Databases & Web Storage

NoSQL encompasses a wide variety of different database technologies that were developed in response to a rise in the volume of data stored about users, objects, and products. The frequency at which this data is accessed, and performance and processing needs. Relational databases, on the other hand, were not designed to cope with the scale and agility challenges that face modern applications, nor were they built to take advantage of the cheap storage and processing power available today.

## Explain the difference between Relation DB vs. NoSQL

**RDBMS over NoSQL:**

- Better for relational data that is structured and organized.
- Organize data through normalization
- Use Structured query language(SQL) which is easy to learn
- Maintains Data Integrity
- Data and its relationships are stored in separate tables
- ACID compliance, i.e., either all the transactions are committed or None
- Scale up/ Vertical Scaling

**NoSQL over RDBMS:**

- Better for Unstructured and unpredictable Data
- Handles Big Data
- No predefined schema
- Cheaper to manage
- Scale-out/Horizontal Scaling
- BASE Transaction
- High performance, availability, and scalability

## What are the different types of NoSQL databases?

There are four different categories of NoSQL databases:

1. **Key-value stores**: The simplest, where every item in the database is stored as an attribute name (or “key”) together with its value. Riak, Voldemort, and Redis are the most well-known in this category.

2. **Wide-column stores**: It stores the data together as columns instead of rows and is optimized for queries over large datasets. The most popular are Cassandra and HBase.

3. **Document databases**: It pairs each key with a complex data structure known as a document. Documents can contain many different key-value pairs, or key-array pairs, or even nested documents. MongoDB is the most popular of these databases.

4. **Graph databases**: They are used to store information about networks, such as social connections. Examples are Neo4J and HyperGraphDB.

## HTTP & Rest

Web Services work on a client-server model where client applications can access web services over the network. Web services provide endpoint URLs and expose methods that can be obtained over the network through client programs written in Java, shell script or any other different technologies.
Web services are stateless and don’t maintain user session like web applications.

## What are different types of Web Services?

There are two types of web services:

1. **SOAP Web Services**: Runs on SOAP protocol and uses XML technology for sending data.

2. **Restful Web Services**: It’s an architectural style and runs on HTTP/HTTPS protocol almost all the time. REST is a stateless client-server architecture where web services are resources and can be identified by their URIs. Client applications can use HTTP GET/POST methods to invoke Restful web services.

## What is REST Web Services?

REST is the acronym for REpresentational State Transfer. REST is an architectural style for developing applications that can be accessed over the network. REST architectural style was brought in light by Roy Fielding in his doctoral thesis in 2000.

REST is a stateless client-server architecture where web services are resources and can be identified by their URIs. Client applications can use HTTP GET/POST methods to invoke Restful web services. REST doesn’t specify any specific protocol to use, but in almost all cases it’s used over HTTP/HTTPS. When compared to SOAP web services, these are lightweight and doesn’t follow any standard. We can use XML, JSON, text or any other type of data for request and response.

## What is a Resource in Restful web services?

A resource is the fundamental concept of Restful architecture. A resource is an object with a type, relationship with other resources and methods that operate on it. Resources are identified with their URI, HTTP methods they support and request/response data type and format of data.

## What are different HTTP Methods supported in Restful Web Services?
Restful web services supported HTTP methods are — GET, POST, PUT, DELETE and HEAD.

## What is localStorage in HTML 5?

It is a feature in HTML5 which let us store user data locally within the user’s browser.

## How it different from Cookies?

- They are more secure because web pages can access only access data stored by itself.
- They are faster
- Easy to retrieve and write compare to cookies
- Not included with every server request
- Supports a significant amount of data and even won’t affect performance.

## How it is different from session storage?

localStorage stores data with no expiration date whereas sessionStorage stores data for one session

## Web Application Architecture

A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In an SPA, either all necessary code — HTML, JavaScript, and CSS — is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application.
Interaction with the single page application often involves dynamic communication with the web server behind the scenes.

### Multiple-page App

Multiple-page applications work in a “traditional” way. Every change, e.g., display the data or submit data back to server requests rendering a new page from the server in the browser. These applications are more extensive than SPAs because they need to be. Due to the amount of content, these applications have many levels of UI.

## What are two-way data binding and one-way data flow, and how are they different?

Two-way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.

One way data flow means that the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model (or “store” in React). Only the model has access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.

One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.

## What are the pros and cons of monolithic vs. microservice architectures?

**Good to hear:**

- Positive attitudes toward microservices, despite the higher initial cost vs. monolithic apps. Aware that microservices tend to perform and scale better in the long run.
- Practical about microservices vs. monolithic apps. Structure the app so that services are independent of each other at the code level, but easy to bundle together as a monolithic app in the beginning. Microservice overhead costs can be delayed until it becomes more practical to pay the price.

**Red flags:**

- Unaware of the differences between monolithic and microservice architectures.
- Unaware or impractical about the additional overhead of microservices.
- Unaware of the extra performance overhead caused by IPC and network communication for microservices.
- Too negative about the drawbacks of microservices. Unable to articulate ways in which to decouple monolithic apps such that they’re easy to split into microservices when the time comes.
- Underestimates the advantage of independently scalable microservices.

## What is a design pattern, what are the 3 standard categories?.

A software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design.

**Good to hear:**

- Creational Patterns: Deals with the object creation mechanisms.
- Behavioral Patterns: Identify common communication patterns between objects.
- Structural Patterns: Identify a simple way to realize the relationship between entities.

**Red Flags:**

- Doesn’t know what a design pattern is.
- Does not identify its uses or intent.

## Name four design patterns used in JavaScript and a use example of each.

**Godd to hear:**

### Creationals

#### Builder

Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.

#### Factory Method

Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method allows a “class” defer instantiation to subclasses.

#### Singleton

Ensure a class has only one instance, and provide a global point of access to it.

### Structural

#### Module

Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.

Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes — that is, a closure that protects variables and methods (however, it will return an object instead of a function).

#### Proxy

Provide a surrogate or placeholder for another object to control access to it.

#### Adapter or wrapper

Convert the interface of a class into another interface clients expect. An adapter lets classes work together when they have incompatible interfaces. The enterprise integration pattern equivalent is the translator.

### Behavioral

#### Strategy

Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

#### State

Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically.

**Red Flags:**

- Only know the names of the patterns, but not the use
- Only can name 1 or 2