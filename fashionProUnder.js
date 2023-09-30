
function menuopen(){
    document.getElementById('nav2').style.display = 'inline-block';
    document.getElementById('menuopen').style.display = 'none';
    document.getElementById('menuclose').style.display = 'inline-block';
    
  }
  function menuclose(){
    document.getElementById('menuclose').style.display = 'none';
    document.getElementById('nav2').style.display = 'none';
    document.getElementById('menuopen').style.display = 'inline-block';
  }


function disappear(){
    document.getElementById('bralletwear').style.display = 'none';
    document.getElementById('bikiniwear').style.display = 'none';
    document.getElementById('pantiwear').style.display = 'none';
    document.getElementById('stockwear').style.display = 'none';
    document.getElementById('pushwear').style.display = 'none';
    document.getElementById('strapwear').style.display = 'none';
    document.getElementById('topwear').style.display = 'none';
    document.getElementById('beltwear').style.display = 'none';
    document.getElementById('swimwear').style.display = 'none';
    document.getElementById('nav2').style.display = 'none';
  }


  function appearbuy(){
    document.getElementById('buywear').style.display = 'block';
    document.getElementById('size1').style.backgroundColor = 'white';
    document.getElementById('size4').style.backgroundColor = 'white';
    document.getElementById('size3').style.backgroundColor = 'white';
    document.getElementById('size2').style.backgroundColor = 'white';
    document.getElementById('size5').style.backgroundColor = 'white';
  }
  function disappearbuy(){
    document.getElementById('buywear').style.display = 'none';
  }



  function appearitems(){
    document.getElementById('nav2').style.display = 'flex';
    document.getElementById('bralletwear').style.display = 'block';
    document.getElementById('bikiniwear').style.display = 'block';
    document.getElementById('pantiwear').style.display = 'block';
    document.getElementById('stockwear').style.display = 'block';
    document.getElementById('pushwear').style.display = 'block';
    document.getElementById('strapwear').style.display = 'block';
    document.getElementById('topwear').style.display = 'block';
    document.getElementById('beltwear').style.display = 'block';
    document.getElementById('swimwear').style.display = 'block';
    
    
  }




  function sizeS(){
    document.getElementById('size1').style.backgroundColor = 'coral';
    document.getElementById('size4').style.backgroundColor = 'white';
    document.getElementById('size3').style.backgroundColor = 'white';
    document.getElementById('size2').style.backgroundColor = 'white';
    document.getElementById('size5').style.backgroundColor = 'white';
  }
  function sizeM(){
    document.getElementById('size2').style.backgroundColor = 'coral';
    document.getElementById('size4').style.backgroundColor = 'white';
    document.getElementById('size3').style.backgroundColor = 'white';
    document.getElementById('size5').style.backgroundColor = 'white';
    document.getElementById('size1').style.backgroundColor = 'white';
  }
  function sizeXL(){
    document.getElementById('size3').style.backgroundColor = 'coral';
    document.getElementById('size4').style.backgroundColor = 'white';
    document.getElementById('size5').style.backgroundColor = 'white';
    document.getElementById('size2').style.backgroundColor = 'white';
    document.getElementById('size1').style.backgroundColor = 'white';
  }
  function sizeXXL(){
    document.getElementById('size4').style.backgroundColor = 'coral';
    document.getElementById('size5').style.backgroundColor = 'white';
    document.getElementById('size3').style.backgroundColor = 'white';
    document.getElementById('size2').style.backgroundColor = 'white';
    document.getElementById('size1').style.backgroundColor = 'white';
  }
  function sizeXXXL(){
    document.getElementById('size5').style.backgroundColor = 'coral';
    document.getElementById('size4').style.backgroundColor = 'white';
    document.getElementById('size3').style.backgroundColor = 'white';
    document.getElementById('size2').style.backgroundColor = 'white';
    document.getElementById('size1').style.backgroundColor = 'white';
  }









  function brallet1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED swim';
    document.getElementById('category').innerHTML = 'Drag Brallet';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/brallet)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/brallet)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bralletH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/brallet2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/brallet2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bralletH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet2H)no-repeat center center/cover';
    };
    
  }





  function brallet2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag Brallet';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/brallet2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/brallet)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bralletH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/brallet2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/brallet2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bralletH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet2H)no-repeat center center/cover';
    };
    
  }




  function brallet3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA swim';
    document.getElementById('category').innerHTML = 'Drag brallet';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/brallet3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/brallet3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/brallet3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/brallet4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/brallet4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet4H)no-repeat center center/cover';
    };
    
  }



  function brallet4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA strap';
    document.getElementById('category').innerHTML = 'Drag Brallet';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/brallet4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/brallet3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/brallet3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/brallet4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/brallet4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet4H)no-repeat center center/cover';
    };
    
  }



  function brallet5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag Brallet';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/brallet5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/brallet5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/brallet5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/brallet6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/brallet6H.jpg)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet6H.jpg)no-repeat center center/cover';
    };
    
  }



  function brallet6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag Brallet';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/brallet6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/brallet5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/brallet5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/brallet6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/brallet6H.jpg)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/brallet6H.jpg)no-repeat center center/cover';
    };
    
  }




































  function bikini1(){
    document.getElementById('name').innerHTML = 'CROPPED bikini';
    document.getElementById('category').innerHTML = 'Drag Bikinis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/bikini)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/bikini)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bikiniH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/bikini2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/bikini2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikiniH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini2H)no-repeat center center/cover';
    };
    
  }





  function bikini2(){
    document.getElementById('name').innerHTML = 'CROPPED bikini';
    document.getElementById('category').innerHTML = 'Drag Bikinis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/bikini2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/bikini)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bikiniH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/bikini2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/bikini2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikiniH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini2H)no-repeat center center/cover';
    };
    
  }




  function bikini3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER bikini';
    document.getElementById('category').innerHTML = 'Drag Bikinis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/bikini3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/bikini3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bikini3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/bikini4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/bikini4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini4H)no-repeat center center/cover';
    };
    
  }



  function bikini4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE bikini';
    document.getElementById('category').innerHTML = 'Drag Bikinis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/bikini4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/bikini3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bikini3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/bikini4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/bikini4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini4H)no-repeat center center/cover';
    };
    
  }



  function bikini5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA bikini';
    document.getElementById('category').innerHTML = 'Drag Bikinis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/bikini5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/bikini5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bikini5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/bikini6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/bikini6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini6H)no-repeat center center/cover';
    };
    
  }



  function bikini6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag Bikinis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/bikini6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/bikini5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bikini5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/bikini6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/bikini6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bikini6H)no-repeat center center/cover';
    };
    
  }






















  function panti1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH panti';
    document.getElementById('category').innerHTML = 'Drag Panties';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/panti)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/panti)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantiH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/panti2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/panti2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantiH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti2H)no-repeat center center/cover';
    };
    
  }


  function panti2(){
    document.getElementById('name').innerHTML = 'SHORT panti';
    document.getElementById('category').innerHTML = 'Drag Panties';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/panti2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/panti2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/panti2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/panti3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/panti3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti3H)no-repeat center center/cover';
    };
    
  }


  function panti3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT panti';
    document.getElementById('category').innerHTML = 'Drag Panties';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/panti3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/panti3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/panti3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/panti4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/panti4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti4H)no-repeat center center/cover';
    };
    
  }


  function panti4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE panti';
    document.getElementById('category').innerHTML = 'Drag Panties';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/panti4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/panti4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/panti4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/panti5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/panti5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti5H)no-repeat center center/cover';
    };
    
  }

  function panti5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH panti';
    document.getElementById('category').innerHTML = 'Drag Panties';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/panti5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/panti5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/panti5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/panti6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/panti6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti6H)no-repeat center center/cover';
    };
    
  }

  function panti6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE panti';
    document.getElementById('category').innerHTML = 'Drag Panties';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/panti6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/panti5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/panti5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/panti6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/panti6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/panti6H)no-repeat center center/cover';
    };
    
  }




















  function swim1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH swim';
    document.getElementById('category').innerHTML = 'Drag Swimsuit';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/swim)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/swim)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/swimH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/swim2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/swim2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swimH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim2H)no-repeat center center/cover';
    };
    
  }


  function swim2(){
    document.getElementById('name').innerHTML = 'SHORT swim';
    document.getElementById('category').innerHTML = 'Drag Swimsuit';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/swim2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/swim2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/swim2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/swim3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/swim3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim3H)no-repeat center center/cover';
    };
    
  }


  function swim3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT swim';
    document.getElementById('category').innerHTML = 'Drag Swimsuit';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/swim3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/swim3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/swim3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/swim4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/swim4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim4H)no-repeat center center/cover';
    };
    
  }


  function swim4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE swim';
    document.getElementById('category').innerHTML = 'Drag Swimsuit';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/swim4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/swim4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/swim4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/swim5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/swim5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim5H)no-repeat center center/cover';
    };
    
  }

  function swim5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH swim';
    document.getElementById('category').innerHTML = 'Drag Swimsuit';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/swim5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/swim5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/swim5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/swim6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/swim6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim6H)no-repeat center center/cover';
    };
    
  }

  function swim6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE swim';
    document.getElementById('category').innerHTML = 'Drag Swimsuit';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/swim6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/swim5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/swim5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/swim6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/swim6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/swim6H)no-repeat center center/cover';
    };
    
  }



















  function top1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH top';
    document.getElementById('category').innerHTML = 'Drag Tops';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/top)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/top)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/topH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/top2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/top2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/topH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top2H)no-repeat center center/cover';
    };
    
  }


  function top2(){
    document.getElementById('name').innerHTML = 'SHORT top';
    document.getElementById('category').innerHTML = 'Drag Tops';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/top2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/top2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/top2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/top3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/top3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top3H)no-repeat center center/cover';
    };
    
  }


  function top3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT top';
    document.getElementById('category').innerHTML = 'Drag Tops';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/top3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/top3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/top3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/top4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/top4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top4H)no-repeat center center/cover';
    };
    
  }


  function top4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE top';
    document.getElementById('category').innerHTML = 'Drag Tops';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/top4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/top4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/top4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/top5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/top5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top5H)no-repeat center center/cover';
    };
    
  }

  function top5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH top';
    document.getElementById('category').innerHTML = 'Drag Tops';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/top5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/top5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/top5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/top6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/top6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top6H)no-repeat center center/cover';
    };
    
  }

  function top6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE top';
    document.getElementById('category').innerHTML = 'Drag Tops';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/top6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/top5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/top5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/top6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/top6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/top6H)no-repeat center center/cover';
    };
    
  }




























  function belt1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH belt';
    document.getElementById('category').innerHTML = 'Drag Straps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/belt)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/belt)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/beltH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/belt2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/belt2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/beltH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt2H)no-repeat center center/cover';
    };
    
  }


  function belt2(){
    document.getElementById('name').innerHTML = 'SHORT belt';
    document.getElementById('category').innerHTML = 'Drag Straps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/belt2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/belt2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/belt2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/belt3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/belt3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt3H)no-repeat center center/cover';
    };
    
  }


  function belt3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT belt';
    document.getElementById('category').innerHTML = 'Drag Straps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/belt3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/belt3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/belt3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/belt4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/belt4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt4H)no-repeat center center/cover';
    };
    
  }


  function belt4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE belt';
    document.getElementById('category').innerHTML = 'Drag Straps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/belt4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/belt4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/belt4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/belt5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/belt5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt5H)no-repeat center center/cover';
    };
    
  }

  function belt5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH belt';
    document.getElementById('category').innerHTML = 'Drag Straps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/belt5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/belt5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/belt5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/belt6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/belt6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt6H)no-repeat center center/cover';
    };
    
  }

  function belt6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE belt';
    document.getElementById('category').innerHTML = 'Drag Straps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/belt6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/belt5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/belt5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/belt6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/belt6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/belt6H)no-repeat center center/cover';
    };
    
  }



















  function push1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH push';
    document.getElementById('category').innerHTML = 'Drag Push-up Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/push)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/push)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pushH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/push2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/push2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pushH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push2H)no-repeat center center/cover';
    };
    
  }


  function push2(){
    document.getElementById('name').innerHTML = 'SHORT push';
    document.getElementById('category').innerHTML = 'Drag Push-up Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/push2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/push2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/push2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/push3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/push3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push3H)no-repeat center center/cover';
    };
    
  }


  function push3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT push';
    document.getElementById('category').innerHTML = 'Drag Push-up Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/push3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/push3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/push3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/push4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/push4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push4H)no-repeat center center/cover';
    };
    
  }


  function push4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE push';
    document.getElementById('category').innerHTML = 'Drag Push-up Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/push4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/push4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/push4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/push5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/push5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push5H)no-repeat center center/cover';
    };
    
  }

  function push5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH push';
    document.getElementById('category').innerHTML = 'Drag Push-up Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/push5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/push5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/push5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/push6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/push6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push6H)no-repeat center center/cover';
    };
    
  }

  function push6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE push';
    document.getElementById('category').innerHTML = 'Drag Push-up Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/push6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/push5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/push5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/push6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/push6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/push6H)no-repeat center center/cover';
    };
    
  }





















  function stock1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH stock';
    document.getElementById('category').innerHTML = 'Drag Stocks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/stock)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/stock)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/stockH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/stock2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/stock2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stockH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock2H)no-repeat center center/cover';
    };
    
  }


  function stock2(){
    document.getElementById('name').innerHTML = 'SHORT stock';
    document.getElementById('category').innerHTML = 'Drag Stocks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/stock2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/stock2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/stock2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/stock3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/stock3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock3H)no-repeat center center/cover';
    };
    
  }


  function stock3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT stock';
    document.getElementById('category').innerHTML = 'Drag Stocks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/stock3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/stock3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/stock3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/stock4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/stock4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock4H)no-repeat center center/cover';
    };
    
  }


  function stock4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE stock';
    document.getElementById('category').innerHTML = 'Drag Stocks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/stock4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/stock4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/stock4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/stock5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/stock5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock5H)no-repeat center center/cover';
    };
    
  }

  function stock5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH stock';
    document.getElementById('category').innerHTML = 'Drag Stocks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/stock5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/stock5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/stock5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/stock6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/stock6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock6H)no-repeat center center/cover';
    };
    
  }

  function stock6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE stock';
    document.getElementById('category').innerHTML = 'Drag Stocks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/stock6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/stock5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/stock5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/stock6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/stock6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/stock6H)no-repeat center center/cover';
    };
    
  }
























  function strap1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH strap';
    document.getElementById('category').innerHTML = 'Drag Strapless Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/strap)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/strap)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/strapH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/strap2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/strap2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strapH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap2H)no-repeat center center/cover';
    };
    
  }


  function strap2(){
    document.getElementById('name').innerHTML = 'SHORT strap';
    document.getElementById('category').innerHTML = 'Drag Strapless Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/strap2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/strap2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/strap2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/strap3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/strap3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap3H)no-repeat center center/cover';
    };
    
  }


  function strap3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT strap';
    document.getElementById('category').innerHTML = 'Drag Strapless Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/strap3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/strap3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/strap3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/strap4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/strap4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap4H)no-repeat center center/cover';
    };
    
  }


  function strap4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE strap';
    document.getElementById('category').innerHTML = 'Drag Strapless Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/strap4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/strap4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/strap4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/strap5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/strap5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap5H)no-repeat center center/cover';
    };
    
  }

  function strap5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH strap';
    document.getElementById('category').innerHTML = 'Drag Strapless Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/strap5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/strap5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/strap5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/strap6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/strap6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap6H)no-repeat center center/cover';
    };
    
  }

  function strap6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE strap';
    document.getElementById('category').innerHTML = 'Drag Strapless Bra';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/strap6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/strap5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/strap5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/strap6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/strap6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/strap6H)no-repeat center center/cover';
    };
    
  }









