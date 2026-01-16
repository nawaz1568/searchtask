 React Native Post Search App

This project was developed as part of the **React Native Intern – Combined Assessment**.  
The application fetches posts from a public API, supports real-time search, and persists search history using AsyncStorage.

---

## 📌 Objective

- Fetch and display posts from an API
- Provide instant search functionality
- Persist search input across app restarts
- Handle error and empty states gracefully

---

## 🚀 Features

### Mandatory Requirements
- Fetch posts from:
  https://jsonplaceholder.typicode.com/posts
- Display post **title** and **body** using `FlatList`
- Real-time search filtering by title (case-insensitive)
- Save search input using `AsyncStorage`
- Restore saved search on app restart and auto-apply filtering
- Error handling for:
  - Network / API failure
  - Empty search results

### Bonus Features
- Loading indicator while fetching posts
- Pull-to-refresh support
- Reusable `PostCard` component
- Clean and modular folder structure

---

## 🎥 Demo Video

Application walkthrough:  
https://drive.google.com/file/d/1JDo8LTNMvk0jc-nc6n1z8aElPZboKrvE/view

---

## 🧰 Tech Stack

- React Native (CLI)
- JavaScript / TypeScript
- AsyncStorage
- Fetch API
