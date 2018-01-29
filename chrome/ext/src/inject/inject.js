chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var hostname = location.hostname;
      var servers = [

        'ac24.cz',
        'cz.sputniknews.com',
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
        'megazine.cz',
        'isstras.eu',
        'pravednes.cz',
        'mikan.cz',
        'infowars.cz',
        'parlamentnilisty.cz',
        'protiproud.cz',
        'zvedavec.org',
        'euportal.cz',
        'eportal.cz',
        'bezpolitickekorektnosti.cz',
        'freeglobe.cz',
        'rukojmi.cz',
        'casopis-sifra.cz',
        'euserver.cz',
        'pravdive.eu',
        'almanach.cz'
      ];


      var html = '<div id="ext-unfair-root" class="ext-unfair-root">\n' +
        '    <div class="unfairA">\n' +
        '    <div class="unfairB">\n' +
        '    <div class="ext-unfair-dialog">\n' +
        '        <div class="ext-unfair-dialog--header">\n' +
        '            <div class="ext-unfair-dialog-icon">!</div>\n' +
        '            <div class="ext-unfair-dialog--hed">Varování! </div>\n' +
        '        </div>\n' +
        '        <div class="ext-unfair-dialog--content">\n' +
        '            <div class="ext-unfair-dialog--box">\n' +
        '                <div class="ext-unfair-dialog--list">Vstupujete na dezinformační server</div>\n' +
        '            </div>\n' +
        '            <div class="ext-unfair-dialog--notes">\n' +
        '                <div>- Nenechte se uvést v <strong>omyl</strong>.</div>\n' +
        '                <div>- Každou zde <strong>získanou informaci ověřte</strong> na jiných zpravodajských serverech.</div>\n' +
        '            </div>\n' +
        '            <hr>\n' +
        '            <div class="ext-unfair-dialog--centered">\n' +
        '                <div id="extunfairconfirm" class="ext-unfair-dialog--button" disabled><span id="extunfaircountdown">načítám ...</span></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '</div>';

      for (var i = 0; i < servers.length; i++) {
        if (hostname.indexOf(servers[i]) > -1) {
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
  }, 100);
});
