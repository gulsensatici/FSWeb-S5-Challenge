import axios from "axios";
//import { response } from "express";
const Card = (makale) => {

  const div= document.createElement("div");
  div.classList.add("card");


const div2= document.createElement("div");
div2.classList.add("headline");
div2.textContent= makale.anabaslik;
div.appendChild(div2);

const div3= document.createElement("div");
div3.classList.add("author");
div2.appendChild(div3);

const div4= document.createElement("div");
div4.classList.add("img-container");
div3.appendChild(div4);

const image =document.createElement("img");
div4.appendChild(image);
image.src= makale.yazarFoto;

const span = document.createElement("span");
div3.appendChild(span);
span.textContent = makale.yazarAdi + "tarafından";

div.appendChild(div3);
div3.appendChild(span);

div.addEventListener("click",(event) =>{
  console.log(makale.anabaslik);
});
return div;
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
};

const cardEkleyici = (secici) => {

  const kart= document.querySelector(secici);
axios.get("http://localhost:5001/api/makaleler").then((response) => {
  console.log(response.data.makaleler);
  for (let key in response.data.makaleler) {
    for (let i = 0; i < response.data.makaleler[key].length; i++) {
      kart.appendChild(Card(response.data.makaleler[key][i]));
    }
  }
});

  
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici }
