chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var hostname = location.hostname;
      var servers = [
        'ac24.cz',
        'sputniknews.com',
        'svetkolemnas.info',
        'prvnizpravy.cz',
        'aeronet.cz',
        'novarepublika.cz',
        'nwoo.org',
        'lajkit.cz',
        'svobodnenoviny.eu',
        'czechfreepress.cz',
        'prvopodstata.com',
        'eurasia24.cz',
        'orgo-net.blogspot.cz',
        'vlasteneckenoviny.cz',
        'ceskoaktualne.cz',
        'osud.biz',
        'infokuryr.cz',
        'e-republika.cz',
        'paratdnes.cz',
        'parlamentnilisty.cz'

      ];

      /*
      AC24
      Sputnik CZ
      Svět kolem nás
      První zprávy
      Aeronet
      Nová Republika
      New World Order Opposition
      Lajkit
      Svobodné noviny
      CzechFreePress
      Prvopodstata
      Eurasia24
      OrgoNet
      Vlastenecké noviny
      Česko aktuálně
      Osud
      Info kurýr
      E-republika
      Pařát dnes
      Megazine
      ISSTRAS
      Antiilluminati
      Vlastní hlavou
      Moravská Informační Kancelář
      InfoWars
      Parlamentní listy
      Protiproud
      Zvědavec
      EUportál
      Eportál
      Bez politické korektnosti
      Free Globe
      Rukojmí
      Časopis Šifra
      Euserver
      Pravdive.eu
      Almanach
      */

      var html = '<div id="ext-unfair-root" class="ext-unfair-root">\n' +
        '    <div class="unfairA">\n' +
        '    <div class="unfairB">\n' +
        '    <div class="ext-unfair-dialog">\n' +
        '        <div class="ext-unfair-dialog--header">\n' +
        '            <div class="ext-unfair-dialog-icon">!</div>\n' +
        '            <div class="ext-unfair-dialog--hed">Varování! Vstupujete na dezinformační server</div>\n' +
        '        </div>\n' +
        '        <div class="ext-unfair-dialog--content">\n' +
        '            <div class="ext-unfair-dialog--box">\n' +
        '                <div class="ext-unfair-dialog--list">Server je zařazen na listině dezinformačních serverů BIS a MVČR.</div>\n' +
        '            </div>\n' +
        '            <ul class="ext-unfair-dialog--notes">\n' +
        '                <li>Nenechte se uvést v <strong>omyl</strong>.</li>\n' +
        '                <li>Každou zde <strong>získanou informaci ověřte</strong> na jiných zpravodajských serverech.</li>\n' +
        '                <li>Argumentační hondota zde nabytých informací je nulová pro jakýkoliv <strong>právní spor</strong>.</li>\n' +
        '            </ul>\n' +
        '            <hr>\n' +
        '            <div class="ext-unfair-dialog--centered">\n' +
        '                <div id="extunfairconfirm" class="ext-unfair-dialog--button" disabled><span id="extunfaircountdown"></span></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '</div>';

      for (var i = 0; i < servers.length; i++) {
        if (hostname.indexOf(servers[i]) > -1) {
          console.log(servers[i]);
          $('body').append(html);
          var dialog = $('#ext-unfair-root');
          var countdown = $('#extunfaircountdown');
          var extconfirm = $('#extunfairconfirm');


          var clockCounter = 20;
          var closeInterval = setInterval(function () {
            countdown.text('Vstoupit za ' + clockCounter + 's');
            clockCounter = clockCounter - 1;
            if (clockCounter <= 0) {
              countdown.text('Příjmám riziko! Vstoupit');
              extconfirm.click(function (evt) {
                dialog.addClass('ext-dialog-hidden');
                clearInterval(closeInterval);
              });

            }

          }, 1000);

        }
      }


    }
  }, 10);
});
