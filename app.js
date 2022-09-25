
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const arrTitle = [];
const arrPara = [];
const arrMin = [];

const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const homeContent = "Aliquam molestie, nibh eu suscipit rhoncus, sapien mi semper dui, eget tristique magna ligula eget elit. Morbi et odio mollis, fringilla magna sed, aliquet felis. Nunc quis ligula eget metus pulvinar dapibus. Ut facilisis, tellus at dictum volutpat, lacus urna aliquam libero, at viverra mauris nunc id nibh. Aliquam accumsan, ex ac fermentum tempor, lacus orci imperdiet diam, quis venenatis leo odio et elit. Nullam lacinia nec ante ut consequat. Curabitur libero dolor, fringilla quis sollicvelit dictum posuere. Nullam eleifend efficitur odio et dictum. Phasellus tortor elit, consequat id molestie id, pharetra mattis justo. Nulla gravida felis vitae fermentum dictum. Praesent dapibus molestie sem eget venenatis. Aliquam erat volutpat. Mauris quis sapien convallis, accumsan neque at, vestibulum nunc.";
const aboutContent = "Fusce vestibulum ipsum molestie neque semper pulvinar. Donec eros velit, vestibulum cursus turpis elementum, lacinia aliquam odio. Pellentesque vel facilisis eros, non luctus tortor. Suspendisse ac eleifend nunc. Fusce ut purus blandit, scelerisque massa et, convallis odio. Quisque vel pretium augue. Phasellus pretium risus nec erat tristique rutrum. Vestibulum risus erat, posuere eu sodales ut, lacinia id arcu. Vestibulum luctus efficitur cursus. Nam imperdiet lobortis quam eu aliquam. Donec tempor est non eros hendrerit, quis rhoncus lectus suscipit. Duis gravida dignissim molestie.";
const contactContent = "Sed eget condimentum erat, vitae facilisis dui. Phasellus tortor tortor, faucibus non ultricies at, gravida non quam. Cras ultrices magna non rhoncus consequat. Pellentesque dignissim ut leo non condimentum. Duis efficitur dui ut nibh commodo finibus. Morbi scelerisque leo lorem, et aliquam nisl cursus interdum. Cras consectetur mi sed maximus fringilla. Phasellus ut vestibulum leo. Praesent suscipit sem vel urna volutpat semper. Aliquam vulputate orci eget varius consequat. Maecenas eu nunc tristique sem euismod luctus in sit amet est.";
const homeHeading = "Home";
const aboutHeading = "About";
const contactHeading = "Contact";

app.get("/",function(req,res){
  res.render("home",{headingVariable : homeHeading ,paraVariable : homeContent , titleArray : arrTitle , postArray : arrMin});
});

app.get("/about",function(req,res){
  res.render("tempP",{headingVariable : aboutHeading , paraVariable : aboutContent });
});

app.get("/contact",function(req,res){
  res.render("tempP",{headingVariable : contactHeading , paraVariable : contactContent });
});

app.get("/compose",function(req,res){
  res.render("compose",{  });
});

app.get(arrTitle,function(req,res){
  let pathes = req.path.substr(1);
  let pos = arrTitle.indexOf(pathes);
  let tPos = arrTitle[pos];
  let pPos = arrPara[pos];
  res.render("tempP",{headingVariable : tPos , paraVariable : pPos });
});

app.post("/",function(req,res){
  arrTitle.push(req.body.titleName);
  arrPara.push(req.body.postText);
  arrMin.push((req.body.postText).substr(0,120));

  res.redirect("/");
});


app.listen(3000,function(){
  console.log("Server is started!!");
});
