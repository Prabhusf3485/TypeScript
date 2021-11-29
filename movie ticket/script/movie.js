var UserIdAutoIncrement = 1001;
var MovieTicketNumber = 100;
var User = /** @class */ (function () {
    function User(newUserName, newUserAge, newUserPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "M" + UserIdAutoIncrement.toString();
        this.UserName = newUserName;
        this.UserAge = newUserAge;
        this.UserPhoneNumber = newUserPhoneNumber;
    }
    return User;
}());
var MovieTicket = /** @class */ (function () {
    function MovieTicket(newmovieName, newticketamount) {
        MovieTicketNumber++;
        this.TicketNO = MovieTicketNumber.toString();
        this.MovieName = newmovieName;
        this.TicketAmount = newticketamount;
    }
    return MovieTicket;
}());
function usernew() {
    var homePage = document.getElementById("main div");
    var mainUserPage = document.getElementById("mainname");
    homePage.style.display = "none";
    mainUserPage.style.display = "block";
}
function loginpage() {
    var homePage = document.getElementById("main div");
    var loginPage = document.getElementById("logindiv");
    homePage.style.display = "none";
    loginPage.style.display = "block";
}
function loginbook() {
    var loginPage = document.getElementById("logindiv");
    var loginbook = document.getElementById("loginin");
    loginPage.style.display = "none";
    loginbook.style.display = "block";
}
function bookseat() {
    var loginbook = document.getElementById("loginin");
    var loginconfirm = document.getElementById("movielist");
    loginbook.style.display = "none";
    loginconfirm.style.display = "block";
}
function seatconfirm() {
    alert("seat booked");
}
