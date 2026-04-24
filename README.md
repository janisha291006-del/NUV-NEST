#  NUV-NEST

NUV-NEST is a smart campus canteen and student utility platform designed to simplify food ordering, campus navigation, and student interaction through an integrated chatbot system.

---

##  Features

*  **Canteen Menu System**

  * Browse food items with images
  * Categorized menu (snacks, meals, beverages)

*  **Chatbot Integration**

  * Assists users with queries
  * Enhances user interaction

*  **Campus Dashboard**

  * Centralized interface for students
  * Easy navigation between modules

*  **Attendance Section**

  * Placeholder for tracking academic attendance

*  **Responsive UI**

  * Clean and user-friendly design

---

##  Tech Stack

* **Backend:** Flask (Python)
* **Frontend:** HTML, CSS, JavaScript
* **Database:** SQLite
* **Other Tools:** Jinja Templates

---

##  Project Structure

```
NUV-NEST/
│
├── app.py
├── requirements.txt
├── instance/
│   └── nuv_nest.db
├── static/
│   ├── css/
│   ├── js/
│   └── images/
├── templates/
│   ├── dashboard.html
│   ├── canteen.html
│   ├── chatbot.html
│   └── ...
└── food_images/
```

---

##  Installation & Setup

1. Clone the repository:

```
git clone https://github.com/janisha291006-del/NUV-NEST.git
cd NUV-NEST
```

2. Create virtual environment (optional but recommended):

```
python -m venv venv
venv\Scripts\activate
```

3. Install dependencies:

```
pip install -r requirements.txt
```

4. Run the application:

```
python app.py
```

5. Open in browser:

```
http://127.0.0.1:5000/
```


##  Future Improvements

* User authentication system
* Online ordering & payment integration
* Admin panel for canteen management
* Real-time order tracking
* Deployment (Heroku / Render)


##  License

This project is open-source and available for educational purposes.
