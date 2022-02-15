function crea() {
    document.write("<div class='row'>");
    document.write("<div class'row'><p class='green'>0</p></div>");
    let r1 = 1, r2 = 2, r3 = 3;
    document.write("<div>");
    document.write("<div class='row'>");
    for (let i = 0; i < 2; i++) {
        document.write("<p class='red'>", r3, "</p>");
        r3 += 3;
        document.write("<p class='black'>", r3, "</p>");
        r3 += 3;
        for (let j = 0; j < 2; j++, r3 += 3) document.write("<p class='red'>", r3, "</p>");
        document.write("<p class='black'>", r3, "</p>");
        r3 += 3;
        document.write("<p class='red'>", r3, "</p>");
        r3 += 3;
    }
    document.write("</div>");
    document.write("<div class='row'>");
    for (let i = 0; i < 2; i++) {
        document.write("<p class='black'>", r2, "</p>");
        r2 += 3;
        document.write("<p class='red'>", r2, "</p>");
        r2 += 3;
        for (let j = 0; j < 2; j++, r2 += 3) document.write("<p class='black'>", r2, "</p>");
        document.write("<p class='red'>", r2, "</p>");
        r2 += 3;
        document.write("<p class='black'>", r2, "</p>");
        r2 += 3;
    }
    document.write("</div>");
    document.write("<div class='row'>");
    for (let i = 0; i < 2; i++) {
        document.write("<p class='red'>", r1, "</p>");
        r1 += 3;
        document.write("<p class='black'>", r1, "</p>");
        r1 += 3;
        document.write("<p class='red'>", r1, "</p>");
        r1 += 3;
        for (let j = 0; j < 2; j++, r1 += 3) document.write("<p class='black'>", r1, "</p>");
        document.write("<p class='red'>", r1, "</p>");
        r1 += 3;
    }
    document.write("</div></div>");
}