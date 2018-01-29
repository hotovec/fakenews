var Filter = /** @class */ (function () {
    function Filter() {
        this.servers = [
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
        this.hostname = null;
        this.timeout = 20;
        this.htmlTemplate = '<div id="ext-unfair-root" class="ext-unfair-root">\n' +
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
        this.hostname = location.hostname;
        if (this.isBlockedServer()) {
            console.log("is blocked");
            var fragment = new DOMParser().parseFromString(this.htmlTemplate, 'text/html');
            var dialog_1 = fragment.body.querySelector('#ext-unfair-root');
            document.body.appendChild(dialog_1);
            var coundown_1 = dialog_1.querySelector("#extunfaircountdown");
            var extconfirm_1 = dialog_1.querySelector("#extunfairconfirm");
            var clockCounter_1 = this.timeout;
            var closeInterval_1 = setInterval(function () {
                coundown_1.innerText = 'Vstoupit za ' + clockCounter_1 + 's';
                clockCounter_1 = clockCounter_1 - 1;
                if (clockCounter_1 <= 0) {
                    coundown_1.innerText = 'Příjmám riziko! Vstoupit';
                    clearInterval(closeInterval_1);
                    extconfirm_1.addEventListener('click', function (event) {
                        dialog_1.classList.add('ext-dialog-hidden');
                    });
                }
            }, 1000);
        }
    }
    Filter.prototype.isBlockedServer = function () {
        for (var _i = 0, _a = this.servers; _i < _a.length; _i++) {
            var server = _a[_i];
            if (this.hostname.indexOf(server) > -1) {
                return true;
            }
        }
        return false;
    };
    return Filter;
}());
