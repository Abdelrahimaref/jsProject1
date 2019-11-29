var input    = document.getElementById('myInput'),
    generate    = document.getElementById('generate'),
    myDiv = document.getElementById('myDiv'),
    letter   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    pic      = [ "img/a.jpg","img/b.jpg","img/c.jpg","img/d.jpg","img/e.jpg","img/f.jpg","img/g.jpg","img/h.jpg","img/i.jfif","img/j.jfif",
                 "img/k.jpg","img/l.jpg","img/m.jpg","img/n.jpg","img/o.jpg","img/p.jpg","img/q.jfif","img/r.jpg","img/s.jpg","img/t.jpg",
                "img/u.jfif","img/v.jpg","img/w.jpg","img/x.jpg","img/y.jpg","img/z.jpg" ] ,
    myImg = document.getElementById('myImg') ;
   generate.onclick= function(){
       // console.log("hi");
        var num = parseInt(input.value);
        var arr = [] ; 
        var c =0 ; 
        if(num < 1|| num > 26)
        {
            alert("Number should be between 1 and 26 only");
        }
        else{
            for(var i = 0 ; i < num ;i++ ){
                var but = document.createElement('button');
                var randNum = Math.floor(Math.random()*26);
                if(arr.indexOf(randNum) == -1)
                {
                    arr.push(randNum) ; 
                    var  TextCon =document.createTextNode(letter[randNum]);
                    but.appendChild(TextCon);
                    but.style.marginRight='5px';
                    but.setAttribute('class','btn btn-primary');
                    window.localStorage.setItem('name', but.textContent);
                    but.onclick = function(){
                        var butText =this.textContent;
                        for(i=0 ; i < 26 ; i++)
                            if(butText==letter[i])
                                myImg.src=pic[i];
                    window.localStorage.setItem('name', myImg.src);        
                    }
                    myDiv.appendChild(but);
                }
                else
                {
                    i--;
                }
                
            }
        }
    }