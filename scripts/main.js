console.log("Hello, SF Airbnb Listing!");

const inTitle = document.querySelector("#input-title");
const inDescription = document.querySelector("#input-description");
const inPrice = document.querySelector("#input-price");
const btnCancel = document.querySelector("#button-cancel");

const onClick = (evt) => {
  evt.preventDefault();
  inTitle.value = "";
  inDescription.value = "";
  inPrice.value = "0";
};

btnCancel.addEventListener("click", onClick);
