let apiKey = "78xWjowjxEa44SP5lO0EdkbLJ1VRFPb3";
        document.addEventListener("DOMContentLoaded", init);
        function init() {
            document.getElementById("btnSearch").addEventListener("click", ev => {
                ev.preventDefault();
                let url = "https://api.giphy.com/v1/gifs/search?api_key=" +apiKey+ "&limit=1&q=";
                let str = document.getElementById("search").value.trim();
                url = url.concat(str);
                console.log(url);
                fetch(url)
                    .then(Response => Response.json())
                    .then(content =>{
                        console.log(content.data)
                        console.log('META', content.meta);
                        let fig = document.createElement('figure');
                        let img = document.createElement('img');
                        let fc = document.createElement('figCaption');
                        img.src = content.data[0].images.downsized.url;
                        img.alt = content.data[0].tittle;
                        fc.textContent = content.data[0].tittle;
                        fig.appendChild(img);
                        fig.appendChild(fc);
                        let out = document.querySelector('.out');
                        out.insertAdjacentElement('afterbegin', fig);
                    })
                    .catch(err => {
                        console.error(err);
                    })
            });
        }