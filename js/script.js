const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez	Social",
    role: "Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "cott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const members = document.querySelector(".members");
let singleMember = "";

for (let i = 0; i < teamMembers.length; i++) {
  let curMember = teamMembers[i];
  singleMember += ` <li class="card p-5 col-12 col-md-4">
                        <ul class="list-unstyled">
                            <li>${curMember.name}</li>
                            <li>${curMember.role}</li>
                            <li>${curMember.image}</li>
                        </ul>
                    </li>`;
}

members.innerHTML = singleMember;
