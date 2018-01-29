class Filter {

    private servers: string[] = [
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
    private hostname: string = null;
    private timeout: number = 20;

    private htmlTemplate: string =
        '<div id="ext-unfair-root" class="ext-unfair-root">\n' +
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

    constructor() {

        this.hostname = location.hostname;

        if (this.isBlockedServer()) {

            console.log("is blocked");

            let fragment: Document = new DOMParser().parseFromString(this.htmlTemplate, 'text/html');
            let dialog: HTMLElement = fragment.body.querySelector('#ext-unfair-root');

            document.body.appendChild(dialog);

            let coundown: HTMLElement = dialog.querySelector("#extunfaircountdown");
            let extconfirm: HTMLElement = dialog.querySelector("#extunfairconfirm");
            let clockCounter: number = this.timeout;

            let closeInterval = setInterval(() => {
                coundown.innerText = 'Vstoupit za ' + clockCounter + 's';
                clockCounter = clockCounter - 1;
                if (clockCounter <= 0) {
                    coundown.innerText = 'Příjmám riziko! Vstoupit';
                    clearInterval(closeInterval);

                    extconfirm.addEventListener('click', (event) => {
                        dialog.classList.add('ext-dialog-hidden');
                    });
                }
            }, 1000);
        }
    }

    isBlockedServer(): boolean {
        for (let server of this.servers) {
            if (this.hostname.indexOf(server) > -1) {
                return true;
            }
        }
        return false;
    }


}
