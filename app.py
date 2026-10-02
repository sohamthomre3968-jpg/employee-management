from flask import Flask, app, render_template, request, redirect, url_for
import mysql.connector
import os

app = Flask(__name__)
# db = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password=,
#     database="Employee"

def get_db_connection(): 
    return mysql.connector.connect(
    host=os.getenv("MYSQLHOST"),
    port=int(os.getenv("MYSQLPORT", 3306)),
    user=os.getenv("MYSQLUSER"),
    password=os.getenv("MYSQLPASSWORD"),
    database=os.getenv("MYSQL_DATABASE")
)

@app.route("/")
def home():
    
     db = get_db_connection()
     cursor = db.cursor()

     cursor.execute("SELECT COUNT(*) FROM EMP")
     total_employees = cursor.fetchone()[0]

     cursor.execute("SELECT COUNT(DISTINCT Department) FROM EMP")
     total_departments = cursor.fetchone()[0]


     cursor.execute("""
         SELECT id, emp_name, Department
         FROM EMP
         ORDER BY id DESC
         LIMIT 5
     """)

     recent_employees = cursor.fetchall()

     cursor.close()
     return render_template(
         "home.html",
         total_employees=total_employees,
         total_departments=total_departments,
         recent_employees=recent_employees
    )

@app.route("/register", 
 methods=['GET', 'POST'])
def register():
    if request.method == "GET":
        return render_template("registration.html")
    name = request.form["name"]
    email = request.form["email"]
    dob = request.form["dob"]
    mobile = request.form["mobile"]
    gender = request.form["gender"]
    address = request.form["address"]
    state = request.form["state"]
    city = request.form["city"]
    pincode = request.form["pincode"]
    dept = request.form["department"]
    designation = request.form["designation"]
    DoJ = request.form["date_of_joining"]
    emp_type = request.form["employee_type"]

    db = get_db_connection()
    cursor = db.cursor()

    query = """
    INSERT INTO EMP(emp_name,email,mobile_number,DOB,gender,address,state,city,pincode,designation,employee_type,DOJ,Department)
    VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """
    cursor.execute(query,(name,email,mobile,dob,gender,address,state,city,pincode,designation,emp_type,DoJ,dept))
    db.commit()

    db.commit()
    return render_template("registration.html",
    message="Employee Added Successfully!")

@app.route("/employee")
def employee():
     db = get_db_connection()
     cursor  = db.cursor()

     cursor.execute("SELECT id,emp_name,Department FROM EMP")

     employees = cursor.fetchall()

     cursor.close()

     return render_template("employee.html", employees=employees)
 
@app.route('/training', methods=['GET', 'POST'])
def training():
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute("""
        SELECT ID, emp_Name, Department, designation
        FROM EMP
        ORDER BY emp_Name
    """)
    employees = cursor.fetchall()
    cursor.execute("""
        SELECT
            t.training_id,
            t.employee_id,
            e.emp_Name AS employee_name,
            e.Department AS department,
            e.designation AS designation,
            t.course_name,
            t.trainer,
            t.start_date,
            t.end_date,
            t.status
        FROM TRAINING t
        JOIN EMP e ON t.employee_id = e.ID
        ORDER BY t.start_date DESC
    """)
    records = cursor.fetchall()

    return render_template(
        "training.html",
        employees=employees,
        records=records
    )
@app.route('/add-training', methods=['POST'])
def add_training():

    db = get_db_connection()
    cursor = db.cursor()

    employee_id = request.form['employee_id']
    course_name = request.form['course_name']
    trainer = request.form['trainer']
    start_date = request.form['start_date']
    end_date = request.form['end_date']

    cursor.execute("""
        INSERT INTO TRAINING
        (employee_id, course_name, trainer, start_date, end_date)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        employee_id,
        course_name,
        trainer,
        start_date,
        end_date
    ))

    db.commit()

    cursor.close()
    db.close()

    return redirect(url_for('training'))
if __name__ == "__main__":
    app.run(debug=True)