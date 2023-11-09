
  function disappear(){
    document.getElementById('sportwear').style.display = 'none';
    document.getElementById('gymMwear').style.display = 'none';
    document.getElementById('leggingwear').style.display = 'none';
    document.getElementById('sockwear').style.display = 'none';
    document.getElementById('shortMwear').style.display = 'none';
    document.getElementById('shoesFwear').style.display = 'none';
    document.getElementById('shoesMwear').style.display = 'none';
    document.getElementById('gymFwear').style.display = 'none';
    document.getElementById('shortFwear').style.display = 'none';
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
    document.getElementById('sportwear').style.display = 'block';
    document.getElementById('gymMwear').style.display = 'block';
    document.getElementById('leggingwear').style.display = 'block';
    document.getElementById('sockwear').style.display = 'block';
    document.getElementById('shortMwear').style.display = 'block';
    document.getElementById('shoesFwear').style.display = 'block';
    document.getElementById('shoesMwear').style.display = 'block';
    document.getElementById('gymFwear').style.display = 'block';
    document.getElementById('shortFwear').style.display = 'block';
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









  function sport1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED shortF';
    document.getElementById('category').innerHTML = 'Drag sport';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sport)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sport)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sportH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sport2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sport2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sportH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function sport2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag sport';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sport2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sport)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sportH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sport2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sport2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sportH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function sport3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA shortF';
    document.getElementById('category').innerHTML = 'Drag sport';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sport3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sport3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sport3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sport4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sport4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function sport4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA shoesF';
    document.getElementById('category').innerHTML = 'Drag sport';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sport4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sport3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sport3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sport4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sport4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function sport5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag sport';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sport5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sport5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sport5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sport6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sport6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function sport6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag sport';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sport6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sport5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sport5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sport6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sport6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sport6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function gymM1(){
    document.getElementById('name').innerHTML = 'CROPPED gymM';
    document.getElementById('category').innerHTML = 'Drag Gym Male';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymM)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM2H)no-repeat center center/cover';
    };
    
  }





  function gymM2(){
    document.getElementById('name').innerHTML = 'CROPPED gymM';
    document.getElementById('category').innerHTML = 'Drag Gym Male';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymM2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM2H)no-repeat center center/cover';
    };
    
  }




  function gymM3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER gymM';
    document.getElementById('category').innerHTML = 'Drag Gym Male';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymM3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM4H)no-repeat center center/cover';
    };
    
  }



  function gymM4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE gymM';
    document.getElementById('category').innerHTML = 'Drag Gym Male';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymM4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM4H)no-repeat center center/cover';
    };
    
  }



  function gymM5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA gymM';
    document.getElementById('category').innerHTML = 'Drag Gym Male';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymM5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM6H)no-repeat center center/cover';
    };
    
  }



  function gymM6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag Gym Male';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymM6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymM6H)no-repeat center center/cover';
    };
    
  }






















  function gymF1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH gymF';
    document.getElementById('category').innerHTML = 'Drag gymFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymF)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymF)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymFH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymF2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymF2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymFH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF2H)no-repeat center center/cover';
    };
    
  }


  function gymF2(){
    document.getElementById('name').innerHTML = 'SHORT gymF';
    document.getElementById('category').innerHTML = 'Drag gymFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymF2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymF2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymF2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymF3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymF3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF3H)no-repeat center center/cover';
    };
    
  }


  function gymF3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT gymF';
    document.getElementById('category').innerHTML = 'Drag gymFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymF3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymF3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymF3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymF4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymF4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF4H)no-repeat center center/cover';
    };
    
  }


  function gymF4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE gymF';
    document.getElementById('category').innerHTML = 'Drag gymFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymF4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymF4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymF4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymF5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymF5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF5H)no-repeat center center/cover';
    };
    
  }

  function gymF5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH gymF';
    document.getElementById('category').innerHTML = 'Drag gymFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymF5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymF5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymF5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymF6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymF6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF6H)no-repeat center center/cover';
    };
    
  }

  function gymF6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE gymF';
    document.getElementById('category').innerHTML = 'Drag gymFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/gymF6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/gymF5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/gymF5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/gymF6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/gymF6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/gymF6H)no-repeat center center/cover';
    };
    
  }




















  function shortF1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH shortF';
    document.getElementById('category').innerHTML = 'Drag shortFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortF)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortF)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortFH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortF2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortF2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortFH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF2H)no-repeat center center/cover';
    };
    
  }


  function shortF2(){
    document.getElementById('name').innerHTML = 'SHORT shortF';
    document.getElementById('category').innerHTML = 'Drag shortFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortF2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortF2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortF2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortF3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortF3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF3H)no-repeat center center/cover';
    };
    
  }


  function shortF3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT shortF';
    document.getElementById('category').innerHTML = 'Drag shortFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortF3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortF3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortF3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortF4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortF4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF4H)no-repeat center center/cover';
    };
    
  }


  function shortF4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shortF';
    document.getElementById('category').innerHTML = 'Drag shortFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortF4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortF4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortF4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortF5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortF5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF5H)no-repeat center center/cover';
    };
    
  }

  function shortF5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH shortF';
    document.getElementById('category').innerHTML = 'Drag shortFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortF5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortF5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortF5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortF6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortF6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF6H)no-repeat center center/cover';
    };
    
  }

  function shortF6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shortF';
    document.getElementById('category').innerHTML = 'Drag shortFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortF6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortF5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortF5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortF6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortF6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortF6H)no-repeat center center/cover';
    };
    
  }



















  function shoesM1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH shoesM';
    document.getElementById('category').innerHTML = 'Drag shoesMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesM)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM2H)no-repeat center center/cover';
    };
    
  }


  function shoesM2(){
    document.getElementById('name').innerHTML = 'SHORT shoesM';
    document.getElementById('category').innerHTML = 'Drag shoesMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesM2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesM2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesM2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesM3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesM3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM3H)no-repeat center center/cover';
    };
    
  }


  function shoesM3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT shoesM';
    document.getElementById('category').innerHTML = 'Drag shoesMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesM3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM4H)no-repeat center center/cover';
    };
    
  }


  function shoesM4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shoesM';
    document.getElementById('category').innerHTML = 'Drag shoesMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesM4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesM4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesM4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesM5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesM5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM5H)no-repeat center center/cover';
    };
    
  }

  function shoesM5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH shoesM';
    document.getElementById('category').innerHTML = 'Drag shoesMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesM5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM6H)no-repeat center center/cover';
    };
    
  }

  function shoesM6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shoesM';
    document.getElementById('category').innerHTML = 'Drag shoesMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesM6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesM6H)no-repeat center center/cover';
    };
    
  }




























  function shoesF1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH shoesF';
    document.getElementById('category').innerHTML = 'Drag shoesFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesF)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesF)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesFH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesF2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesF2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesFH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF2H)no-repeat center center/cover';
    };
    
  }


  function shoesF2(){
    document.getElementById('name').innerHTML = 'SHORT shoesF';
    document.getElementById('category').innerHTML = 'Drag shoesFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesF2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesF2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesF2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesF3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesF3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF3H)no-repeat center center/cover';
    };
    
  }


  function shoesF3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT shoesF';
    document.getElementById('category').innerHTML = 'Drag shoesFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesF3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesF3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesF3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesF4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesF4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF4H)no-repeat center center/cover';
    };
    
  }


  function shoesF4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shoesF';
    document.getElementById('category').innerHTML = 'Drag shoesFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesF4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesF4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesF4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesF5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesF5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF5H)no-repeat center center/cover';
    };
    
  }

  function shoesF5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH shoesF';
    document.getElementById('category').innerHTML = 'Drag shoesFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesF5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesF5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesF5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesF6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesF6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF6H)no-repeat center center/cover';
    };
    
  }

  function shoesF6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shoesF';
    document.getElementById('category').innerHTML = 'Drag shoesFs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoesF6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoesF5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoesF5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoesF6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoesF6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoesF6H)no-repeat center center/cover';
    };
    
  }



















  function shortM1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH shortM';
    document.getElementById('category').innerHTML = 'Drag shortMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortM)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortM)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortMH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortM2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortM2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortMH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM2H)no-repeat center center/cover';
    };
    
  }


  function shortM2(){
    document.getElementById('name').innerHTML = 'SHORT shortM';
    document.getElementById('category').innerHTML = 'Drag shortMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortM2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortM2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortM2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortM3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortM3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM3H)no-repeat center center/cover';
    };
    
  }


  function shortM3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT shortM';
    document.getElementById('category').innerHTML = 'Drag shortMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortM3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortM3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortM3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortM4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortM4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM4H)no-repeat center center/cover';
    };
    
  }


  function shortM4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shortM';
    document.getElementById('category').innerHTML = 'Drag shortMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortM4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortM4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortM4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortM5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortM5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM5H)no-repeat center center/cover';
    };
    
  }

  function shortM5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH shortM';
    document.getElementById('category').innerHTML = 'Drag shortMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortM5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM6H)no-repeat center center/cover';
    };
    
  }

  function shortM6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shortM';
    document.getElementById('category').innerHTML = 'Drag shortMs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shortM6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shortM5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shortM5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shortM6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shortM6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shortM6H)no-repeat center center/cover';
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
























  function legging1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH legging';
    document.getElementById('category').innerHTML = 'Drag Leggings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/legging)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/legging)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/leggingH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/legging2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/legging2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/leggingH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging2H)no-repeat center center/cover';
    };
    
  }


  function legging2(){
    document.getElementById('name').innerHTML = 'SHORT legging';
    document.getElementById('category').innerHTML = 'Drag Leggings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/legging2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/legging2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/legging2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/legging3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/legging3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging3H)no-repeat center center/cover';
    };
    
  }


  function legging3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT legging';
    document.getElementById('category').innerHTML = 'Drag Leggings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/legging3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/legging3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/legging3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/legging4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/legging4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging4H)no-repeat center center/cover';
    };
    
  }


  function legging4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE legging';
    document.getElementById('category').innerHTML = 'Drag Leggings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/legging4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/legging4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/legging4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/legging5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/legging5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging5H)no-repeat center center/cover';
    };
    
  }

  function legging5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH legging';
    document.getElementById('category').innerHTML = 'Drag Leggings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/legging5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/legging5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/legging5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/legging6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/legging6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging6H)no-repeat center center/cover';
    };
    
  }

  function legging6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE legging';
    document.getElementById('category').innerHTML = 'Drag Leggings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/legging6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/legging5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/legging5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/legging6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/legging6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/legging6H)no-repeat center center/cover';
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