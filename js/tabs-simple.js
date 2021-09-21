const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

const tabs2 = document.querySelector(".wrapper2");
const tabButton2 = document.querySelectorAll(".tab-button2");
const contents2 = document.querySelectorAll(".content2");

tabs2.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton2.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents2.forEach(content2 => {
      content2.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}