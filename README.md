# Wanderlust 

A full-stack web application that lets travellers **discover, list and review unique stays** around the globe.  
Built with Node.js, Express, EJS and Bootstrap 5, the app focuses on responsive design and smooth mobile navigation.

---

To access the application, please use the following credentials:
## Application URL
(https://wanderlust-tolp.onrender.com/listings)

- username: mani
- password: mani123

---

## ✨ Features

- Browse thousands of listings with country-based search
- Secure authentication & authorisation (Passport JS / bcrypt)
- Owners can create, edit and delete their own stays
- Interactive Mapbox map on every listing page
- Star-based rating & comments system
- Fully responsive UI (tested on Firefox & Chrome, mobile + desktop) 
- Image uploads to Cloudinary
- Flash messages for instant feedback

---
## 🗺️ Tech stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** EJS templates, Bootstrap 5, custom SCSS
- **Auth:** Passport-local, bcrypt, express-session
- **Maps:** Mapbox GL JS
- **Images:** Cloudinary
- **Testing / Linting:** ESLint, Prettier, Firefox DevTools, Chrome DevTools

---

## 🏃‍♂️ Quick start

1. Clone and install
    ```bash
    git clone https://github.com/<your-user>/wanderlust.git
    cd wanderlust
    npm install
    ```

4. Run the dev server
    ```bash
    nodemon app.js
    ```

Visit `http://localhost:3000` in your  browser .

---

## 🔧 Configuration

| Variable          | Purpose                                  |
|-------------------|------------------------------------------|
| `DB_URL`          | MongoDB connection string                |
| `MAP_TOKEN`       | Mapbox public access token               |
| `CLOUDINARY_*`    | Three Cloudinary keys (name, key, secret)|
| `SECRET`          | Session / cookie secret                  |

Create an `.env` file and add the variables above.  
A sample file (`.env.example`) is included.

## 🗃️ Database Setup

Follow these steps to set up your MongoDB database:

1. **Create a MongoDB Account:**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. **Create a New Cluster:**
   - Select **"Build a Cluster"** and choose the free tier (M0) to get started.

3. **Create a Database User:**
   - In **Database Access**, click **"Add New Database User"**.
   - Set a username and password, and save the credentials for future use.

4. **Set Network Access:**
   - In **Network Access**, allow access from your current IP address or all IP addresses (`0.0.0.0/0`) for testing.

5. **Get Your Connection String:**
   - In the **Clusters** section, click **"Connect"** and choose **"Connect your application"**.
   - Copy the provided connection string and replace `<username>`, `<password>`, and `<dbname>` in your `.env`.


---



## Contributing

If you would like to contribute to the project, feel free to submit a pull request or reach out to discuss potential improvements. Please follow the standard GitHub fork, branch, and pull request workflow.

---


