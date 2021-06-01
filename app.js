let html = "<br><h3>Hello</h3>";
let button = document.querySelector(".check_button");
button.addEventListener("click", () => {
  let type = "Downpayment";
  Downpayment(type);
});
function Downpayment(type) {
  let name = document.getElementById("Name").value;
  let Sprice = document.getElementById("Showroom_Price").value;
  let DP_Percentage = document.getElementById("DP_Percentage").value;
  let downpayment_result = (Sprice * DP_Percentage) / 100;
  document.getElementById("display").innerHTML =
    "Hi<span> " +
    name +
    " </span><br>" +
    type +
    "  is <span> " +
    downpayment_result +
    " </span> / -";
}
function Balance(type) {
  let name = document.getElementById("Name").value;
  let Sprice = document.getElementById("Showroom_Price").value;
  let Downpayment = document.getElementById("DP_Percentage").value;
  let balance_result = Sprice - Downpayment;
  document.getElementById("display").innerHTML =
    "Hi<span> " +
    name +
    " </span><br>" +
    type +
    "  is <span> " +
    balance_result +
    " </span> / -";
}
function InterestAmount(type) {
  let name = document.getElementById("Name").value;
  let Balance = document.getElementById("Showroom_Price").value;
  let rateOfInterest = document.getElementById("DP_Percentage").value;
  let InterestAmount_result = (Balance * rateOfInterest) / 100;
  document.getElementById("display").innerHTML =
    "Hi<span> " +
    name +
    " </span><br>" +
    type +
    "  is <span> " +
    InterestAmount_result +
    " </span> / -";
}
function TotalFinanceAmount(type) {
  let name = document.getElementById("Name").value;
  let Balance = document.getElementById("Showroom_Price").value;
  let InterestAmount = document.getElementById("DP_Percentage").value;
  let TotalFinanceAmount_result =
    parseFloat(Balance) + parseFloat(InterestAmount);
  document.getElementById("display").innerHTML =
    "Hi<span> " +
    name +
    " </span><br>" +
    type +
    "  is <span> " +
    TotalFinanceAmount_result +
    " </span> / -";
}
function EMI(type) {
  let name = document.getElementById("Name").value;
  let Balance = document.getElementById("Showroom_Price").value;
  let InterestAmount = document.getElementById("DP_Percentage").value;
  let EMI_result =Balance/InterestAmount;    
  document.getElementById("display").innerHTML =
    "Hi<span> " +
    name +
    " </span><br>" +
    type +
    "  is <span> " +
    EMI_result +
    " </span> / -";
}
function SelectMenu() {
  let Menu_value = document.getElementById("Menu_list").value;
  if (Menu_value == "Downpayment") {
    document.getElementById("Showroom_Price").placeholder =
      "Enter Showroom Price";
    document.getElementById("DP_Percentage").placeholder = "Enter Balance";
    button.addEventListener("click", () => {
      console.log("Hello");
      let type = "Downpayment";
      Downpayment(type);
    });
  } else if (Menu_value == "Balance") {
    document.getElementById("Showroom_Price").placeholder =
      "Enter showroom price";
    document.getElementById("DP_Percentage").placeholder = "Enter downpayment";
    button.addEventListener("click", () => {
      let type = "Balance";
      Balance(type);
    });
  } else if (Menu_value == "Interest amount") {
    document.getElementById("Showroom_Price").placeholder = "Enter Balance";
    document.getElementById("DP_Percentage").placeholder =
      "Enter rate of interest";
    button.addEventListener("click", () => {
      let type = "Interest amount";
      InterestAmount(type);
    });
  } else if (Menu_value == "Total Finance amount") {
    document.getElementById("Showroom_Price").placeholder = "Enter Balance";
    document.getElementById("DP_Percentage").placeholder =
      "Enter Interest Amount";
    button.addEventListener("click", () => {
      let type = "Total Finance amount";
      TotalFinanceAmount(type);
    });
  }
  else if(Menu_value=="EMI"){
    document.getElementById("Showroom_Price").placeholder = "Total Finance Amount";
    document.getElementById("DP_Percentage").placeholder =
      "Duration ( in years )";
    button.addEventListener("click", () => {
      let type = "EMI";
      EMI(type);
    });
  }
}
