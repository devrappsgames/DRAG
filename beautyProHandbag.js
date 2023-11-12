
  function disappear(){
    document.getElementById('maxiwear').style.display = 'none';
    document.getElementById('miniwear').style.display = 'none';
    document.getElementById('travelwear').style.display = 'none';
    document.getElementById('totewear').style.display = 'none';
    document.getElementById('cardholderwear').style.display = 'none';
    document.getElementById('shoulderwear').style.display = 'none';
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
    document.getElementById('maxiwear').style.display = 'block';
    document.getElementById('miniwear').style.display = 'block';
    document.getElementById('travelwear').style.display = 'block';
    document.getElementById('totewear').style.display = 'block';
    document.getElementById('cardholderwear').style.display = 'block';
    document.getElementById('shoulderwear').style.display = 'block';
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









  function maxi1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag maxi';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/maxi)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/maxi)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/maxiH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/maxi2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/maxi2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxiH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function maxi2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag maxi';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/maxi2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/maxi)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/maxiH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/maxi2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/maxi2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxiH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function maxi3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag maxi';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/maxi3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/maxi3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/maxi3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/maxi4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/maxi4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function maxi4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA shoulder';
    document.getElementById('category').innerHTML = 'Drag maxi';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/maxi4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/maxi3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/maxi3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/maxi4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/maxi4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function maxi5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag maxi';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/maxi5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/maxi5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/maxi5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/maxi6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/maxi6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function maxi6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag maxi';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/maxi6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/maxi5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/maxi5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/maxi6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/maxi6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/maxi6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function mini1(){
    document.getElementById('name').innerHTML = 'CROPPED mini';
    document.getElementById('category').innerHTML = 'Drag minis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mini)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mini)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/miniH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mini2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mini2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/miniH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini2H)no-repeat center center/cover';
    };
    
  }





  function mini2(){
    document.getElementById('name').innerHTML = 'CROPPED mini';
    document.getElementById('category').innerHTML = 'Drag minis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mini2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mini)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/miniH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mini2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mini2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/miniH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini2H)no-repeat center center/cover';
    };
    
  }




  function mini3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER mini';
    document.getElementById('category').innerHTML = 'Drag minis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mini3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mini3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mini3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mini4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mini4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini4H)no-repeat center center/cover';
    };
    
  }



  function mini4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE mini';
    document.getElementById('category').innerHTML = 'Drag minis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mini4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mini3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mini3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mini4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mini4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini4H)no-repeat center center/cover';
    };
    
  }



  function mini5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA mini';
    document.getElementById('category').innerHTML = 'Drag minis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mini5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mini5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mini5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mini6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mini6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini6H)no-repeat center center/cover';
    };
    
  }



  function mini6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag minis';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mini6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mini5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mini5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mini6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mini6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mini6H)no-repeat center center/cover';
    };
    
  }








  function shoulder1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH shoulder';
    document.getElementById('category').innerHTML = 'Drag shoulders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoulder)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoulder)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoulderH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoulder2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoulder2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulderH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder2H)no-repeat center center/cover';
    };
    
  }


  function shoulder2(){
    document.getElementById('name').innerHTML = 'SHORT shoulder';
    document.getElementById('category').innerHTML = 'Drag shoulders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoulder2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoulder2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoulder2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoulder3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoulder3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder3H)no-repeat center center/cover';
    };
    
  }


  function shoulder3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT shoulder';
    document.getElementById('category').innerHTML = 'Drag shoulders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoulder3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoulder3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoulder3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoulder4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoulder4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder4H)no-repeat center center/cover';
    };
    
  }


  function shoulder4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shoulder';
    document.getElementById('category').innerHTML = 'Drag shoulders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoulder4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoulder4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoulder4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoulder5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoulder5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder5H)no-repeat center center/cover';
    };
    
  }

  function shoulder5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH shoulder';
    document.getElementById('category').innerHTML = 'Drag shoulders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoulder5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoulder5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoulder5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoulder6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoulder6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder6H)no-repeat center center/cover';
    };
    
  }

  function shoulder6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE shoulder';
    document.getElementById('category').innerHTML = 'Drag shoulders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/shoulder6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/shoulder5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/shoulder5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/shoulder6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/shoulder6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/shoulder6H)no-repeat center center/cover';
    };
    
  }



















  function cardholder1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH cardholder';
    document.getElementById('category').innerHTML = 'Drag cardholders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/cardholder)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/cardholder)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/cardholderH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/cardholder2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/cardholder2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholderH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder2H)no-repeat center center/cover';
    };
    
  }


  function cardholder2(){
    document.getElementById('name').innerHTML = 'SHORT cardholder';
    document.getElementById('category').innerHTML = 'Drag cardholders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/cardholder2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/cardholder2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/cardholder2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/cardholder3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/cardholder3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder3H)no-repeat center center/cover';
    };
    
  }


  function cardholder3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT cardholder';
    document.getElementById('category').innerHTML = 'Drag cardholders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/cardholder3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/cardholder3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/cardholder3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/cardholder4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/cardholder4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder4H)no-repeat center center/cover';
    };
    
  }


  function cardholder4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE cardholder';
    document.getElementById('category').innerHTML = 'Drag cardholders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/cardholder4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/cardholder4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/cardholder4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/cardholder5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/cardholder5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder5H)no-repeat center center/cover';
    };
    
  }

  function cardholder5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH cardholder';
    document.getElementById('category').innerHTML = 'Drag cardholders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/cardholder5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/cardholder5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/cardholder5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/cardholder6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/cardholder6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder6H)no-repeat center center/cover';
    };
    
  }

  function cardholder6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE cardholder';
    document.getElementById('category').innerHTML = 'Drag cardholders';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/cardholder6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/cardholder5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/cardholder5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/cardholder6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/cardholder6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/cardholder6H)no-repeat center center/cover';
    };
    
  }





















  function tote1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH tote';
    document.getElementById('category').innerHTML = 'Drag totes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/tote)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/tote)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/toteH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/tote2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/tote2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/toteH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote2H)no-repeat center center/cover';
    };
    
  }


  function tote2(){
    document.getElementById('name').innerHTML = 'SHORT tote';
    document.getElementById('category').innerHTML = 'Drag totes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/tote2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/tote2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/tote2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/tote3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/tote3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote3H)no-repeat center center/cover';
    };
    
  }


  function tote3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT tote';
    document.getElementById('category').innerHTML = 'Drag totes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/tote3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/tote3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/tote3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/tote4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/tote4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote4H)no-repeat center center/cover';
    };
    
  }


  function tote4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE tote';
    document.getElementById('category').innerHTML = 'Drag totes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/tote4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/tote4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/tote4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/tote5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/tote5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote5H)no-repeat center center/cover';
    };
    
  }

  function tote5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH tote';
    document.getElementById('category').innerHTML = 'Drag totes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/tote5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/tote5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/tote5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/tote6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/tote6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote6H)no-repeat center center/cover';
    };
    
  }

  function tote6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE tote';
    document.getElementById('category').innerHTML = 'Drag totes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/tote6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/tote5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/tote5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/tote6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/tote6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/tote6H)no-repeat center center/cover';
    };
    
  }
























  function travel1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH travel';
    document.getElementById('category').innerHTML = 'Drag travels';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/travel)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/travel)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/travelH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/travel2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/travel2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travelH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel2H)no-repeat center center/cover';
    };
    
  }


  function travel2(){
    document.getElementById('name').innerHTML = 'SHORT travel';
    document.getElementById('category').innerHTML = 'Drag travels';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/travel2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/travel2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/travel2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/travel3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/travel3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel3H)no-repeat center center/cover';
    };
    
  }


  function travel3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT travel';
    document.getElementById('category').innerHTML = 'Drag travels';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/travel3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/travel3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/travel3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/travel4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/travel4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel4H)no-repeat center center/cover';
    };
    
  }


  function travel4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE travel';
    document.getElementById('category').innerHTML = 'Drag travels';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/travel4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/travel4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/travel4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/travel5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/travel5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel5H)no-repeat center center/cover';
    };
    
  }

  function travel5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH travel';
    document.getElementById('category').innerHTML = 'Drag travels';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/travel5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/travel5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/travel5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/travel6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/travel6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel6H)no-repeat center center/cover';
    };
    
  }

  function travel6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE travel';
    document.getElementById('category').innerHTML = 'Drag travels';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/travel6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/travel5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/travel5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/travel6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/travel6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/travel6H)no-repeat center center/cover';
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