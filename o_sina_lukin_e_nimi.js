const o_sina_lukin_e_nimi = document.getElementById("o_sina_lukin_e_nimi");
const poki_pi_nimi = document.getElementById("poki_pi_nimi");

const o_sina_pana_e_nimi_lon_poki_pi_nimi = (nimi) => {
	poki_pi_nimi.innerHTML = "";

	const lawa = document.createElement("h2");
	lawa.textContent = nimi.nimi;
	poki_pi_nimi.appendChild(lawa);

	const toki = document.createElement("p");
	toki.textContent = nimi.toki;
	poki_pi_nimi.appendChild(toki);

	const sona_lawa = document.createElement("h3");
	sona_lawa.textContent = "sona pi nimi";
	poki_pi_nimi.appendChild(sona_lawa);

	const sona_mute = document.createElement("ol");
	nimi.sona.forEach(sona => {
		const sona_ni = document.createElement("li");
		sona_ni.textContent = sona;
		sona_mute.appendChild(sona_ni);
	});
	poki_pi_nimi.appendChild(sona_mute);

	const kulupu_nimi_lawa = document.createElement("h3");
	kulupu_nimi_lawa.textContent = "kulupu nimi kepeken nimi ni";
	poki_pi_nimi.appendChild(kulupu_nimi_lawa);

	const kulupu_nimi_mute = document.createElement("ul");
	nimi.kulupu_nimi.forEach(kulupu_nimi => {
		const kulupu_nimi_ni = document.createElement("li");
		kulupu_nimi_ni.textContent = kulupu_nimi;
		kulupu_nimi_mute.appendChild(kulupu_nimi_ni);
	});
	poki_pi_nimi.appendChild(kulupu_nimi_mute);

	const kama_lawa = document.createElement("h3");
	kama_lawa.textContent = "kama pi nimi";
	poki_pi_nimi.appendChild(kama_lawa);

	const kama = document.createElement("p");
	kama.textContent = nimi.kama;
	poki_pi_nimi.appendChild(kama);
};

o_sina_lukin_e_nimi.addEventListener("submit", (kama_pi_lukin_pi_nimi) => {
	// o kama ala e nasin Default
	kama_pi_lukin_pi_nimi.preventDefault();

	const sona_pi_lukin_pi_nimi = new FormData(o_sina_lukin_e_nimi);
	const nimi_alasa = sona_pi_lukin_pi_nimi.get("nimi");

	fetch("nimi.json")
		.then(kama_pi_lipu_pi_nimi => kama_pi_lipu_pi_nimi.json())
		.then(sona_pi_lipu_pi_nimi => {
			let lon = false;

			sona_pi_lipu_pi_nimi.nimi_mute.forEach(nimi => {
				if (nimi_alasa === nimi.nimi) {
					lon = true;
					o_sina_pana_e_nimi_lon_poki_pi_nimi(nimi);
				}
			});

			if (lon === false) {
				poki_pi_nimi.innerHTML = "";
				const p = document.createElement("p");
				p.textContent = "nimi \"" + nimi_alasa + "\" li lon ala."
				poki_pi_nimi.appendChild(p);
			}
		})
		.catch(ike => {
			console.error("sona pi lipu pi nimi li ike: ", ike);
		});
});
