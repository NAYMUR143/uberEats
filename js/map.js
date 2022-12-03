const qs_a = (sl) => document.querySelectorAll(sl);
const mk_arr = (arr) => Array.from(arr);
const css = (sl, obj) => Object.assign(sl.style, obj);

let locations = [
  { span: "Aberdeen", x: 555 + 20, y: 38 - 20 },
  { span: "Belfast", x: 555 + 5, y: 38 + 26 },
  { span: "Birmingham, UK", x: 536, y: 38 + 30 },
  { span: "Brighton and Sussex", x: 576 + 20, y: 38 + 43 + 28 },
  {
    span: "Cambridge and East Anglia",
    x: 576 + 20 - 100,
    y: 38 + 43 + 28 + 10,
  },
  { span: "Cardiff", x: 576 + 20 + 2, y: 38 + 43 + 28 + 45 },
  { span: "Edinburgh", x: 576 + 20 + 2 + 20, y: 38 + 43 + 28 + 45 + 2 },
  { span: "Glasgrow", x: 576 + 20 + 2 - 10, y: 38 + 43 + 28 + 45 + 10 },
  { span: "Huil", x: 576 + 20 - 20, y: 38 + 43 + 28 + 45 + 10 + 2 },
  { span: "Leeds", x: 576 + 20 + 15, y: 38 + 43 + 28 + 45 + 10 + 3 },
  { span: "Leicester", x: 576 + 20 + 5, y: 38 + 43 + 28 + 45 + 10 + 3 + 10 },
  { span: "London", x: 576 + 20 + 20, y: 38 + 43 + 28 + 45 + 10 + 3 + 15 },
  { span: "Manchester", x: 576 + 20 + 20, y: 38 + 43 + 28 + 45 + 10 + 3 + 28 },
  { span: "Merseyside", x: 576 + 20 + 65, y: 38 + 43 + 28 + 45 + 10 + 3 + 35 },
  {
    span: "North East, UK",
    x: 576 + 20 + 25,
    y: 38 + 43 + 28 + 45 + 10 + 3 + 50,
  },
  {
    span: "Northampton and Milton Keynes",
    x: 576 + 20 + 15,
    y: 38 + 43 + 28 + 45 + 10 + 3 + 57,
  },
  { span: "Nottingham", x: 576 - 15, y: 38 + 43 + 28 + 45 + 20 + 10 + 60 },
  { span: "Oxford, UK", x: 576 + 53, y: 38 + 43 + 28 + 45 + 20 + 11 + 60 },
  { span: "Sheffield", x: 576 - 3, y: 38 + 43 + 28 + 45 + 20 + 10 + 60 },
  { span: "South coast, UK", x: 576 + 50, y: 38 + 43 + 28 + 45 + 20 + 10 + 85 },
  { span: "South West, UK", x: 576 + 30, y: 38 + 43 + 28 + 45 + 20 + 10 + 87 },
  { span: "Stoke", x: 576 + 20, y: 38 + 43 + 28 + 45 + 20 + 10 + 87 - 68 },
  /*
  
  
  { x: 660, y: 38 + 70 },
  { x: 529, y: 60 + 70 },
  { x: 650, y: 65 + 71 },
  { x: 595, y: 75 + 75 },
  { x: 515, y: 96 + 96 },
  { x: 558, y: 98 + 97 },
  { x: 595, y: 98 + 97 },
  { x: 595 + 15, y: 98 + 97 + 20 },
  { x: 472, y: 98 + 98 + 32 },
  { x: 472 + 46, y: 98 + 98 + 32 + 36 },
  { x: 472 + 46 + 50, y: 98 + 98 + 32 + 38 },
  { x: 472 + 46 + 130, y: 98 + 98 + 32 + 39 },
  { x: 472 + 46 + 86, y: 98 + 98 + 32 + 50 },
  { x: 472 + 46 + 34, y: 98 + 98 + 32 + 50 + 18 },

  { x: 448, y: 60 + 58 },
  { x: 448 + 25, y: 60 + 58 + 20 },
  { x: 448 + 25 + 27, y: 60 + 58 + 23 },
  { x: 450, y: 60 + 58 + 30 },
  { x: 450 + 10, y: 60 + 58 + 30 + 35 },*/
];

function setPositions() {
  mk_arr(qs_a(".locations a")).forEach((a, i) => {
    if (i < 22) {
      qs_a(".locations a span")[i].textContent = locations[i].span;
      css(a, {
        top: `${locations[i].y}px`,
        left: `${locations[i].x - 150}px`,
      });
    } else {
      css(a, {
        display: "none",
      });
    }
  });
}

//init
setPositions();
