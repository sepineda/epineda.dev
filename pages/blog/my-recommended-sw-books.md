import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2018-07-16',
  title: 'My recommended books for Software Engineering',
  summary:
    'As a Software Developer, one of the most common endeavors is to keep up with the latest technologies, like frameworks, libraries, servers, programming languages and others',
  image: '/images/fse-books.jpeg'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

As a Software Developer, one of the most common endeavors is to keep up with the latest technologies, like frameworks, libraries, servers, programming languages and others. To be honest, reading books is not a practical way to keep up with the dizzying speed of evolution in Software technologies. Books are more useful when it comes to learning about foundations than learning bleeding edge technologies, the building blocks of knowledge.

We could acquire some of these bases from academia, but often they skip some critical topics, those we have to complement by ourselves because in the end we should never stop reading, studying, doing, or in other words: learning.

This is not by any means a closed and ultimate list, I’m sure several titles are missing, so please, don’t hesitate to add your suggestions in the comments below or in the social channels.
Without any more delays, let’s begin!.

## Books about Software Design

![gang-four](/images/gangOfFour.jpg)

I’ll start the list with one of the most iconic books in Software Engineering. It’s hard to find a book of Software — having now (2018), more than 20 years — that keeps so relevant today and that revolutionized the way we design software by the OOP paradigm.

I still feel surprised every time I come back to this book and see that the essence of how we design software hasn’t changed, in spite of the many programming languages and technologies that comes and go, besides of how much our computers have hundreds of thousands more processing power. In the end, building a Software is a human action.

Design patterns is a building block in every good Software Architecture, and this book will teach you the most important in the categories: Creational, Behavioral and Structural.

### Patterns of Enterprise Application Architecture

![patterns-enterprise](/images/patterns_enterprise.jpg)

A book by one of the most outstanding mentors in Software Development, Martin Fowler.

I consider this book as a reference manual of Enterprise Patterns, a useful source to go when you need to solve an architecture problem.

Although the focus is on enterprise applications, many of the principles and patterns apply to any kind of large-scale software application.

### Agile Software Development, Principles, Patterns and Practices

![agile](/images/agile_software_bob.jpg)

This is another excellent Design Patterns book. It covers the Patterns but also another range of topics from the Agile methodology and Object Oriented Design Principles, like those that the author, Robert C. Martin coined as [SOLID](https://en.wikipedia.org/wiki/SOLID).

### Don’t Make Me Think: A Common Sense Approach to Web Usability

![dont-make-me-think](/images/dont_make_me_think.jpg)

Another book that is not about programming, but about software design. Many front-end or full-stack developers focus on the logic and visual styles of a program but often miss one of the most critical components: the user. This book is about User Experience (UX) and user interfaces (UI).

Though a series of principles of intuitive navigations and information design, the author, Steve Krug teach us the right way to make a user interface clear and easy to use. A real classic anyone who works on web design should read.

## Books about Writing Code and Algorithms

### Clean Code

![clean-code](/images/clean_code.jpg)

This is the second book in the Robert C. Martin series and is considered by the author as a “prequel” to “Agile Software Development, Principles, Patterns and Practices,” following the work is done from [Object Mentor](http://butunclebob.com/).

This book is full of principles and best practices that are timeless and mostly language independent. It’s a great aid to understand how to write or refactor code to favor quality and readability working in an Agile methodology, as we write programs that other people or even ourselves need to read in the future, the code should be self-explaining.

### JavaScript: The Good Parts

![js_goog_parts](/images/js_good_parts.jpg)

JavaScript has become one of the most influential and popular languages on the Web. Since the fall of the Java applets and more recently Flash, JavaScript is the defacto language for writing applications in the browser and more recently for the server and even the desktop. For these reasons, a good book of JavaScript is mandatory for virtually any full-stack developer. It doesn’t matter if you come from Java, .net, PHP or other stacks, chances are you have to deal with JS sooner or later.

The author of this book, Douglas Crockford, is considered by an expert by many people in the SW development community. He’s made a great work giving us a detailed look at all the genuinely elegant parts of JavaScript, including:

- Syntax
- Objects
- Functions
- Inheritance
- Arrays
- Regular expressions
- Methods
- Style

### Clean Architecture: A Craftsman’s Guide to Software Structure and Design

![clean-architecture](/images/clean_architecture.jpg)

This book is the third in the Robert C. Maring Craftsman’s Guide. It starts by reviewing the main Software Development paradigms that have been with us since the beginning of programming and as he explains, haven’t really changed since:

- **Functional programming** which imposes discipline upon assignment
- **Structured programming** which imposes discipline on direct transfer of control
- **Object Oriented programming** which imposes discipline on indirect transfer of control

The book then continues to present the Design Principles to Software Architecture (as you read from this book, Design and Architecture in Software are nothing but the same thing). If you consider taking up Architecture seriously, you really should read this book!.

### Introduction to Algorithms

![intro_algorithms](/images/intro_algorithms.jpg)

A genuine classic in Computer Science, used by many colleges or universities around the world to learn about Algorithms and Data Structures. You can’t skip this area of Software Engineering, it’s just the building blocks of any computer program ever ran.

For a student is one of the best ways to start learning about algorithms, the growth order of a function, probabilistic analysis, and other formal topics. And for professionals, is an excellent reference to come back every time you need to refresh these concepts, including:

- Foundations: Growth of Function, probabilistic analysis
- Sorting and Order Statistics: Heapsort, Quicksort
- Data Structures: Elementary data structures, hash tables, binary search trees
- Advanced Design and Analysis Techniques: Dynamic Programming, Greedy Algorithms
- Advance Data Structures: B-Trees, Fibonacci heap
- Graph Algorithms: Elementary graph algorithms, Minimum spanning trees

## Books about career building/Entrepreneurship

### Cracking the Coding Interview: 150 Programming Questions and Solutions

![cracking_interview](/images/cracking_coding.jpg)

As a software professional nowadays (or a just graduated) chances are you’ll leave your current company in pursuit of better challenges or benefits, at least once (I recommend you do, every company has its own culture, methodologies, and projects, the best is to expand your vision and find your own way, don’t stay with the first impression). Being that the case, this book is essential.

Every time you go to a work interview in a Software company, you’ll have to make one or more programming tests to prove your knowledge, skills, and aptitude for the job. This book gives you all the tools you need to get a software developer jobs with practical advises on how to write a resume, answer behavioral questions and of course **150 programming interview questions and answers**.

### The Lean Startup: How Today’s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses

![lean-startup](/images/lean_startup.jpg)

This is not a programming book; however, the Lean Startup methodology has a lot in common on how a Software project is done. Actually his author, Eric Ries is a Software Engineer who created this method to start a new web game ([IMVU](https://en.wikipedia.org/wiki/IMVU)) trying something different to face the extreme uncertainty of starting a new company.

Applying the knowledge from the LEAN methodology (created at Toyota), the scientific method and agile methodologies like Scrum, Ries comes with a revolutionizing method for entrepreneurs to build new businesses.

Thank you so much for reading this post. Take care and talk to you again with more Software Engineering topics. Cheers!.