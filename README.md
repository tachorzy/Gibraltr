<div class="markdown-heading" dir="auto">
    <h1 tabindex="-1" class="heading-element" dir="auto">Gibraltr — your guide to travel visas</h1>
</div>
<img src="https://i.imgur.com/3mymhvb.png" height="147.5" width="1000"></img>

Gibraltr is a website that allows you to check visa requirements for every nationality no matter the destination. Access the latest accurate and reliable information for your next trip. It's always best to know before you go, and that's why Gibraltr is here to provide awareness to all international travelers.

<div class="markdown-heading" dir="auto">
    <h3 tabindex="-1" class="heading-element" dir="auto">Demo</h3>
</div>
<img src="https://i.imgur.com/onWOpxk.gif" height="338" width="600"></img>

<div class="markdown-heading" dir="auto">
    <h3 tabindex="-1" class="heading-element" dir="auto">Inside the Monorepo</h3>
</div>
This monorepo includes the following:
<h5>Apps</h5>
<code>frontend</code>: a webapp with a <a href="https://nextjs.org/">Next.js</a> frontend.

<code>backend</code>: a <a href="https://go.dev/doc/install">Go</a> api.

<div class="markdown-heading" dir="auto">
    <h5 tabindex="-1" class="heading-element" dir="auto"">Tooling Requirements</h5>
</div>
<ul>
    <li><a href="https://nodejs.org/en/">Node.js</a> >= 18 (LTS Recommended)</li>
    <li><a href="https://go.dev/doc/install">Go</a> >= 1.23.1 (Latest Recommended)</li>
</ul>
<div class="markdown-heading" dir="auto">
    <h3 tabindex="-1" class="heading-element" dir="auto">Host Locally</h3>
</div>

### Install frontend dependencies without cache:
<code>npm ci</code>

### Start the client
<code>npm start</code>

> [!NOTE]
> A new window will automatically open in your default browser on http://localhost:3000.

### Start the backend server
<code>cd backend/api/visaparser
    go run main.go
</code>

> [!NOTE]  
> The server will run on your default browser on http://localhost:8000, but it will not automatically open.
