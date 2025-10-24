<div align="center">
  <br />
  <a href="https://github.com/Itssanthoshhere/ChatApp" target="_blank">
    <img src="chatapp/assets/thumbnail.png" alt="Project Banner" />
  </a>
  <br /><br />
  <!-- Frontend Tech Stack -->
  <div>
    <img src="https://img.shields.io/badge/-React%20Native-61DBFB?style=for-the-badge&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Expo-000020?style=for-the-badge&logo=expo&logoColor=white"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/-NativeWind-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  </div>
  <!-- Backend Tech Stack -->
  <div>
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
    <img src="https://img.shields.io/badge/-MongoDB-00A35C?style=for-the-badge&logo=mongodb&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Axios-000000?style=for-the-badge&logo=axios&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Multer-000000?style=for-the-badge&logoColor=white"/>
  </div>
  <!-- <br /> -->
  <h3>💬 ChatApp – Real-Time Messaging with Expo & Node.js</h3>
  <b>Full-stack real-time chat application</b> built with <b>React Native (Expo)</b> and <b>Node.js + Express + MongoDB</b>.<br/>
  Features seamless authentication, user setup, and real-time conversations powered by <b>Socket.IO</b>.
  <br/>
  <i>Designed for seamless and scalable real-time communication.</i>
  <br /><br />
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Preview-brightgreen?style=for-the-badge&logo=expo&logoColor=white" alt="Live Demo" />
  </a>
</div>

---

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
    - [💻 Backend](#-backend)
    - [📱 Frontend (Expo)](#-frontend-expo)
- [🔋 Core Features](#-core-features)
  - [⚙️ Backend](#️-backend)
  - [📱 Frontend (Expo)](#-frontend-expo-1)
- [🤸 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [1️⃣ Clone Repository](#1️⃣-clone-repository)
  - [2️⃣ Setup Backend](#2️⃣-setup-backend)
  - [3️⃣ Setup Frontend (Expo)](#3️⃣-setup-frontend-expo)
- [🧱 Project Structure](#-project-structure)
  - [🖥️ Backend](#️-backend-1)
  - [📱 Frontend (Expo)](#-frontend-expo-2)
- [📱 App Flow](#-app-flow)
- [🧠 Architecture Overview](#-architecture-overview)
    - [**Backend (Server)**](#backend-server)
    - [**Frontend (Mobile App)**](#frontend-mobile-app)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contribution](#-contribution)
- [🔗 Contacts](#-contacts)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)
    - [⭐ Show Your Support](#-show-your-support)

---

## ✨ Introduction

**ChatApp** is a **WhatsApp-style full-stack real-time messaging application** designed to deliver seamless communication experiences.

Users can:

- Sign up and set up their profile with an image
- Verify their phone number via OTP
- View conversations with unread badges
- Send and receive real-time messages via **Socket.IO**
- Enjoy a smooth UI built with **NativeWind (Tailwind for React Native)**

**Project Layers:**

- **Frontend (Expo)** – Handles UI, navigation, and interactions
- **Backend (Express + MongoDB)** – Manages APIs, database, and real-time socket connections

---

## ⚙️ Tech Stack

#### 💻 Backend

- **Node.js** – JavaScript runtime for backend
- **Express.js** – Web framework for building REST APIs
- **MongoDB + Mongoose** – NoSQL database for storing users, conversations, and messages
- **Socket.IO** – Enables real-time communication between users
- **Multer** – Handles image uploads for profile pictures
- **dotenv** – Manages environment variables
- **Nodemon** – Development server auto-restart

#### 📱 Frontend (Expo)

- **React Native + Expo Router** – For building cross-platform mobile apps
- **NativeWind (Tailwind CSS)** – For fast, responsive UI styling
- **AsyncStorage** – For local data persistence (like login sessions)
- **Zustand (State Management)** – Lightweight global state handling
- **TypeScript** – For type safety and scalability
- **Socket.IO Client** – For live chat integration
- **Axios** – API communication layer
- **Expo ImagePicker** – Image uploads during profile setup

---

## 🔋 Core Features

### ⚙️ Backend

- RESTful APIs for user and chat management
- **User Authentication** (Create, Update, Fetch User)
- **Profile Image Uploads** – Secure file uploads using Multer
- **Conversation Management** – Fetch all conversations for a user
- **Real-Time Messaging** – Handle instant message delivery and unread tracking via Socket.IO
- **Unread Message Count & Last Message Tracking**
- **Scalable Modular Design** – Routes, models, and socket logic separated cleanly

### 📱 Frontend (Expo)

- **Welcome Screen UI** – Clean entry point for users
- **Login Screen** – Input phone number with validation
- **OTP Verification (Simulated)** – Mock flow for phone-based authentication
- **Account Setup Screen** – Add profile name & image
- **AsyncStorage Integration** – Store user sessions locally
- **Tab Layout (Chats & Updates)** – Custom bottom tab with icons, titles, and badges
- **Chats Screen UI** – Search bar, category filters (All, Personal, Business), FlatList of conversations
- **Real-Time Updates** – Auto-refresh chats and message previews

---

## 🤸 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Itssanthoshhere/ChatApp.git
cd ChatApp
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```bash
npm run server
```

### 3️⃣ Setup Frontend (Expo)

```bash
cd chatapp
npm install
```

Start Expo:

```bash
npx expo start
```

Then scan the QR code with your mobile Expo Go app (available on iOS/Android).

---

## 🧱 Project Structure

### 🖥️ Backend

```
backend/
├── models/
│   ├── User.js
│   ├── Conversation.js
│   └── Message.js
├── routes/
│   ├── userRoutes.js
│   └── conversationRoutes.js
├── server.js
├── socket.js
└── uploads/
```

### 📱 Frontend (Expo)

```
chatapp/
├── app/
│   ├── (tabs)/_layout.tsx
│   ├── (tabs)/chats.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── otp.tsx
│   └── account-setup.tsx
├── components/
├── utils/
├── constants/
└── tailwind.config.js
```

---

## 📱 App Flow

1. **Welcome Screen** → Choose login
2. **Login Screen** → Enter phone number
3. **OTP Screen** → Verify number
4. **Account Setup** → Add name & profile picture
5. **Chats Screen** → View conversations
6. **Chat Window** → Send & receive messages

---

## 🧠 Architecture Overview

#### **Backend (Server)**

A REST API built using **Express.js**, connected to a **MongoDB** database with **Mongoose** ODM.
Handles:

- User creation and updates
- Conversation retrieval
- Real-time message delivery using **Socket.IO**

#### **Frontend (Mobile App)**

A **React Native** application built with **Expo**, responsible for:

- UI & navigation
- Authentication (phone-based mock)
- Profile setup and local storage
- Future integration of real-time messages

---

## 🚀 Future Enhancements

- ✅ Integrate **Socket.IO frontend** for real-time messaging
- 🔒 Implement **JWT-based authentication**
- 📬 Add **push notifications** for new messages
- 🧑‍🤝‍🧑 Introduce **group chats and media sharing**
- 📱 Enhance **chat UI and user presence indicators**
- 🧰 Migrate OTP verification to **Firebase Auth or Twilio**

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

   ```bash
   git checkout -b feature/my-feature
   ```

3. Commit your changes

   ```bash
   git commit -m "feat: add my feature"
   ```

4. Push and open a pull request

---

## 🔗 Contacts

- **GitHub:** [Itssanthoshhere](https://github.com/Itssanthoshhere)
- **LinkedIn:** [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

## 📄 License

For **educational and portfolio purposes only**.
All images, logos, and assets belong to their respective owners.

---

## 🙏 Acknowledgements

- [React Native](https://reactnative.dev/) – Framework for mobile apps
- [Expo](https://expo.dev/) – Streamlined development & deployment
- [TailwindCSS](https://tailwindcss.com/) – Utility-first styling
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) – RESTful backend
- [Socket.IO](https://socket.io/) – Real-time bidirectional event-based communication
- [MongoDB](https://www.mongodb.com/) – Database for user & chat data

---

#### ⭐ Show Your Support

If you like this project, **give it a ⭐** on GitHub!

---
