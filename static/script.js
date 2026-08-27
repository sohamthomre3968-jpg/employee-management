document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // STATE → CITY DATA
    // =====================================================

    const stateCity = {

        "Andhra Pradesh": [
            "Visakhapatnam",
            "Vijayawada",
            "Guntur",
            "Nellore",
            "Tirupati",
            "Kurnool"
        ],

        "Arunachal Pradesh": [
            "Itanagar",
            "Tawang",
            "Naharlagun",
            "Pasighat"
        ],

        "Assam": [
            "Guwahati",
            "Dibrugarh",
            "Silchar",
            "Jorhat",
            "Tezpur"
        ],

        "Bihar": [
            "Patna",
            "Gaya",
            "Muzaffarpur",
            "Bhagalpur",
            "Darbhanga"
        ],

        "Chhattisgarh": [
            "Raipur",
            "Bhilai",
            "Bilaspur",
            "Korba",
            "Durg"
        ],

        "Goa": [
            "Panaji",
            "Margao",
            "Vasco da Gama",
            "Mapusa"
        ],

        "Gujarat": [
            "Ahmedabad",
            "Surat",
            "Vadodara",
            "Rajkot",
            "Bhavnagar",
            "Jamnagar",
            "Gandhinagar",
            "Junagadh",
            "Anand",
            "Bharuch"
        ],

        "Haryana": [
            "Gurugram",
            "Faridabad",
            "Panipat",
            "Ambala",
            "Hisar",
            "Rohtak",
            "Karnal"
        ],

        "Himachal Pradesh": [
            "Shimla",
            "Manali",
            "Dharamshala",
            "Solan",
            "Mandi",
            "Kullu"
        ],

        "Jharkhand": [
            "Ranchi",
            "Jamshedpur",
            "Dhanbad",
            "Bokaro",
            "Deoghar"
        ],

        "Karnataka": [
            "Bengaluru",
            "Mysuru",
            "Mangaluru",
            "Hubballi",
            "Belagavi",
            "Dharwad",
            "Shivamogga",
            "Tumakuru"
        ],

        "Kerala": [
            "Thiruvananthapuram",
            "Kochi",
            "Kozhikode",
            "Kollam",
            "Thrissur",
            "Kannur"
        ],

        "Madhya Pradesh": [
            "Bhopal",
            "Indore",
            "Gwalior",
            "Jabalpur",
            "Ujjain",
            "Sagar",
            "Satna",
            "Dewas"
        ],

        "Maharashtra": [
            "Mumbai",
            "Pune",
            "Nagpur",
            "Nashik",
            "Thane",
            "Kolhapur",
            "Solapur",
            "Sangli",
            "Satara",
            "Amravati",
            "Nanded",
            "Aurangabad"
        ],

        "Manipur": [
            "Imphal",
            "Thoubal",
            "Churachandpur"
        ],

        "Meghalaya": [
            "Shillong",
            "Tura",
            "Jowai"
        ],

        "Mizoram": [
            "Aizawl",
            "Lunglei",
            "Champhai"
        ],

        "Nagaland": [
            "Kohima",
            "Dimapur",
            "Mokokchung"
        ],

        "Odisha": [
            "Bhubaneswar",
            "Cuttack",
            "Rourkela",
            "Puri",
            "Sambalpur"
        ],

        "Punjab": [
            "Amritsar",
            "Ludhiana",
            "Jalandhar",
            "Patiala",
            "Bathinda"
        ],

        "Rajasthan": [
            "Jaipur",
            "Jodhpur",
            "Udaipur",
            "Kota",
            "Ajmer",
            "Bikaner",
            "Alwar",
            "Bharatpur",
            "Sikar"
        ],

        "Sikkim": [
            "Gangtok",
            "Namchi",
            "Gyalshing"
        ],

        "Tamil Nadu": [
            "Chennai",
            "Coimbatore",
            "Madurai",
            "Salem",
            "Tiruchirappalli",
            "Tirunelveli",
            "Vellore"
        ],

        "Telangana": [
            "Hyderabad",
            "Warangal",
            "Nizamabad",
            "Karimnagar",
            "Khammam"
        ],

        "Tripura": [
            "Agartala",
            "Udaipur",
            "Dharmanagar"
        ],

        "Uttar Pradesh": [
            "Lucknow",
            "Kanpur",
            "Agra",
            "Varanasi",
            "Prayagraj",
            "Meerut",
            "Noida",
            "Ghaziabad",
            "Bareilly",
            "Gorakhpur"
        ],

        "Uttarakhand": [
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Rishikesh",
            "Haldwani",
            "Roorkee"
        ],

        "West Bengal": [
            "Kolkata",
            "Howrah",
            "Durgapur",
            "Siliguri",
            "Asansol"
        ]
    };


    // =====================================================
    // STATE → CITY DROPDOWN
    // =====================================================

    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");


    // Check whether state and city dropdown exist
    // This prevents errors on employee.html
    if (stateSelect && citySelect) {

        stateSelect.addEventListener("change", function () {

            // Remove old cities
            citySelect.innerHTML =
                '<option value="">Select Your City</option>';

            const selectedState = stateSelect.value;

            // If no state selected
            if (selectedState === "") {
                return;
            }

            // Get cities of selected state
            const cities = stateCity[selectedState] || [];


            // Add cities to dropdown
            cities.forEach(function (city) {

                const option = document.createElement("option");

                option.value = city;
                option.textContent = city;

                citySelect.appendChild(option);
            });

        });
    }


    // =====================================================
    // FORM VALIDATION
    // =====================================================

    const form = document.getElementById("registrationForm");


    // Only run this on registration page
    if (form) {

        form.addEventListener("submit", function (event) {

            // Get values
            const name =
                document.querySelector('[name="name"]').value.trim();

            const dob =
                document.querySelector('[name="dob"]').value;

            const email =
                document.querySelector('[name="email"]').value.trim();

            const mobile =
                document.querySelector('[name="mobile"]').value.trim();

            const gender =
                document.querySelector('[name="gender"]').value;

            const address =
                document.querySelector('[name="address"]').value.trim();

            const state =
                document.querySelector('[name="state"]').value;

            const city =
                document.querySelector('[name="city"]').value;

            const pincode =
                document.querySelector('[name="pincode"]').value.trim();

            const department =
                document.querySelector('[name="department"]').value;

            const designation =
                document.querySelector('[name="designation"]').value.trim();

            const joiningDate =
                document.querySelector('[name="date_of_joining"]').value;

            const employeeType =
                document.querySelector('[name="employee_type"]').value;


            // =================================================
            // NAME
            // =================================================

            if (name === "") {
                alert("Please enter employee name.");
                event.preventDefault();
                return;
            }


            if (!/^[A-Za-z ]+$/.test(name)) {
                alert("Name should contain only letters.");
                event.preventDefault();
                return;
            }


            // =================================================
            // DATE OF BIRTH
            // =================================================

            if (dob === "") {
                alert("Please select Date of Birth.");
                event.preventDefault();
                return;
            }


            // =================================================
            // EMAIL
            // =================================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                alert("Please enter email.");
                event.preventDefault();
                return;
            }


            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }


            // =================================================
            // MOBILE
            // =================================================

            const mobilePattern =
                /^[6-9][0-9]{9}$/;

            if (mobile === "") {
                alert("Please enter mobile number.");
                event.preventDefault();
                return;
            }


            if (!mobilePattern.test(mobile)) {
                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                event.preventDefault();
                return;
            }


            // =================================================
            // GENDER
            // =================================================

            if (gender === "") {
                alert("Please select gender.");
                event.preventDefault();
                return;
            }


            // =================================================
            // ADDRESS
            // =================================================

            if (address === "") {
                alert("Please enter address.");
                event.preventDefault();
                return;
            }


            // =================================================
            // STATE
            // =================================================

            if (state === "") {
                alert("Please select state.");
                event.preventDefault();
                return;
            }


            // =================================================
            // CITY
            // =================================================

            if (city === "") {
                alert("Please select city.");
                event.preventDefault();
                return;
            }


            // =================================================
            // PINCODE
            // =================================================

            const pincodePattern =
                /^[0-9]{6}$/;

            if (pincode === "") {
                alert("Please enter pincode.");
                event.preventDefault();
                return;
            }


            if (!pincodePattern.test(pincode)) {
                alert("Pincode must contain exactly 6 digits.");
                event.preventDefault();
                return;
            }


            // =================================================
            // DEPARTMENT
            // =================================================

            if (department === "") {
                alert("Please select department.");
                event.preventDefault();
                return;
            }


            // =================================================
            // DESIGNATION
            // =================================================

            if (designation === "") {
                alert("Please enter designation.");
                event.preventDefault();
                return;
            }


            // =================================================
            // DATE OF JOINING
            // =================================================

            if (joiningDate === "") {
                alert("Please select Date of Joining.");
                event.preventDefault();
                return;
            }


            // =================================================
            // EMPLOYEE TYPE
            // =================================================

            if (employeeType === "") {
                alert("Please select Employee Type.");
                event.preventDefault();
                return;
            }


            // =================================================
            // FINAL CONFIRMATION
            // =================================================

            const confirmation = confirm(
                "Are you sure you want to register this employee?"
            );


            if (!confirmation) {

                event.preventDefault();

                return;
            }


            // If everything is valid
            alert("Employee registration submitted successfully!");


        });
    }

});