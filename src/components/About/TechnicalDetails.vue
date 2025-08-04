<template>
  <div class="bg-white p-6 rounded-md">
    <h2 class="text-2xl font-bold text-blue-900 mb-4">Teknik Özellikler</h2>
    <ul class="space-y-3 text-gray-800 flex flex-col gap-4 !mt-5">
      <li>
        <span class="font-semibold text-blue-900">Vue 3 + TypeScript: </span>
        <span>
          Modern component tabanlı mimari, tip güvenliği ve Composition API ile geliştirildi.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Vite: </span>
        <span>
          Hızlı geliştirme ve build işlemleri için modern frontend build aracı Vite kullanıldı.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Pinia: </span>
        <span>
          Global state yönetimi için kullanıldı (at listesi, yarış programı, responsive durumlar
          vs.). Vuex yerine Pinia tercih edildi çünkü Vue 3 + TS ile daha uyumlu çalışabilmektedir.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Vue Router: </span>
        <span>Sayfa geçişleri ve route yönetimi.</span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Tailwind CSS: </span>
        <span>Hızlı ve esnek arayüz tasarımı için utility-first CSS framework'ü.</span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">FontAwesome: </span>
        <span>İkon kullanımı için entegre edildi.</span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">SCSS: </span>
        <span>
          Bileşen bazlı stillendirme için SCSS kullanılarak daha modüler ve yeniden kullanılabilir
          stil yapısı oluşturuldu.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Axios: </span>
        <span>API istekleri ve veri çekme işlemleri için kullanıldı.</span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Vue3-Toastify: </span>
        <span>Kullanıcıya bildirim göstermek için kullanıldı.</span>
      </li>

      <li>
        <span class="font-semibold text-blue-900">Testler:</span>
        <span>Unit testler için <b>Vitest</b>, e2e testler için <b>Cypress</b> kullanıldı.</span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Responsive Tasarım:</span>
        <span>
          Mobil ve masaüstü uyumlu, ekran boyutuna göre dinamik davranışlar (örn. tablo aç/kapa).
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Yarış Simülasyonu:</span>
        <span>
          At listesi, yarış programı oluşturma, yarış başlatma, sonuçları gösterme ve animasyonlu
          yarış pistleri.
        </span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Kod Kalitesi:</span>
        <span>ESLint ve Prettier ile kod standartları ve otomatik formatlama.</span>
      </li>
      <li>
        <span class="font-semibold text-blue-900">Husky Pre-Commit:</span>
        <span>Husky entegrasyonu ile commit öncesi lint kontrolü.</span>
      </li>
    </ul>
  </div>
</template>
