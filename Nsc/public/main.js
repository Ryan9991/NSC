(function () {
    var a = document.querySelectorAll('#tt')
    var table = document.getElementById('tabel')
    
    //Tabel di Klik//
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function (e) {
            var target = e.target
            var value = target.value
            const question = document.getElementById('pertanyaan')
            var img = document.createElement("img")
            const salah = document.getElementById('salah')
            const benar = document.getElementById('benar')
            const color = document.getElementById('color')
            const progress = document.getElementById('progressBar')
            const onstart = document.getElementById('onstart')
            const onstart2 = document.getElementById('onstart2')
            const center = document.getElementById('center')
            center.classList.remove('hidden')

            //Gambar//
            img.src = value+".jpg"
            img.id = "gambar"
            question.appendChild(img)
            table.classList.add('hidden')
            question.classList.remove('hidden')
            
            //Empat puluh detik//
            if(value == 02 || value == 06 || value == 09 || value == 10 || value == 13 || value == 18 || value == 21 || value == 30 ){
                onstart2.classList.remove('hidden')
            }else{
                onstart.classList.remove('hidden')
            }
            
            //Sepuluh detik//
            const start1 = function onStart1() {
                progress.classList.remove('hidden')
                var timeleft1 = 9;
                progress.value = 10
                onstart.classList.add('hidden')
                onstart2.classList.add('hidden')
                var downloadTimer1 = setInterval(function () {
                    progress.value = 9 + (timeleft1 - 9);
                    timeleft1 -= 1;
                    //Progress Di Klik//
                    progress.addEventListener('click', function () {
                        progress.value = 0
                        clearInterval(downloadTimer1)
                        progress.classList.add('hidden')
                        salah.classList.remove('hidden')
                        benar.classList.remove('hidden')
                        question.classList.add('hidden')
                        question.removeChild(question.children[0])
                    })
                    if (timeleft1 < 0) {
                        progress.value = 0
                        clearInterval(downloadTimer1)
                        progress.classList.add('hidden')
                        salah.classList.remove('hidden')
                        benar.classList.remove('hidden')
                        question.classList.add('hidden')
                        question.removeChild(question.children[0])
                    }
                }, 1000);
            }

            //Empat puluh detik//
            const start2 = function onStart2() {
                progress.classList.remove('hidden')
                var timeleft2 = 39;
                progress.value = 40;
                onstart.classList.add('hidden');
                onstart2.classList.add('hidden')
                var downloadTimer2 = setInterval(function () {
                    progress.value = 39 + (timeleft2 - 39);
                    timeleft2 -= 1;
                    //Progress Di Klik//
                    progress.addEventListener('click', function () {
                        clearInterval(downloadTimer2);
                        progress.value = 0
                        progress.classList.add('hidden');
                        salah.classList.remove('hidden');
                        benar.classList.remove('hidden');
                        question.classList.add('hidden');
                        question.removeChild(question.children[0])
                    });
                    if (timeleft2 < 0) {
                        progress.value = 0
                        clearInterval(downloadTimer2)
                        progress.classList.add('hidden')
                        salah.classList.remove('hidden')
                        benar.classList.remove('hidden')
                        question.classList.add('hidden')
                        question.removeChild(question.children[0])
                    }
                }, 1000);
            }

            //Start Button//
            onstart2.addEventListener('click', start2)
            onstart.addEventListener('click', start1)
            
            //Salah Ketik Lagi//
            if(target.classList[0] === "white"){
                target.classList.remove("white")
            }

            //Benar di Klik//
            benar.addEventListener('click', () => {
                color.classList.remove('hidden')
                color.addEventListener('click', function (e) {
                    //Blok Warna//
                    const blockColor = e.target.id
                    table.classList.remove('hidden')
                    if(target.classList.length === 0 ) {
                        e.target.classList.remove('white')
                        target.classList.add(blockColor)
                    }
                    salah.classList.add('hidden')
                    benar.classList.add('hidden')
                    color.classList.add('hidden')
                })
                progress.value = 0
                question.removeChild(question.children[0])
            })
            
            //Salah Di Klik//
            salah.addEventListener('click', function () {
                table.classList.remove('hidden')
                if (target.classList.length === 0) {
                    target.classList.add('white')
                }
                salah.classList.add('hidden')
                benar.classList.add('hidden')
                color.classList.add('hidden')
                progress.value = 0
                question.removeChild(question.children[0])
            })
        })
    }
})()