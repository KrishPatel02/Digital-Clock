showtime = () => {

  // Variable Declaration ---------------------------------------------------------------------------

  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";
  let currentdate = date.getDate();
  let currentmonth = date.getMonth();
  let currentyear = date.getFullYear();

  // Word Month Format ------------------------------------------------------------------------------------------------------

  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentmonthword = month[currentmonth];

  console.log(currentmonthword);

  currentmonth = month[currentmonth];

  // 12 Hour Format  ----------------------------------------------------------------------------------------------------

  if (h == 0) {
    h = 12; // 12 hour format
  }
  if (h > 12) {
    h = h - 12; // 12 hour format  ex :- 13 , h= 13-12 = 1 pm
    session = "PM";
  }

  // Two-Digit Number Format ---------------------------------------------------------------------------------------

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentdate = currentdate < 10 ? "0" + currentdate : currentdate;
  currentmonth = currentmonth < 10 ? "0" + currentmonth : currentmonth;

  // Show up Format Pattern ------------------------------------------------------------------------------------------------------------

  document.getElementById("Digitalclockboxsecid").innerHTML =
    h +
    ":" +
    m +
    ":" +
    s +
    " " +
    session +
    "<br>" +
    currentdate +
    "/" +
    currentmonth +
    "/" +
    currentyear;

  setTimeout(showtime, 1000);
};

showtime();
