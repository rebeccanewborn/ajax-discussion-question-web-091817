let button = document.querySelector(".btn.btn-primary");
button.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => showPerson(json));
});

function showPerson(json) {
  const results = json.results[0];
  console.log(results);
  let fullName = document.querySelector("#fullname");
  fullName.innerText = `${results.name.title} ${results.name.first} ${results
    .name.last}`;
  let email = document.querySelector("#email");
  email.innerText = `${results.email}`;
  let phone = document.querySelector("#phone");
  let cell = document.querySelector("#cell");
  phone.innerText = `${results.phone}`;
  cell.innerText = `${results.cell}`;
  let dob = document.querySelector("#date_of_birth");
  dob.innerText = `${results.dob}`;
  let street = document.querySelector("#street");
  street.innerText = `${results.location.street}`;
  let city = document.querySelector("#city");
  city.innerText = `${results.location.city}`;
  let state = document.querySelector("#state");
  state.innerText = `${results.location.state}`;
  let postcode = document.querySelector("#postcode");
  postcode.innerText = `${results.location.postcode}`;
}
