const date = new Date();
let years = String(date.getFullYear());
let months = String(date.getMonth() + 1).padStart(2, "0");
let days = String(date.getDate()).padStart(2, "0");

const DATA = years + months + days;
const YEST_DATA = String(parseInt(DATA - 1));
const a = new Date();
const b = new Date();

const SERVICE_KEY =
  "lUwfEWwlPJBnbcT4jd3vW%2BFcMGJ3NYJHKNinmTUAwKb%2ByXh5OPcRCuziQoWhM0dn2mgVy0o76XuhPmifqaynRA%3D%3D";

const URL = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&startCreateDt=${DATA}&endCreateDt=${DATA}`;
const YEST_URL = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&startCreateDt=${YEST_DATA}&endCreateDt=${YEST_DATA}`;
let TOTAL_ARRAY = [];

console.log(DATA);
console.log(YEST_DATA);
const span1 = document.querySelector("#COVID-patient span:first-child");
const span2 = document.querySelector("#incresedTotal");

const get_corona = async () => {
  const a = await fetch(URL);
  text = await a.text();
  xmlParser = new DOMParser();
  xmlDoc = xmlParser.parseFromString(text, "text/xml");
  items = xmlDoc.querySelectorAll("item");
  items.forEach((item) => {
    if (item.children[3].innerHTML == "합계") {
      span1.innerText = `Total COVID-19 patient in Korea : ${numberWithCommas(
        parseInt(item.children[2].innerHTML)
      )}`;
      span2.innerText = `Incresed COVID-19 patient in Korea : ${numberWithCommas(
        parseInt(item.children[6].innerHTML)
      )}`;
    }
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// const get_corona2 = async () => {
//   const b = await fetch(YEST_URL);
//   text = await b.text();
//   xmlParser = new DOMParser();
//   xmlDoc = xmlParser.parseFromString(text, "text/xml");
//   items = xmlDoc.querySelectorAll("item");
//   items.forEach((item) => {
//     if (item.children[3].innerHTML == "경남") {
//       span2.innerText = item.children[2].innerHTML;
//     }
//   });
// };
get_corona();

// get_corona2();

//     my_city.innerText = `GyeongNam COVID total patients : ${parseInt(CB_CNT).toLocaleString(
//       "ko-KR"
//     )}`;
//     korea.innerText = `Today GyeongNam COVID new patients : ${parseInt(TOTAL_CNT).toLocaleString(
//       "ko-KR"
//     )}명`;
//   };
