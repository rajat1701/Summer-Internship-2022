# NodeJS and Express Quiz

## Theory:

### What is NodeJS?

> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

### What is V8 Engine?

> V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser. Chrome V8, or just V8, can execute JavaScript code either within or outside of a browser, which makes server-side scripting possible.

### What is Event Loop in NodeJS.

> The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.<br>
> When Node.js starts, it initializes the event loop, processes the provided input script which may make async API calls, schedule timers, then begins processing the event loop. In the previous example, the initial input script consisted of console.log() statements and a setTimeout() function which schedules a timer.
>
> **Features of Event Loop:**
>
> - Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
> - The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
> - The event loop allows us to use callbacks and promises.
> - The event loop executes the tasks starting from the oldest first.

### What is the use of tsconfig.json file?

> The tsconfig.json file allows you to specify the root level files and the compiler options that requires to compile a TypeScript project. The presence of this file in a directory specifies that the said directory is the TypeScript project root.

### What are the methods provided by `fs` module to manipulate files?

> The various methods provided by fs module to manipulate files are -
>
> - fs.access(): check if the file exists and Node.js can access it with its permissions
> - fs.appendFile(): append data to a file. If the file does not exist, it's created
> - fs.chmod(): change the permissions of a file specified by the filename passed.
> - fs.chown(): change the owner and group of a file specified by the filename passed.
> - fs.close(): close a file descriptor
> - fs.copyFile(): copies a file
> - fs.createReadStream(): create a readable file stream
> - fs.createWriteStream(): create a writable file stream
> - fs.link(): create a new hard link to a file
> - fs.mkdir(): create a new folder
> - fs.mkdtemp(): create a temporary directory
> - fs.open(): opens the file and returns a file descriptor to allow file manipulation
> - fs.readdir(): read the contents of a directory
> - fs.readFile(): read the content of a file.
> - fs.readlink(): read the value of a symbolic link
> - fs.realpath(): resolve relative file path pointers (., ..) to the full path
> - fs.rename(): rename a file or folder
> - fs.rmdir(): remove a folder
> - fs.stat(): returns the status of the file identified by the filename passed.
> - fs.symlink(): create a new symbolic link to a file
> - fs.truncate(): truncate to the specified length the file identified by the filename passed.
> - fs.unlink(): remove a file or a symbolic link
> - fs.unwatchFile(): stop watching for changes on a file.
> - fs.utimes(): change the timestamp of the file identified by the filename passed.
> - fs.watchFile(): start watching for changes on a file.
> - fs.writeFile(): write data to a file.

### What is API?

> An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.

### What is JSON format?

> JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format. JSON is plain text written in JavaScript object notation. It is language independent and is used to send data between computers.

### Why we use JSON format for API?

> JSON allows APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in. JSON is a much more natural fit for developers to exchange structured data. It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs.

### What is a Framework?

> A framework, or software framework, is a platform that provides a foundation for developing software applications. Think of it as a template of a working program that can be selectively modified by adding code. It uses shared resources – such as libraries, image files, and reference documents – and puts them together in one package. That package can be modified to suit the specific needs of the project. With a framework, the developer can add or replace features to give new functionality to the application.

### How an HTTP Communication works.

> Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. Client devices send requests to servers for the resources needed to load a web page; the servers send responses back to the client to fulfill the requests. As a request-response protocol, HTTP gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers. HTTP clients generally use Transmission Control Protocol (TCP) connections to communicate with servers.
>
> > ![httpmodel](https://user-images.githubusercontent.com/56484583/179046955-1b0df1f5-ed58-478f-9f4e-bb5c49aec2ca.jpg)
>
> **METHODS AND DESCRIPTION :**
>
> - GET requests a specific resource in its entirety
> - HEAD requests a specific resource without the body content
> - POST adds content, messages, or data to a new page under an existing web resource
> - PUT directly modifies an existing web resource or creates a new URI if need be
> - DELETE gets rid of a specified resource
> - TRACE shows users any changes or additions made to a web resource
> - OPTIONS shows users which HTTP methods are available for a specific URL
> - CONNECT converts the request connection to a transparent TCP/IP tunnel
> - PATCH partially modifies a web resource

### What is Middleware in ExpressJS.

> Middleware is anything you put in the middle of one layer of the software and another. Express middleware are functions that execute during the lifecycle of a request to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it’s attached to.
