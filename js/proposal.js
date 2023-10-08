import data from "../json/proposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("desap", data.desap);
setInner("isidesap", data.isidesap);

setInner("latarblakang", data.isi.latarblakang);
setInner("isilatar1", data.isi.isilatar1);
setInner("jdltujuan", data.isi.jdltujuan);
setInner("tujuan", data.isi.tujuan);
setInner("jdllingkup", data.isi.jdllingkup);
setInner("isilingkup", data.isi.isilingkup);
setInner("jdlkesimpulan", data.isi.jdlkesimpulan);
setInner("isikesimpulan", data.isi.isikesimpulan);

document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen burger dan menu
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('#navbarMenu');

    // Tambahkan event listener untuk toggle menu
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});
