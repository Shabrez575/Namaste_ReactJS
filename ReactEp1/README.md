ReactELement is an object which will then convert into HTML & Then our Browser understand what is the html exactly & print it into the screen.

---------   AI BUILD NOTES ---------------------

When using DOM manipulation, we typically create an element like a heading (h1 in this case) using document.createElement, set its inner HTML, and then append it to a parent element using appendChild.

In React, we utilize ReactDOM.createRoot to create a root element where we render our JSX elements. This allows us to efficiently manage the rendering process.

Sometimes, we may need to render multiple elements at the same level. In such cases, we can use an array of elements within createElement to achieve this.

Similarly, when we have multiple child elements at the same level, we can enclose them in an array and pass it to createElement to render them correctly in the DOM.

The createElement function in React accepts an object representing the element's properties, making it versatile for creating various types of elements.

By utilizing ReactDOM.createRoot, we ensure that our React elements are properly rendered and managed within the DOM, providing a structured and efficient approach to web development.

React's approach to rendering elements offers a more declarative and organized way compared to traditional DOM manipulation, enhancing code readability and maintainability.

Encapsulating elements within arrays allows us to maintain a clean and structured codebase, especially when dealing with multiple elements or complex hierarchies.

React's component-based architecture promotes reusability and modularity, facilitating the development of scalable and maintainable web applications.

Leveraging React's ecosystem and tools like ReactDOM enables developers to efficiently build dynamic and interactive user interfaces while adhering to best practices in modern web development.


------------------ CDN IN DETAIL -------------------

A CDN, or Content Delivery Network, is a network of distributed servers strategically located around the globe to deliver web content to users more efficiently. It works by caching static assets such as images, CSS files, JavaScript files, and other types of content in multiple locations, known as points of presence (PoPs), closer to end-users.

Here's a detailed explanation of how CDNs work:

Content Distribution: When a user requests a web page or any resource (such as an image, CSS file, or JavaScript file), the request is directed to the nearest server in the CDN's network.

Server Selection: The CDN's server, also known as an edge server, selects the most appropriate server to fulfill the request based on various factors like proximity to the user, server load, and network conditions.

Caching: If the requested content is already cached on the edge server, it's delivered directly to the user's browser, resulting in faster loading times. If the content is not cached, the CDN retrieves it from the origin server.

Origin Server: The origin server is the primary server where the original content is hosted. When a CDN edge server doesn't have the requested content in its cache, it fetches the content from the origin server.

Cache Control: CDNs use cache-control headers to specify how long content should be cached at edge servers before it expires and needs to be refreshed. This helps optimize performance while ensuring that users receive the most up-to-date content.

Load Balancing: CDNs often employ load balancing techniques to distribute incoming traffic across multiple servers, ensuring efficient resource utilization and preventing any single server from becoming overloaded.

Security: CDNs can provide security features such as DDoS protection, SSL/TLS encryption, and web application firewalls (WAFs) to protect against various cyber threats and attacks.

Analytics and Monitoring: CDNs offer analytics and monitoring tools to track web traffic, performance metrics, and other key insights, allowing website owners to optimize their content delivery strategy.

Scalability: CDNs are highly scalable, capable of handling large volumes of traffic and accommodating spikes in demand without sacrificing performance or reliability.

Cost-Effectiveness: By offloading bandwidth and resource-intensive tasks to CDN edge servers, organizations can reduce the load on their origin servers and lower infrastructure costs.

Overall, CDNs play a crucial role in improving website performance, reliability, and security by efficiently delivering web content to users worldwide. They are essential components of modern web infrastructure, especially for websites with global reach or high traffic volumes.


-------------  CROSS ORIGIN ---------------------

In the context of using a Content Delivery Network (CDN) with React, "cross-origin" typically refers to the CORS (Cross-Origin Resource Sharing) mechanism. CORS is a security feature implemented by web browsers to control how resources on one domain can be requested from another domain.

When you load resources (like scripts, stylesheets, or images) from a CDN, those resources are being requested from a different origin (domain) than your application. This is considered a cross-origin request.

Why is Cross-Origin Important?
Security: CORS is a security measure that prevents malicious websites from making unauthorized requests to your server.
Resource Sharing: It allows controlled access to resources located outside of a given domain.