const addNote = document.querySelector(".btn-add");
const btnSave = document.querySelector(".btn-save");
const main = document.querySelector(".main");
const sub = document.querySelector(".sub");
const textarea = document.getElementById("textfield");
const textTitle = document.getElementById("title");
const btnBack = document.querySelector(".back");
let note = document.querySelector(".notepad");

let obj = {
  titleSave: [],
  contentSave: [],
  num: [],
};

let no = 0;
const now = new Date();
const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May,",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let titleText = "";
let contentText = "";
let targetSubCls = [];

addNote.addEventListener("click", function (e) {
  textTitle.value = "";
  textarea.value = "";
  main.classList.add("hidden");
  sub.classList.remove("hidden");
});

note.innerHTML = "";
btnSave.addEventListener("click", function (e) {
  let value = "";
  let text_val = "";

  if (!(textTitle.value === "")) {
    value = textTitle.value.split(" ");
    if (value.length > 2) {
      titleText = `${value.at(0)} ${value.at(1)} ${value.at(2)}`;
    } else {
      titleText = textTitle.value;
    }
  } else {
    value = textarea.value.split(/\s+/);
    if (value.length > 1) {
      titleText = `${value.at(0)} ${value.at(1)}`;
    } else {
      titleText = `${value.at(0)}`;
    }
  }
  if (!(textarea.value === "")) {
    text_val = textarea.value.split(/\s+/);
    console.log(text_val);
    if (text_val.length > 2) {
      contentText = `${text_val.at(0)} ${text_val.at(1)} ${text_val.at(2)}`;
    } else {
      contentText = textarea.value;
    }
  } else {
    contentText = textarea.value;
  }
  obj.titleSave.push(textTitle.value);
  obj.contentSave.push(textarea.value);

  const html = `<div class="notes rounded-xl w-38 bg-slate-700 py-2 count--${++no}">
    <div>
      <h3 class="sub-head font-bold text-white pl-4 pr-2 flex flex-wrap">${titleText}
      </h3>
    </div>
    <div class="sub-text text-gray-400 pl-4 flex flex-wrap">${contentText}
    </div>
    <div class="sub-date text-gray-400 pl-4">
      <span class="day">${dayName[now.getDay()]}</span><span class="month"> ${
    monthName[now.getMonth()]
  }</span
      ><span class="year"> ${now.getFullYear()}</span>
    </div>
  </div>`;
  note.insertAdjacentHTML("afterbegin", html);
  obj.num.push(`count--${no}`);
});

btnBack.addEventListener("click", function () {
  sub.classList.add("hidden");
  main.classList.remove("hidden");
});

note.addEventListener("click", function (e) {
  const targetel = e.target.closest(".notes");
  if (targetel) {
    obj.num.forEach(function (subel, i) {
      if (targetel && targetel.classList.contains(subel)) {
        if (subel === `count--${++i}`) {
          let tempNum;
          tempNum = subel.slice(-1);
          main.classList.add("hidden");
          sub.classList.remove("hidden");
          textTitle.value = obj.titleSave.at(--tempNum);
          textarea.value = obj.contentSave.at(tempNum--);
        }
      }
    });
  }
});
