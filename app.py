from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def dashboard():
    return render_template("dashboard.html", active="dashboard")

@app.route("/canteen")
def canteen():
    return render_template("canteen.html", active="canteen")

@app.route("/campus")
def campus():
    return render_template("campus.html", active="campus")

@app.route("/attendance")
def attendance():
    return render_template("attendance.html", active="attendance")

@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html", active="chatbot")



@app.route("/about")
def about():
    return render_template("about.html", active="about")

@app.route("/contact")
def contact():
    return render_template("contact.html", active="contact")



if __name__ == "__main__":
    app.run(debug=True)