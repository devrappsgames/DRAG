
function disappear(){
    document.getElementById('formalwear').style.display = 'none';
    document.getElementById('jacketwear').style.display = 'none';
    document.getElementById('underMwear').style.display = 'none';
    document.getElementById('sockwear').style.display = 'none';
    document.getElementById('jeanwear').style.display = 'none';
    document.getElementById('pantwear').style.display = 'none';
    document.getElementById('sweatwear').style.display = 'none';
    document.getElementById('denimwear').style.display = 'none';
    document.getElementById('shirtwear').style.display = 'none';
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
    document.getElementById('formalwear').style.display = 'block';
    document.getElementById('jacketwear').style.display = 'block';
    document.getElementById('underMwear').style.display = 'block';
    document.getElementById('sockwear').style.display = 'block';
    document.getElementById('jeanwear').style.display = 'block';
    document.getElementById('pantwear').style.display = 'block';
    document.getElementById('sweatwear').style.display = 'block';
    document.getElementById('denimwear').style.display = 'block';
    document.getElementById('shirtwear').style.display = 'block';
    document.getElementById('nav2').style.display = 'flex';
    
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









  function formal1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag Formals';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/formal)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/formal)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/formalH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/formal2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/formal2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formalH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal2H)no-repeat center center/cover';
    };
    
  }





  function formal2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag Formals';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/formal2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/formal)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/formalH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/formal2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/formal2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formalH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal2H)no-repeat center center/cover';
    };
    
  }




  function formal3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag Formals';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/formal3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/formal3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/formal3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/formal4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/formal4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal4H)no-repeat center center/cover';
    };
    
  }



  function formal4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA PANT';
    document.getElementById('category').innerHTML = 'Drag Formals';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/formal4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/formal3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/formal3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/formal4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/formal4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal4H)no-repeat center center/cover';
    };
    
  }



  function formal5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag Formals';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/formal5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/formal5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/formal5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/formal6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/formal6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal6H)no-repeat center center/cover';
    };
    
  }



  function formal6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag Formals';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/formal6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/formal5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/formal5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/formal6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/formal6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/formal6H)no-repeat center center/cover';
    };
    
  }




































  function jacket1(){
    document.getElementById('name').innerHTML = 'CROPPED JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacketM)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacketM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacketM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacketM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM2H)no-repeat center center/cover';
    };
    
  }





  function jacket2(){
    document.getElementById('name').innerHTML = 'CROPPED JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacketM2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacketM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacketM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacketM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM2H)no-repeat center center/cover';
    };
    
  }




  function jacket3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacketM3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacketM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacketM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacketM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM4H)no-repeat center center/cover';
    };
    
  }



  function jacket4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacketM4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacketM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacketM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacketM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM4H)no-repeat center center/cover';
    };
    
  }



  function jacket5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacketM5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacketM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacketM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacketM6H.avif)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM6H.avif)no-repeat center center/cover';
    };
    
  }



  function jacket6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacketM6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacketM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacketM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacketM6H.avif)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketM6H.avif)no-repeat center center/cover';
    };
    
  }






















  function denim1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH denim';
    document.getElementById('category').innerHTML = 'Drag Denims';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/denim)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/denim)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/denimH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/denim2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/denim2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denimH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim2H)no-repeat center center/cover';
    };
    
  }


  function denim2(){
    document.getElementById('name').innerHTML = 'SHORT denim';
    document.getElementById('category').innerHTML = 'Drag Denims';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/denim2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/denim2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/denim2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/denim3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/denim3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim3H)no-repeat center center/cover';
    };
    
  }


  function denim3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT denim';
    document.getElementById('category').innerHTML = 'Drag Denims';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/denim3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/denim3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/denim3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/denim4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/denim4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim4H)no-repeat center center/cover';
    };
    
  }


  function denim4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE denim';
    document.getElementById('category').innerHTML = 'Drag Denims';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/denim4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/denim4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/denim4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/denim5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/denim5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim5H)no-repeat center center/cover';
    };
    
  }

  function denim5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH denim';
    document.getElementById('category').innerHTML = 'Drag Denims';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/denim5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/denim5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/denim5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/denim6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/denim6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim6H)no-repeat center center/cover';
    };
    
  }

  function denim6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE denim';
    document.getElementById('category').innerHTML = 'Drag Denims';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/denim6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/denim5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/denim5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/denim6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/denim6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/denim6H)no-repeat center center/cover';
    };
    
  }




















  function shirt1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH shirt';
    document.getElementById('category').innerHTML = 'Drag Shirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shirt)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shirt)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shirtH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shirt2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shirt2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirtH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt2H)no-repeat center center/cover';
    };
    
  }


  function shirt2(){
    document.getElementById('name').innerHTML = 'SHORT shirt';
    document.getElementById('category').innerHTML = 'Drag Shirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shirt2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shirt2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shirt2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shirt3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shirt3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt3H)no-repeat center center/cover';
    };
    
  }


  function shirt3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT shirt';
    document.getElementById('category').innerHTML = 'Drag Shirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shirt3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shirt3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shirt3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shirt4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shirt4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt4H)no-repeat center center/cover';
    };
    
  }


  function shirt4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shirt';
    document.getElementById('category').innerHTML = 'Drag Shirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shirt4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shirt4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shirt4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shirt5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shirt5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt5H)no-repeat center center/cover';
    };
    
  }

  function shirt5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH shirt';
    document.getElementById('category').innerHTML = 'Drag Shirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shirt5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shirt5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shirt5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shirt6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shirt6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt6H)no-repeat center center/cover';
    };
    
  }

  function shirt6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shirt';
    document.getElementById('category').innerHTML = 'Drag Shirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shirt6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shirt5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shirt5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shirt6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shirt6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shirt6H)no-repeat center center/cover';
    };
    
  }



















  function sweat1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH sweat';
    document.getElementById('category').innerHTML = 'Drag Sweats';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sweat)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sweat)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sweatH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sweat2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sweat2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweatH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat2H)no-repeat center center/cover';
    };
    
  }


  function sweat2(){
    document.getElementById('name').innerHTML = 'SHORT sweat';
    document.getElementById('category').innerHTML = 'Drag Sweats';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sweat2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sweat2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sweat2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sweat3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sweat3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat3H)no-repeat center center/cover';
    };
    
  }


  function sweat3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT sweat';
    document.getElementById('category').innerHTML = 'Drag Sweats';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sweat3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sweat3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sweat3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sweat4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sweat4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat4H)no-repeat center center/cover';
    };
    
  }


  function sweat4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE sweat';
    document.getElementById('category').innerHTML = 'Drag Sweats';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sweat4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sweat4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sweat4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sweat5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sweat5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat5H)no-repeat center center/cover';
    };
    
  }

  function sweat5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH sweat';
    document.getElementById('category').innerHTML = 'Drag Sweats';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sweat5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sweat5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sweat5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sweat6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sweat6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat6H)no-repeat center center/cover';
    };
    
  }

  function sweat6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE sweat';
    document.getElementById('category').innerHTML = 'Drag Sweats';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sweat6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sweat5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sweat5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sweat6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sweat6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sweat6H)no-repeat center center/cover';
    };
    
  }




























  function pant1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pantM)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pantM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pantM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pantM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM2H)no-repeat center center/cover';
    };
    
  }


  function pant2(){
    document.getElementById('name').innerHTML = 'SHORT pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pantM2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pantM2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantM2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pantM3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pantM3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM3H)no-repeat center center/cover';
    };
    
  }


  function pant3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pantM3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pantM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pantM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pantM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM4H)no-repeat center center/cover';
    };
    
  }


  function pant4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pantM4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pantM4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantM4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pantM5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pantM5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM5H)no-repeat center center/cover';
    };
    
  }

  function pant5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pantM5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pantM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pantM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pantM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM6H)no-repeat center center/cover';
    };
    
  }

  function pant6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pantM6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pantM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pantM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pantM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantM6H)no-repeat center center/cover';
    };
    
  }



















  function jean1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH jean';
    document.getElementById('category').innerHTML = 'Drag Jeans';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jean)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jean)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jeanH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jean2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jean2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jeanH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean2H)no-repeat center center/cover';
    };
    
  }


  function jean2(){
    document.getElementById('name').innerHTML = 'SHORT jean';
    document.getElementById('category').innerHTML = 'Drag Jeans';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jean2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jean2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jean2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jean3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jean3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean3H)no-repeat center center/cover';
    };
    
  }


  function jean3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT jean';
    document.getElementById('category').innerHTML = 'Drag Jeans';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jean3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jean3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jean3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jean4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jean4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean4H)no-repeat center center/cover';
    };
    
  }


  function jean4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE jean';
    document.getElementById('category').innerHTML = 'Drag Jeans';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jean4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jean4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jean4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jean5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jean5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean5H)no-repeat center center/cover';
    };
    
  }

  function jean5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH jean';
    document.getElementById('category').innerHTML = 'Drag Jeans';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jean5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jean5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jean5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jean6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jean6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean6H)no-repeat center center/cover';
    };
    
  }

  function jean6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE jean';
    document.getElementById('category').innerHTML = 'Drag Jeans';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jean6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jean5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jean5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jean6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jean6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jean6H)no-repeat center center/cover';
    };
    
  }





















  function sock1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH sock';
    document.getElementById('category').innerHTML = 'Drag Socks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sock)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sock)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sockH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sock2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sock2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sockH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock2H)no-repeat center center/cover';
    };
    
  }


  function sock2(){
    document.getElementById('name').innerHTML = 'SHORT sock';
    document.getElementById('category').innerHTML = 'Drag Socks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sock2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sock2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sock2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sock3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sock3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock3H)no-repeat center center/cover';
    };
    
  }


  function sock3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT sock';
    document.getElementById('category').innerHTML = 'Drag Socks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sock3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sock3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sock3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sock4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sock4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock4H)no-repeat center center/cover';
    };
    
  }


  function sock4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE sock';
    document.getElementById('category').innerHTML = 'Drag Socks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sock4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sock4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sock4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sock5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sock5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock5H)no-repeat center center/cover';
    };
    
  }

  function sock5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH sock';
    document.getElementById('category').innerHTML = 'Drag Socks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sock5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sock5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sock5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sock6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sock6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock6H)no-repeat center center/cover';
    };
    
  }

  function sock6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE sock';
    document.getElementById('category').innerHTML = 'Drag Socks';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sock6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sock5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sock5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sock6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sock6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sock6H)no-repeat center center/cover';
    };
    
  }
























  function underM1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH underM';
    document.getElementById('category').innerHTML = 'Drag Undergarments';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/underM)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/underM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/underMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/underM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/underM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM2H)no-repeat center center/cover';
    };
    
  }


  function underM2(){
    document.getElementById('name').innerHTML = 'SHORT underM';
    document.getElementById('category').innerHTML = 'Drag Undergarments';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/underM2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/underM2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/underM2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/underM3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/underM3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM3H)no-repeat center center/cover';
    };
    
  }


  function underM3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT underM';
    document.getElementById('category').innerHTML = 'Drag Undergarments';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/underM3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/underM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/underM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/underM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/underM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM4H)no-repeat center center/cover';
    };
    
  }


  function underM4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE underM';
    document.getElementById('category').innerHTML = 'Drag Undergarments';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/underM4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/underM4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/underM4)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/underM5H)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/underM5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM4)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';
    };
    
  }

  function underM5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH underM';
    document.getElementById('category').innerHTML = 'Drag Undergarments';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/underM5H)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/underM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/underM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/underM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM6H)no-repeat center center/cover';
    };
    
  }

  function underM6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE underM';
    document.getElementById('category').innerHTML = 'Drag Undergarments';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/underM6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/underM5H)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/underM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/underM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/underM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/underM6H)no-repeat center center/cover';
    };
    
  }













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