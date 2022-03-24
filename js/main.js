const form = document.querySelector(".form");
        const input = document.querySelector(".input");
        const result = document.querySelector(".text");

        const SECOND = 1000;
        const MINUT = 60000;
        const HOUR = 3600000;
        const DAY = 86400000;

        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
            const miniseconds = input.value;

            const day = Math.floor(miniseconds/DAY);
            const residueMsecond = miniseconds%DAY;
            const hour = Math.floor(residueMsecond/HOUR);
            const residueHour = residueMsecond%HOUR;
            const minutes= Math.floor(residueHour/MINUT);
            const residueMinut= residueHour%MINUT;
            const second = Math.floor(residueMinut/SECOND);
            const residue = residueMinut%SECOND;

            result.textContent = `${day}-kun  ${hour}-soat  ${minutes}-minut  ${second}-sekund  ${residue}-millisekund`;
        })