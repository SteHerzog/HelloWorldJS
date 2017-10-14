var monatsnamen = new MakeArray(12)
monatsnamen[0] = "Januar";
monatsnamen[1] = "Februar"
monatsnamen[2] = "März";
monatsnamen[3] = "April"
monatsnamen[4] = "Mai";
monatsnamen[5] = "Juni"
monatsnamen[6] = "Juli";
monatsnamen[7] = "August"
monatsnamen[8] = "September";
monatsnamen[9] = "Oktober"
monatsnamen[10] = "November";
monatsnamen[11] = "Dezember"

function tagesdatum() {
    var d = new Date()
    var datumsstring = d.getDate()
    datumsstring += "." + monatsnamen[d.getMonth()]
    datumsstring += "." + d.getYear()
    document.write(datumsstring)
}

function MakeArray(n) {
    for (var i = 0; i < n; i++)
        this[i] = 0
    this.length = n
}