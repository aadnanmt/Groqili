# Portofio Website

![Portfolio Preview](image/webport.png)

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-Flask-black?style=for-the-badge&logo=flask" alt="Flask">
  <img src="https://img.shields.io/badge/Frontend-HTML%20%2F%20CSS%20%2F%20JS-blue?style=for-the-badge" alt="Frontend">
  <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

## Overview

This repository contains the source code for my personal portfolio website. It is designed to showcase my projects, skills, and experience as a **Web Developer** and **Prompt Designer**.

The site is built with a focus on performance, interactivity, and a modern "Cyberpunk/Glassmorphism" aesthetic. It features a bilingual system (Indonesian/English) managed via JSON.

**Live Demo:** [https://www.aadnanmt.web.id](https://www.aadnanmt.web.id)

## Key Features

- **Lightweight Backend:** Powered by Python **Flask**.
- **Multi-Language Support:** Dynamic switching between Indonesian and English using `static/lang/language.json`.
- **Interactive UI:** Custom Particle System implementation on HTML5 Canvas (`main.js`).
- **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile.
- **Security:** Implemented basic security headers via `flask-talisman` (commented out in dev, ready for prod).
- **Vercel Ready:** Configured for serverless deployment via `vercel.json`.

## Tech Stack

- **Backend:** Python 3.x, Flask
- **Frontend:** HTML5, CSS3, JavaScript
- **Assets:** FontAwesome 6, Google Fonts (Space Grotesk, Syncopate, JetBrains Mono)
- **Deployment:** Vercel Serverless

## Project Structure

```/
├── api/
│   └── app.py                  # Application entry point
├── static/
│   ├── css/
│   │   └── main.css            # Stylesheet
│   ├── img/
│   │   └── me.jpg              # Profile image
│   ├── js/
│   │   └── main.js             # Frontend logic
│   ├── lang/
│   │   └── language.json       # JSON file for English/Indonesian translations
│   ├── svg/
│   │   └── iconan.svg          # SVG Icon
│   └── note.txt                # Secret text file with credits and notes
├── templates/
│   └── main.html               # HTML template for the single-page site
├── LICENSE                     # MIT License file
├── README.md                   # Project documentation
├── requirements.txt            # Python dependencies (Flask, talisman, etc)
└── vercel.json                 # Vercel deployment configuration
```

## Installation & Local Development

1.  **Clone the repository**

    ```bash
    git clone https://github.com/aadnanmt/Groqili
    cd Groqili
    ```

2.  **Install package & dependencies for Groqili Project**
    ```bash
    npm install
    ```
3.  **Run the build command (OPTIONAl):**

    ```bash
    npm run build
    ```

4.  **Run the Application**

    ```bash
    npm run dev
    ```

5.  **Access the site**
    Open your browser and go to [http://localhost:5173/](http://localhost:5173/)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Contact

- **Name:** Adnan Slamet Wibowo
- **Role:** Web Developer & Prompt Designer
- **Email:** aadnanmtcontact@gmail.com
- **LinkedIn:** [Adnan Slamet Wibowo](https://linkedin.com/in/adnan-slamet-wibowo-73906035b)

---

<p align="center">Made Adnan with ☕ in Indonesia</p>
