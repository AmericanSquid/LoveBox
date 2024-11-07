# Love Box Web App

A simple, interactive web application designed as a heartfelt gesture. The "Love Box" displays a flower image and a quote when opened, with a personal label: "From: Matt To: Christina." You can easily customize the names, images and quotes to make it uniquely yours. The application is built using **HTML**, **CSS**, and **Node.js** with **Express** for backend functionality.

## Features:
- Personalized Message: Shows "From: Matt To: Christina" before interaction.
- Interactive Box: Click "Open the Box" to reveal a flower image and a quote.
- Customizable Content: Easily update names in index.html and add your own quotes in app.js.

## Installation Instructions:

### 1. Clone the LoveBox Repository:

First, clone the LoveBox Repository:

```bash
git clone https://github.com/AmericanSquid/LoveBox.git
```

### 2. Navigate to LoveBox Directory:

Navigate to the project directory:

```bash
cd LoveBox
```

### 3. Build the image:

To build the image, run the following command in your terminal:

```bash
docker build -t lovebox .
```

### 5. Start the container:

Once you have finished building the image, run the following command to start the container:

```bash
docker run -d -p 3005:3005 lovebox
```

### 6. Open in Browser:

Once the server is running, open your browser and visit the following URL:

```
http://localhost:3005
```

### File Structure:

```
/public
    /index.html   # Main HTML file with the structure and content.
    /style.css    # CSS file for styling the LoveBox UI.
    /app.js       # JavaScript file with app logic for box interaction.
Dockerfile        # Defines instructions to containerize the app.
README.md         # This file with app instructions.
package-lock.json # Auto-generated file that locks the dependencies.
package.json      # Lists project dependencies and scripts.
server.js         # Server file to run the backend (Express server).
```

### License:

This project is open-source and free to use. Please feel free to modify it as needed.

