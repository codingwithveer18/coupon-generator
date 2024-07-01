function generateCoupon() {
  // values of input fields
  const orgName = document.getElementById("orgName").value;
  const deal = document.getElementById("deal").value;
  const expiry = document.getElementById("expiry").value;

  // to check for values not to be empty
  //  can write required in input fields too
  if (!orgName || !deal || !expiry) {
    alert("Please fill out all fields.");
    return;
  }

  //to check for expiry date not to be less than current date
  const expiryDate = new Date(expiry);
  const currentDate = new Date();

  // if want to reset the hours and include today's date also
  // currentDate.setHours(0, 0, 0, 0);

  if (expiryDate < currentDate) {
    alert("Date cannot be from past");
    return;
  }

  // handling the hidden div element
  document.getElementById("OrgName").innerText = orgName;
  document.getElementById("Deal").innerText = deal;
  document.getElementById("Unique").innerText =
    "Id: " + Math.floor(1000 + Math.random() * 9000);
  document.getElementById("Expiry").innerText = "Expires on: " + expiry;

  document.getElementById("preview").style.display = "block";
  document.getElementById("downloadbtn").style.display = "block";
}

function downloadCoupon() {
  const couponPreview = document.getElementById("preview");

  // using html2canvas library to convert div block into a respective field i.e. either image or pdf (html2pdf used)

  html2canvas(couponPreview).then((canvas) => {
    const link = document.createElement("a");
    link.download = "coupon.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
