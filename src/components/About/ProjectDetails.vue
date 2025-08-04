<template>
  <div class="bg-white p-6 rounded-md">
    <h2 class="text-2xl font-bold text-blue-900 mb-4">Yarış Mantığı</h2>
    <ul class="space-y-3 text-gray-800 flex flex-col gap-4 !mt-5">
      <li>
        <span class="font-semibold text-blue-900">At Listesi: </span>
        <span
          >Atlar, bir servis üzerinden dinamik olarak çekilir. Servis yapısı kurulmuş ve mock data
          kullanılarak public/horse-list.json dosyasına istek atılmıştır. Liste uzunluğu değişkenlik
          gösterebilir; ancak, minimum at sayısı <code>staticValues.ts</code> dosyasındaki
          <b>MIN_HORSE_LENGTH (10)</b> değerinden düşük olamaz. Ayrıca aktif yarış devam ederken
          yarışan atların tablodaki satırı yanıp söner.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Yarış Pisti: </span>
        <span
          >Yarışa katılacak at sayısı kadar kulvar otomatik olarak oluşturulur. Her at yarış
          başlangıcında kendi kulvarında pozisyon alır.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Program Oluşturma: </span>
        <span
          >Header’daki <b>Generate</b> butonuna basıldığında, program
          <code>RACE_DISTANCES</code> dizisinin uzunluğu kadar round üretir. Round sayısı bu değer
          değiştirilerek artırılıp azaltılabilir.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Yarış Kontrolleri: </span>
        <span
          >Header'da yer alan <b>Start / Pause / Restart</b> butonları yarışın durumuna göre dinamik
          olarak çalışır. Yarış başlatılabilir, durdurulabilir ve durduğu yerden devam
          ettirilebilir. Tüm round'lar tamamlandığında <b>Restart</b> aktif olur.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Simülasyon Mekanizması: </span>
        <span
          >Atların ilerleyişi simüle edilmiştir. Her atın hızı; servis üzerinden gelen
          <b>condition (1-100)</b> değeri ağırlıklı olarak (%60) dikkate alınarak hesaplanır. Geriye
          kalan %40’lık etki; <i>form</i> ve <i>şans</i> gibi faktörlerle belirlenir. Böylece her
          zaman en iyi condition'a sahip at kazanmaz.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Yarış Süresi: </span>
        <span
          >Yarış süresi, round mesafesine (örneğin 1200m, 1600m, 2400m) göre orantılı olarak
          hesaplanır. Örneğin 1200m’yi 6 saniyede tamamlayan bir at, 2400m’yi yaklaşık 12 saniyede
          tamamlayacaktır.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Program: </span>
        <span
          >Sayfa yüklendiğinde otomatik olarak kaç round varsa o kadar program oluşturulur. Her
          <b>Generate</b> tıklamasında program yeniden oluşturulur ve önceki program sıfırlanır.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Sonuçlar (Results): </span>
        <span
          >İlk yüklemede gizlidir. İlk round tamamlandıktan sonra görünür hale gelir ve her round
          sonrasında güncellenir. Bu listede her atın yarışı kaç saniyede tamamladığı bilgisi yer
          almaktadır. Pause/Start işlemi sonrası atın gerçek tamamlama süresini kaybetmemek için
          ekstra kontroller sağlanmıştır.
        </span>
      </li>
    </ul>
  </div>
</template>
