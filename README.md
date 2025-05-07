# 🔢 React Counter App

A simple and interactive Counter App built using **React**. This app lets users increment or decrement a number displayed on the screen. It starts from zero and allows the count to go both positive and negative.

---

## 🚀 Features

- ✅ Starts with count `0`
- ✅ "Increment" button increases the count by 1
- ✅ "Decrement" button decreases the count by 1
- ✅ Count can go into negative numbers
- ✅ Displays updated count in real-time
- ✅ Fully compatible with test case requirements (button names and display format)

---

## 🧠 Application Requirements

You are required to build a counter app in React that meets the following conditions:

- On **initial render**, it must display:  

Count: 0


- There must be exactly two buttons:
- `Increment`
- `Decrement`

- When clicking **Increment**, the count must increase by 1.
- When clicking **Decrement**, the count must decrease by 1.

### Example Scenarios

1. ✅ **Initial Render**  

Count: 0


2. ✅ **After clicking Increment 3 times**  

Count: 3


3. ✅ **After clicking Decrement 2 times from 3**  

Count: 1


4. ✅ **After clicking Decrement 3 times from 0**  

Count: -3

---

## 💡 Component Breakdown

### `App.js`

- Uses React’s `useState` to manage the count.
- Has a `changeHandler` that accepts an operator (`+` or `-`) and updates the state using `eval`.
- Renders:
- Title (`Counter App`)
- Count display in format `Count: value`
- Buttons labeled `Increment` and `Decrement`

---

## 🖥️ Screenshot (Initial Render)
![XCounter - Initial Render](public/screenshot.png)

## 🖥️ Screenshot (After Clicking Increment 3 Times)
![XCounter - Increment](public/screenshot.png)

## 🖥️ Screenshot (After Clicking Decrement 3 Times)
![XCounter - Decrement](public/screenshot.png)

## 🖥️ Screenshot (After Clicking Decrement 3 Times Again, allows count to be negative)
![XCounter - Allow Negative](public/screenshot.png)

## 📁 Folder Structure

```
XCounter/
├── src/
│   ├── App.js        # Main React component with counter logic
│   ├── main.jsx      # Entry point
│   └── index.css     # Optional styles
├── public/
│   └── index.html    # HTML template
├── package.json      # Project metadata and dependencies
└── README.md         # This file

```
## 🛠️ Getting Started

To run the app locally:

```bash
# Clone the repo
git clone https://github.com/Siddharth-Bose/XCounter
cd counter-app

# Install dependencies
npm install

# Run the development server
npm run dev

# Visit
http://localhost:5173