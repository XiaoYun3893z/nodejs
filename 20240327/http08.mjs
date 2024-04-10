import http from "http";

const server = http.createServer((request, response) => {
  const { method, url } = request;
  const { pathname } = new URL(url, "http://localhost:9000");
  response.setHeader("content-type", "text/html;charset=utf-8");
  
  response.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
          .row{
              display: flex;
              width: 180px;
              background-color: #eeacac;
              &:nth-child(odd){
                  background-color: #c44444;
              }
              .col{
                  width: 60px;
                  height: 30px;
                  display: grid;
                  place-items: center;
                  user-select: none;
                  cursor: pointer;
                  &.active{
                      background-color: #26bbdc;
                  }
              }
          }
      </style>
      <title>Document</title>
    </head>
    <body>
      <div class="row">
        <div class="col">1-1</div>
        <div class="col">1-2</div>
        <div class="col">1-3</div>
      </div>
      <div class="row">
        <div class="col">2-1</div>
        <div class="col">2-2</div>
        <div class="col">2-3</div>
      </div>
      <div class="row">
        <div class="col">3-1</div>
        <div class="col">3-2</div>
        <div class="col">3-3</div>
      </div>
      <div class="row">
        <div class="col">4-1</div>
        <div class="col">4-2</div>
        <div class="col">4-3</div>
      </div>
      <script>
          const cols = document.querySelectorAll(".col");
          cols.forEach(col => {
              col.addEventListener("click", function(){
                  this.classList.toggle("active");
              })
          })
      </script>
    </body>
  </html>`);
});

server.listen(9000, () => {
  console.log("server is running http://localhost:9000");
});
