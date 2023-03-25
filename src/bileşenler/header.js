const Header = (baslik, tarih, yazi) => {


const div= document.createElement("div");
div.classList.add("header");

const date= document.createElement("span");
date.classList.add("date");
div.appendChild(date);
date.textContent=tarih;


const title= document.createElement("h1");
div.appendChild(title);
title.textContent=baslik;

const span2= document.createElement("span");
span2.classList.add("temp");
div.appendChild(span2);
span2.textContent=yazi;


return div;
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1> 
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

const secici1=document.querySelector(secici);
secici1.appendChild(Header
  ("Duru Ceylan",
  "13.02.2023",
  "tarihinde Kuşadası'nda ailemizin en küçük üyesi olarak aramıza katıldı"
)

  );
 
}

export { Header, headerEkleyici };
