    // let btn = document.getElementById("btn");

    // btn.addEventListener('click', function run() {

    //     console.log("confirm");

    //     let btn = document.getElementById("btn")
    //     let para = document.getElementById("para");


    //     if (para.style.display == "none") {

    //         para.style.display = "block";
    //         btn.style.backgroundColor = "aqua";

    //         console.log("display block ");

    //     } else {

    //         para.style.display = "none";
    //         btn.style.backgroundColor = "red";
    //         console.log("display none ");

    //     }
    // });

    ham.addEventListener('click', function hamburgger() {



        let ham = document.getElementById("ham");
        let menu = document.getElementById("menu");

        if (menu.style.display != "flex") {

            menu.style.display = "flex";
            ham.style.top = "8%"
            console.log("menu show ");
        } else {
            menu.style.display = "none";
            ham.style.top = "40%";
            console.log("hide ");
        }



    });





    change.addEventListener("click", function change() {
        let chn = " vishal munday "
        let cd = "food delivery"
        let rv = document.getElementById("food");

        if (rv.innerHTML != chn) {

            console.log("name ");
            rv.innerHTML = chn;

        } else {

            console.log("time");
            rv.innerHTML = cd;

        }
    });