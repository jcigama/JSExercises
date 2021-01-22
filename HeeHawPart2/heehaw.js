function heeHaw() {
    let num = document.getElementById("myNumber").value;

    if(num >= 0 ) {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                document.write("Hee Haw!");
            } else if (i % 3 === 0) {
                document.write("Hee!");
            } else if (i % 5 === 0) {
                document.write("Haw!");
            } else {
                document.write(i);
            }
            document.write("<br>");
        }
    }
    else {
        document.write("Positive integer is required!");
    }
}
