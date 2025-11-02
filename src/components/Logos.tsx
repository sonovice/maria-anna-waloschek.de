import { For, type Component } from "solid-js";

const Logos: Component = () => {
    // Actual logos from the public folder, including names and URLs
    const logoItems = [
        { src: 'logos/vdm-verband_deutscher_musikschulen.svg', name: 'Verband deutscher Musikschulen', url: 'https://www.musikschulen.de/' },
        { src: 'logos/hmt-muenchen.svg', name: 'HMT München', url: 'https://hmtm.de/' },
        { src: 'logos/hfm-detmold.svg', name: 'HfM Detmold', url: 'https://www.hfm-detmold.de/' },
        { src: 'logos/musikschule_ludwigshafen.svg', name: 'Städtische Musikschule Ludwigshafen', url: 'https://musikschule.ludwigshafen.de/' },
        { src: 'logos/hfm-wuerzburg.png', name: 'HfM Würzburg', url: 'https://www.hfm-wuerzburg.de/' },
        { src: 'logos/epga-european_piano_teacher_association.svg', name: 'European Piano Teachers Association', url: 'https://www.epta-deutschland.de/' },
        { src: 'logos/muku-bielefeld.png', name: 'Musik- und Kunstschule Bielefeld', url: 'https://muku-bielefeld.de/' },
        { src: 'logos/hfm-trossingen.svg', name: 'HfM Trossingen', url: 'https://www.hfm-trossingen.de/' },
        { src: 'logos/hfm-weimar.svg', name: 'HfM Weimar', url: 'https://www.hfm-weimar.de/' },
        { src: 'logos/hfmdk-frankfurt.svg', name: 'HfMDK Frankfurt', url: 'https://www.hfmdk-frankfurt.de/' },
        { src: 'logos/hmt-koeln.svg', name: 'HfMT Köln', url: 'https://www.hfmt-koeln.de/' },
        { src: 'logos/hslu-luzern.svg', name: 'Hochschule Luzern', url: 'https://www.hslu.ch/de-ch/musik/' },
        { src: 'logos/mdw_wien.svg', name: 'mdw Wien', url: 'https://www.mdw.ac.at/' },
        { src: 'logos/netzwerk_4.0_der_musikhochschulen.svg', name: 'Netzwerk 4.0 der Musikhochschulen', url: 'https://www.netzwerk-musikhochschulen.de/' },
    ];

    return (
        <div class="w-full py-4" aria-label="Client logos grid">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                <For each={logoItems}>{(logo) =>
                    <a
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link to ${logo.name} website`}
                        class="shadow transition duration-150 hover:cursor-pointer hover:shadow-lg hover:-translate-y-0.5 flex flex-col items-center justify-center group p-3 bg-neutral-50"
                    >
                        <div class="h-14 flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                class="h-14 w-32 object-contain"
                            />
                        </div>
                        <div class="text-xs text-neutral-600 text-center mt-2 group-hover:text-neutral-800 min-h-[2.5rem] flex items-center">
                            <span class="line-clamp-2 text-balance">
                                {logo.name}
                            </span>
                        </div>
                    </a>
                }</For>
            </div>
        </div>
    );
};

export default Logos;
