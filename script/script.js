const mbiemri = document.getElementById("lastname");
const butoni = document.getElementById("change");
const vidPlayer = document.getElementById("videoplayer");
const src = vidPlayer.getAttribute("src");

let videos = ["https://drive.google.com/file/d/1oieY6UurEz-RWGABugueopTfc5XNBB9n/preview", "https://drive.google.com/file/d/1JGPCC-pgIp4p65nD4isqqkshYAsTnRDR/preview",
    "https://drive.google.com/file/d/1ZkC48Y5s74Ma_EHcBK24UUykNyaagr2e/preview", "https://drive.google.com/file/d/1sDqV8P_QIktjiEKFknhQ82rCHUOmcUWn/preview",
    "https://drive.google.com/file/d/1JqO5vpISH_owZtYCIKmLXnDMmtFeu1ts/preview", "https://drive.google.com/file/d/1_wJPjC_UEiAhFTqbap-Eb0ew9xttHZA2/preview",
    "https://drive.google.com/file/d/1A5DiZa8rbaAQ3ugr8muYG6m1EhWDnpZS/preview", "https://drive.google.com/file/d/1kjcB5RrXxRy4wWbh6Ztfscrs5mkbDFi_/preview",
    "https://drive.google.com/file/d/1qSWfHiLgfaFtXfV2rDRlivfX-QHd53KV/preview", "https://drive.google.com/file/d/10iwAxe4BXQC1n5rjsG3lIttVnaW35Egg/preview",
    "https://drive.google.com/file/d/1YCphC9ac3cEFk3R1QusfnqCTh-f8tPuy/preview", "https://drive.google.com/file/d/1tHZVxuWXNhFUKxeNKykKKOapXGDcyTRy/preview",
    "https://drive.google.com/file/d/1lMX5tK96Nx24AuezDqmeDuJsPEAifbft/preview", "https://drive.google.com/file/d/1sI88UlhuANuXjS3YDHH7DI9VhIEXo_pr/preview",
    "https://drive.google.com/file/d/1Q8sZcdJUxUiArBHfUg2h7iTSU3BqspaX/preview", "https://drive.google.com/file/d/1JyQpN8FYT4htN3n42sr5TvJgsHQx1fgz/preview",
    "https://drive.google.com/file/d/1NjuZuun-AEt6LjYTNMwv2iBV6QuQ0D0U/preview", "https://drive.google.com/file/d/1-3v_ZMt6gELTd9IAjT0szbSt3JLYYEDS/preview",
    "https://drive.google.com/file/d/1S-ChfRLpAW4xUEQKW8Q58h-vGDq9sulq/preview", "https://drive.google.com/file/d/1Mf0CZe944SvU10EsUoCDW_dNyj8cVkIb/preview",
    "https://drive.google.com/file/d/10qnsMr1OZhSJxqheCpZwkj9SRDVwijvn/preview"
];

/* function autoplayVid(){
    return !src.includes("autoplay=1") ? vidPlayer.setAttribute("src", "${src}?autoplay=1") : "";
} */

function randomVideoGenerator() {
    const randomNumber = Math.floor(Math.random() * videos.length);
    const newSrc = videos[randomNumber];
    vidPlayer.src = newSrc;
    /* vidPlayer.src = videos[randomNumber];
    vidPlayer.load(); */
}

/* window.onload = function () {
    randomVideoGenerator();
} */

butoni.addEventListener("click", randomVideoGenerator);

mbiemri.addEventListener("click",() => {
    const newmbiemri = document.getElementById("hidden");
    newmbiemri.classList.toggle("show")
});