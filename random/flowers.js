/*
Uzduotis:
- duodama, kiek yra geliu
- duodama, kiek kiekviena gele susilaukia nauju gelyciu
- duodama, kiek turiu vazonu
Reikia rasti, kiek vazonu truksta. 
*/

function flowers(geles, vaikai, vazonai) {
    
    const totalGeliu = geles + geles * vaikai; 

    if (totalGeliu > vazonai) {
        return totalGeliu - vazonai; 
    } else {
        return 0;
    }
}
    
console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);
console.log(flowers(0, 200, 1), '->', 0);