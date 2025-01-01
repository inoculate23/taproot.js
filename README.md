<div align="center">
<img src="https://github.com/user-attachments/assets/f965fd42-2a95-4552-9b5f-465fc4037a91" width="650" /><br />
<em>An open source real-time AI inference engine for seamless scaling</em>
<h1>JavaScript Client</h1>
<a href="https://www.npmjs.com/package/taproot-client" target="_blank"><img src="https://img.shields.io/npm/dm/taproot-client?logo=npm&logoColor=white&color=234b0e" /></a>
<a href="https://www.npmjs.com/package/taproot-client" target="_blank"><img src="https://img.shields.io/jsdelivr/npm/hm/taproot-client?logo=jsdelivr&logoColor=white&color=234b0e" /></a>
</div>



## Installation (Node)

```
npm install taproot-client
```

## Installation (Browser)

Include one of the compiled `.min.js` release files in your project.

## Usage

```js
// Point to a running taproot cluster
const taproot = new Taproot("ws://127.0.0.1:32189");

// Request an echo, response is the same type as sent
taproot.invoke({
  task: "echo",
  parameters: {
    message: "Hello, world!"
  }
}).then(console.log).catch(console.error);

// Requests an image using SDXL turbo then outputs it to the document
let appendToDocument = document.body.append.bind(document.body);
taproot.invoke({
  task: "image-generation",
  model: "stable-diffusion-xl-turbo",
  parameters: {
    prompt: "A cat wearing a hat",
    output_type: "jpg"
  }
}).then(appendToDocument).catch(console.error);
```
