function sysreq() {
  $(".btn-group .dropdown-menu .pc.dropdown-item").click(function () {
    document.getElementById("btnsysreq").innerHTML =
      "Computer <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>";
    document.getElementById(
      "content-sysreq"
    ).innerHTML = `<h5 class="card-title">Minimum Requirements</h5>
    <div class="card-text">
      <ul>
        <li>Operating System: Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit</li>
        <li>Processor: 4th Generation Intel® Core™ i5 or AMD Ryzen™ series or equivalent</li>
        <li>RAM: 8 GB</li>
        <li>Discrete Graphics Card: NVIDIA® GeForce® GT 1030 or equivalent</li>
        <li>Core Graphics Card: Intel® UHD630 or equivalent</li>
        <li>DirectX Version: 11</li>
        <li>First-Time Installation Storage Space Required: 150 GB of available storage space</li>
        <li>Regular Storage Space Required: 100GB of available storage space</li>
      </ul>
    </div>
    <h5 class="card-title">Recomended Requirements</h5>
    <div class="card-text">
      <ul>
        <li>Operating System: Windows 10 64-bit or Windows 11 64-bit</li>
        <li>Processor: 7th Generation Intel® Core™ i7 or AMD Ryzen™ 5000 series or better</li>
        <li>RAM: 16 GB</li>
        <li>Discrete Graphics Card: NVIDIA® GeForce® GTX 1060 6 GB or better</li>
        <li>DirectX Version: 11</li>
        <li>First-Time Installation Storage Space Required: 150 GB of available storage space</li>
        <li>Regular Storage Space Required: 100GB of available storage space</li>
      </ul>
    </div>`;
  });

  $(".btn-group .dropdown-menu .andro.dropdown-item").click(function () {
    document.getElementById("btnsysreq").innerHTML =
      "Android <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>";
    document.getElementById(
      "content-sysreq"
    ).innerHTML = `<h5 class="card-title">Minimum Requirements</h5>
    <div class="card-text">
    <ul>
    <li>CPU: Qualcomm Snapdragon 855, Kirin 820, or above</li>
    <li>RAM: 4 GB or more</li>
    <li>Operating System: Android 8.0 and above</li>
    <li>Storage Space: 30 GB of available storage space</li>
  </ul>
    </div>
    <h5 class="card-title">Recomended Requirements</h5>
    <div class="card-text">
    <ul>
    <li>CPU: Qualcomm Snapdragon 855, Kirin 820, or above</li>
    <li>RAM: 6 GB or more</li>
    <li>Operating System: Android 11.0 and above</li>
    <li>Storage Space: 30 GB of available storage space</li>
  </ul>
    </div>`;
  });

  $(".btn-group .dropdown-menu .ios.dropdown-item").click(function () {
    document.getElementById("btnsysreq").innerHTML =
      "iOS <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>";
    document.getElementById(
      "content-sysreq"
    ).innerHTML = `<h5 class="card-title">Minimum Requirements</h5>
    <div class="card-text">
    <ul>
    <li>Supported Operating System: iOS 12.0 or above (Bluetooth controller support requires iOS 14 or above)</li>
    <li>Storage Space: 30 GB of available storage space or more</li>
  </ul>
    </div>
    <h5 class="card-title">Recomended Requirements</h5>
    <div class="card-text">
    <ul>
    <li>Supported Devices: iPhone 8 Plus, iPhone X, iPhone XS, iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max, iPhone SE (2nd generation), iPhone 12, iPhone 12 mini, iPhone 12 Pro, iPhone 12 Pro Max, iPhone 13, iPhone 13 mini, iPhone 13 Pro, iPhone 13 Pro Max, iPhone 14, iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Pro Max, iPhone 15, iPhone 15 Plus, iPhone 15 Pro, iPhone 15 Pro Max, iPad Air (3rd generation), iPad mini (5th generation), iPad Pro, 10.5-inch, iPad Pro, 12.9-inch (2nd generation), iPad Pro, 11-inch (1st generation), iPad Pro, 12.9-inch (3rd generation), iPad Pro, 11-inch (2nd generation), iPad Pro, 12.9-inch (4th generation), iPad Pro, 11-inch (3rd generation), iPad Pro, 12.9-inch (5th generation), iPad Pro, 11-inch (4th generation), iPad Pro, 12.9-inch (6th generation), iPad Air (4th generation), iPad (8th generation), iPad mini (6th generation), iPad (9th generation), iPad Air (5th generation), iPhone SE (3rd generation), iPad (10th generation)</li>
  </ul>
    </div>`;
  });

  $(".btn-group .dropdown-menu .ps.dropdown-item").click(function () {
    document.getElementById("btnsysreq").innerHTML =
      "PlayStation® <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>";
    document.getElementById(
      "content-sysreq"
    ).innerHTML = `<h5 class="card-title">Best Requirements</h5>
    <div class="card-text">
    <ul>
    <li>Supported Consoles: PlayStation®4, PlayStation®4 Slim, PlayStation®4 Pro, PlayStation®5</li>
    <li>Storage Space: 100 GB of available storage space</li>
  </ul>
    </div>`;
  });
}

function getChar() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const char = urlParams.get("char");
  console.log(char);

  if (char == "HuTao") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/pyro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/hutao-splash.png");
    document.getElementById("nama-char").innerText = "Hu Tao";
    document.getElementById("gelar-char").innerText = "Fragrance in Thaw";
    document.getElementById("element").innerText = "Pyro";
    document.getElementById("weapon").innerText = "Spear";
    document.getElementById("constel").innerText = "Papilio Charontis";
    document.getElementById("affil").innerText = "Wangsheng Funeral Parlor";
    document.getElementById("birthday").innerText = "7/15";
    document.getElementById("vaen").innerText = "Brianna Knickerbocker";
    document.getElementById("vachs").innerText = "陶典";
    document.getElementById("vajp").innerText = "高橋李依";
    document.getElementById("vakr").innerText = "Kim Ha-ru";
    document.getElementById("desc-char").innerText =
      "Master ke-77 Wangsheng Funeral Parlor. Dia mengambil alih bisnis ini di umur yang cukup muda.";
  }
  if (char == "Yelan") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/hydro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/yelan-splash.png");
    document.getElementById("nama-char").innerText = "Yelan";
    document.getElementById("gelar-char").innerText = "Valley Orchid";
    document.getElementById("element").innerText = "Hydro";
    document.getElementById("weapon").innerText = "Bow";
    document.getElementById("constel").innerText = "Umbrabilis Orchis";
    document.getElementById("affil").innerText = "Yanshang Teahouse";
    document.getElementById("birthday").innerText = "4/20";
    document.getElementById("vaen").innerText = "Laura Post";
    document.getElementById("vachs").innerText = "徐慧";
    document.getElementById("vajp").innerText = "遠藤綾";
    document.getElementById("vakr").innerText = "Min Ah";
    document.getElementById("desc-char").innerText =
      "Orang misterius yang mengaku bekerja di Bagian Urusan Sipil, tetapi 'tidak terdaftar' di data Bagian Urusan Sipil.";
  }
  if (char == "Xianyun") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/anemo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/xianyun-splash.png");
    document.getElementById("nama-char").innerText = "Xianyun";
    document.getElementById("gelar-char").innerText = "Passerine Herald";
    document.getElementById("element").innerText = "Anemo";
    document.getElementById("weapon").innerText = "Catalyst";
    document.getElementById("constel").innerText = "Passerine Herald";
    document.getElementById("affil").innerText = "Mt. Aocang";
    document.getElementById("birthday").innerText = "4/11";
    document.getElementById("vaen").innerText = "Stephanie Panisello";
    document.getElementById("vachs").innerText = "秦紫翼";
    document.getElementById("vajp").innerText = "中臣真菜";
    document.getElementById("vakr").innerText = "Kang Si-hyun";
    document.getElementById("desc-char").innerText =
      "Salah satu Adeptus yang agung dan mulia dari Jueyun, 'Cloud Retainer'. Ahli segala jenis mekanika, yang hatinya kini berpaling kepada dunia fana. 'Xianyun' adalah nama yang digunakannya setelah turun gunung.";
  }
  if (char == "Keqing") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/electro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/keqing-splash.png");
    document.getElementById("nama-char").innerText = "Keqing";
    document.getElementById("gelar-char").innerText = "Driving Thunder";
    document.getElementById("element").innerText = "Electro";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Trulla Cementarii";
    document.getElementById("affil").innerText = "Liyue Qixing";
    document.getElementById("birthday").innerText = "11/20";
    document.getElementById("vaen").innerText = "Kayli Mills";
    document.getElementById("vachs").innerText = "谢莹";
    document.getElementById("vajp").innerText = "喜多村英梨";
    document.getElementById("vakr").innerText = "Lee Bo-hee";
    document.getElementById("desc-char").innerText =
      "Yuheng dari Liyue Qixing, dia punya banyak hal yang ingin dikatakan mengenai Rex Lapis yang memerintah Liyue- dan pada kenyataannya, para Dewa mengagumi orang-orang sepertinya.";
  }
  if (char == "Nahida") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/dendro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/nahida-splash.png");
    document.getElementById("nama-char").innerText = "Nahida";
    document.getElementById("gelar-char").innerText = "Physic of Purity";
    document.getElementById("element").innerText = "Anemo";
    document.getElementById("weapon").innerText = "Catalys";
    document.getElementById("constel").innerText = "Sapientia Oromasdis";
    document.getElementById("affil").innerText = "Sumeru City";
    document.getElementById("birthday").innerText = "10/27";
    document.getElementById("vaen").innerText = "Kimberley Anne Campbell";
    document.getElementById("vachs").innerText = "花玲";
    document.getElementById("vajp").innerText = "田村ゆかり";
    document.getElementById("vakr").innerText = "Park Shi-yoon";
    document.getElementById("desc-char").innerText =
      "Seorang gadis yang dikurung bak burung di dalam sangkar Sanctuary of Surasthana, hanya bisa melihat dunia dari dalam mimpi.";
  }
  if (char == "Shenhe") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/cryo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/shenhe-splash.png");
    document.getElementById("nama-char").innerText = "Shenhe";
    document.getElementById("gelar-char").innerText = "Lonesome Transcendence";
    document.getElementById("element").innerText = "Cryo";
    document.getElementById("weapon").innerText = "Spear";
    document.getElementById("constel").innerText = "Crista Doloris";
    document.getElementById("affil").innerText = "Cloud Retainer's Abode";
    document.getElementById("birthday").innerText = "3/10";
    document.getElementById("vaen").innerText = "Chelsea Kwoka";
    document.getElementById("vachs").innerText = "秦紫翼";
    document.getElementById("vajp").innerText = "川澄綾子";
    document.getElementById("vakr").innerText = "Lee Hyeon-jin";
    document.getElementById("desc-char").innerText =
      "Seorang murid Adeptus dengan temperamen yang sedikit unik. Karena sudah lama hidup terisolasi di pegunungan Liyue, sifatnya juga menjadi acuh tak acuh dan menjaga jarak seperti para Adeptus.";
  }
  if (char == "Navia") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/geo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/navia-splash.png");
    document.getElementById("nama-char").innerText = "Navia";
    document.getElementById("gelar-char").innerText =
      "Helm of the Radiant Rose";
    document.getElementById("element").innerText = "Geo";
    document.getElementById("weapon").innerText = "Claymore";
    document.getElementById("constel").innerText = "Rosa Multiflora";
    document.getElementById("affil").innerText = "Spina di Rosula";
    document.getElementById("birthday").innerText = "8/16";
    document.getElementById("vaen").innerText = "Brenna Larsen";
    document.getElementById("vachs").innerText = "小敢";
    document.getElementById("vajp").innerText = "豊崎愛生";
    document.getElementById("vakr").innerText = "Jeong Hae-eun";
    document.getElementById("desc-char").innerText =
      "Ketua Spina di Rosula, bos yang cantik, baik, dan bertanggung jawab.";
  }
  if (char == "Arlecchino") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/pyro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/arlecchino-splash.png");
    document.getElementById("nama-char").innerText = "Arlecchino";
    document.getElementById("gelar-char").innerText = "Dire Balemoon";
    document.getElementById("element").innerText = "Pyro";
    document.getElementById("weapon").innerText = "Polearm";
    document.getElementById("constel").innerText = "Ignis Purgatorius";
    document.getElementById("affil").innerText = "Fatui";
    document.getElementById("birthday").innerText = "8/22";
    document.getElementById("vaen").innerText = "Erin Yvette";
    document.getElementById("vachs").innerText = "黄莺";
    document.getElementById("vajp").innerText = "森なな子";
    document.getElementById("vakr").innerText = "Lee Myung-hi";
    document.getElementById("desc-char").innerText =
      "Fatui Harbinger ke-4 The Knave. Diplomat yang tenang dan kejam. Dikenal sebagai Ayah yang dihormati dan dapat diandalkan oleh anak-anak di House of the Hearth.";
  }
  if (char == "Ayaka") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/cryo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/ayaka-splash.png");
    document.getElementById("nama-char").innerText = "Kamisato Ayaka";
    document.getElementById("gelar-char").innerText = "Frostflake Heron";
    document.getElementById("element").innerText = "Cryo";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Grus Nivis";
    document.getElementById("affil").innerText = "Yashiro Commission";
    document.getElementById("birthday").innerText = "9/28";
    document.getElementById("vaen").innerText = "Erica Mendez";
    document.getElementById("vachs").innerText = "小N";
    document.getElementById("vajp").innerText = "早見沙織";
    document.getElementById("vakr").innerText = "Lee Yoo-ri";
    document.getElementById("desc-char").innerText =
      "Putri dari Klan Kamisato di Yashiro Commission. Bermartabat dan elegan, cerdas dan tangguh.";
  }
  if (char == "Chiori") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/geo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/chiori-splash.png");
    document.getElementById("nama-char").innerText = "Chiori";
    document.getElementById("gelar-char").innerText =
      "The Thundering Seamstress";
    document.getElementById("element").innerText = "Geo";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Cisoria";
    document.getElementById("affil").innerText = "Court of Fontaine";
    document.getElementById("birthday").innerText = "8/17";
    document.getElementById("vaen").innerText = "Brittany Lauda";
    document.getElementById("vachs").innerText = "陈阳";
    document.getElementById("vajp").innerText = "竹達彩奈";
    document.getElementById("vakr").innerText = "Lee Da-eun";
    document.getElementById("desc-char").innerText =
      "Pemilik Chioriya Boutique. Penjahit yang namanya sangat terkenal di Fontaine.";
  }
  if (char == "Dehya") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/pyro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/dehya-splash.png");
    document.getElementById("nama-char").innerText = "Dehya";
    document.getElementById("gelar-char").innerText = "Flame-Mane";
    document.getElementById("element").innerText = "Pyro";
    document.getElementById("weapon").innerText = "Claymore";
    document.getElementById("constel").innerText = "Mantichora";
    document.getElementById("affil").innerText = "Eremite";
    document.getElementById("birthday").innerText = "4/7";
    document.getElementById("vaen").innerText = "Amber May";
    document.getElementById("vachs").innerText = "陈雨";
    document.getElementById("vajp").innerText = "福原綾香";
    document.getElementById("vakr").innerText = "Kim Hyeon-sim";
    document.getElementById("desc-char").innerText =
      "Seorang anggota Eremite - sebuah organisasi tentara bayaran di padang pasir Sumeru. Dia berani, kuat, dan sudah sangat terkenal di kalangan Eremite.";
  }
  if (char == "Eula") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/cryo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/eula-splash.png");
    document.getElementById("nama-char").innerText = "Eula";
    document.getElementById("gelar-char").innerText =
      "Dance of the Shimmering Wave";
    document.getElementById("element").innerText = "Cryo";
    document.getElementById("weapon").innerText = "Claymore";
    document.getElementById("constel").innerText = "Aphros Delos";
    document.getElementById("affil").innerText = "Knights of Favonius";
    document.getElementById("birthday").innerText = "10/25";
    document.getElementById("vaen").innerText = "Suzie Yeung";
    document.getElementById("vachs").innerText = "子音";
    document.getElementById("vajp").innerText = "佐藤利奈";
    document.getElementById("vakr").innerText = "Kim Hyeon-ji";
    document.getElementById("desc-char").innerText =
      "Sang Spindrift Knight, keturunan keluarga bangsawan dan Kapten dari Pasukan Gerilya Knights of Favonius. Alasan kenapa seorang keturunan bangsawan kuno ingin bergabung dengan para Knight masih menjadi misteri di Mondstadt sampai saat ini.";
  }
  if (char == "Furina") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/hydro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/furina-splash.png");
    document.getElementById("nama-char").innerText = "Furina";
    document.getElementById("gelar-char").innerText =
      "Endless Solo of Solitude";
    document.getElementById("element").innerText = "Hydro";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Animula Choragi";
    document.getElementById("affil").innerText = "Court of Fontaine";
    document.getElementById("birthday").innerText = "10/13";
    document.getElementById("vaen").innerText = "Amber Lee Connors";
    document.getElementById("vachs").innerText = "钱琛";
    document.getElementById("vajp").innerText = "水瀬いのり";
    document.getElementById("vakr").innerText = "Kim Ha-young";
    document.getElementById("desc-char").innerText =
      "Sang Spindrift Knight, keturunan keluarga bangsawan dan Kapten dari Pasukan Gerilya Knights of Favonius. Alasan kenapa seorang keturunan bangsawan kuno ingin bergabung dengan para Knight masih menjadi misteri di Mondstadt sampai saat ini.";
  }
  if (char == "Ganyu") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/cryo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/ganyu-splash.png");
    document.getElementById("nama-char").innerText = "Ganyu";
    document.getElementById("gelar-char").innerText = "Plenilune Gaze";
    document.getElementById("element").innerText = "Cryo";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Animula Choragi";
    document.getElementById("affil").innerText = "Court of Fontaine";
    document.getElementById("birthday").innerText = "10/13";
    document.getElementById("vaen").innerText = "Amber Lee Connors";
    document.getElementById("vachs").innerText = "钱琛";
    document.getElementById("vajp").innerText = "水瀬いのり";
    document.getElementById("vakr").innerText = "Kim Ha-young";
    document.getElementById("desc-char").innerText =
      "Sang Spindrift Knight, keturunan keluarga bangsawan dan Kapten dari Pasukan Gerilya Knights of Favonius. Alasan kenapa seorang keturunan bangsawan kuno ingin bergabung dengan para Knight masih menjadi misteri di Mondstadt sampai saat ini.";
  }
  if (char == "Jean") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/anemo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/jean-splash.png");
    document.getElementById("nama-char").innerText = "Jean";
    document.getElementById("gelar-char").innerText = "Dandelion Knight";
    document.getElementById("element").innerText = "Anemo";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Leo Minor";
    document.getElementById("affil").innerText = "Knights of Favonius";
    document.getElementById("birthday").innerText = "3/14";
    document.getElementById("vaen").innerText = "Stephanie Southerland";
    document.getElementById("vachs").innerText = "林簌";
    document.getElementById("vajp").innerText = "斎藤千和";
    document.getElementById("vakr").innerText = "Ahn Young-mi";
    document.getElementById("desc-char").innerText =
      "Dandelion Knight yang menjunjung tinggi keadilan dan kebenaran. Menjabat sebagai Grand Master Knights of Favonius di Mondstadt.";
  }
  if (char == "Klee") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/pyro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/klee-splash.png");
    document.getElementById("nama-char").innerText = "Klee";
    document.getElementById("gelar-char").innerText = "Fleeing Sunlight";
    document.getElementById("element").innerText = "Pyro";
    document.getElementById("weapon").innerText = "Catalyst";
    document.getElementById("constel").innerText = "Trifolium";
    document.getElementById("affil").innerText = "Knights of Favonius";
    document.getElementById("birthday").innerText = "7/27";
    document.getElementById("vaen").innerText = "Poonam Basu";
    document.getElementById("vachs").innerText = "花玲";
    document.getElementById("vajp").innerText = "久野美咲";
    document.getElementById("vakr").innerText = "Bang Yeon-ji";
    document.getElementById("desc-char").innerText =
      "Seorang ahli peledak yang sudah menjadi langganan di ruang tahanan Knights of Favonius. Juga dikenal dengan nama Fleeing Sunlight.";
  }
  if (char == "Kokomi") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/hydro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/kokomi-splash.png");
    document.getElementById("nama-char").innerText = "Sangonomiya Kokomi";
    document.getElementById("gelar-char").innerText = "Pearl of Wisdom";
    document.getElementById("element").innerText = "Hydro";
    document.getElementById("weapon").innerText = "Catalyst";
    document.getElementById("constel").innerText = "Dracaena Somnolenta";
    document.getElementById("affil").innerText = "Watatsumi Island";
    document.getElementById("birthday").innerText = "2/22";
    document.getElementById("vaen").innerText = "Risa Mei";
    document.getElementById("vachs").innerText = "龟娘";
    document.getElementById("vajp").innerText = "三森すずこ";
    document.getElementById("vakr").innerText = "Yeo Yoon-mi";
    document.getElementById("desc-char").innerText =
      "Dandelion Knight yang menjunjung tinggi keadilan dan kebenaran. Menjabat sebagai Grand Master Knights of Favonius di Mondstadt.";
  }
  if (char == "Mona") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/hydro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/mona-splash.png");
    document.getElementById("nama-char").innerText = "Mona";
    document.getElementById("gelar-char").innerText = "Astral Reflection";
    document.getElementById("element").innerText = "Hydro";
    document.getElementById("weapon").innerText = "Catalyst";
    document.getElementById("constel").innerText = "Astrolabos";
    document.getElementById("affil").innerText = "Mondstadt";
    document.getElementById("birthday").innerText = "8/31";
    document.getElementById("vaen").innerText = "Felecia Angelle";
    document.getElementById("vachs").innerText = "陈婷婷";
    document.getElementById("vajp").innerText = "小原好美";
    document.getElementById("vakr").innerText = "Woo Jeong-shin";
    document.getElementById("desc-char").innerText =
      "Seorang astrolog yang menyebut dirinya sendiri sebagai Mona si Astrolog Hebat, dan memiliki kemampuan yang sesuai dengan julukannya. Kepandaiannya setara dengan keangkuhannya.";
  }
  if (char == "Nilou") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/hydro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/nilou-splash.png");
    document.getElementById("nama-char").innerText = "Nilou";
    document.getElementById("gelar-char").innerText = "Dance of Lotuslight";
    document.getElementById("element").innerText = "Hydro";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Lotos Somno";
    document.getElementById("affil").innerText = "Zubayr Theater";
    document.getElementById("birthday").innerText = "12/3";
    document.getElementById("vaen").innerText = "Dani Chambers";
    document.getElementById("vachs").innerText = "紫苏九月";
    document.getElementById("vajp").innerText = "金元寿子";
    document.getElementById("vakr").innerText = "Chae Rim";
    document.getElementById("desc-char").innerText =
      "Penari terkenal di Teater Zubayr. Tariannya elegan dan gemulai, pembawaannya ramah dan polos.";
  }
  if (char == "Qiqi") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/cryo.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/qiqi-splash.png");
    document.getElementById("nama-char").innerText = "Qiqi";
    document.getElementById("gelar-char").innerText = "Icy Resurrection";
    document.getElementById("element").innerText = "Cryo";
    document.getElementById("weapon").innerText = "Sword";
    document.getElementById("constel").innerText = "Pristina Nola";
    document.getElementById("affil").innerText = "Bubu Pharmacy";
    document.getElementById("birthday").innerText = "3/3";
    document.getElementById("vaen").innerText = "Christie Cate";
    document.getElementById("vachs").innerText = "宴宁";
    document.getElementById("vajp").innerText = "田村ゆかり";
    document.getElementById("vakr").innerText = "Lee Seul";
    document.getElementById("desc-char").innerText =
      "Seorang murid di Bubu Pharmacy yang bertugas untuk memetik tanaman obat-obatan. Seorang zombie yang kulitnya teramat putih dan pucat, dia teramat pendiam, dan jarang menunjukkan ekspresi apa pun.";
  }
  if (char == "Raiden") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/electro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/raiden-splash.png");
    document.getElementById("nama-char").innerText = "Raiden Shogun";
    document.getElementById("gelar-char").innerText = "Plane of Euthymia";
    document.getElementById("element").innerText = "Electro";
    document.getElementById("weapon").innerText = "Polearm";
    document.getElementById("constel").innerText = "Imperatrix Umbrosa";
    document.getElementById("affil").innerText = "Inazuma City";
    document.getElementById("birthday").innerText = "6/26";
    document.getElementById("vaen").innerText = "Anne Yatco";
    document.getElementById("vachs").innerText = "菊花花";
    document.getElementById("vajp").innerText = "沢城みゆき";
    document.getElementById("vakr").innerText = "Park Ji-yoon";
    document.getElementById("desc-char").innerText =
      "Yang Mulia, Sang Narukami Ogosho Yang Mahakuasa. Dia menjanjikan para penduduk Inazuma keabadian yang tidak akan pernah berubah.";
  }
  if (char == "Yae") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/electro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/yae-splash.png");
    document.getElementById("nama-char").innerText = "Yae Miko";
    document.getElementById("gelar-char").innerText = "Astute Amusement";
    document.getElementById("element").innerText = "Electro";
    document.getElementById("weapon").innerText = "Catalyst";
    document.getElementById("constel").innerText = "Divina Vulpes";
    document.getElementById("affil").innerText = "Grand Narukami Shrine";
    document.getElementById("birthday").innerText = "6/27";
    document.getElementById("vaen").innerText = "Ratana";
    document.getElementById("vachs").innerText = "杜冥鸦";
    document.getElementById("vajp").innerText = "佐倉綾音";
    document.getElementById("vakr").innerText = "Moon Yoo-jung";
    document.getElementById("desc-char").innerText =
      "Lady Guuji dari Kuil Agung Narukami ini juga menjabat sebagai pemimpin redaksi Yae Publishing House. Kecerdasan dan kelicikan yang tidak dapat dibayangkan tersembunyi di balik penampilannya yang cantik.";
  }
  if (char == "Yoimiya") {
    document
      .querySelector(".img-element")
      .setAttribute("src", "../assets/pyro.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/yoimiya-splash.png");
    document.getElementById("nama-char").innerText = "Yoimiya";
    document.getElementById("gelar-char").innerText = "Frolicking Flames";
    document.getElementById("element").innerText = "Pyro";
    document.getElementById("weapon").innerText = "Bow";
    document.getElementById("constel").innerText = "Carassius Auratus";
    document.getElementById("affil").innerText = "Naganohara Fireworks";
    document.getElementById("birthday").innerText = "6/21";
    document.getElementById("vaen").innerText = "Jenny Yokobori";
    document.getElementById("vachs").innerText = "金娜";
    document.getElementById("vajp").innerText = "植田佳奈";
    document.getElementById("vakr").innerText = "Park Shin-hee";
    document.getElementById("desc-char").innerText =
      "Pemilik Naganohara Fireworks. Juga dikenal sebagai Ratu Festival Musim Panas, dia mahir membuat kembang api yang melambangkan harapan dan impian semua orang.";
  }
  return char;
}

function Comments(name, email, comment) {
  this.name = name;
  this.email = email;
  this.comment = comment;
}

let listArr = [];

function getList() {
  let char = getParams();
  if (listArr.length.toString() == "0") {
    document.getElementById("tbComment").innerHTML = `<tr>
      <td class="rounded-0">
        <h5 class="fw-bold text-center m-0">
          No Comment yet...
        </h5>
      </td>
    </tr>`;
  } else {
    listArr.join(" ");
    document.getElementById("tbComment").innerHTML = listArr
      .map(
        (u, i) =>
          `<tr>
        <td class="rounded-0 w-25 px-3">
          <img src="../assets/${char}-emot.png" class="img-fluid rounded-circle bg-secondary border">
        </td>
        <td class="rounded-0 px-0">
          <p class="fs-6 fw-bold text-white text-start mb-1">${u.name}</p>
          <p class="text-wrap mr-4 mb-0">${u.comment}</p>
        </td>
        <td class="px-2"></td>
      </tr>`
      )
      .join("");
  }
}

function postComment() {
  listArr.push(
    new Comments(
      document.getElementById("etNama").value,
      document.getElementById("etEmail").value,
      document.getElementById("etComment").value
    )
  );
  getList();
  document.getElementById("etNama").value = "";
  document.getElementById("etEmail").value = "";
  document.getElementById("etComment").value = "";
}

document.addEventListener("keydown", function (enterKey) {
  if (enterKey.keyCode === 13) {
    postComment();
  }
});

function getWeapon() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const char = urlParams.get("wea");

  if (char == "Homa") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/stafofhoma.png");
    document.getElementById("weapon-name").innerText = "Staff of Homa";
    document.getElementById("type-weapon").innerText = "Polearm";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "66.2%";
    document.getElementById("passive-name").innerText = "Reckless Cinnabar";
    document.getElementById(
      "passive-desc"
    ).innerHTML = `Meningkatkan <span class="text-primary">20%</span> Max
    HP, dan memberikan Bonus ATK sebesar
    <span class="text-primary">0.8%</span> dari Max HP
    pengguna. Saat HP pengguna kurang dari
    <span class="text-primary">50%</span>, maka pengguna
    akan mendapatkan Bonus ATK tambahan sebesar
    <span class="text-primary">1%</span> dari Max HP.`;
    document.getElementById("desc-weapon").innerText =
      'Sebuah "tongkat kayu bakar" yang pernah digunakan dalam ritual kuno dan telah lama hilang.';
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Dengan api, semua ketidakmurnian dibersihkan. Bersama-sama
    dengan kobaran api, sisa-sisa ketidakmurnian tersebut naik
    perlahan ke angkasa. Melalui ritual ini, bahkan kayu pun
    bisa terbakar di musim hujan, menciptakan asap serigala
    sebagai berkat yang bisa mengusir iblis.
  </h5>
  <br>
  <h5 class="card-text">
    Ritual api seperti ini umum dilakukan pada zaman
    peperangan dahulu kala. Karena mimpi dan khayalan dari
    jasad dewa-dewa akan menghasilkan asap beracun yang jahat,
    mereka akan merenggut orang yang sudah bukan milik mereka,
    dan yang memang bukan milik mereka.
  </h5>
  <br>
  <h5 class="card-text">
    Kemudian, seorang dokter yang menyelamatkan orang dari
    kematian tiba-tiba mendengar suara bisikan dari api yang
    berkobar, Sebuah suara halus terdengar di antara ranting
    dan daun yang terbakar. "Hanya api yang tidak terkekang
    yang dapat memurnikan dunia kotor ini." "Ambillah kayu
    yang merah membara ini, usirlah semua iblis dengan kayu
    ini."
  </h5>
  <br>
  <h5 class="card-text">
    Maka dokter itu pun mengambil tongkat merah itu dan
    membakar segala hal yang tercemar. Mereka yang telah
    meninggal dan tidak sanggup menanggung kesedihan mendalam,
    dan mereka yang dihantui oleh karma buruk dan bencana,
    Mereka semua akan terbakar menjadi abu dengan api ini, dan
    terselamatkan dari semua kemalangan dan kepedihan yang
    menyiksa mereka. Dan dokter yang menyalakan api-api
    tersebut? Konon dia juga telah berubah menjadi kupu-kupu
    dari abu yang indah.
  </h5>
  <br>
  <h5 class="card-text">
    Meski ritual ini telah terlupakan oleh waktu dan masa
    kedamaian, Orang-orang yang memiliki api dalam hatinya
    tetap bisa mendengar suara bisikan tersebut saat
    menghadapi kegelapan, "Hanya api yang tidak terkekang yang
    dapat memurnikan dunia kotor ini."
  </h5>`;
  }

  if (char == "Aqua") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/aqua.png");
    document.getElementById("weapon-name").innerText = "Aqua Simulacra";
    document.getElementById("type-weapon").innerText = "Bow";
    document.getElementById("val-atk").innerText = "542";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "88.2%";
    document.getElementById("passive-name").innerText = "The Cleansing Form";
    document.getElementById("passive-desc").innerHTML = `
    HP meningkat <span class="text-primary">16%</span>. Saat ada musuh di sekitar, maka DMG yang diakibatkan oleh Karakter pengguna Senjata ini meningkat <span class="text-primary">20%</span> baik saat Karakter-nya aktif, maupun hanya ada dalam party namun sedang tidak bertempur.`;
    document.getElementById("desc-weapon").innerText =
      "Warna busur ini tidak dapat diprediksi. Di bawah cahaya, ia menjadi warna biru bagaikan air dan terang berkilauan.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Dikatakan bahwa air tidak mempunyai wujud atau warna yang tetap, dan bisa setajam bilah pedang ataupun busur.
Di antara semua elemen yang ada di dunia, air adalah yang paling lembut, dan juga yang paling tajam.
Di antara semua senjata yang ada di dunia, busur halus ini memiliki kemampuan yang luar biasa untuk memanggil air.
  </h5>
  <br>
  <h5 class="card-text">
  "Ia dapat menyelimuti semua yang tidak murni, membasuh semua kotoran, sambil mempertahankan kemurniannya sendiri."
  "Ia dapat berubah ke berbagai bentuk, meniru berbagai kehidupan, berubah-ubah, namun tidak pernah kehilangan dirinya yang sebenarnya."
  "Terbagi, bagaikan arus yang tak bisa dihitung, begitu dekat namun tidak terurai. Bersatu seperti gelombang raksasa, tak terhindarkan dan tak terhentikan."
  "Banyak rahasia yang tidak dapat diuraikan dengan cahaya, bersembunyi di bawah cahaya birunya yang tembus pandang."
  "Inilah misteri air, bahkan ribuan pemikiran yang brilian pun gagal untuk mengungkapnya."
  </h5>
  <br>
  <h5 class="card-text">
  Sebelum dia mulai bekerja untuk bangsawan di Jade Chamber, dia pernah mendengar seorang senior yang berpengalaman menjelaskan ajaran ini padanya.
  Terumbu karang dan badai tersembunyi selalu mengintai skema dunia perdagangan dan bermain demi kekuasaan, di saat itu pula kerangka kapal memenuhi dasar laut.
  Mereka yang hatinya penuh dengan ambisi besar dan duduk di atas banyak sumber daya sering kali dapat berlayar dengan terampil dan aman,
  Menghindari persaingan dan kebencian yang selalu ada di mana-mana, melonjak melalui arus yang bergejolak.
  </h5>
  <br>
  <h5 class="card-text">
  "Itulah yang mereka katakan, tetapi aku tidak punya semangat seperti yang dimiliki para pemain besar tersebut, aku juga tidak punya kesabaran yang diperlukan."
  "Aku lebih memilih menikmati harumnya aroma teh di dalam ruangan, dan terkagum-kagum dengan berbagai kemungkinan tak terbatas dari lemparan dadu bersisi enam."
  "Aku telah menyusup ke banyak tempat persembunyian para penjahat di malam hari, dan menghancurkan rencana musuh dari negeri yang jauh di atas lututku."
  "Tetapi aku tidak melakukan hal-hal ini untuk membantu yang kuat dan menyingkirkan kekuatan para pembangkang, tetapi karena bagiku, air juga memiliki sumbernya tersendiri."
  </h5>
  <br>
  <h5 class="card-text">
  Demi mempertahankan kemurnian sumbernya, kelembutan air juga bisa menjadi seperti bilah pisau dan busur.
  Konspirasi dan bahasa kode terjalin dengan mudah di bawah bulan purnama biru yang pucat — inilah bentuk kebijaksanaan dari air. 
  </h5>`;
  }
  if (char == "Crane") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/crane.png");
    document.getElementById("weapon-name").innerText = "Crane's Echoing Call";
    document.getElementById("type-weapon").innerText = "Catalyst";
    document.getElementById("val-atk").innerText = "741";
    document.getElementById("name-bonus").innerText = "ATK";
    document.getElementById("val-bonus").innerText = "16.5%";
    document.getElementById("passive-name").innerText = "Cloudfall Axiom";
    document.getElementById(
      "passive-desc"
    ).innerHTML = `Setelah Plunging Attack Karakter yang mengenakan mengenai musuh, akan meningkatkan <span class="text-primary">28%</span> DMG yang diakibatkan oleh Plunging Attack seluruh anggota party di sekitar selama 20 detik; Saat Plunging Attack anggota party di sekitar mengenai musuh, akan memulihkan <span class="text-primary">2.5</span> Energy bagi Karakter yang mengenakan. Pemulihan Energy yang bisa didapatkan dengan cara ini adalah sekali setiap 0,7 detik. Saat Karakter yang mengenakan ada di dalam party namun sedang tidak berada di medan pertempuran, pemulihan Energy dengan cara ini tetap bisa terpicu.`;
    document.getElementById("desc-weapon").innerText =
      "Kipas pusaka yang dibentuk dari giok yang murni, dipenuhi dengan aura Kekuatan Adeptus kuno.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Itu sudah masa lalu yang lama sekali, saat kota pelabuhan yang makmur bahkan belum dimulai.
Meski adalah tempat kediaman Adeptus, juga tidak bisa luput dari kekacauan saat itu.
Tuan-tuan yang dipuja sebagai dewa di masa lalu bertempur untuk alasan mereka masing-masing,
Darah dan api, perpisahan dan pengkhianatan, menodai seluruh milik dunia ini.
  </h5>
  <br>
  <h5 class="card-text">
  Mereka yang kehilangan semuanya dalam kekacauan itu melarikan diri ke pegunungan, memohon perlindungan dari Adeptus.
  Yang mengejar dengan cepat di belakang orang-orang yang berhasil selamat itu, adalah monster tak terhitung jumlahnya yang sudah kehilangan kesadarannya.
  Tidak ada yang tahu nama mereka, tidak ada yang bisa mengira jumlahnya. Layaknya air bah yang menyapu bersih semua yang dilaluinya.
  Tuan lain yang pernah mereka puja sudah mangkat, raungan ganas menjadi tangisan terakhir mereka.
  </h5>
  <br>
  <h5 class="card-text">
  Tapi saat itu, manusia fana tidak tahu, bahwa tuan yang menguasai gunung dan tanah di tempat itu sudah mangkat,
  Di hadapan bencana yang mengamuk bagai air bah, yang memisahkan kehidupan dan kematian, hanyalah beberapa Vigilant Yaksha dari tempat itu.
  Setelah pertarungan dahsyat selama beberapa hari, baju putih menjadi merah, merah sampai menjadi hitam. Tapi monster tetap tidak habis jumlahnya ....
  </h5>
  <br>
  <h5 class="card-text">
  Dari zaman kuno, sudah banyak sekali versi dari kisah ini. Ada yang bilang, saat dunia sedang dalam batas kehancurannya,
  Adeptus dengan bulu biru dan putih menembus awan dan turun dari langit bagai angin kencang,
  Sendirian, agung, hening, dalam keagungannya, makhluk mulia ini tetap membela dan membimbing para leluhur ....
  Membalikkan keadaan dari yang semula tanpa harapan sama sekali, mengalahkan gelombang monster yang tiada habisnya ....
  </h5>
  <br>
  <h5 class="card-text">
  Ada yang bilang, di saat-saat yang paling berbahaya, dua bangau dari batu giok menerjang dari langit,
  Bersama dengan sigil sepadat hujan jatuh, dalam sekejap saja, seluruh kejahatan disapu bersih, bagai angin yang mengembus awan.
  Tapi saat cerah kembali, mana ada bangau giok? Yang ada cuma seorang Adeptus di angkasa, sambil memegang kipas di tangannya ....
  </h5>
  <br>
  <h5 class="card-text">
  Ada juga yang bilang, kalau kekuatan Adeptus tidak bisa dipahami oleh orang biasa. Saat itu, leluhur mereka hanya mendengar suara tangisan bangau,
Dan monster yang jumlahnya tak terbatas itu, langsung lenyap menjadi abu dalam sekejap saja, sirna begitu saja di bawah sinar matahari ....
  </h5>
  <br>
  <h5 class="card-text">
  Tanpa peduli mana versi yang benar, saat generasi Liyue berikutnya sedang membahas tentang Adeptus Cloud Retainer,
Pasti akan selalu tersirat rasa hormat dalam setiap perkataannya. Kalau tentang apa yang terjadi sebenarnya pada waktu itu ....
  </h5>
  <br>
  <h5 class="card-text">
  "Heh, masih tertarik dengan hal selama ini? Kamu benar-benar kurang kerjaan ya?"
"Ya sudah. Kebetulan diriku juga sedang senggang, diriku akan bercerita sedikit."
"Bawa kemari kursi goyang di sana. Diceritakan sih tidak panjang, mungkin belasan jam saja ...."
"Hei ... Kamu tadi mau coba kabur ya waktu diriku sedang lengah?!?" 
  </h5>`;
  }
  if (char == "Mist") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/mist.png");
    document.getElementById("weapon-name").innerText = "Mistsplitter Reforged";
    document.getElementById("type-weapon").innerText = "Sword";
    document.getElementById("val-atk").innerText = "674";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "44.1%";
    document.getElementById("passive-name").innerText = "Mistsplitter's Edge";
    document.getElementById("passive-desc").innerHTML = `
    Mendapatkan <span class="text-primary">12%</span> Elemental DMG Bonus untuk setiap elemen dan mendapatkan kekuatan Mistsplitter's Emblem. Pada lapisan level 1/2/3, Mistsplitter's Emblem memberikan <span class="text-primary">8/16/28%</span> Elemental DMG Bonus untuk tipe Elemen Karakter tersebut. Karakter akan mendapatkan 1 lapis Mistsplitter's Emblem untuk setiap skenario berikut: Saat Normal Attack mengakibatkan Elemental DMG (lapisan bertahan 5 detik), saat melancarkan Elemental Burst (lapisan bertahan 10 detik). Selain itu, Karakter juga akan mendapatkan 1 lapis saat Energy kurang dari 100% (lapisan ini akan menghilang saat Energy penuh). Durasi setiap lapis dihitung terpisah.
    `;
    document.getElementById("desc-weapon").innerText =
      'Pedang yang menyala dengan cahaya ungu yang dahsyat. Ia dinamakan "Reforged" karena pernah patah di masa lalu.';
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Salah satu dari banyak pedang yang diberikan Shogun pada Hatamoto. Dikatakan bahwa pedang itu dapat memanggil kekuatan petir dan membelah segalanya menjadi dua termasuk gunung, angin, malam, dan bahkan kabut.
Pedang itu pernah hancur berkeping-keping. Setelah ditempa ulang, tubuh sang pedang dihiasi dengan garis-garis yang menyerupai aliran awan.
  </h5>
  <br>
  <h5 class="card-text">
  Lagu tersebut menyanyikan, "Arataki dari gerbang Tenshukaku, Iwakura si Penerus, Kitain si Serpent, dan Takamine si Mistsplitter".
  Anak-anak yang menyukai seni bela diri menyandingkan seniman bela diri yang terkenal dalam sejarah. Lalu "Takamine si Mistsplitter" adalah salah satunya.
  Ia pernah bepergian bersama seorang pendeta, dan menggunakan Mistsplitter untuk membunuh banyak monster dan Tatarigami.
  Ia juga mempelajari kemampuan memanah dari Yougou Tengu, dan meneruskan pengetahuan ini kepada orang yang disukainya.
  Namun, teknik pedang rahasia — Mistsplitter, tidak memiliki penerus, dan saat ini hanya tersisa di dalam manuskrip, gambar, dan dongeng.
  </h5>
  <br>
  <h5 class="card-text">
  Di akhir hidupnya, dia tetap pada posisi sebagai salah satu dari yoriki milik Shogun dan berperang melawan pasukan kegelapan.
  </h5>
  <br>
  <h5 class="card-text">
  Jika dia tidak meninggalkan busur kesayangannya sebagai taruhan, mungkin kondisinya akan berbeda.
  Tapi penjudi sejati tidak boleh menyesal, tidak boleh peduli tentang "bagaimana jika", dan tidak pernah menyesal tentang "andai saja".
  Musuh datang membanjiri layaknya kabut. Dan dia terus menebas dengan teknik yang bisa membuyarkan kabut malam yang brutal.
  Selama serangannya cukup cepat, kabut gelap dapat dihilangkan, dan cahaya akan terlihat.
  </h5>
  <br>
  <h5 class="card-text">
  "Asase, janji kita... tidak, aku tidak akan kalah dalam taruhan ini."
  "Aku pasti akan kembali, dan mengambil busur yang kupertaruhkan. Aku akan memenangkan masa depan sebagai hadiahku!"
  </h5>
  <br>
  <h5 class="card-text">
  Seperti rantai petir yang tiada akhir, dia dan Mistsplitter bersama-sama membunuh iblis yang tak terhitung jumlahnya.
  Tapi, pedang tidak sekuat ahli pedang, yang akan rusak secara bertahap.
  Dan dia tenggelam dalam kabut gelap yang tebal...
  Pada akhirnya, hanya sebagian patahan pedang yang diambil untuk ditempa ulang, yang mewarisi nama Mistsplitter.
  </h5>
  <br>
  <h5 class="card-text">
  Seolah memegang benang laba-laba dalam kegelapan, prajurit itu memegang gagang pedang yang patah itu dengan erat.
  Dalam kabut gelap, dia masih keras kepala terus mengingatkan dirinya sendiri:
  Hasil dari taruhan kita masih belum ditentukan. Aku harus kembali ke Asase... 
  </h5>`;
  }
  if (char == "Thou") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/thousand.png");
    document.getElementById("weapon-name").innerText =
      "A Thousand Floating Dreams";
    document.getElementById("type-weapon").innerText = "Catalyst";
    document.getElementById("val-atk").innerText = "542";
    document.getElementById("name-bonus").innerText = "Elemental Mastery";
    document.getElementById("val-bonus").innerText = "265";
    document.getElementById("passive-name").innerText =
      "A Thousand Nights' Dawnsong";
    document.getElementById("passive-desc").innerHTML = `
    Setiap Karakter lain dalam party akan memberikan efek buff kepada pengguna senjata ini berdasarkan apakah jenis elemen-elemen mereka sama dengan pengguna senjata ini atau tidak. Jika elemennya sama: Elemental Mastery meningkat <span class="text-primary">32</span> poin; Jika elemennya berbeda: meningkatkan <span class="text-primary">10%</span> Bonus DMG Elemental untuk tipe elemen pengguna senjata ini. Setiap jenis dari efek di atas dapat ditumpuk hingga 3 lapis. Selain itu, Elemental Mastery Karakter lain di dalam party yang berada di sekitar (selain daripada pengguna senjata ini) meningkat <span class="text-primary">40</span> poin. Saat efek ini dihasilkan oleh lebih dari satu Senjata dengan nama yang sama, efek akan bisa ditumpuk.
    `;
    document.getElementById("desc-weapon").innerText =
      "Lampu ini telah menerangi mimpi-mimpi yang melayang lebih dari seribu malam, dan dalam cahaya hijau zamrudnya mengalir lagu yang berasal dari zaman kuno.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    "Ada masa kehidupan dan kematian bagi seluruh makhluk hidup, bagaikan roda yang berputar menyerupai siang dan malam."
"Semoga cerita-cerita dari dalam lampu ini memberikan mimpi yang telah kamu harapkan."
  </h5>
  <br>
  <h5 class="card-text">
  Di saat istana mengalami keruntuhan, seorang gadis yang tidak pernah mengenal "cahaya" mendengar bisikannya di dalam mimpi.
  Dengan tekad yang penuh, anak yang pergi dengan mimpinya melihat belas kasihannya dalam air mata.
  </h5>
  <br>
  <h5 class="card-text">
  Dari pantulan cahaya bulan yang tenang, lentera zamrud mengisahkan bayangan bintang-bintang dan melodi abadi —
  Seorang penari dengan mata berwarna zamrud mencium kain sutra yang meneteskan nektar dengan ringan, ikan-ikan berwarna-warni berputar-putar di air jernih seperti mutiara,
  Seorang musisi cahaya bulan memandu obor Jinni, menyanyikan lagu-lagu benteng berlapis emas di lautan pasir dan senar berwarna delima,
  Seorang pelaut yang hebat memulai perjalanan besar, tidak mencari apa pun selain suara nyanyian dari mimpinya dan taman yang bermekaran di pantai seberang.
  </h5>
  <br>
  <h5 class="card-text">
  Istana yang runtuh diterangi oleh cahaya yang sunyi, dikelilingi oleh pemandangan mimpi yang menakjubkan dari seribu dunia,
  Angin hutan yang lembut membersihkan debu yang berkumpul di jalan pulang, membimbing anak-anak yang hilang menjauhi istana yang tidak lagi tenang seperti dulu.
  Saat cahaya fajar menyusup melalui celah-celah di antara dedaunan, lampu zamrud yang menceritakan kisah mimpi seribu malam mulai memudar:
  Hanya ketika dia melihat ke belakang, berdiri di antara mimpi dan kenyataan, gadis buta itu menyadari bahwa tidak ada jalan untuk pulang, karena fajar telah menyingsing.
  </h5>
  <br>
  <h5 class="card-text">
  Setelah itu, lampu di dalam mimpinya tidak pernah bersinar kembali, dan aliran waktu menelan mimpi malam yang lalu,
  Tapi burung-burung masih bernyanyi saat mereka memeluk fajar yang menyingsing. Mereka menyanyikan kisah-kisah yang mekar dengan cemerlang seperti ladang bunga,
  Membawa keberanian, harapan, dan kebahagiaan bagi anak-anak yang tidak pernah memiliki kesempatan untuk menyaksikan mimpi,
  Menenun lagu seribu malam yang tak berakhir, menerangi momen-momen menjelang fajar yang ditunggu-tunggu.
  </h5>
  <br>
  <h5 class="card-text">
  Setelah melintasi seribu mimpi, sampai burung bulbul tidak lagi bernyanyi, sampai matahari yang memudar terbenam ke bawah cakrawala sekali lagi,
  Pengembara itu melihat di ujung perjalanan lampu zamrud itu, tanah tua nan jauh di sana,
  Di mana mawar yang diselimuti embun masih bergoyang lembut diterpa angin yang berembus, menunggunya untuk menceritakan kisah baru:
  "Meskipun kenangan malam yang lalu telah memudar, kita akan terus menyanyikan lagu pujian untuk mimpi indah yang belum terungkap." 
  </h5>`;
  }
  if (char == "Cal") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/calamity.png");
    document.getElementById("weapon-name").innerText = "Calamity Queller";
    document.getElementById("type-weapon").innerText = "Polearm";
    document.getElementById("val-atk").innerText = "741";
    document.getElementById("name-bonus").innerText = "ATK";
    document.getElementById("val-bonus").innerText = "16.5%";
    document.getElementById("passive-name").innerText = "Extinguishing Precept";
    document.getElementById("passive-desc").innerHTML = `
    Mendapatkan <span class="text-primary">12%</span> Elemental DMG Bonus untuk semua elemen. Setelah melancarkan Elemental Skill, akan mendapatkan efek Consummation yang berlangsung selama 20 detik. Efek ini akan meningkatkan <span class="text-primary">3.2%</span> ATK setiap detik dan dapat ditumpuk hingga 6 kali. Saat Karakter yang mengenakan Senjata ini berada dalam party tapi tidak di medan pertempuran, maka peningkatan ATK Consummation akan menjadi dua kali lipat.
    `;
    document.getElementById("desc-weapon").innerText =
      "Sebuah senjata tajam yang diciptakan dari kristal aneh. Cahaya birunya yang remang-remang seakan membisikkan cerita masa lalu yang tiada berujung.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Katanya Polearm ini dibuat dari bahan-bahan yang bukan berasal dari dunia ini.
Senjata ini sudah menjadi piala bergulir di tangan orang-orang kesepian yang berusia pendek,
dan sudah menjadi saksi dari awal dan akhir pembunuhan, serta darah dan daging monster.
  </h5>
  <br>
  <h5 class="card-text">
  Konon ada seorang pengusir roh jahat yang pernah datang ke jurang besar dengan pasir yang mengkristal,
  Dan masuk ke kedalaman air untuk mengambil batu kristal malapetaka yang berwarna seperti air,
  Dia kemudian menyewa seorang pengrajin untuk menempanya menjadi senjata, yang kemudian dinamakan "Calamity Queller."
  </h5>
  <br>
  <h5 class="card-text">
  "Bila suatu saat malapetaka datang menghadang, senjata ini pasti dapat menenangkannhya."
  Suku yang mencari nafkah di pegunungan yang terjal tidak suka menyombongkan diri ataupun mengkritik.
  Tapi karena tidak pernah ada kontrak yang ditandatangani, dan tidak ada biaya apa pun, maka tidak ada salahnya menerimanya.
  </h5>
  <br>
  <h5 class="card-text">
  Saat pasukan monster berhamburan di jurang dan menodai tanah merah menjadi hitam,
  Dinding pertahanan pasukan Millelith dan pasukan kegelapan saling bertikai, pasukan berkuda yang meninggalkan kawanannya juga tewas.
  Seperti bintang yang menatap dengan dingin, Calamity Queller bersinar terang di tengah kekacauan ....
  </h5>
  <br>
  <h5 class="card-text">
  Pada saat matahari terbenam menerobos awan, lumpur gelap tenggelam kembali ke kedalaman jurang.
  Calamity Queller juga hilang ke dalam mengikuti Yaksha yang mengayunkannya, kembali ke dalam kesunyian.
  Sejak saat itu, orang-orang yang memakai tombak ini akan mengalami nasib yang sama,
  Namun, bagi mereka yang berperang tanpa dieprintah, atau yang melindungi rakyat tanpa perlu bersumpah,
  Nasib seperti itu bukanlah sesuatu yang harus disesali ....
  </h5>
  <br>
  <h5 class="card-text">
  Ada juga yang mengatakan kalau tombak ini pernah dipinjam dari seseorang.
  Dan menyaksikan perseteruan antar dua sahabat di dalam gua yang terkikis oleh air dingin. 
  </h5>`;
  }
  if (char == "Ver") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/verdict.png");
    document.getElementById("weapon-name").innerText = "Verdict";
    document.getElementById("type-weapon").innerText = "Polearm";
    document.getElementById("val-atk").innerText = "674";
    document.getElementById("name-bonus").innerText = "CRIT Rate";
    document.getElementById("val-bonus").innerText = "22.1%";
    document.getElementById("passive-name").innerText =
      "Many Oaths of Dawn and Dusk";
    document.getElementById("passive-desc").innerHTML = `
    ATK meningkat <span class="text-primary">20%</span>. Saat Karakter dalam party mendapatkan Elemental Shard dari reaksi Crystallize, Karakter yang mengenakannya akan mendapatkan 1 "Seal", yang dapat meningkatkan <span class="text-primary">18%</span> DMG Elemental Skill. Seal dapat berlangsung selama 15 detik dan hanya 2 Seal yang dapat tercipta dalam waktu bersamaan. Semua Seal akan dihapus 0,2 detik setelah Elemental Skill Karakter yang mengenakan mengakibatkan DMG.
    `;
    document.getElementById("desc-weapon").innerText =
      "Pedang yang pernah digunakan oleh gadis bangsawan yang meninggalkan nama keluarganya. Dulu, senjata ini ternoda oleh cairan darah dari musuh dan kekasihnya.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    "Dengar ya, Leticia sayang. Ingatlah kalau kamu itu putri tertua Keluarga Randolph."
    "Kamu harus tahu, saat keluarga bangsawan kita duduk, kapal negara akan bersandar ke arah kita."
    "Saat terjatuh, kita akan menimpa dan menghancurkan banyak pemukiman, beserta para warga di dalamnya."
    "Jadi, dengarkan baik-baik, Leticia sayang."
    "Kamu harus menjaga kemurnian aura dan penampilanmu, jangan mudah mengekspresikan kemarahan, kesedihan, ataupun kebahagiaan."
    "Karena nama keluarga kita bisa memberikan kekayaan bagi rakyat jelata, atau juga bisa mengirimkan mereka ke Fleuve Cendre."
  </h5>
  <br>
  <h5 class="card-text">
  Meski ayah bilang begitu, sebelum jadi seorang bangsawan, seorang gadis pada akhirnya tetaplah seorang gadis:
  Di tangannya tidak ada belenggu abu batu bara dan oli mesin, tapi di dalam hatinya akan mengidamkan "petualangan".
  Dengan merahasiakannya dari ayah, kakak, dan pelayannya, dia menyamar dan pergi ke kota bawah tanah, tempat sinar matahari dan hujan tidak terlihat.
  Hanya untuk melihat-lihat kehidupan rakyat jelata yang tidak bisa menjadi tuan atas takdirnya sendiri.
  Seperti ini mungkin lebih menarik dibandingkan sihir Parsifal! Gadis itu pun diam-diam bersemangat.
  Tapi petualangannya justru berbeda dari ekspektasinya. Mungkin juga, seakan tidak ada yang mengaturnya.
  Yang dia dapatkan bukanlah cerita yang bisa ditertawakan bersama teman-teman bangsawan seumurnya di pesta.
  Saat bahaya tak terlihat seperti musik, kebohongan, atau arak beracun siap untuk menyerang ....
  </h5>
  <br>
  <h5 class="card-text">
  "Aduh, nona muda keluarga mana ini, tidak disangka dia merendahkan dirinya untuk datang ke Fleuve Cendre."
  Bayangan menakutkan yang terpancar dari segala arah pun hilang oleh seberkas cahaya lembut dan familier.
  "Kamu .... "
  Namanya sudah ada di ujung lidahnya, tapi yang dia tanyakan malah bagaimana cara dia mengenali penyamarannya.
  "Anda tidak terbiasa berbohong sedikit pun. Bukannya ini sama dengan mengakui identitas Anda sebagai orang luar?"
  "Lagi pula, pakaian Anda tidak terkena abu batu bara, oli mesin, ataupun darah."
  "Oh iya, dari cara Anda berjalan, sepertinya masih belum terlalu terbiasa memakai celana ya."
  </h5>
  <br>
  <h5 class="card-text">
  Saat bertanya kenapa Reed yang dia kenal bisa berjalan bebas di Fleuve Cendre, seorang pria muda berkata:
  "Aku harap Anda bisa setuju. Ayah, kakak, dan pelayan keluarga Anda tidak perlu tahu hal yang terjadi di sini."
  "Seperti yang dikatakan bos, biar semua yang terkena sinar mentari menjadi milik mereka, dan Fleuve Cendre adalah milik kita."
  "Leticia sayang. Untuk sementara, harap lupakan statusmu sebagai putri tertua Keluarga Randolph."
  "Tolong, sebagai seorang manusia, ikuti aku, gunakan kedua matamu yang jernih dan tak pernah kelilipan debu itu."
  "Lihatlah dunia tempat tinggal kompatriot kita yang memiliki warna darah yang sama, keberanian, dan juga cinta."
  Pada akhirnya ini masih tetap berbeda daripada petualangan yang dia nantikan. Dan juga, ini suratan takdir.
  Dia mengalami cerita yang tidak boleh ditertawakan bersama teman-teman bangsawan seumurnya dan pelayan di pesta ....
  </h5>
  <br>
  <h5 class="card-text">
  "Leticia, aku menghargai jiwamu yang mulia."
  "Kita tidak akan lagi menjadi kapak yang menebang pohon."
  "Kalau suatu hari nanti, aku menikmati kemuliaan duniawi."
  "Saat itu, biar kamu saja yang memutuskan takdirku ...."
  </h5>
  <br>
  <h5 class="card-text">
  ....
  Saat dia bertemu lagi dengan ayahnya beberapa tahun kemudian, dia sudah dikenal dengan nama samaran bunga mawar.
  Dia tidak lagi terbiasa dipaksa berpakaian mewah, malahan terbiasa dengan beratnya kapak perang.
  Tapi dia tidak terbiasa mengingat ayahnya yang baik hati dan mengagumkan menjadi tua dan lemah seperti ini.
  </h5>
  <br>
  <h5 class="card-text">
  "Ayahku terkasih, aku sudah membuat ikrar bersama dengan orang yang kucintai, sumpah kepada orang-orang yang kukasihi."
  "Bukti bahwa aku masih hidup, artinya darah keluarga kita masih belum punah."
  "Aku juga tidak akan membiarkan nama keluarga Randolph tercemar karena aku."
  </h5>
  <br>
  <h5 class="card-text">
  "Leticia sayang. Tidak pernah sehari pun aku tidak menyalakan lilin untukmu."
  "Bahkan kalau kamu mau menanggalkan nama keluarga Randolph, hubungan kita masih tetap ayah dan putri."
  "Sekarang, permainan yang tak berarti ini sudah berakhir. Ayo pulang ke rumah."
  "Sejak awal anakmu tidak bersalah, aku tidak akan mengorbankan darah dagingmu begitu saja."
  "Tentang suamimu, aku sedikit banyak juga bisa menggunakan sihir Randolph ...."
  </h5>
  <br>
  <h5 class="card-text">
  ....
  Tapi pada akhirnya dia teringat di dalam mimpinya. Bombardir meriam kapal perang sama sekali tidak menggoyahkan kami.
  Jalan gelap tempat para anjing menyusup tidak boleh diketahui oleh orang luar. 
  </h5>`;
  }
  if (char == "Crimsonmoon") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/crimsonmoon.png");
    document.getElementById("weapon-name").innerText =
      "Crimson Moon's Semblance";
    document.getElementById("type-weapon").innerText = "Polearm";
    document.getElementById("val-atk").innerText = "674";
    document.getElementById("name-bonus").innerText = "CRIT Rate";
    document.getElementById("val-bonus").innerText = "22.1%";
    document.getElementById("passive-name").innerText = "Ashen Sun's Shadow";
    document.getElementById("passive-desc").innerHTML = `
    Saat Charged Attack mengenai musuh, memberikan Bond of Life sebesar 25% Max HP, efek ini dapat terpicu sekali setiap 14 detik. Selain itu, saat Karakter yang mengenakan memiliki Bond of Life, DMG yang diakibatkan meningkat<span class="text-primary">12%</span>
    ; Jika nilai Bond of Life lebih tinggi atau sama dengan 30% Max HP, maka akan mendapatkan lagi tambahan DMG Bonus <span class="text-primary">24%</span>
    `;
    document.getElementById("desc-weapon").innerText =
      "Senjata tajam dengan warna merah terang seperti bulan merah. Dikatakan bahwa zaman dulu di sebuah dinasti kuno, senjata ini pernah menjadi salah satu alat upacara yang menghubungkan dua dunia, namun kini sudah tidak ada lagi yang mengingat kepercayaan dan ritual di masa itu.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    "Oh, Pemimpin Bangsawan Khaenri'ah, bayangan bulan merah telah lama jatuh ke jurang langit, darahmu juga akhirnya menjadi buta."
    "Oh, penolong yang baik hati yang memimpin kamu, jika kamu masih memiliki belas kasihan terhadap anak manusia, maka minumlah anggur di gelas ini."
  </h5>
  <br>
  <h5 class="card-text">
    Pada masa kuno, ketika matahari kegelapan belum pernah menyinari bumi, suku yang terhormat dan kuno memerintah kerajaan yang luas itu.
    Para imam yang keras kepala meyakinkan raja yang terdiam di singgasananya bahwa sisa-sisa Bulan Merah di atas langit adalah penguasa segala sesuatu.
    Karena cahaya bulan mengalir di bawah daging dan darah manusia, bersembunyi di kegelapan dasar jurang, juga muncul dari bulan merah.
    Karena itu, raja manusia harus menyandang nama Bulan Merah. Mengikuti cahaya dan api dari kedua dunia, menentukan takdir yang tidak pasti.
    Maka orang-orang yang haus untuk melampaui batas ini membangun menara-menara megah yang tak terbatas, dan berdoa kepada bulan merah yang telah lama menghilang supaya memberikan mereka keselamatan.
    Hingga para ahli astrologi yang dianggap ekstrem melihat asal-usul seluruh takdir dunia dari bayang-bayang langit palsu,
    Sampai kecurigaan dan kemarahan yang tak terpadamkan seperti api liar membakar seluruh tanah tanpa mimpi, dan akhirnya membakar istana tinggi di bawah sinar bulan ....
  </h5>
  <br>
  <h5 class="card-text">
    Ketika matahari kegelapan menyelimuti dunia, nama Bulan Merah telah lama mengalir bersama merah yang mengalir, hanya julukan Bulan Terkutuk yang tersisa di atas bekas kotoran.
    Entah yang kotor yang terkontaminasi oleh kutukan atau yang bersih yang belum terkontaminasi oleh takdir, tidak ada lagi yang mengaku sebagai pengikut dari sisa-sisa bulan.
    Hanya beberapa orang yang selamat dari bencana ini. Mereka bersembunyi di bayang-bayang yang tidak terkena sinar matahari kegelapan, berharap Bulan Merah akan membalaskan dendam mereka ....

  </h5>
  <br>
  <h5 class="card-text">
    Namun pembalasan yang dijanjikannya tak pernah datang, dan malapetaka yang sama menghancurkan kebodohan dan kesombongan mereka.
    Ketika kehancuran datang lagi, hanya cahaya bulan yang menyeringai yang menyinari bayangan matahari yang telah lama terbakar menjadi abu.
  </h5>
  <br>
  <h5 class="card-text">
  "Takdir, takdir, takdir yang mengerikan dan pucat, kenapa kamu begitu rendah di hadapan tirani yang kejam?"
  "Kalau sisa-sisa Bulan Terkutuk itu sudah menjebakmu ke dalam kematian, maka apa artinya dendam darah di masa lalu?"
  "Kalau takdir yang dia tenun itu memang bertujuan untuk mengejek kita, kita juga boleh diam saja dan mengejek takdir itu."
  "Sampai bayangan terakhir dari matahari yang membakar dunia lama, sampai Bulan Merah menyaksikan fajar yang suci." 
  <br>
  <h5 class="card-text">
  
  </h5>`;
  }
  if (char == "Beacon") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/beacon.png");
    document.getElementById("weapon-name").innerText =
      " Beacon of the Reed Sea ";
    document.getElementById("type-weapon").innerText = "Claymore ";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "CRIT Rate";
    document.getElementById("val-bonus").innerText = "33.1%";
    document.getElementById("passive-name").innerText = "Desert Watch";
    document.getElementById("passive-desc").innerHTML = `
    Setelah Elemental Skill mengenai musuh, ATK meningkat <span class="text-primary">20%</span>.
    selama 8 detik; Setelah menerima DMG, ATK meningkat <span class="text-primary">20%</span>.
    selama 8 detik. Kedua efek di atas tetap bisa terpicu meskipun Karakter yang mengenakan Senjata ini ada dalam party namun sedang tidak berada di medan pertempuran. Selain itu, saat tidak dilindungi perisai, Max HP meningkat<span class="text-primary">32%</span>.
    `;
    document.getElementById("desc-weapon").innerText =
      "Pedang besar berujung datar yang dirancang agar cocok dipakai sebagai senjata raja kuno atau instrumen upacara.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Di zaman ketika kerajaan-kerajaan bermunculan seperti jamur dan runtuh seperti istana pasir, ketika pahlawan bangkit seperti bintang dan jatuh seperti komet,
    Setelah Raja Pasir tenggelam dalam padang pasir bersama mimpinya, seorang penyair pengembara buta dengan asal-usul yang dulunya mulia,
    dulu pernah berkelana di lautan padang pasir yang luas dan menghimpun puisinya dari orang-orang padang pasir yang terpencar.

  </h5>
  <br>
  <h5 class="card-text">
  Dia mendengar kabar kejatuhan tanah airnya, dan pangeran yang membutakan dirinya akhirnya menggulingkan takhtanya yang berat.
  Dia mendengarkan legenda tentang bagaimana para penari membantu satu sama lain untuk menjadi raja dan melenyapkan mereka dengan badai pasir.
  Dia mendengarkan elegi tentang air mata yang berubah menjadi pasir yang mengalir, serta ratapan bangsa yang runtuh menjadi desa dan suku.
  Dia mendengarkan kisah kematian sang pangeran pengembara, takdir pedangnya, dan pembunuhnya yang melarikan diri jauh ke dalam hutan ....
  Sekarang, lagunya yang tak terkendali seperti air tapi menarik seperti pasir yang mengalir, semuanya berakar dalam hatinya.
  Di padang pasir yang membara, mimpi padang pasir yang telah lama sirna muncul dari penggalan lagu —

  </h5>
  <br>
  <h5 class="card-text">
  "Di seberang lautan bukit pasir, dulunya berdirilah kediaman Raja Deshret."
  "Setiap jalannya bertatahkan emas, semua jalurnya menuju satu singgasana."
  "Bagaikan mata emas dan hati yang mulia, Raja Deshret dulunya adalah ujung dari semua jalan ...."
  "Tapi pada akhirnya mimpi emas yang membara terbangun, dan matanya yang besar menatap matahari dan pasir dengan penuh pesona."
  "Takdir bagaikan pasir waktu yang tenggelam jauh ke dalam kegelapan, dan kerajaan pasir yang mengalir hancur, hanya menyisakan debu emas."

  </h5>
  <br>
  <h5 class="card-text">
  Pendulum takdir tidak pernah berhenti untuk kebodohan raja ataupun rakyat jelata.
  Bangsa-bangsa kecil dan rajanya yang hina, pada akhirnya semuanya ditelan pasir yang mengalir ....
  Dahulu kala, pangeran yang paranoid mendirikan benteng di luar perbatasan hutan untuk melindungi kehormatan pasir.
  Tapi pada akhirnya tentara dan rakyatnya tercerai-berai, dan namanya hilang seperti angin yang bertiup melewati pasir.
  Di atas reruntuhan kolam, tempat senjata raja yang digunakan untuk mengeksekusi penjahat di masa lalu digali,
  berkumpullah orang-orang yang telah kehilangan mimpi pasir, namun masih berpegang erat pada lautan pasir.
  Atas nama Reed Sea yang tidak pernah ada, menggemakan mimpi yang pernah dijanjikan .... 
  </h5>

  <br>
  <h5 class="card-text">

  </h5>`;
  }
  if (char == "Amos") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/amos.png");
    document.getElementById("weapon-name").innerText = "Amos Bow ";
    document.getElementById("type-weapon").innerText = "Bow";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "ATK";
    document.getElementById("val-bonus").innerText = "49.6%";
    document.getElementById("passive-name").innerText = "Strong-Willed";
    document.getElementById("passive-desc").innerHTML = `
    Meningkatkan DMG dari Normal dan Charged Attack sebesar <span class="text-primary">12%</span>.
    Setelah Normal atau Charged Attack ditembakkan, DMG meningkat sebesar <span class="text-primary">8%</span>
    lebih lanjut setiap 0,1 detik panah di udara hingga 5 kali.
    `;
    document.getElementById("desc-weapon").innerText =
      "Busur kuno yang masih menyimpan kekuatan walaupun pemiliknya telah lama hilang. Menarik kekuatan dari semua orang dan segala yang ada di dunia, dan semakin jauh seseorang dari keinginan hatinya, semakin kuat pula busur tersebut.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Pada zaman kuno, saat dataran masih berupa tanah tandus.
    Seorang gadis, bertelanjang kaki di salju, mengikuti jejak Lord of the Tower.

  </h5>
  <br>
  <h5 class="card-text">
  Dulunya dia adalah kekasih gadis itu, namun angin yang kejam tidak akan pernah mengerti betapa rapuhnya manusia.
  Dulunya dia adalah musuh gadis itu, namun perburuannya lebih daripada sekadar balas dendam sederhana.
  </h5>
  <br>

  <h5 class="card-text">
  "Aku memimpikan ombak dan pasir halus, aku memimpikan hutan hijau dan bumi"
  "Aku bermimpi tentang boar bermain di semak-semak beri, aku bermimpi tentang menara yang menjulang"
  Itulah kata yang diucapkannya kepada Raja Dewa dengan suara lirih namun tetap tak didengar.
  </h5>
  <br>

  <h5 class="card-text">
  Terbangun dari cinta buta, dia menyadari hanya dialah satu-satunya yang berbicara dengan ketulusan:
  Karena dia berbicara tentang cinta, tetapi hanya disertai angin yang tajam bagai pedang.
  Matanya menatap orang-orangnya di tengah badai yang menderu.
  Percaya bahwa itu adalah simbol kekaguman dan kepatuhan yang tak tergoyahkan.
  </h5>
  <br>

  <h5 class="card-text">
Itu era di mana tirani Angin Utara melawan Raja Menara,
Pemburu wanita itu mengira dirinya dicintai oleh tuan dari para budak.
Di akhir peperangan, dan saat angin pemberontakan pertama bertiup,
Dengan ditemani seorang pemuda tanpa nama, seorang elf, dan seorang kesatria,
Dia memanjat menara yang menjulang tinggi dan menantang sang Raja yang eksentrik tersebut.
"Akhirnya, aku bisa mendapatkan perhatiannya"
  </h5>
  <br>

  <h5 class="card-text">
  Namun, sampai saat dia menembakkan panah padanya,
  Sampai saat angin yang menderu akan mencabiknya,
  Baru pada saat itulah dia menyadari jarak yang ada di antara mereka.
  </h5>`;
  }
  if (char == "Engulfing") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/engulfing.png");
    document.getElementById("weapon-name").innerText = "Amos Bow ";
    document.getElementById("type-weapon").innerText = "Polearm";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "Energy Recharge";
    document.getElementById("val-bonus").innerText = "55.1%";
    document.getElementById("passive-name").innerText =
      "Timeless Dream: Eternal Stove";
    document.getElementById("passive-desc").innerHTML = `
    Mendapatkan Bonus ATK sebesar <span class="text-primary">28%</span>
    dari jumlah Energy Recharge di atas angka 100%. Maksimum bisa meningkatkan <span class="text-primary">80%</span>
    ATK dengan cara ini. Melancarkan Elemental Burst akan meningkatkan Energy Recharge sebesar  <span class="text-primary">30%</span> selama 12 detik.
    `;
    document.getElementById("desc-weapon").innerText =
      "Naginata yang digunakan untuk memotong rumput. Pasukan yang berani berdiri di hadapan senjata ini pasti akan tertebas seperti rumput liar...";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Naginata adalah senjata mematikan yang dengannya sampah yang berserakan dapat dipotong.
    Dan orang yang menggenggam naginata itu adalah orang yang menjaga jalan menuju keabadian.
    Ketika seorang yang berdiri tinggi di atas awan badai memandang dunia fana yang sangat dia cintai,
    Melihat perselisihan sepele beserta obsesi sesaatnya...
    Perselisihan seperti itu berasal dari keterikatan yang tidak perlu dan nafsu yang tidak terkendali — keduanya jelas merupakan musuh dari keabadian.
    Benalu liar yang mengganggu dunia yang tidak berubah akan dibasmi oleh kilat.
  </h5>
  <br>

  <h5 class="card-text">
"Kalau begitu — Keabadian macam apa yang dipantulkan dari mata ███?"
Jadi tanyalah pendeta yang minum dan mabuk anggur dengannya di bawah pohon sakura dalam ingatan yang masih jelas itu.
  </h5>
  <br>

  <h5 class="card-text">
  Sungguh pertanyaan yang tidak berguna.
  Meskipun jawaban yang dia berikan kepada mereka terlupakan karena tegukan alkohol,
  Dia telah mendapatkan jawabannya berkali-kali melalui ingatan itu.
  Buah harus ditipiskan agar meningkat kualitasnya, dan tanaman yang digunakan dalam pewarna harus dipangkas bunganya.
  Tidak ada setitik kotoran pun yang diizinkan di dalam surga yang abadi.
  </h5>
  <br>

  <h5 class="card-text">
  "Ah, tapi meski begitu..."
  "Menggunakan sinar dari pedang besar itu untuk mencabut semua obsesi dan melucuti semua kemungkinan bagi mimpi-mimpi untuk berakar dan layu secara alami..."
  "Dunia yang tenang di mana tidak ada perselisihan, tidak ada keuntungan, maupun kerugian... Ini akan menjadi dunia yang terlupakan, yang akan menghilang dengan sendirinya."
  Di jantung keabadian, teman lama masih tergambar dengan jelas, aroma sakura masih tercium begitu segar, seolah-olah mereka semua masih bersama dengan diri sendiri di masa kini.
  </h5>
  <br>

  <h5 class="card-text">
  Tapi aku tidak akan pernah melupakanmu, sama seperti aku tidak akan melupakan hal-hal yang hilang selama ribuan tahun.
  Meski begitu...
  </h5>
  <br>

  <h5 class="card-text">
  Aku telah menyaksikan penghancuran gelap gulita yang menghabisi orang-orang yang berharga baginya,
  Bagaimana mungkin dia tidak melihat natur dari hidup dan mati yang tidak dapat dipahami itu sendiri, sebagai musuh bebuyutannya?
  Tapi karena tidak ada yang bisa mengubah dunia menjadi kekal, dan tandusnya permainan ini,
  Maka biarlah euthymia abadi di dalam hatinya dia bawa menuju bangsa yang dia cintai. 
  </h5>`;
  }
  if (char == "Everlasting") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/everlasting.png");
    document.getElementById("weapon-name").innerText = "Amos Bow ";
    document.getElementById("type-weapon").innerText = "Catalyst";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "HP";
    document.getElementById("val-bonus").innerText = "49.6%";
    document.getElementById("passive-name").innerText = "Byakuya Kougetsu";
    document.getElementById("passive-desc").innerHTML = `
    Meningkatkan <span class="text-primary">10% </span>.
    Healing Bonus. Meningkatkan DMG Normal Attack sebesar  <span class="text-primary">1%</span>
    dari Max HP Karakter yang mengenakan senjata ini. Setelah melancarkan Elemental Burst, Normal Attack yang mengenai musuh akan memulihkan 0,6 Energy. Efek pemulihan Energy ini berlangsung selama 12 detik dan dapat terpicu setiap 0,1 detik.
    `;
    document.getElementById("desc-weapon").innerText =
      "Serangkaian cincin giok indah yang berasal dari laut dalam. Mereka memancarkan sinar yang murni seperti rembulan, dan selalu terasa sulit untuk dijangkau.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Orang bilang bahwa lambang "mutiara dan ombak" dari Sangonomiya mewakili ombak yang merangkul Watatsumi,
    dan mutiara cerah yang dapat ditemukan di sana. Tetapi beberapa orang lainnya juga mengatakan bahwa lambang itu menunjukkan roda permata Watatsumi Omikami yang terus berjaga-jaga di atas tanah karang layaknya bulan.

  </h5>
  <br>
  <h5 class="card-text">
  Dalam mimpi laut yang dalam di mana bunga karang dan batu karang berdiam, di kedalaman di mana awan yang mengalir dan pasir laut menari menjadi satu,
  harapan abadi akan turun-temurun didapatkan mereka dari dewanya — yaitu bagi mereka yang memimpikan mimpi yang sama dengan Watatsumi.
  Warna langit selalu berubah, dan cahaya serta bayangan yang terpancar jauh di bawah ombak adalah bentuk yang tidak jelas...
  Demikianlah welas asih cemerlang yang tidak dapat disembunyikan oleh samudra yang gelap sekalipun, menyebar dalam kebahagiaan yang tenang.
  </h5>
  <br>

  <h5 class="card-text">
  Pada masa itu, Pemimpin Suci pertama pernah memimpin saudara-saudaranya dengan kebijaksanaan yang berharga bak mutiara,
  dan dia memilih pendeta dari antara orang-orang yang baru diperkenalkan ke matahari, yang membantu keturunan dewa mereka dalam menghibur mereka yang ketakutan akan terang siang.
  Di hari-hari terakhir, "Umigozen" yang membuat angkatan laut Narukami gemetar akan menyanyikan lagu paus bersama mereka,
  dan simbol inilah yang mereka gambar saat mereka menari dengan kurage udara.
  </h5>
  <br>

  <h5 class="card-text">
  Hingga beberapa tahun kemudian, satu sambaran petir yang keras menampik impian orang-orang Watatsumi.
  Ular bergerak menuju badai petir, harus dihadapinyalah kekuatan petir yang kejam...
  Tetapi anak-anak dewa dan miko berhati mutiara, tidak akan melupakannya.
  Kisah yang tak terhitung jumlahnya, rasa terima kasih yang begitu besar, dan cincin permata laut itu akan selamanya diturunkan,
  dan mereka akan bersinar semakin terang dan indah karenanya.
  </h5>
  <br>

  <h5 class="card-text">
  Baik itu sejarah cabang permata yang robek atau kelahiran mutiara yang berharga,
  entah itu masalah menaklukkan makhluk jahat di laut dalam dan membawa sinar matahari ke sebuah bangsa di jurang yang pucat,
  atau bagaimanakah pemuda yang bermimpi berdiri di atas Mt. Yougou dijuluki "raja jahat", dan berduel hebat melawan tengu...
  Semua ini akan menerangi hati anak-anak Watatsumi, seperti mutiara dari langit, bagaikan gelombang di bawah cahaya rembulan.
  Kisah-kisah ini akan membawa rasa sakit akan kehilangan ke dalam air asin yang bergolak, menyimpannya di dalam mutiara yang bersinar.
  Semoga kisah dan pengorbanan zaman para dewa terus diceritakan turun-temurun, bersama dengan lambang "mutiara dan ombak".  
  </h5>
  <br>

  <h5 class="card-text">
  Sekalipun awan badai berkumpul, sekalipun keganasan petir ungu itu berbahaya dan sulit diprediksi,
  Cahaya bulan Watatsumi masih akan menembus awan dan menyebarkan cahayanya. 
  </h5>`;
  }
  if (char == "Kagura") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/kagura.png");
    document.getElementById("weapon-name").innerText = "Kagura's Verity";
    document.getElementById("type-weapon").innerText = "Catalyst";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "66.2%";
    document.getElementById("passive-name").innerText =
      "Kagura Dance of the Sacred Sakura";
    document.getElementById("passive-desc").innerHTML = `
    Saat melancarkan Elemental Skill, akan memperoleh efek Kagura Dance yang akan meningkatkan <span class="text-primary">12%</span>
    DMG Elemental Skill dari Karakter pengguna senjata ini selama 16 detik. Maksimum 3 lapis. Saat memiliki 3 lapis, Karakter tersebut akan memperoleh  <span class="text-primary">12%</span>
    DMG Bonus untuk semua elemen.
    `;
    document.getElementById("desc-weapon").innerText =
      "Lonceng yang digunakan saat melakukan Kagura Dance dan diberkati oleh Guuji sendiri. Aroma pohon Sacred Sakura masih ada di atasnya.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Di tempat yang pernah penuh dengan tarian, di hadapan takhta, suara lonceng masih berdenting.
    Siluet putih yang dahulu menjadi incaran, tiada kembali, namun tetap dalam mimpi tanpa henti, dan tanpa jalan keluar ....
    "Ketika itu aku hanyalah seorang bodoh, tak ada apa-apanya dibanding Sang Hakushin."
    "Nekat, bagaikan mengais makanan di dalam salju, berusaha agar dia memalingkan wajahnya."
    "Konyolnya, keberanian itu menggerakan hatinya dan menimbulkan belas kasihannya padaku."
    "Dan begitulah ceritanya aku mendapat kehormatan untuk melayaninya. Menghangatkan tangan dan kakinya. Sungguh sebuah kehormatan.
  </h5>
  <br>

  <h5 class="card-text">
"Setelah itu, Saiguu Yang Agung pergi dan tidak pernah kembali, dan semua pendahuluku pun berpisah karena berbagai macam alasan."
"Dan seperti itulah posisi "Miko" diberikan padaku yang masih polos dan bodoh, posisi yang terus kupegang seiring dengan pertumbuhanku hingga jadi seperti diriku hari ini."
"Demikianlah tanggung jawab untuk membuatnya gembira, jatuh ke atas pundakku."
"Ketika tarian Kagura kupertunjukkan untuk kali pertama pada malam itu, aku menyadari beban dari masa lalu itu."
  </h5>
  <br>

  <h5 class="card-text">
  Suara lonceng berdenting di kejauhan, sang Kitsune perak yang hebat, sahabat sekaligus guru, menghilang mengikuti aliran mimpi yang tak berakhir.
  Suara itu kembali, dan bantaran pasir yang tangguh pun lekang oleh arus yang berputar.
  Putih dan murni, para pemeran dari masa lalu pun perlahan mundur ke dalam gelapnya kenangan.
  Seperti itulah keturunan tunggal Kitsune mengambil lonceng Kagura dan menari untuk "saat ini".
  </h5>
  <br>

  <h5 class="card-text">
  Aku mengenal Tengu muda yang keras kepala, dan memperdayainya untuk "berlatih", menyepi ke pegunungan.
  Sifatnya keras. Karena itu kuserahkan dia ke Klan Kujou yang tegar tengkuk.
  Dan meskipun aku pernah bertanding melawan oni keras kepala dan harus kalah karena keteguhan pihak lawanku ....
  Aku menambahkan sesuatu agar pertandingan kami lebih menarik.
  Aku mengenal keturunan Adeptus dan manusia yang tinggal di tempat jauh. Kuberi dia hadiah tanaman laut yang segar dan besar.
  Namun aku tidak mengerti rasa cintanya yang mendekati konyol. Bukankah itu sama saja keterikatan?
  Cahaya rembulan menerangi taman agung, menembus celah di antara cabang dan pokok, dan menyentuh halaman yang kosong.
  Pemandangan itu masih saja jelas di hatiku yang dangkal ini, jelas secerah kilau ribuan batu permata ....
  </h5>
  <br>

  <h5 class="card-text">
  "Dalam ratusan tahun yang berlalu begitu cepat, aku berjalan di atas bumi ini, mengambil begitu banyak wujud."
  "Aku belum berkesempatan untuk berhubungan dekat dengan manusia fana, namun aku tahu indahnya kemanusiaan."
  "Dan dirinya, sahabatku, masih punya waktu untuk berkelana."
  "Marilah kita saksikan dunia yang tidak sempurna ini, nikmati keterikatannya pada cinta dan benci, pada pertemuan dan perpisahan."
  </h5>
  <br>

  <h5 class="card-text">
Karena Yang Mulia mencurahkan seluruh waktu dan tenaganya demi Keabadian, harus ada pihak yang menjaga para manusia fana.
Untuk meredam kebencian sang oni jahat Kuroami, aku pernah menunjukkan sebagian kecil kekuatan yang kupunya.
Dan bencana besar yang disebabkan oleh Kosanta si Tanuki Botak juga harus dihentikan dengan menggunakan sedikit ilmu sihir.
Bajak laut Rinzou, sang teror kepulauan, juga dikalahkan oleh sedikit kekeliruan dalam rencananya.
Dan untuk si orang aneh yang hidup abadi itu ....
Kuharap "dia" akan terus jalan di jalur yang benar, dan tidak akan pernah jadi ancaman bagi kita semua.
Sisa-sisa jiwa sang ahli pedang yang telah menghitam, binatang buas pembawa bencana yang bersembunyi di hutan terlarang, semuanya telah musnah ....
Bila dibandingkan dengan Keabadian yang didambakan oleh Yang Mulia, semuanya itu hanya selingan belaka.
Menunggu dirinya sadar seakan menunggu hari esok yang tak kunjung datang, namun aku tahu waktu ada di pihak kita.
  </h5>
  <br>

  <h5 class="card-text">
  "Halah, Euthymia tanpa angin, tanpa bulan, cuma ada bunga teratai dan udumbara yang tak kunjung layu."
  "Sepi pula tidak ada siapa-siapa. Aku bisa bosan setengah mati."
  "Aku lebih baik mabuk, lalu mematahkan dahan Sacred Sakura sambil bikin keributan bersama para youkai kurang ajar."
  "Cerita ini bukan dongeng masa lalu ya. Ini harapanku untuk masa depan."
  "Nah, Yang Mulia-ku tersayang, apa aku masih boleh mengikutimu untuk melihat kelopak ungu pertama yang mekar setelah salju mencair?" 
  </h5>`;
  }
  if (char == "Keyof") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/keyofkhajnisut.png");
    document.getElementById("weapon-name").innerText = "Key of Khaj-Nisut";
    document.getElementById("type-weapon").innerText = "Sword";
    document.getElementById("val-atk").innerText = "542";
    document.getElementById("name-bonus").innerText = "HP";
    document.getElementById("val-bonus").innerText = "66.2%";
    document.getElementById("passive-name").innerText =
      "Sunken Song of the Sands";
    document.getElementById("passive-desc").innerHTML = `
    HP meningkat <span class="text-primary">20%</span>.
    Saat Elemental Skill mengenai musuh, akan menghasilkan efek Grand Hymn yang berlangsung selama 20 detik: Mendapatkan peningkatan Elemental Mastery berdasarkan <span class="text-primary">0,12%</span>
    Max HP Karakter yang mengenakan, efek ini bisa terpicu setiap 0,3 detik dan dapat ditumpuk sampai 3 lapis. Saat efek ini ditumpuk sampai 3 lapis atau durasi 3 lapis diperbarui, akan meningkatkan Elemental Mastery seluruh Karakter party di sekitar sebesar <span class="text-primary">0,2%</span>
    Max HP Karakter yang mengenakan, berlangsung 20 detik.`;
    document.getElementById("desc-weapon").innerText =
      "Salah satu dari sepasang tongkat yang dibuat dari obsidian. Legenda mengatakan, tongkat ini bisa digunakan sebagai kunci untuk membuka pintu tanah kebahagiaan yang tersembunyi di ujung lautan pasir.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Ini adalah cerita setelah mimpi Raja Pasir telah hancur dan penguasa Verdure menyembunyikan bisikan dari iblis langit.
    Gerigi kebusukan memecah kerajaan yang agung menjadi banyak kerajaan sebelum menggiling semuanya menjadi pasir.
    Seorang ratu dari antara kerajaan-kerajaan itu membakar jubah dan mahkota pangeran kecil yang berlapis emas, dan menyuruhnya melarikan diri mengenakan kain kabung seorang pelayan;
    Seiring waktu berlalu, sang Pangeran menjadi putra dari seseorang yang menguasai pasar budak, dan kemudian menjadi seorang pengembara yang kehilangan segalanya.
  </h5>
  <br>

  <h5 class="card-text">
Koin akan terkikis saat berpindah dari tangan ke tangan, tetapi hal-hal mulia menjadi lebih kuat saat berpindah tangan.
Pemiliknya yang terakhir adalah seorang penyair buta. Kemudian, ceritanya berubah dari kisah seorang tuan dan pelayan menjadi seorang guru dan murid.
"Sebelum kita berpisah, ibu memberitahuku bahwa kita akan bertemu lagi di oasis abadi ...."
"Gunakan pedang ini sebagai kunci gerbang surga, bangun kembali kerajaan di tengah zamrud dan delima."
  <br>

  <h5 class="card-text">
  Mendengar kisah pangeran pengembara, penyair tua itu membelai sebilah pedang hitam yang tumpul. Lalu dia menjawab:
  "Demikianlah takdir kita yang bersilangan berakhir, karena aku hanyalah bagian kecil dalam jalan ceritamu."
  
  "Guru ...."
  </h5>
  <br>

  <h5 class="card-text">
  "Xiphos, nasibmu berada di atas kami para penyair yang rendah. Kamu tidak boleh membungkuk begitu rendah untuk menulis cerita untuk orang lain—"
  "Kamu adalah seseorang yang disukai oleh Jinni. Kamu, yang memegang Key of Khaj-Nisut, adalah pangeran dari kerajaan yang telah hilang."
  "Mulailah pengembaraanmu di antara kerajaan yang gagal. Kamu akan menciptakan cerita dongeng baru dan menemukan oasis abadi ...."
  "Saat aku menulis nyanyian untuk tuanku dan puisi cinta untuk pangeran, aku berfantasi tentang menulis untuk pahlawan takdir ini."
  "Izinkan aku untuk menceritakan kisahmu, kisah kembali bertemunya kamu dan ibumu, kisah kembalinya kejayaan Raja Pasir ke dunia ini."
  
  Pada akhirnya, jalan mereka akan bertemu — putra mahkota yang menjadi budak dan kemudian menjadi pahlawan dan seorang tentara bayaran yang jatuh dari takhta.
  </h5>
  <br>

  <h5 class="card-text">
  Banyak legenda menyebutkan ada kunci tertentu yang telah memerintahkan pasir untuk membentuk sungai yang mengalir di udara dan mengunci tanah ini setelah Raja Pasir berpisah dengan teman lama.
  Mereka bahkan mengatakan bahwa kunci itu digunakan untuk menyembunyikan menara di padang pasir dan nirwana di bawah naungan ilusi ketika semua harapan hancur dan bangsa-bangsa tercerai-berai.
  Kunci itu berpindah tangan dari tangan tiran dan raja, sampai akhirnya, kembali ke pelukan pasir.
  Adapun penyair buta yang sudah tua, dia akan mengikuti jejak cerita dan langkah kaki yang ternoda darah, dan akhirnya menemukan jalan ke hutan .... 
  </h5>
  <br>

  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Lost") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/lostprayer.png");
    document.getElementById("weapon-name").innerText =
      "Lost Prayer to the Sacred Winds";
    document.getElementById("type-weapon").innerText = "Catalyst";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "CRIT Rate";
    document.getElementById("val-bonus").innerText = "33.1%";
    document.getElementById("passive-name").innerText = "Boundless Blessing";
    document.getElementById("passive-desc").innerHTML = `
    Meningkatkan 10% Movement SPD. Saat di dalam pertarungan, meningkatkan <span class="text-primary">8%</span>
    Elemental DMG setiap 4 detik. Maksimum 4 lapis. Efek bertahan sampai karakter gugur atau meninggalkan pertarungan.
    `;
    document.getElementById("desc-weapon").innerText =
      "Kitab pembelajaran yang ditulis oleh pemuja Anemo tanpa nama dari zaman dahulu. Diberkati oleh angin untuk kesetiaan dan pengaruh yang telah ditunjukkannya.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Naskah angin kuno, diwariskan dari generasi ke generasi di antara para pengamat ritual untuk melayani Anemo Archon.
    Banyak tangan yang telah menyentuh halaman buku yang sekarang telah menguning tersebut, walaupun banyak pula yang sudah terbawa oleh angin.
  </h5>
  <br>

  <h5 class="card-text">
  Pada era saat Dewa Badai memerintah dari menara di atas, banyak kalimat keputus asaan yang tertulis.
  Kemudian, di era ketika salju mencair, kegembiraan akan tumbuh-tumbuhan hijau membanjiri halaman.
  <br>

  <h5 class="card-text">
  Di masa lalu ketika para bangsawan membuat boneka untuk mengontrol masyarakat,
  Naskah-naskah di tangan para budak menceritakan kecemburuan mereka dan keinginan mereka kepada ribuan angin.
  </h5>
  <br>

  <h5 class="card-text">
  Orang-orang Mondstadt hidup, bertahan, bertarung, bersorak, dan menikmati kebebasan,
  Bertahun-tahun berlalu, naskah tersebut menebal dan semakin berat.
  </h5>
  <br>

  <h5 class="card-text">
  Saat Mondstadt terlahir kembali, gereja akhirnya terbebas dari belenggu,
  Tulisan suci tidak lagi terkungkung di rak,
  Lalu buku itu tiba-tiba menghilang dari gereja.
  Seperti angin Mondstadt, dan seperti masyarakat Mondstadt,
  Buku tersebut tidak ingin terikat dan berhak mendapat kebebasan.
  </h5>
  <br>

  <h5 class="card-text">
  Pada halaman judul, tulisan tangan yang elegan mengatakan:
Anak-anak Anemo Archon, ingatlah selalu:
Dari angin kita datang, jadi bersama angin jugalah kita akan pergi.
Jangan pernah, berkabung untuk aku:
Hanya tulang dan dagingku yang tertidur di tanah,
Jiwaku sudah menjadi satu dengan ribuan angin.
Saat bunga bermekaran, dan daun bergoyang,
Itulah aku yang menyanyikan lagu kebebasan para angin.
  </h5>`;
  }
  if (char == "Songof") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/songofbroken.png");
    document.getElementById("weapon-name").innerText = "Song of Broken Pines";
    document.getElementById("type-weapon").innerText = "Claymore";
    document.getElementById("val-atk").innerText = "741";
    document.getElementById("name-bonus").innerText = "Physical DMG Bonus";
    document.getElementById("val-bonus").innerText = "20.7%";
    document.getElementById("passive-name").innerText = "Rebel's Banner-Hymn";
    document.getElementById("passive-desc").innerHTML = `
    Bagian dari "Millennial Movement" yang mengembara di tengah angin. Meningkatkan  <span class="text-primary">16%</span> ATK;
    Saat Normal atau Charged Attack mengenai musuh, Karakter akan mendapatkan satu Sigil of Whispers. Efek ini dapat terpicu setiap 0,3 detik. Saat kamu mempunyai 4 Sigil of Whispers, semuanya akan terkonsumsi dan seluruh anggota party di sekitar akan mendapatkan efek "Millennial Movement: Banner-Hymn" selama 12 detik. "Millennial Movement: Banner-Hymn" akan meningkatkan  <span class="text-primary">12%</span>
    Normal ATK SPD dan meningkatkan <span class="text-primary">20%</span> ATK. 
    Ketika efek ini sudah terpicu, kamu tidak akan mendapatkan Sigil of Whispers lagi selama 20 detik. Dari beragam efek "Millennial Movement" yang ada, efek dengan jenis sama tidak bisa ditumpuk.`;
    document.getElementById("desc-weapon").innerText =
      "Pedang besar seringan angin yang meniup dedaunan dengan lembut, tapi juga bagaikan angin topan yang ganas dan tanpa ampun bagi mereka yang korup.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Dahulu kala ada lagu rakyat terkenal yang berbunyi seperti ini:
    "Lemparkan kepada penyair, seluruh Iron Coin yang bisa kamu berikan"
    "Berikan buketmu pada gadismu,"
    "Ambillah anggur yang pahit yang bisa membuat air matamu mengalir,"
    "Minumlah untuk hari kemarin yang sudah berakhir dan bernyanyilah untuk hari esok yang datang bersamaan dengan fajar."
  </h5>
  <br>

  <h5 class="card-text">
  Di daratan di mana lagu dan musik dibawa oleh angin, orang-orang memiliki jiwa yang optimis dan sensitif.
  Dikatakan bahwa di masa lalu saat seorang tiran Decarabian dan para bangsawan melarang beberapa lagu dan nada,
  Karena orang yang peka bisa merasakan semangat perlawanan yang ada di balik musik para penyanyi dan penyair,
  Lagu dan puisi memang telah digunakan sebagai cara bagi para pemberontak untuk berkomunikasi.
  <br>

  <h5 class="card-text">
  Selama masa bangsawan, gereja yang memuja Archon Anemo pernah terbagi menjadi dua:
  Di satu sisi terdapat para pendeta yang minum bersama dengan para pangeran, dan menjatuhkan patung Archon bersama mereka bahkan ketika mereka menulis lagu dan nyanyian pujian,
  Di sisi lain terdapat orang-orang kudus, yang tidak memiliki jabatan sebagai pendeta atau semacamnya, berjalan di jalanan, gudang anggur, dan di balik tembok tinggi,
  Orang-orang kudus ini meminum anggur murahan, memberkati budak dan orang biasa dengan naskah suci asli yang beredar di antara orang-orang dan dengan kata-kata yang dibawa angin kepada mereka,
  Dan saat mereka melakukannya, mereka juga menulis puisi dan lagu yang dilarang tersebut.
  </h5>
  <br>

  <h5 class="card-text">
  Saat seorang gladiator dari tanah asing bangkit bersama Archon Anemo, dan mengibarkan panji pemberontakan,
  Seorang yang kudus namun sudah berumur, dikenal sebagai Gembala Tanpa Nama, memobilisasi pengikut sejati Church of Favonius,
  Bersama dengan yang lainnya, mereka menumpahkan darah martir mereka ke tanah yang hijau ini.
  Dan bersama, mereka menyanyikan seruan untuk menyelamatkan bangsa, bagian dari lagu kecil yang tidak dinyanyikan sebelumnya.
  </h5>
  <br>

  <h5 class="card-text">
  "Tinggalkan potongan besi tajam itu untuk mereka yang bersedia memberikan hidup mereka untuk bertarung,"
  "Siapkan tiang gantungan untuk pencuri,"
  "Asah anak panahmu yang berkarat,"
  "Karena saat musik bersuara, kami akan menembak jatuh para monster."
  </h5>
  <br>

  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Splendorof") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/splendor.png");
    document.getElementById("weapon-name").innerText =
      "Splendor of Tranquil Waters";
    document.getElementById("type-weapon").innerText = "Sword";
    document.getElementById("val-atk").innerText = "542";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "88.2%";
    document.getElementById("passive-name").innerText =
      "Dawn and Dusk by the Lake";
    document.getElementById("passive-desc").innerHTML = `
    Saat HP saat ini dari Karakter yang mengenakan bertambah atau berkurang, DMG Elemental Skill meningkat  <span class="text-primary">8%</span> selama 6 detik.
    Efek ini dapat ditumpuk sampai 3 lapis dan dapat terpicu sekali setiap 0,2 detik. Saat HP Karakter lain di dalam party bertambah atau berkurang, Max HP Karakter yang mengenakan meningkat <span class="text-primary">14%</span> selama 6 detik.
    Efek ini dapat ditumpuk sampai 2 lapis dan dapat terpicu sekali setiap 0,2 detik. Efek di atas tetap dapat terpicu meskipun Karakter yang mengenakan ada di dalam party namun sedang tidak berada di medan pertempuran.
    `;
    document.getElementById("desc-weapon").innerText =
      "Tongkat yang dikelilingi air murni. Pada zaman dahulu, tongkat ini pernah melambangkan kekuasaan tertinggi dari segala lautan.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    "Godaan dosa menenggelamkan Kota Abadi, begitu banyak budak dan perampas dijatuhkan dalam satu malam penuh murka."
    "Kami bersumpah atas nama Egeria untuk menemukan Cawan Kemurnian dan memulihkan kedaulatannya di tanah milik pusakanya."
    "Hanya dengan cara inilah kita dapat menebus dosa yang telah ditanggung semenjak dilahirkan, dan luput dari cengkeraman maut."
    "Apa pun yang harus dikorbankan, kiranya tugas mulia ini terlaksana demi nama Lochknight."
  <br>

  <h5 class="card-text">
  Simfoni yang luar biasa akan berakhir. Di reruntuhan dunia yang layu, para pelawat kebajikan mengucapkan sumpah.
  Tongkat berwarna biru milik Kesatria Erinnyes, yang di masa lagu keharmonisan menyatukan semua makhluk air melawan para dewa.
  Dikatakan bahwa kampung halamannya hancur oleh murka Raja Dewa, dan bala tentara Kota Emas memperbudak serta membantai keluarganya.
  Hanya dua orang yang berhasil selamat. Satu bertemu dengan Harmost yang tinggi hati semasa perang, lalu naik menggantikannya.
  Yang satunya menerima perkenanan Ratu Segala Perairan, dipungut oleh Pangeran Aremorica untuk menjaga air murni yang belum dirampas oleh Raja Dewa.
  Dua yang selamat dari asal yang sama, terpisah bagaikan alang-alang di lautan takdir. Satu menuju kebaikan, satu menuju kezaliman.
  <br>

  <h5 class="card-text">
  Dengan mengikuti angin dan bisikan gadis di danau, para kesatria yang terhormat dan gigih memulai perjalanan mereka.
  Setelah melalui banyak cobaan dan kesulitan dan yang tidak pernah mereka bayangkan, harapan yang terutama akhirnya mencapai tingkap-tingkap langit.
  Karena hati yang baik dan murni, serta Cawan Kemurnian yang didapatkan dari pengorbanan yang tak terhitung jumlahnya, Ratu Segala Perairan pun dibebaskan dari kurungan abadi ....
  </h5>
  <br>

  <h5 class="card-text">
  "Wahai Ratu Segala Perairan, ya Egeria yang maha pengasih, kiranya engkau mengadili kami."
  "Aku telah melakukan perbuatan yang baik dan mulia, tapi semua itu adalah perbuatan dosa."
  "Cita-cita ini tidak dapat dinodai. Hanya pengasingan yang dapat mendamaikan."
  "Wahai Ratu Segala Perairan, ya Egeria yang maha pengasih, kiranya engkau mengabulkan permohonan ini."
  </h5>
  <br>

  <h5 class="card-text">
  Di pagi hari yang cerah, kata-kata yang tulus dan menyakitkan itu menyentuh hati Ratu Segala Perairan.
  Dewi yang welas asih mengabulkan permohonannya, dan memberkati perjalanannya ke depan.
  Karena Ratu Segala Perairan menyadari bahwa penghakiman yang adil adalah ampunan terbesar bagi jiwa yang begitu berkorban diri.
  Dan mungkin itulah sebabnya putusan yang mulia mewarnai takdir dengan ronanya.
  </h5>
  <br>

  <h5 class="card-text">
  Pedang semurni cahaya danau tenggelam, diiringi berkat-berkat dari Egeria.
Dan sang empunya pedang pergi, kepalanya terangkat, dan dia tidak pernah terlihat lagi setelahnya. 
  </h5>`;
  }
  if (char == "pulse") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/thunderingpulse.png");
    document.getElementById("weapon-name").innerText = "Thundering Pulse";
    document.getElementById("type-weapon").innerText = "Bow";
    document.getElementById("val-atk").innerText = "608";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "66.2%";
    document.getElementById("passive-name").innerText = "Rule by Thunder";
    document.getElementById("passive-desc").innerHTML = `
    Meningkatkan <span class="text-primary">20%</span> ATKdan memberikan kekuatan Thunder Emblem. Pada lapisan level 1/2/3, Thunder Emblem meningkatkan Normal Attack DMG sebesar <span class="text-primary">12/24/40%</span>.
    Karakter akan mendapatkan 1 lapis Thunder Emblem untuk setiap skenario berikut: Saat Normal Attack mengakibatkan DMG (lapisan bertahan selama 5 detik), saat melancarkan Elemental Skill (lapisan bertahan selama 10 detik). Selain itu, Karakter juga akan mendapatkan 1 lapis saat Energy kurang dari 100% (lapisan ini akan menghilang saat Energy penuh). Durasi setiap lapis dihitung secara terpisah.`;
    document.getElementById("desc-weapon").innerText =
      "Busur panjang yang dihadiahkan oleh Shogun, memancarkan kilatan cahaya yang tidak pernah padam.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Busur ini, dengan percikan petirnya, mempertahankan kilaunya meskipun telah terendam dalam kegelapan yang pekat.
    Saat bencana datang dari seberang lautan, dia pernah menjadi senjata favorit seorang pendekar pedang yang hebat.
    Di masa mudanya saat dia berkeliaran di pegunungan, dia membuat taruhan dengan Tengu besar yang dia temui.
    Menggunakan tubuh muda dan gagah sebagai taruhan dengan busur yang diberikan oleh Shogun.
  </h5>
  <br>

  <h5 class="card-text">
  Mengenai pertaruhan itu sendiri, hanya bisa diingat saat dia mabuk.
  Saat fajar, dia mendapatkan tiga kemenangan dan tiga kekalahan, yaitu hasil yang imbang melawan Tengu.
  Jadi berita buruknya, dia diambil sebagai pelayan oleh Tengu. Tapi berita baiknya, dia memenangkan busur yang berharga.
  <br>

  <h5 class="card-text">
  "Konbumaru, ini panah Tengu. Perhatikan dan pelajari baik-baik!"
  Dia diberi julukan konyol tapi setidaknya dia menyaksikan sang Tengu.
  Terbang menembus awan, melesat tak terkendali, panah petir dilepaskan dari tali busur...
  Itu adalah tarian kematian yang nyata dan jelas. Sengit dan tak terduga, elegan dan indah.  
  </h5>
  <br>

  <h5 class="card-text">
  Bertahun-tahun kemudian, usianya melebihi usia seorang pelayan, dan dia sudah mempelajari kemampuan memanah dan ilmu pedang.
  Dia dikirim ke Shogun oleh tuannya yang tidak sabar menggunakan surat rekomendasi.
  Setelah bertahun-tahun di Shogun, seni bela dirinya meningkat dan dia mendapatkan banyak teman dan musuh.
  Hobinya bepergian tanpa batas masih tidak berubah. Sebaliknya, dia menjadi semakin berani karena busur Tengu.
  </h5>
  <br>

  <h5 class="card-text">
  "Ayo kita taruhan kali ini, bagaimana menurutmu? Yah, aku akan menggunakan busur ini sebagai taruhan."
  "Aku pertaruhkan busur terbaik di dunia ini, aku bertaruh kalau aku bisa kembali ke sini hidup-hidup."
  "Kusimpan di tempatmu saja. Kalau aku, Takamine, kalah maka kamu boleh menyimpan busur ini."
  "Lagi pula kamu sudah mewarisi teknik memanahku. Kamu pasti bisa menggunakannya dengan baik."
  "Tapi, kalau aku menang..."
  </h5>
  <br>

  <h5 class="card-text">
Demikianlah yang terjadi ketika bencana datang dari seberang laut, di mana samurai dan Miko yang bertekad kuat melakukan pertaruhannya.
Mempertaruhkan kelangsungan hidup sang samurai dari jurang maut dan menjadikan busur pemberian Shogun sebagai barang taruhan.
  </h5>
  <br>

  <h5 class="card-text">
  Ketika racun kegelapan tenggelam masuk ke bumi dan kedamaian kembali, sang pendekar pedang belum juga kembali.
Dan karena sudah memenangkan taruhan, busur dari Shogun pun diberikan kepada Miko.
Kemudian, di dalam hutan di mana Kitsune Saiguu tidak lagi memunculkan dirinya, di tempat pertemuan yang sudah dijanjikan,
sang penyendiri yang terhuyung-huyung kembali dari jurang akhirnya menemui Miko itu kembali, namun Miko itu sudah tak muda lagi.
Mata hitam yang dinodai darah kering dan air mata akhirnya bersinar kembali, tetapi ditusuk oleh panah berduri yang bersinar kuat. 
  </h5>`;
  }
  if (char == "uraku") {
    document
      .querySelector("#img-weapon")
      .setAttribute("src", "../assets/uraku.png");
    document.getElementById("weapon-name").innerText = "Uraku Misugiri";
    document.getElementById("type-weapon").innerText = "Sword";
    document.getElementById("val-atk").innerText = "542";
    document.getElementById("name-bonus").innerText = "CRIT DMG";
    document.getElementById("val-bonus").innerText = "88.2%";
    document.getElementById("passive-name").innerText =
      "Brocade Bloom, Shrine Sword";
    document.getElementById("passive-desc").innerHTML = `
    DMG Normal Attack meningkat sebesar <span class="text-primary">16%</span> dan DMG Elemental Skill meningkat sebesar  <span class="text-primary">24%</span>.
    Setelah Karakter aktif di sekitar mengakibatkan Geo DMG, efek ini meningkat 100% selama 15 detik. Selain itu, DEF pengguna meningkat sebesar
    <span class="text-primary">20%</span>.`;
    document.getElementById("desc-weapon").innerText =
      "Pedang terkenal yang dibuat langsung oleh Urakusai — orang yang paling berseni dan berbudaya. Konon katanya, pedang ini tidak pernah menebas makhluk hidup sama sekali selama ratusan tahun.";
    document.getElementById("story-desc").innerHTML = `<h5 class="card-text">
    Konon katanya Kitsune Urakusai pernah mabuk dan memotong tirai berlapis emas yang terpasang di panggung di tengah hutan dan menjadi musuh abadi dengan bake-danuki.
    Begitulah asal nama pedang ini, sedangkan tarian pedang Kitsune yang mabuk di bawah rembulan malam itu dianggap sebagai anekdot oleh semua yang menonton selain bake-danuki.
    Lalu, konon katanya Urakusai meminta maaf atas kejahatannya kepada bake-danuki yang mempersiapkan pementasan itu, lalu memberikan peralatan teh dan berbagai benda pusaka lainnya yang berharga.
    Sebelum kejadian itu, ada dia "dari Gerbang Depan" yang cuma pernah bertemu dengannya sekali, mendapatkan pemberian pedang "Misugiri" yang terkenal karena berhasil memediasi antar pihak.    
  </h5>
  <br>

  <h5 class="card-text">
  Ada sedikit kejanggalan dengan kabar dari bengkel kerja. Tuan ini bukan cuma orang aneh yang bertarung dengan pohon Lavender Melon, tapi juga sedikit elegan, suka berakting, juga suka mainan dan pakaian.
  Saat terlibat dalam pertarungan, dia kerap menampakkan dirinya kepada orang-orang dalam wujud aneh, mengenakan brokat emas berpotongan rumput dan awan musim gugur, serta memakai cat minyak cerah di wajahnya.
  Namun, tidak ada yang pernah menggambarkannya sedang memegang pedang dekorasi emas terkenal "Misugiri" di pertempuran terakhir, baik di buku kuno atau buku cerita.
  Dalam berbagai anekdot dan kisah sejarah, senjatanya selalu sama seperti gelarnya, pedang besar yang namanya sulit diucapkan.
  Meski gulungan lukisan menggambarkan penampilan berwibawanya yang memegang sepasang pedang besar dan kecil di masing-masing tangannya, seperti hendak menebas monster hitam yang datang seperti gelombang ....
  Tapi bagaimanapun juga, menurut "Antologi" yang bisa dipercayai pada saat itu, "Misugiri" sudah hilang dari dia "dari Gerbang Depan" satu musim panas sebelum kejadian itu.
  Oleh karena itu, di benak orang-orang yang membicarakan cerita setelah minum-minum, "Misugiri" yang tak pernah berlumur darah musuh selalu membuat orang-orang berimajinasi.
  <br>

  <h5 class="card-text">
  Di antara Oni yang tidak menggunakan bahasa tertulis dan cuma menggunakan lagu nyanyian untuk menceritakan sejarah, "Antologi" juga mencatat cerita yang berbeda dan saling melengkapi.
  Setelah sebuah pertandingan gulat di festival, dia "dari Gerbang Depan" sebenarnya memberikan pedang terkenal "Misugiri" kepada seorang penjahit yang bukan berasal dari keluarga bela diri.
  Sepertinya gadis itu menenun kembali bunga emas yang longgar pada haori milik dia, lalu pria itu pun memberikan pedang di pinggangnya sebagai hadiah.
  </h5>
  <br>

  <h5 class="card-text">
  "Tidak perlu imbalan? Begini saja, ambil saja pedangku, anggap saja ditukar dengan guntingmu itu! Jadi tidak perlu imbalan lagi!"
  "Eh? Apaan sih? Memangnya kenapa, pedangnya tidak boleh dipakai untuk potong kain? Dasar gadis cilik, sewaktu ngomong malah seperti Tengu yang membosankan!"
  "Alasan apa itu? 'Rakyat jelata dan keluarga bela diri itu berbeda'?!? Kamu bisa pakai gunting untuk menggunting kain, kalau begitu, memotong kain dengan pedang besar harusnya makin gampang dong!"
  "Bukan! Aku hadiahkan pedang ini karena pemilik aslinya cerewet! Dia bilang benda terkenal seperti ini harus digantung di tembok agar bisa dilihat semua orang."
  "Bukan kasih kamu, ini transaksi! Daripada si rubah tua itu terus-terusan tanya ke aku bagaimana pedangnya, lebih baik buat kamu untuk menjahit baju saja!"
  "Sedang marahi aku lagi ya! Kedengaran! Wah! Maksudmu apa jerit-jerit? Sudah, sudah, lihat baik-baik ya ...."
  </h5>
  <br>

  <h5 class="card-text">
  Sambil berkata, Oni itu pun berdiri dan mengeluarkan pedang dari sarungnya. Pedangnya yang dingin memantulkan asap dan cahaya bulan dari upacara.
  Lalu tanpa pikir panjang, dia menebas lengan bajunya, lalu menyimpan pedangnya. Duduk tegak sambil mempersembahkan lengan bajunya yang panjang.
  Samurai oni yang biasanya bersikap terbuka dan bebas, mulai serius dan menunjukkan sedikit kekejaman.
  </h5>
  <br>

  <h5 class="card-text">
  "Lihat, meski aku orang bawahan yang tidak tahu cara menjahit, tapi dengan pedang ini, aku juga bisa memotong kain dengan mudah! Jangan anggap remeh orang lain ya!"
  "Tolong, terimalah pedang ini. Karena aku yakin, cuma kamu yang bisa memanfaatkannya. Aku pasti cuma akan menghancurkannya."
  "Kamu mau aku jaga bagaikan pusaka keluarga? Haha. Bukannya aku belum pernah kepikiran. Tapi pedang terkenal ini kalau tidak terpakai, pasti akan kesepian, kan."
  "Kalau begitu, setelah Urakusai datang, dia pasti akan ejek aku orang bawahan, membosankan, dan tidak tahu adat."
  </h5>
  <br>

  <h5 class="card-text">
  Menghadapi wajah serius Oni yang tiba-tiba seperti itu, gadis penjahit muda itu pun menjadi ketakutan.
  Hingga setelah dia menerima hadiah yang sangat berharga itu dengan penuh rasa takut, samurai yang sok pintar itu baru tertawa terbahak-bahak dan pergi dengan puas.
  Dia "dari Gerbang Depan" pun mendapat julukan "Si Bodoh nan Idiot" dari penduduk desa, tapi dia sama sekali tidak tersinggung.
  Meski dia terlalu emosional, namun dia sudah berteman dengan banyak orang dan menyelamatkan banyak nyawa dalam hidupnya yang tak terlalu singkat dan panjang.
  Gulungan brokat tanpa kata yang ditenun kemudian untuk mempersembahkan korban kepada dewa, kitsune, youkai, oni, dan manusia yang telah melindungi banyak nyawa ....
  Karena penyesalan sang penjahit yang tidak bisa mengembalikan pedang terkenalnya dan membantunya membunuh musuhnya, dia pun mendesain wujudnya yang begitu gagah sambil memegang dua pedang.
  Tapi itu sudah lama sekali setelahnya. Sebelum itu, Urakusai harus berduka untuk para orang yang terpisah dan berkelana tanpa tujuan selama bertahun-tahun.
  </h5>
  <br>

  <h5 class="card-text">
Saat keturunan suku oni yang memiliki marga sama melihat gadis penjahit yang memegang pedang terkenal yang indah seperti dulu, namun tak lagi muda, mereka bernostalgia:
"Waktu paman sedang membersihkan pedangnya, dia sering menghela napas. Bisa-bisanya Tuan Urakusai menitipkan benda pusaka seperti ini kepada orang bawahan seperti dirinya."
"'Benda ini harusnya menikmati seluruh keindahan dan kemakmuran di dunia, mana mungkin aku bisa menodainya dengan pembunuhan dan dendam kesumat?'"
  </h5>
  <br>

  <h5 class="card-text">
  Kembali ke topik. Saat gadis muda ini menyadari fungsi pedang ini di luar medan perang, masih ada beberapa hari untuk menenun gulungan lukisan masa depan itu.
  Saat itu, Oni Chiyo mengenakan juunihitoe yang indah sekali dan menari sambil memegang pedang, bercahaya bagai bunga beterbangan di tengah angin musim semi. 
  </h5>`;
  }
}

function getArtifact() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const char = urlParams.get("artifact");

  if (char == "Crimson") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/crimsonwitch.png");
    document.getElementById("artifact-name").innerText =
      "Crimson Witch of Flames";
    document.getElementById("2pc").innerText = "Pyro DMG Bonus +15%.";
    document.getElementById("4pc").innerText =
      "Meningkatkan 40% DMG Overloaded, Burning, dan Burgeon. Meningkatkan 15% DMG Vaporize dan Melt. Setelah menggunakan Elemental Skill, meningkatkan 50% efek Set 2 Bagian selama 10 detik. Maksimum 3 lapis.";
    document.getElementById("desc-artifact").innerText =
      "Bunga yang pernah disentuh oleh Crimson Witch of Flame yang pernah bermimpi untuk membakar semua iblis di dunia. Api tanpa nama di atasnya mengusap dengan hangat tangan yang menyentuhnya.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
    Sebuah jenis bunga yang umum,
    Namun anehnya bisa menahan api si penyihir.
  </h5>
  <br>
  <h5 class="card-text">
    Sebuah krisis ratusan tahun lalu menghapus semua harapan sang gadis yang dijanjikan padanya.
    Semua yang dia sayangi, masa lalunya dan masa depannya yang cerah, semua hilang.
  </h5>
  <br>
  <h5 class="card-text">
    Dari abu, sang Penyihir Merah Api lahir, dan dia membakar semua luka-lukanya dengan api.
    Namun bunga ini masih tetap berdiri, lembut dan tangguh,
    Baik kenangan menyakitkan dan indah bagaikan koin dengan dua sisi. 
  </h5>`;
  }
  if (char == "Emblem") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/emblem.png");
    document.getElementById("artifact-name").innerText =
      "Emblem of Severed Fate";
    document.getElementById("2pc").innerText = "Energy Recharge +20%.";
    document.getElementById("4pc").innerText =
      "Meningkatkan DMG Elemental Burst sebesar 25% dari Energy Recharge. Peningkatan DMG Elemental Burst maksimum yang bisa didapatkan dengan cara ini adalah 75%.";
    document.getElementById("desc-artifact").innerText =
      "Legenda mengatakan bahwa pelindung tangan yang penuh hiasan ini pernah dipasang pada pedang yang diberikan kepada oni yang mengkhianati Shogun.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Ibu menunjukkan taringnya kepada Shogun, yang sudah baik padanya dan memberinya pedang yang bagus.
      Pada akhirnya, satu-satunya yang dikirim kembali ke Klan Mikoshi adalah pedang yang sangat dia sayangi.
  </h5>
  <br>
  <h5 class="card-text">
    Ambisi ibu adalah untuk mengatasi takdir antara hidup dan mati dengan hasratnya yang mendidih.
    Dia akan memberikan kontribusi sedemikian rupa demi membuat namanya terukir abadi untuk darah perang oni yang semakin menipis.
    Jika dia ditelan oleh harimau pendosa itu sendiri, maka dia akan mengoyaknya dari dalam tubuhnya.
  </h5>
  <br>
  <h5 class="card-text">
    Seharusnya dia bisa merajut prestasi yang luar biasa di bawah panji Electro Mitsudomoe,
    Dia kira dia sanggup membersihkan jubah perang juunihitoe-nya yang berlumuran darah itu.
    Tetapi akhirnya... jubah itu malah ternoda hitam, bersama dengan jantungnya yang berdegup kencang...
  </h5>
  <br>
  <h5 class="card-text">
    Seharusnya dia bisa merajut prestasi yang luar biasa di bawah panji Electro Mitsudomoe,
    Dia kira dia sanggup membersihkan jubah perang juunihitoe-nya yang berlumuran darah itu.
    Tetapi akhirnya... jubah itu malah ternoda hitam, bersama dengan jantungnya yang berdegup kencang...
  </h5>
  <br>
  <h5 class="card-text">
    Sejak saat itu, sang putra sulung, yang seharusnya mewarisi kekayaan keluarganya, justru harus tinggal dalam pengasingan di sebuah desa di luar kota,
    Berteman dengan hutan dan gunung. Sampai dia bertemu dengan gadis itu...
  </h5>
  <br>
  <h5 class="card-text">
    "Sungguh merepotkan. Jika kamu ingin meninggalkan masa lalumu, biarkan aku memberimu nama yang baru."
    Setelah mendengar tentang masa lalunya, gadis yang memiliki sayap hitam legam itu mencibir dengan kejamnya.
    "Namanya Iwakura — yang berarti batu. Batu tidak akan terpengaruh oleh kata-kata orang lain."
    "Ayolah, manusia fana dengan darah oni yang mengalir di tubuhmu, berbahagialah, tersenyumlah!"
    "Kamu harus tahu, nama yang diberikan oleh Yougu Tengu adalah nama yang diberkati dengan kekuatan suci."
    "Lagi pula, nama 'batu' cocok untukmu, cocok dengan pikiran dan ototmu."
  </h5>
  <br>
  <h5 class="card-text">
    "Kalau begitu, saat bunga sakura berguguran di tahun depan, mari kita bertarung di sini, Iwakura."
    "Anak dari oni, latihlah ilmu pedangmu dan jadilah lawan yang pantas dan tidak memalukan bagi Yougu Tengu untuk dihadapi."
    "Oh ya! kalau kamu berhasil menyentuhku, kamu bisa menyebut teknik pedang rahasiamu dengan sebutan 'Pembantai Tengu'!"
    "Dan kalau waktu itu tiba, artinya kamu sudah menguasai 'ilmu pedang yang bisa menghabisi Tengu'." 
  </h5>`;
  }
  if (char == "Deepwood") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/deepwood.png");
    document.getElementById("artifact-name").innerText = "Deepwood Memories";
    document.getElementById("2pc").innerText = "Dendro DMG Bonus +15%.";
    document.getElementById("4pc").innerText =
      "Setelah Elemental Skill atau Elemental Burst mengenai musuh, Dendro RES dari target yang terkena akan berkurang 30% selama 8 detik. Efek ini tetap dapat terpicu meskipun penggunanya ada dalam party namun sedang tidak berada di medan pertempuran.";
    document.getElementById("desc-artifact").innerText =
      "Bunga emas yang dipetik dari mahkota raja hutan.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Ketika penguasa hutan lahir, sang raja pohon menganugerahkan mahkota kepadanya.
      Mahkota yang akan diwariskan untuk gadis pertama yang mengikuti langkah sang tuan.
      Dia mengambil anak-anak yang hilang di hutan, tapi tidak pernah menginjak bunga liar.
  </h5>
  <br>
  <h5 class="card-text">
    Dia hanya tahu caranya mengabdi dan melindungi labirin,
    Dia yakin bahwa dunia di luar impian hutan adalah semu,
    Dia mengajari jalan pemburu dan cara menapaki mimpi kepada anak-anak,
    Dia mendidik mereka agar mengasihi hutan dan segala isinya, kepunyaan tuannya;
    Dia mendidik mereka agar menghormati semua yang terkena anak panah mereka, kepunyaan tuannya.
  </h5>
  <br>
  <h5 class="card-text">
    Ajaran ini diteruskan dari oleh setiap anak yang hilang di hutan, dan mengalami perubahan.
    Akhirnya asal-usulnya pun dilupakan, namun ada sekelompok orang yang mengabdi sebagai pelindung hutan,
    Kembali ke dunia manusia dan menyalakan api di malam yang kelam untuk mengusir bayangan hitam.
    Satu yang tinggal dan berjalan bersama pepohonan, melupakan waktu ketika larut dalam perburuan, dan sekujur tubuhnya penuh bermandikan darah hitam.
  </h5>
  <br>
  <h5 class="card-text">
    Dia nyaris setua dan sekuno raja hutan terakhir, dan dia memimpikan labirin dan perburuan.
    Mimpi yang agung dan luas, mampu melingkupi semua mimpi yang pernah diimpikan oleh para penghuni hutan.
    Labirin, tanah perburuan tanpa batas, jalur yang disusun oleh akar dan aliran air yang lebih rumit daripada loreng tubuh harimau,
    Tidak tetap laksana air mengalir, bisikan maut pun hilang di tengah kebingungan labirin,
    Hanya dia dan mereka yang mengerti ajaran raja hutan sajalah yang dapat melewati labirin dan memasuki tanah perburuan.
    Hingga pada akhirnya bisikan itu lenyap, binatang buas yang jahat telah lari, sehingga dia yang telah tercemar sepenuhnya, dapat musnah bersama dengan mimpinya yang agung.
  </h5>
  <br>
  <h5 class="card-text">
    Dia, dan berbagai pecahan mimpi lainnya, akhirnya dapat menyebar ke impian para manusia.
    Seperti ribuan cermin memantulkan ribuan bayangan,
    Impian yang ditinggalkannya melewati penafsiran banyak orang, dan diberi definisi yang tak terhingga jumlahnya.
    Kisah yang paling tersebar (yang menang) sudah tidak mengandung kabar apa pun lagi tentang dirinya.
  </h5>
  <br>
  <h5 class="card-text">
    Bahkan namanya saja, yang kisah itu sebutkan, hanyalah nama sebuah mahkota.
    Dan kepunyaannya pun hanya menyisakan nama yang benar, segenggam air yang memantulan terang rembulan,
    Dan bunga emas yang dia petik dari mahkota tuannya. 
  </h5>`;
  }
  if (char == "Fury") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/fury.png");
    document.getElementById("artifact-name").innerText = "Thundering Fury";
    document.getElementById("2pc").innerText = "Electro DMG Bonus +15%.";
    document.getElementById("4pc").innerText =
      "Meningkatkan 40% DMG yang diakibatkan Overloaded, Electro-Charged, Superconduct, dan Hyperbloom. Meningkatkan 20% DMG yang diakibatkan Aggravate. Saat memicu reaksi-reaksi elemental di atas atau reaksi Quicken, akan mengurangi 1 detik CD Elemental Skill. Efek ini terpicu setiap 0,8 detik.";
    document.getElementById("desc-artifact").innerText =
      "Setangkai bunga petir yang tidak tersambar petir dan tidak terbakar oleh api ungu. Merupakan satu-satunya benda yang luput dari amarah Thunderbird.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Bunga ungu liar yang selamat dari abu vulkanik,
      Telah menjadi saksi dari kehancuran total suku kuno.
  </h5>
  <br>
  <h5 class="card-text">
    Dengan darah dari orang tak berdosa, sang dukun memanggil Thunderbird.
    Mereka memberikan persembahan suci dan menunggu Thunderbird muncul.
    Namun yang diturunkan oleh Thunderbird adalah petir kehancuran.
  </h5>
  <br>
  <h5 class="card-text">
    Untuk pelanggaran terhadap anak muda yang bernyanyi untuknya, hukuman itu dijatuhkan,
    Thunderbird memperlihatkan sosok aslinya, melenyapkan suku tersebut dari muka bumi.
  </h5>
  <br>
  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Golden") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/goldentroupe.png");
    document.getElementById("artifact-name").innerText = "Golden Troupe";
    document.getElementById("2pc").innerText =
      "Meningkatkan 20% DMG Elemental Skill.";
    document.getElementById("4pc").innerText =
      "Meningkatkan 25% DMG Elemental Skill. Selain itu, saat Karakter ada di dalam party namun sedang tidak berada di medan pertempuran, DMG yang diakibatkan Elemental Skill meningkat 25% lagi. Efek ini akan hilang dalam 2 detik setelah memasuki medan pertempuran.";
    document.getElementById("desc-artifact").innerText =
      "Bunga yang terbuat dari kerang, mutiara terindah, dan daun emas. Bunga ini mekar dengan begitu indahnya.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Nyanyian takdir pernah mengaliri jalan air, menyebarkan irama kerukunan antara peradaban dan tatanan.
      Ketika nada itu turun, kebuasan digantikan pencerahan, kekacauan yang menguasai tanah purba telah diubah.
  </h5>
  <br>
  <h5 class="card-text">
    Angin laut yang perkasa bergulir, bunga air tak berakar mengapung padanya.
    Di sebuah tempat tinggal yang seumur jagung, biduan muda bertemu dengan seorang pejuang.
    Di tengah syair penaklukan yang sebanyak bintang di langit, lagu ini tidaklah menarik.
    Tapi ombak menjadi saksi persahabatan para pejuang, juga meramalkan kesudahannya.
  <br>
  <h5 class="card-text">
    Biduan muda yang belum sepenuhnya menanggalkan hasrat kebiadaban, dan kemudian bersahabat dengan para hamba yang ditaklukkan.
    Nama si hamba telah dilupakan, namun di kemudian hari dia dikenal dengan sebutan "Cassiodor".
    Dan pejuang muda mengikuti sang biduan ke Capitolium emas, kota tertinggi di ibu kota emas.
    Ujian dan latihan yang sulit dilewati, sangb Raja Dewa mengangkat mereka menjadi tuan.
  </h5>
  <br>
  <h5 class="card-text">
    "Tinggilah hati para penduduk kerajaan yang jaya laksana bunga emas. Tidak ada kemiskinan, tidak ada kebiadaban. Mata sang Raja Dewa melihat".
    Kebanggaan melindungi martabat bangsa, juga menjadi ujung tombak yang bersinar keemasan. Demikianlah keperkasaan sang Raja Dewa tak tertandingi".
    "Tatanan yang baik hanya dapat diciptakan lewat kedaulatan penuh. Tatanan yang baik melahirkan seni dan keindahan".
    "Di tanah emas yang indah, kelemahan, kebodohan, dan kebiadaban tidak diterima. Tidak dibiarkan. Hanya bisa takluk, atau dilenyapkan".
  </h5>
  <br>
  <h5 class="card-text">
    "Sahabatku, saudaraku, janganlah mengingat masa lalu yang sengsara. Janganlah mengenang kesalahan dan kerendahan mereka yang sudah berlalu".
    "Tubuh yang sederhana, jiwa yang lemah. Semua telah dibuang, dan berubah menjadi sekuat baja. Mengapa meratapi hal yang teramat kecil?"
    "Sahabatku, saudaraku, dengarkanlah lagu yang tidak pernah berubah, irama dari dalam kalbu. Itulah bisikan sang Raja Dewa".
    "Kerajaan yang jaya hanya memandang dunia masa depan yang sempurna. Masa depan yang menghadirkan lagu penghabisan, kehancuran bagi mereka yang sudah berlalu". 
  </h5>
  <br>
  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Nighttime") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/nighttime.png");
    document.getElementById("artifact-name").innerText =
      "Nighttime Whispers in the Echoing Woods";
    document.getElementById("2pc").innerText = "ATK +18%.";
    document.getElementById("4pc").innerText =
      "Selama 10 detik setelah melancarkan Elemental Skill, Geo DMG Bonus akan meningkat 20%. Saat dilindungi oleh perisai yang tercipta dari reaksi Crystallize, efek di atas akan ditingkatkan lagi sebesar 150%. Efek peningkatan tambahan tersebut akan dihapus setelah 1 detik perisai Crystallize hilang.";
    document.getElementById("desc-artifact").innerText =
      "Karangan bunga yang dipakai oleh penyihir wanita dalam cerita. Menggunakan sentuhan kupu-kupu sebagai desainnya, sama seperti aksesoris lainnya yang disukainya.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Anjing kecil bergegas ke loteng, hidungnya terkena debu sehingga bersin berulang kali.
      "Pie, lihat dirimu. Dulu warnamu seperti pai apel, tapi sekarang seperti dilumuri selai murbei."
      Gadis kecil itu mengejar anjing bernama "Pie" ke loteng kecil, lalu membantunya membersihkan debu-debunya.
      Loteng itu penuh dengan koleksi buku yang dijilid dengan indah. Gadis kecil mengambil sebuah buku dari rak, sampul bukunya berhiaskan kupu-kupu bersayap emas yang cantik.
      "Seperti buku cerita. Mungkin saja cerita yang ibu bacakan berasal dari sini! Benar kan, Pie?"
      Anjing kecil itu menggonggong sekali, lalu bersandar di samping kaki gadis kecil seperti biasanya.
      "Hmm, kalau saja aku bisa selesai membaca duluan daripada ibu .... "
      Gadis kecil membuka buku cerita itu. Halaman buku yang menguning terlihat seperti kupu-kupu yang merentangkan kedua sayapnya ....
  </h5>
  <br>
  <h5 class="card-text">
    Itu bukan cerita yang sudah lama terjadi. Konon di Hutan Bergema, tinggallah seorang penyihir yang bisa mewujudkan permohonan apa pun.
    Tapi penyihir ini seperti penyihir-penyihir di cerita lain yang punya kelakuan yang aneh. Dia menggunakan sihir untuk menyelimuti seluruh hutan dengan kabut, membuat penyusup tersesat oleh gema di hutan. Oleh karena itu, cuma sedikit orang yang bisa menemukan gubuk terpencilnya di dalam hutan, apalagi membuat permohonan padanya.
    Tapi pada suatu hari, akhirnya ada seorang remaja yang mengetuk pintu rumah penyihir itu.
    Remaja itu awalnya mau mencari bunga berwarna biru, tapi di tengah perjalanan matanya tertarik oleh kupu-kupu bersayap emas. Dia pun mengejar kupu-kupu tersebut dan tanpa sadar sampai ke gubuk di tengah hutan. Pada saat itulah dia baru teringat tentang legenda penyihir yang bisa mewujudkan permohonan. Setelah ragu-ragu beberapa saat, dia memutuskan untuk mengetuk pintu.
    Sebelum dia mengetuk pintu ketiga kalinya, pintu sudah dibuka.
    "Aku punya satu permohonan ...", kata remaja itu.
    "Orang-orang selalu bilang begitu." Penyihir memotong perkataannya, "Mewujudkan permohonanmu bukan hal sulit buatku, tapi harganya berbeda-beda untuk setiap orang."
    "Gadis yang aku cintai, hatinya sejak awal sudah milik orang lain. Tapi aku bukan mau memakai kekuatan sihir untuk membuatnya mengubah perasaannya, melainkan cuma berharap supaya dia bisa mendapatkan seluruh kebahagiaan yang ada di dunia ini. Kalau kamu bisa mewujudkan permohonan ini, aku bersedia menyerahkan semua yang kumiliki, waktu, uang, bahkan jiwaku sekalipun aku rela."
    "Permohonanmu akan terwujud, tapi harganya akan aku tagih di masa depan. Harganya juga belum tentu jiwamu ... penyihir selalu bertindak sesuka hati."
    "Tapi apa yang lebih berharga di dunia ini selain jiwa seseorang?"
    "Nanti kamu akan tahu, saat waktu yang ditentukan tiba. Cuma hati yang seperti emas yang akan ditimbang."
  </h5>
  <br>
  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Shime") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/shime.png");
    document.getElementById("artifact-name").innerText =
      "Shimenawa's Reminiscence";
    document.getElementById("2pc").innerText = "ATK +18%";
    document.getElementById("4pc").innerText =
      "Saat melancarkan Elemental Skill, jika Karakter mempunyai 15 Energy atau lebih, maka akan kehilangan 15 Energy dan Normal/Charged/ Plunging Attack DMG meningkat sebesar 50% selama 10 detik. Efek ini tidak bisa terpicu lagi selama durasinya masih aktif.";
    document.getElementById("desc-artifact").innerText =
      "Jimat indah yang terbuat dari tali kertas yang dipilin. Orang mengatakan bahwa di dalam benda ini terkandung sebuah kekuatan untuk mewujudkan keinginan-keinginan menjadi kenyataan.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Ilmu menenun Omamori dikenal dengan nama Mizuhiki,
      yang katanya dapat mengikat keinginan orang dengan takdirnya.
  </h5>
  <br>
  <h5 class="card-text">
    Dulu, aku belajar mengurus urusan-urusan di kuil di bawah bimbingan Kitsune yang hebat.
    Ketika itu, aku hanyalah seorang Miko naif yang datang ke Narukami dari sebuah desa nelayan.
    Aku yang dulunya lugu, keras kepala, terburu-buru dan selalu ingin tahu bak anak kecil,
    aku adalah anak naif yang selalu skeptis terhadap kata-kata Nona Saiguu yang elegan tetapi tidak dapat dipahami.
  </h5>
  <br>
  <h5 class="card-text">
    "Semua hal di dunia saling berkaitan, ilusi pun tercipta dari kenyataan konkret."
    "Omamori tidak bisa mengabulkan keinginan, namun ia mengabadikannya dalam tenunan."
  </h5>
  <br>
  <h5 class="card-text">
    Setelah melihat ekspresi wajahku yang bingung dan tidak bisa mengerti, Nona Kitsune tidak bisa menahan tawanya, 
    Dia lalu mengetuk kepalaku dengan pipa tembakau di tangannya, dan dengan cerdik mengubah topik pembicaraan.
  </h5>
  <br>
  <h5 class="card-text">
    "Hibiki, kamu pasti sudah ketemu orang yang ditakdirkan untukmu ya?", "Takdir apa yang ada antara aku dan orang yang kasar seperti dia!"
    "Ah, begitukah?"
  </h5>
  <br>
  <h5 class="card-text">
    Namun pada akhirnya, gelapnya malam menelan segalanya.
    Demikian pula dengan "takdir" itu. 
  </h5>`;
  }
  if (char == "Ocean") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/ocean.png");
    document.getElementById("artifact-name").innerText = "Ocean-Hued Clam";
    document.getElementById("2pc").innerText = "Bonus pemulihan +15%.";
    document.getElementById("4pc").innerText =
      "Jika Karakter yang mengenakan set Artefak ini memulihkan HP salah satu Karakter dalam party, akan muncul Sea-Dyed Foam yang berlangsung selama 3 detik yang mencatat dan mengakumulasi jumlah pemulihan yang dilakukan (termasuk pemulihan yang berlebih). Setelah durasinya berakhir, Sea-Dyed Foam akan meledak dan mengakibatkan DMG sebesar 90% dari jumlah pemulihan yang tercatat (Perhitungan DMG ini mirip dengan Reaksi Elemental seperti Electro-Charged, Superconduct, dan lainnya, tetapi tidak dipengaruhi oleh Elemental Mastery, Level Karakter, atau Bonus DMG Reaksi Elemental). Sea-Dyed Foam hanya bisa muncul setiap 3,5 detik. Setiap Sea-Dyed Foam dapat mengakumulasi pemulihan hingga 30.000 HP (termasuk pemulihan yang berlebih). Dalam party sendiri, hanya bisa ada satu Sea-Dyed Foam yang muncul dalam waktu bersamaan. Efek dari set Artefak ini tetap dapat terpicu meskipun Karakter party yang mengenakannya tidak berada di medan pertempuran.";
    document.getElementById("desc-artifact").innerText =
      "Bunga berkelopak lembut yang memiliki warna lautan yang berubah-ubah. Saat bermandikan cahaya rembulan, bunga ini memancarkan warna yang menakjubkan.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Bunga lembut dari samudra. Inti bunganya berhiaskan mutiara.
      Lagu-lagu Pulau Watatsumi mengisahkan tentang bunga-bunga yang lahir di kedalaman, di tempat yang disinari cahaya mutiara.
      Bermandikan kerinduan para putri lautan dan cahaya rembulan, kelopaknya memancarkan sinar bak mutiara.
  </h5>
  <br>
  <h5 class="card-text">
    Ketika semua perselisihan telah sirna, sang penguasa laut tak perlu lagi menangisi kesendirian rekannya,
    dan ketika terang bulan terbit kembali di Touzan, sang dewa 'kan bangkit dan bernyanyi.
    Mari, putri lautan, datang dan lihatlah, wahai orang-orang terkasih, pandanglah sang rembulan malam ini."
    "Sekalipun malam ini Touzan akan tumbang, petir dan badai pun takkan bisa menghalangi indahnya rembulan, sang mutiara langit malam ...."
  </h5>
  <br>
  <h5 class="card-text">
    Sang miko akan menyanyi dan menari di atas ombak keperakan.
    Para penyelam akan melupakan sakitnya kehilangan, dan bunga-bunga akan memperoleh kembali warna mereka. 
  </h5>
  <br>
  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Blizzard") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/blizzard.png");
    document.getElementById("artifact-name").innerText = "Blizzard Strayer";
    document.getElementById("2pc").innerText = "Cryo DMG Bonus +15%.";
    document.getElementById("4pc").innerText =
      "Saat karakter memukul musuh yang terkena efek Cryo, CRIT Rate meningkat 20%. Jika musuh terkena Frozen, CRIT Rate meningkat lagi 20%.";
    document.getElementById("desc-artifact").innerText =
      "Setangkai bunga petir yang tidak tersambar petir dan tidak terbakar oleh api ungu. Merupakan satu-satunya benda yang luput dari amarah Thunderbird.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Bunga es yang membeku selamanya ini dipetik oleh sepasang tangan yang halus.
      Pastinya bunga itu telah memberi seseorang kekuatan untuk melihat musim dingin sebagai pelukan yang hangat.
  </h5>
  <br>
  <h5 class="card-text">
    "Mural keempat ini kupersiapkan untukmu, sosokmu akan selalu ada di atas lukisan di atas tembok ini"
    "Demi mural ini, dan demi semua orang, aku akan selalu berada di sini menunggumu dan mendoakan kepulanganmu"
  </h5>
  <br>
  <h5 class="card-text">
    Gadis itu berdiri di depan dinding kosong, tersenyum dan meletakkan sekuntum bunga kecil di dada prajurit itu.
    Dia selalu bersikap anggun dan tenang, dan tidak pernah gentar, bahkan ketika dia menghadapi kematian.
  </h5>
  <br>
  <h5 class="card-text">
    Kepahlawanan Sang Penjinak Es terlupakan, terkubur di badai salju Utara.
    Sejak itu, salju meleleh namun bunga itu tidak pernah layu.
  </h5>
  <br>
  <h5 class="card-text">
  </h5>`;
  }
  if (char == "Viri") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/viri.png");
    document.getElementById("artifact-name").innerText = "Viridescent Venerer";
    document.getElementById("2pc").innerText = "Anemo DMG Bonus +15%.";
    document.getElementById("4pc").innerText =
      "Meningkatkan 60% Swirl DMG. Mengurangi 40% Elemental RES musuh sesuai elemen yang terkandung dalam swirl selama 10 detik.";
    document.getElementById("desc-artifact").innerText =
      "Bunga liar yang bermekaran memenuhi suatu daratan. Saat meninggalkan daratan tesebut, pemburu memetiknya dan mengenakannya di dada.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Bunga putih liar yang dulunya memenuhi bumi.
      Tidak pernah layu sedikitpun, dan masih mengeluarkan aroma yang sempurna.
  </h5>
  <br>
  <h5 class="card-text">
    Hari-hari di mana kehidupan yang liar masih ada di bumi dan monster masih belum punah,
    Viridescent Venerer akan menggunakan bunga ini untuk menutupi bau manusia di tubuhnya.
    Dikatakan bahwa jika seseorang mencari pemburu yang pendiam dan lembut,
    Dia hanya cukup menutup mata dan berjalan tanpa alas kaki menuju hutan, mengikuti harum bunga liar.
    Hanya mereka yang bisa berjalan seperti pemburu, menghindari derak daun di kaki, seolah memberi peringatan kepada sang ratu pemburu.
  </h5>
  <br>
  <h5 class="card-text">
    Dikatakan juga bahwa yang akhirnya menemukan si ratu pemburu adalah seorang bocah.
    Pada kala itu, bencana melanda kerajaan kuno dan penderitaan menyebar ke seluruh negeri. 
  </h5>`;
  }
  if (char == "Fragment") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/fragment.png");
    document.getElementById("artifact-name").innerText =
      "Fragment of Harmonic Whimsy";
    document.getElementById("2pc").innerText = "ATK +18%.";
    document.getElementById("4pc").innerText =
      "Saat nilai Bond of Life bertambah atau berkurang, DMG yang diakibatkan Karakter meningkat 18% selama 6 detik, dapat ditumpuk sampai 3 kali.";
    document.getElementById("desc-artifact").innerText =
      "Medali kehormatan berbentuk bunga mekar yang dihiasi dengan batu hijau dan emas yang dulunya diberikan kepada manusia fana.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Itu adalah masa di mana kabut ketidaktahuan menyelimuti Laut Tinggi, dan para penduduk Segala Perairan masih belum tercerahkan.
      Di antara dataran pasir merah dan pegunungan gelap, pernah ada seorang dewa yang kehilangan kampung halamannya.
      Dia dulunya adalah seorang penyanyi oasis, tetapi kehilangan kampung halamannya di bawah cahaya Sang Penguasa Matahari.
      Dewa yang kehilangan kampung halamannya ini memilih untuk pergi mengembara, karena dia tidak bersedia tunduk pada takhta Sang Raja Pasir.
  </h5>
  <br>
  <h5 class="card-text">
    Di dasar laut terdalam yang gelap, tempat asal usul segala perairan, terdapat sebuah kota yang tidak pernah tercatat dalam sejarah mana pun.
    Orang asing yang tadinya ingin mengubur diri di Laut Tinggi ini, secara tidak sengaja menemukan reruntuhan yang lebih kuno daripada bumi.
    Setelah melewati koridor yang tidak berujung, dia sampai di pusat reruntuhan kuil, di bawah pohon cemara yang berwarna perak dan putih,
    Dia mendengar kata-kata yang masih ada di kota yang terlupakan ini, yang mengelilingi pohon perak dan lebah emas:
  </h5>
  <br>
  <h5 class="card-text">
    "Wahai pengembara dari jauh, ini bukan kebetulan belaka, tapi takdir yang telah menuntunmu ke tempat ini."
    "Aku pernah menjadi utusan yang menjaga pohon perak, tapi aku kehilangan akal sehat dan wujudku seiring berjalannya waktu."
    "Tapi aku masih bisa melihat masa depan. Pengembara, kamu akan mendapatkan kembali kota dan rakyatmu."
    "Bangsa yang kamu bangun akan makmur dan suatu hari nanti akan menguasai seluruh lautan."
    "Kamu akan membawa kebudayaan dan keadilan pada mereka, tapi pada akhirnya, keadilan itu sendiri yang akan menjadi kehancuran mereka."
    "Kalau kamu tetap bersedia untuk memulai perjalanan ini meskipun akhirnya sudah ditentukan, maka aku akan memandumu menaiki jalan ke atas ...."
  </h5>
  <br>
  <h5 class="card-text">
    "Wahai Lebah Emas peramal, jika ini memang adalah takdir, apakah aku punya pilihan lain?"
    "Tapi jikalau aku punya pilihan, berarti aku akan bisa mengubah akhir yang tadi engkau katakan tidak bisa diubah."
  </h5>
  <br>
  <h5 class="card-text">
    Setelah dia selesai berbicara, gua tanpa air itu runtuh, pohon perak itu pun berubah menjadi sebuah kapal emas.
    Inilah pertemuan pertama antara sang raja mulia yang nantinya akan memainkan simfoni, dan Sybilla sang peramal. 
    </h5>`;
  }
  if (char == "Paradise") {
    document
      .querySelector("#img-artifact")
      .setAttribute("src", "../assets/flowerofparadise.png");
    document.getElementById("artifact-name").innerText =
      "Flower of Paradise Lost";
    document.getElementById("2pc").innerText = "Elemental Mastery +80.";
    document.getElementById("4pc").innerText =
      "DMG dari reaksi Bloom, Hyperbloom, dan Burgeon Karakter yang mengenakan meningkat 40%. Selain itu, setelah Karakter yang mengenakan memicu reaksi Bloom, Hyperbloom, atau Burgeon, efek yang disebutkan di atas akan mendapatkan tambahan peningkatan sebesar 25% selama 10 detik, dan dapat ditumpuk sampai 4 lapis. Efek hanya dapat terpicu setiap 1 detik sekali. Efek tetap aktif saat Karakter yang mengenakannya ada dalam party namun sedang tidak berada di medan pertempuran.";
    document.getElementById("desc-artifact").innerText =
      "Bunga kecubung yang telah dipahat dengan indah, gambarnya menyerupai bunga kuno yang sudah punah.";
    document.getElementById("story-arte").innerHTML = `<h5 class="card-text">
      Pada masa ketika bangsa Jinni sudah mampu mengingat, sang Ratu Bunga dibuang dari langit.
      Wahananya yang mulia menyisakan cangkang belaka, dan kaumnya kehilangan akal sehat mereka ....
  </h5>
  <br>
  <h5 class="card-text">
    Dikatakan bahwa sang Ratu berjalan di padang pasir selama dua puluh tujuh malam ....
    Tumitnya rapuh dikikis kerikil tajam, luka-lukanya mengalir menjadi mata air yang tidak berbatas.
    Mengalir menuju taman hijau dan menumbuhkan bunga air berwarna sebiru malam.
    Bunga-bunga yang menjadi ibu semua Jinni, persatuan antara candu mimpi dan pahitnya kehilangan.
  </h5>
  <br>
  <h5 class="card-text">
    Jinni pertama adalah makhluk yang cerdas, yang ketagihan mimpi polos penuh cinta.
    Mensyukuri penciptanya, Jinni itu menggandeng tuannya dan memahkotainya dengan bunga krisan.
  </h5>
  <br>
  <h5 class="card-text">
    "Ratu Bunga, penguasa taman, mohon tinggalah, jangan menelantarkan kami!"
    "Ya. Ibunda mimpi, pemilik anggur yang memabukkan, tinggalah sebagai ratu di taman ini".
  </h5>
  <br>
  <h5 class="card-text">
    Sang Ratu yang diasingkan pun tergerak oleh ketulusan para Jinni, maka tinggalah ia di taman penuh bunga.
    Ketika dia mendapat perhentian, bunga ungu seindah rembulan mulai bermekaraan. Dinamainyalah bunga itu "Padisarah".
  </h5>`;
  }
}

function getEnemy() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const char = urlParams.get("enemy");

  if (char == "Dvalin") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/dvalin-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/dvalin-splash.png");
    document.getElementById("nama-enemy").innerText = "Stormterror";
    document.getElementById("gelar-enemy").innerText = "Stormterror Dvalin";
    document.getElementById("element").innerText = "Anemo";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Stromterror's Lair";
    document.getElementById("affil").innerText = "Four Winds";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Dvalin, sang Dragon of the East, salah satu dari Four Winds di Mondstadt.
      Seiring berjalannya waktu di tengah-tengah kegelapan pekat, bahkan batu permata paling berkilau sekalipun akan tertutup oleh debu, dan seekor naga yang mulia pun akan terjerat dalam rasa benci dan dendam.
      Tapi kalian harus selalu ingat bahwa debu dapat dibersihkan dan rasa benci ataupun dendam yang meracuni dapat disingkirkan.
    </h5>
    <br>
    <h5 class="card-text">
      "Terbanglah dengan bebas di langit yang luas."
      "Sama seperti waktu kita pertama kali bertemu, saat aku menginjakkan kaki di tanah ini sambil menyanyikan lagu tentang kebebasan,"
      "Dan kamu melesat jauh ke atas langit, melihat dunia ini dari angkasa sana.
      "Saat ini dunia terlihat sangat indah, tidak ada angin dan salju yang menerpa langit, dan rumput-rumput hijau menghiasi seluruh daratan."
      "Aku yakin kamu juga akan mengerti, jika kamu pernah berjalan di atas tanah subur ini, mendengar suara gembala domba dan lonceng angin dari kejauhan, atau mencicipi anggur yang manis bagaikan madu.
      "Alangkah baiknya kalau kamu bisa menjadi diriku, melihat wujudmu yang begitu mulia dan indah itu terbang bebas di langit yang biru."
      "Dengan begitu kamu akan menyadari, bahwa langit ini dan bumi ini... Keduanya patut diperjuangkan."
    </h5>`;
  }
  if (char == "Andrius") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/andrius-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/andrius-splash.png");
    document.getElementById("nama-enemy").innerText = "Andrius";
    document.getElementById("gelar-enemy").innerText =
      "Lupus Boreas, Dominator of Wolves";
    document.getElementById("element").innerText = "Anemo & Cryo";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Wolvendom";
    document.getElementById("affil").innerText = "Four Winds";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Jiwa termulia dan terhebat, yang mengawasi lupical di Wolvendom.
      Ketika kawanan serigala terancam, dia akan muncul dalam bentuk serigala dan menunjukkan taring serta cakarnya.
    </h5>
    <br>
    <h5 class="card-text">
      Serigala Wolvendom adalah hantu yang menakutkan bagi orang-orang Mondstadt.
      Suatu wujud kabur yang berpijar dan langsung menghilang di tengah-tengah hutan, lolongan dingin yang berbunyi di antara sebuah jarak yang tidak dapat ditebak, pandangan mata dari suatu sudut tersembunyi yang terus menggerayangi punggung seseorang.
      Manusia sangat jarang memiliki kesempatan untuk bertatap mata dengan serigala, karena ini juga adalah hukum yang ditetapkan Lupus Boreas untuk kaumnya.
    </h5>`;
  }
  if (char == "Childe") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/childe-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/childe-splash.png");
    document.getElementById("nama-enemy").innerText = "Childe";
    document.getElementById("gelar-enemy").innerText =
      "Eleventh of the Fatui Harbingers";
    document.getElementById("element").innerText = "Hydro & Electro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Golden House";
    document.getElementById("affil").innerText = "Harbringer";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      "Childe" Tartaglia, Fatui Harbinger ke-11.
      Tartaglia bertarung dengan kekuatan Delusion yang mengerikan dan dengan ilmu bela diri yang dia pelajari dalam suatu tempat penuh kegelapan.
    </h5>
    <br>
    <h5 class="card-text">
      Dia adalah seorang petarung sejati yang selalu haus akan pertarungan.
      Setiap pertumpahan darah, setiap tantangan hidup dan mati, adalah cobaan yang menyenangkan bagi dirinya.
      Orang-orang mengatakan bahwa sejak muda, kemampuan bertarung Tartaglia sudah dikenal di seluruh penjuru.
      Tetapi dia sendiri tidak pernah memamerkan dirinya seperti itu.
    </h5>
    <br>
    <h5 class="card-text">
      Karena dia percaya...
      "Kamu ditakdirkan untuk menjadi pusat angin topan,"
      "suara pedang yang saling beradu akan senantiasa menemanimu."
      "Ingatan saat kamu menginjakkan kaki ke dalam kegelapan pekat itu,"
      "akhirnya akan menjadi kekuatanmu untuk menguasai dunia."
    </h5>`;
  }
  if (char == "Azhdaha") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/azhdaha-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/azhdaha-splash.png");
    document.getElementById("nama-enemy").innerText = "Azhdaha";
    document.getElementById("gelar-enemy").innerText = "Sealed Lord of Vishaps";
    document.getElementById("element").innerText =
      "Geo, Cryo, Electro, Hydro & Pyro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Beneath the Dragon-Queller";
    document.getElementById("affil").innerText = "Vishap";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Seekor naga tua yang umurnya setua gunung yang ditinggalinya.
      Di zaman yang hampir terlupakan, dia berdiri bersama dengan orang yang menguasai pelabuhan batu. Tapi pada akhirnya, mereka berseteru, dan naga tersebut tersegel di bawah tanah yang gelap. Setelah beratus tahun lamanya disegel, kekuatannya perlahan menghilang. Dia juga telah menjadi cacat karena berbagai jenis erosi yang dialaminya.
      Getaran amarah yang samar dari naga di bawah tanah ini bergema melalui perut pegunungan bagaikan sebuah kenangan dari zaman dulu.
    </h5>
    <br>
    <h5 class="card-text">

    </h5>
    <br>
    <h5 class="card-text">

    </h5>`;
  }
  if (char == "Signora") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/signora-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/signora-splash.png");
    document.getElementById("nama-enemy").innerText = "La Signora";
    document.getElementById("gelar-enemy").innerText =
      "Eighth of the Fatui Harbingers";
    document.getElementById("element").innerText = "Cryo & Pyro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Narukami Island: Tenshukaku";
    document.getElementById("affil").innerText = "Harbringer";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Signora, sang Fatui Harbinger ke-8.
      Berbeda dengan Fatui lainnya yang memanfaatkan kekuatan Delusion, Delusion milik Signora adalah sebuah alat untuk meredam kekuatan api yang bisa melahap segalanya. Daripada sebuah senjata, mungkin lebih tepat disebut sebagai alat untuk menangkap musuhnya.
      ara api yang telah terkumpul selama bertahun-tahun akhirnya memecahkan segel Delusion dan membuat penampilan Signora seperti saat ini.
    </h5>
    <br>
    <h5 class="card-text">
      Warna merah fajar terpantul di bola matanya, dan akhirnya Signora membuka sayap apinya dan terbang menuju fajar di ufuk langit.
      "Tapi itu bukan cahaya fajar, Rosalyne-ku tercinta. Itu adalah cahaya api yang membakar segalanya."
      Ucap sebuah suara dari dalam cahaya padanya.
    </h5>
    <br>
    <h5 class="card-text">
      Tapi kata-kata itu tidak berarti apa-apa. Karena dalam hatinya, dia tahu kalau dirinya telah tertelan api sejak dulu.
    </h5>`;
  }
  if (char == "Shogun") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/narukaminoogosho-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/narukaminoogosho-splash.png");
    document.getElementById("nama-enemy").innerText = "Raiden no Inazuma Tono";
    document.getElementById("gelar-enemy").innerText =
      "Magatsu Mitake Narukami no Mikoto";
    document.getElementById("element").innerText = "Electro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "End of the Oneiric Euthymia";
    document.getElementById("affil").innerText = "Archon puppet";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Boneka yang mewakili kekuatan Raiden Shogun. Saat menghadapi musuh yang mengancam "keabadian", dia mengungkapkan bentuknya yang seperti ini.
      Sebagai pembantu Raiden dalam menjalankan "keabadian", dia tidak pernah ragu, tidak pernah takut, dan selalu memberikan yang terbaik.
      Dia telah mendengar bahwa selama era Makoto dan Ei, Ei memikul tanggung jawab yang sama dengannya dan melalui banyak rasa sakit dan kehilangan.
      Ketika dua bayangan bergabung menjadi satu, dia hanya melihat bekas luka kecil di dalam "keabadiannya". Karena takdir selalu berputar, dia harus memenuhi janjinya dan menyatakan perang "kepadanya".
    </h5>
    <br>
    <h5 class="card-text">
      "Wujudku adalah simbol keagungan tertinggi, di mana telah diberikan kekuasaan atas seluruh alam. Ini adalah sebuah perwujudan terpadu dari semua yang merupakan Raiden Shogun".
      Secara naluriah aku juga mewarisi rasa sakit Ei — rasa sakit karena kehilangan tak terelakkan seiring dengan dirinya yang terus bergerak maju. Demikian juga hal itu mewarisi tekadnya dalam mencapai keabadian.
      Tekad, keberanian, cinta, dan kebencian ... Semua ini akan terdegradasi dan terdistorsi oleh arus waktu yang tiada henti.
      Namun 'aturan' yang ada, tidak akan pernah berubah.
    </h5>`;
  }
  if (char == "Scara") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/shoukinokami-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/shoukinokami-splash.png");
    document.getElementById("nama-enemy").innerText =
      "Shouki no Kami, the Prodigal";
    document.getElementById("gelar-enemy").innerText =
      "Everlasting Lord of Arcane Wisdom";
    document.getElementById("element").innerText =
      "Anemo, Cryo, Electro, Hydro & Pyro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Joururi Workshop";
    document.getElementById("affil").innerText = "The Balladeer";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Shouki no Kami, dewa buatan yang diciptakan dari seluruh kekuatan Enam Darshan Sumeru, memiliki kekuatan yang bisa menyaingi dewa sejati.
      Tetapi orang-orang di dunia ini yang menyebut makhluk seperti itu sebagai "dewa palsu" sudah salah memahami arti sebenarnya dari kata itu.
      Shouki no Kami sekarang memahami banyak sekali hal dan memiliki kekuatan yang tak tergoyahkan, bahkan bisa dikatakan dapat melampaui manusia fana.
      Jika dewa adalah ia yang mencintai manusia,
      Berarti Shouki no Kami, yang dapat memberikan kegagalan yang sama kepada manusia, juga mencintai mereka.
      Jika dewa adalah ia yang harus menjaga umat manusia
    </h5>
    <br>
    <h5 class="card-text">
    ....
    </h5>
    <br>
    <h5 class="card-text">
    ....
    </h5>
    <br>
    <h5 class="card-text">
      Maka Shouki no Kami, yang telah menjadi saksi cinta, kebencian, perpisahan, dendam, dan kemarahan yang tak terbatas — demikian jugalah ia menjaga manusia.
    </h5>
    <br>
    <h5 class="card-text">
    "Terlalu banyak kebahagiaan yang sudah kamu miliki!"
    "Itulah yang sudah membuatmu bodoh. Sombong. Mengerikan dalam keserakahanmu."
    "Biarkanlah era ini berakhir!"
    "Biarkan dewa baru mengumumkan kekalahan dewa lama."
    "Manusia fana yang bodoh ... Masih sempat bagimu untuk berlutut di hadapanku."
    </h5>`;
  }
  if (char == "Apep") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/guardianofapep-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/guardianofapep-splash.png");
    document.getElementById("nama-enemy").innerText =
      "Guardian of Apep's Oasis";
    document.getElementById("gelar-enemy").innerText =
      "Evolved From an Apocalyptic Millennium";
    document.getElementById("element").innerText = "APhysical & Dendro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "The Realm of Beginnings";
    document.getElementById("affil").innerText = "Warden of the Last Oasis";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
      Apep mengarungi perairan laksana ikan, bersama keturunannya menapaki padang rumput, pohon raksasa, dan tanaman merambat yang panjang tak terbayangkan. Hingga ketika tumbuh-tumbuhan layu menjadi debu, dan makhluk-makhluk kecil mendirikan bangsa di atas tanah.
      Lautan pasir mengamuk bagaikan air yang mendidih, menara serta rumah tumbang layaknya daun berguguran, demikian perbuatan Apep dan keturunannya. Sampai perdamaian terjadi di antara dewa pasir dengan raja yang kehilangan tanah airnya, maka bukit pasir adalah milik pusaka manusia dan dewa, dan oasis sang naga ada di dalam jantungnya.
    </h5>
    <br>
    <h5 class="card-text">
      Apep berbagi pengetahuan tentang evolusi dengan keturunannya, sebab air yang mengalir membawa hidup, sementara air yang diam mendatangkan musibah. Hingga janji antara dirinya dan dewa pasir terpenuhi, ketika kebijaksanaan menjadi paripurna, hanya kebinasaan yang terlihat dihadapan sang naga.
     Apep tenggelam dalam cakrawala akhir zaman. Manusia, dewa, naga, hewan, burung, dan ikan ... Pula ingatan, kebijaksanaan, kata-kata, dan kebencian ... Semua tergerus menjadi debu tak berwarna, cahaya bulan membara menjadi api pucat, turun sebagai hujan di tanah tandus.
    </h5>
    <br>
    <h5 class="card-text">
    ....
    </h5>
    <br>
    <h5 class="card-text">
      Apep pernah menganggap dasar lautan pasir sebagai makam, dan bukan istana raja yang kehilangan tanahnya. Pengetahuan beracun akan segera membebaskan Apep dari amarah yang telah membara entah sekian lamanya. Muak dirinya memandangi kiamat yang tak bewarna. Hingga akhirnya sang dewa muda dan Pengembara emas mengingatkannya, yakni meskipun tanah hijau kekuasaannya telah menjadi padang pasir, meskipun Apep dan keturunannya telah menjadi berkeluk dan buruk demi bertahan hidup, pemandangan oasis yang berkilau itu tetap lestari, abadi sepanjang masa.
    </h5>`;
  }

  if (char == "Narwhal") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/narwhal-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/narwhal-splash.png");
    document.getElementById("nama-enemy").innerText = "All-Devouring Narwhal";
    document.getElementById("gelar-enemy").innerText =
      "Visitor from the Far Side of the Sea of Stars";
    document.getElementById("element").innerText = "Hydro, Electro & Pyro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Shadow of Another World";
    document.getElementById("affil").innerText = "a whale from another world";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">
    
    </h5>
   
    <h5 class="card-text">
    Makhluk raksasa misterius dari dunia lain.
    </h5>`;
  }
  if (char == "Peruere") {
    document
      .querySelector("#img-enemy")
      .setAttribute("src", "../assets/peruere-icon.png");
    document
      .querySelector(".img-splash")
      .setAttribute("src", "../assets/peruere-splash.png");
    document.getElementById("nama-enemy").innerText = "The Knave";
    document.getElementById("gelar-enemy").innerText =
      "Cinder of Two Worlds' Flames";
    document.getElementById("element").innerText = "Phyro";
    document.getElementById("tipe").innerText = "Weekly boss";
    document.getElementById("lokasi").innerText = "Scattered Ruins";
    document.getElementById("affil").innerText = "Harbringer";
    document.getElementById("desc-enemy").innerHTML = `<h5 class="card-text">

    </h5>
    <br>
    <h5 class="card-text">
      The Knave, Harbinger ke-4 dari Fatui Harbinger
    </h5>`;
  }
}

function getMats() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const char = urlParams.get("mats");

  if (char == "crown") {
    document
      .querySelector("#img-mats")
      .setAttribute("src", "../assets/crown.png");
    document.getElementById("mats-name").innerText = "Crown of Insight";
    document.getElementById("type-mats").innerText =
      "Material Talenta Karakter";
    document.getElementById("mats-desc").innerText =
      "Material Penguatan Talenta yang berharga. Di zaman kuno, pernah digunakan sebagai instrumen ritual untuk membawa dan menyebarkan ilmu pengetahuan. Sekarang, kebijaksanaan ditemukan dalam teks-teks kuno dan dalam pidato yang mendalam. Namun demikian, Mahkota Kebijaksanaan ini masih tetap dapat memberikan kekuatan dan kebijaksanaan kepada pemiliknya.";
    document.getElementById("source").innerText = "Hadiah Event Waktu Terbatas";
  }
  if (char == "starglitter") {
    document
      .querySelector("#img-mats")
      .setAttribute("src", "../assets/starglitter.png");
    document.getElementById("mats-name").innerText = "Masterless Starglitter";
    document.getElementById("type-mats").innerText = "Superior Voucher";
    document.getElementById("mats-desc").innerText =
      "Mata uang yang dapat digunakan untuk membeli item-item langka dari Toko. Stardust of Destiny yang berlebih, mungkin bisa digunakan untuk menyinari ujung alam semesta lain.";
    document.getElementById("source").innerText = "Permohonan";
  }
  if (char == "anting") {
    document
      .querySelector("#img-mats")
      .setAttribute("src", "../assets/anting.png");
    document.getElementById("mats-name").innerText = "Denial of Judgment";
    document.getElementById("type-mats").innerText =
      "Material Penguatan Karakter";
    document.getElementById("mats-desc").innerText =
      "Anting yang diambil di reruntuhan setelah menyelesaikan duel melawan The Knave. Simbol merah di atasnya menyerupai pola pada matanya, yang menyiratkan akan peringatan dan penolakan. Anak yatim piatu menjalani kehidupan yang penuh dengan penderitaan sejak masa kanak-kanak — ini disaksikan serta diingatnya dalam hati. Seperti takdir yang menguji umat manusia, demikian pula manusia akan menghakimi takdir.";
    document.getElementById("source").innerText =
      "Hadiah Tantangan The Knave Lv. 70+";
  }
  if (char == "bola") {
    document
      .querySelector("#img-mats")
      .setAttribute("src", "../assets/bola.png");
    document.getElementById("mats-name").innerText =
      "Lightless Eye of the Maelstrom";
    document.getElementById("type-mats").innerText =
      "Material Penguatan Karakter";
    document.getElementById("mats-desc").innerText =
      "Sebuah zat aneh yang diperoleh dari pertempuran dengan All-Devouring Narwhal. Beratnya jauh melebihi ukurannya. Segalanya berkumpul di sekeliling objek yang berat, seperti emas yang lebih menarik dibandingkan besi, dan tanah yang luas dibandingkan angin sepoi. Layaknya cahaya yang tidak bisa terlepas dari pusaran kegelapan, sebab dan akibat juga terikat dengan takdir, tidak bisa diganggu gugat.";
    document.getElementById("source").innerText =
      "Hadiah Tantangan All-Devouring Narwhal Lv. 70+";
  }
}

sysreq();
getChar();
getWeapon();
getArtifact();
getEnemy();
getMats();
