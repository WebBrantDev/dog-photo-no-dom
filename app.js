function retrieveDogPics() {
  fetch(`https://dog.ceo/api/breeds/image/random/${getUserAmount()}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("An error occured. Please try again."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  }

function getDogListener() {
  $("form").submit((event) => {
    event.preventDefault();
    retrieveDogPics();
  });
}

function getUserAmount() {
  const amount = $("#amount-of-dogs").val();
  return amount;
}

function handler() {
  getDogListener();
}

$(handler);
