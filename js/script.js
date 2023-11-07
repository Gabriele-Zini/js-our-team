const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "./img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez	Social",
    role: "Media Manager",
    image: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "./img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

const members = document.querySelector(".members");

for (let i = 0; i < teamMembers.length; i++) {
  let imageEl = document.createElement("img");
  let curMember = teamMembers[i];
  let singleMember = document.createElement("li");
  singleMember.classList = "p-0 col-12 col-md-6 col-lg-4 my-col p-3";
  imageEl.src = curMember.image;
  imageEl.classList = "w-100 ";
  singleMember.innerHTML = `
                                <ul class="list-unstyled card  ms_col">
                                    <li class="pt-3 px-3 fs-3 text-primary">${curMember.name}</li>
                                    <li class="pb-5">${curMember.role}</li>
                                </ul>
                            `;

  let ulElement = singleMember.querySelector("ul");
  ulElement.insertBefore(imageEl, ulElement.firstChild);
  members.appendChild(singleMember);
}
