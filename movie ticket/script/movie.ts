let UserIdAutoIncrement = 1001;
let MovieTicketNumber=100;


class User{

    UserId: string;
    UserName: string;
    UserAge: number;
    UserPhoneNumber: number;

    constructor(newUserName: string, newUserAge: number, newUserPhoneNumber: number) {

        UserIdAutoIncrement++;

        this.UserId = "M" + UserIdAutoIncrement.toString();

        this.UserName = newUserName;
        this.UserAge = newUserAge;
        this.UserPhoneNumber = newUserPhoneNumber;
    }
}
class MovieTicket{

    TicketNO: string;
    MovieName: string;
    TicketAmount: number;
    TicketUserId: string;

    constructor(newmovieName: string, newticketamount: number, ) {

        MovieTicketNumber++;

        this.TicketNO =  MovieTicketNumber.toString();

        this.MovieName = newmovieName;
        this.TicketAmount = newticketamount;
        
    }
}



function usernew(){
    let homePage = (document.getElementById("main div") as HTMLDivElement);
    let mainUserPage = (document.getElementById("mainname") as HTMLDivElement);
    homePage.style.display ="none";
    mainUserPage.style.display="block";

    
}
function loginpage(){
    let homePage = (document.getElementById("main div") as HTMLDivElement);
    let loginPage = (document.getElementById("logindiv") as HTMLDivElement);
    homePage.style.display="none";
    loginPage.style.display="block";

}
function loginbook(){
    let loginPage = (document.getElementById("logindiv") as HTMLDivElement);
    let loginbook = (document.getElementById("loginin") as HTMLDivElement);
    loginPage.style.display="none";
    loginbook.style.display="block";

}
function bookseat(){
    let loginbook = (document.getElementById("loginin") as HTMLDivElement);
    let loginconfirm = (document.getElementById("movielist") as HTMLDivElement);
    loginbook.style.display="none";
    loginconfirm.style.display="block";

}
function seatconfirm(){
    alert("seat booked");
}
























































