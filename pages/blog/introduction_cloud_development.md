import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2020-09-07',
  title: 'Introduction to Cloud Architecture',
  summary:
    'Know more about the process involved in creating a web application in the cloud with this series of articles about Cloud Development.',
  image: '/images/clouds.jpg'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

Since the beginning of the Software Engineering disciple back in the '60s, developers have seen several revolutions in the way we build computer programs. First, it was just logic in the most basic form of electronic circuitry, with logic gates, relays, and other basic components, then with the access to cheap microprocessors and persistent memory, software programs could then be compiled and saved for later use and even be modified as it evolved according to incoming requirements. Let's say this was the first great revolution.

Software Engineering continued enjoying improvements in hardware development, more CPU power, more memory, creation of increasingly more sophisticated and complex Operating Systems and with them, developers created the office tools that ran in these computers and allowed us to be more productive at the office, with word processors, spreadsheet editors, image processing tools and many others, however, a second revolution was under development from the late '80s, the Internet was moving forward at a steady pace, until in 1995 came the World Wide Web to change everything in the way we built software, moving from creating software for desktop computers to applications accessed from all over the world via the Internet.

## The birth of On-Premises web applications

![Servers](/images/servers.jpg)

With the birth of the World Wide Web, developers should now take care of where and how they should deploy computer applications or web applications. It's not as simple as creating an installer and distribute it in a CD or a bunch of floppy disks, now, to go online and be reachable by millions of user all over the world, web applications should be deployed in web servers, following a completely different paradigm, not only in the development process, -that now includes dealing with Http requests, asynchronous processes, markup languages, and others- but also in the process of delivering the final "executable" to the webserver.

Let's take a look at what's needed to bring a web application online on-premises.

###  1. Develop and test the web application locally, running in a web browser.

This is the starting point for any web page, after an initial design or any kind of mockup, usually, the first step is to create a functional running version of the application that works locally, in our desktop or mobile computer by testing it using a web browser of our preference.

Of course, there's plenty of technical details involving design and architectural decisions that take place at this stage and the stages ahead, but for now, I'd like to focus on the deployment process, as we take more on architecture in the following sections.

### 2. Create a minified bundle or set of binaries ready to be copied over the server.

Once we have our application at feature complete state, tested and ready to go, the next step is to create a deployable package or unit that we can copy over the server, as we can not simply copy all the contents are they are running in our development environment. But, why is that? the answer is that usually our local environment has some development tools that are intended to handle development tasks as debugging, testing, linting, and others depending in our project requirements, and that's something we don't need in production, we only need the final set of working pieces of the application, without any extra baggage.

### 3. Get a hosting environment where to deploy.

Getting to this step, things turn less technical and more financial, as we need to choose a commercial option from the many available in the market, that goes from free or low price plans, that are usually shared with many other applications and fixed to some selection of technology stack, or we can choose a more specialized plan where we can choose the amount of memory, CPU power, Operating System and the technology stack of our preference, prices, of course, vary depending on the resources and availability we pick, the more of power, more the expense, and even more important, we pay whenever our application is getting visits or not because the system is always up and running, but, it can be in any other way? we'll find out soon. 

### 4. Buy a domain and link it to the host.

After having our project compiled, packed, and deployed in the hosting option of preference, we have other tasks pending on having our web application accessible in the World Wide Web, and that is of course a web domain. Depending on the domain name, the cost varies, but usually is not so pricy and we can afford a simple .dom site. After that, we need to set the DNS resolver so our domain resolves into the IP address of the hosting server chosen in the previous point,

### 5. Configure network artifacts like proxies and load balancers.

Finally, we can deploy our web application!. But after we have a successful web site hitting thousand or millions of visits a day, we now start worrying about scalability and availability, we'd likely need to change the hosting plan to accommodate more resources like CPU and memory (vertical scale) or creating multiple instances of our application and put them behind a load balancer to handle the heavy load of requests (horizontal scale). Also, as we begin to grow, there's a need to create multiple environments and releases, and set proxies so we can commute from one to another as demanded.

### 6. Optimize for security.

Last but not least, we could have begun with a simple authentication method and other security measures, but as we grow, security comes more comprehensive, for example, we'd go from on-premises authentication to use two-factor authentication or set a scan to look at vulnerabilities in our code base or its dependencies. All of this of course adds to the already busy development agenda, and we haven't look yet at the upgrades on the Operating System, libraries, and other dependencies needed on the hosting server!.

## The problem that cloud development solves

As we could see, there is a lot of work by just putting a simple web application online, and that's just the start, as the application begins to be successful and grow, the amount of work on optimization tasks grows as well.

The cloud was born to solve every single issue listed in the previous steps involved in putting a web application up and running. When you build an application in the cloud, you can easily make use of automatic building and deployment (aka CI/CD), that allows us to create a complete development environment for a new feature, with a separate set of database and API endpoints, where we use a development instance that is the closest to the final product in any way we want it to be. All of these also come with an automatic execution of tests that ensures we are not breaking anything with our changes.

And this is just the beginning, cloud tools goes a few steps further by providing the means not just for hosting environments, but also for linking to a custom domain, set the proxies, load balancers, optimize out system by using high-quality authentication providers to sign in into our application, allowing also to use our social accounts for better user experience. 

In the following sections we'll be learning in detail how Cloud development allows software engineers and web developers to build better, more secure and cost-saving, that scales up as required, web applications, and complete, from simple to complex systems in ways we could only dream about ten years ago.
