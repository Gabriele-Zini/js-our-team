const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "../img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "../img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "../img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez	Social",
    role: "Media Manager",
    image: "../img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "../img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "../img/barbara-ramos-graphic-designer.jpg",
  },
];

const members = document.querySelector(".members");

for (let i = 0; i < teamMembers.length; i++) {
  let imageEl = document.createElement("img");
  let curMember = teamMembers[i];
  let singleMember = document.createElement("li");
  singleMember.classList = "card p-5 col-12 col-md-4";
  imageEl.src = curMember.image;
  singleMember.innerHTML = `<li>
                                <ul class="list-unstyled">
                                    <li>${curMember.name}</li>
                                    <li>${curMember.role}</li>
                                </ul>
                            </li>`;

  let ulElement = singleMember.querySelector("ul");
  ulElement.appendChild(imageEl);
  members.appendChild(singleMember);
}
