# Voidcord

A new custom Discord client based on simplicity, extendability and performance using NeutralinoJS.

Note: Not finished and lacks many features. You will need to install the cached assets manually untill I fix it. (Most likely going to be injected from a Node script before neu.

Installation
===

**Note: You need both npm and git installed.**

This one is obvious

```sh
git clone https://github.com/Thesourtimes/voidcord
cd voidcord
 ```

When you are done you may want to run setup scripts for installing nue. It's pretty simple.

```sh
#If you are running Linux or literally any other UNIX-like OS that can run on PCs and has Bash
npm run setup:unix

#Win sucks
npm run setup:windows

```

Well now you will need to run the client with It's caching server in order to use it. Here is how.

```sh
#Start the client
npm run test

#Starts the server with neu's debug port on a seperate terminal
npm run cache-server <port>
```

This will install the requested Discord assets from the `index.html` inlines. You can change it from the same file **for now**.


Main Features
===

1. Neuralino uses Safari's Webkit instead of Chromium, a high gain for performance and low-end users.
2. Uses [Cumcord](https://cumcord.com)'s web plugin for modifications.
3. Caches Discord's client scripts for faster load times. There is a simple cache server written in Node.js for that. (Will be rewritten in Rust)
4. Follows KISS philosophy. You take it from barebones, extend and make it your with custom CSS, scripts, web builds, mods, Fosscord & Litecord Instances and so on.

Cons
===

1. This build of webkit doesn't supports WebRTC and that means you won't be able to use Voice channels. I will do my part for this issue later.
2. Is buggy and you need to compile it for yourself.
3. Might be a bit complicated for non-power users.




Troubleshooting
===

1.  It shows a blank white page on Windows while using Fosscord

- Accessing to localhost from UWP context is disabled by default on Windows. You can disable It with this.
```bash
CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"
```


