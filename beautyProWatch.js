
  function disappear(){
    document.getElementById('dwwear').style.display = 'none';
    document.getElementById('boyfriendwear').style.display = 'none';
    document.getElementById('connectedWwear').style.display = 'none';
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
    document.getElementById('dwwear').style.display = 'block';
    document.getElementById('boyfriendwear').style.display = 'block';
    document.getElementById('connectedWwear').style.display = 'block';
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









  function dw1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag dw';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/dw)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/dw)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/dwH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/dw2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/dw2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dwH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function dw2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag dw';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/dw2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/dw)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/dwH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/dw2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/dw2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dwH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function dw3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag dw';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/dw3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/dw3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/dw3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/dw4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/dw4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function dw4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA PANT';
    document.getElementById('category').innerHTML = 'Drag dw';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/dw4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/dw3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/dw3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/dw4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/dw4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function dw5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag dw';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/dw5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/dw5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/dw5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/dw6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/dw6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function dw6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag dw';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/dw6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/dw5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/dw5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/dw6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/dw6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/dw6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function boyfriend1(){
    document.getElementById('name').innerHTML = 'CROPPED boyfriend';
    document.getElementById('category').innerHTML = 'Drag boyfriends';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/boyfriend)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/boyfriend)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/boyfriendH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/boyfriend2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/boyfriend2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriendH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend2H)no-repeat center center/cover';
    };
    
  }





  function boyfriend2(){
    document.getElementById('name').innerHTML = 'CROPPED boyfriend';
    document.getElementById('category').innerHTML = 'Drag boyfriends';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/boyfriend2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/boyfriend)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/boyfriendH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/boyfriend2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/boyfriend2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriendH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend2H)no-repeat center center/cover';
    };
    
  }




  function boyfriend3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER boyfriend';
    document.getElementById('category').innerHTML = 'Drag boyfriends';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/boyfriend3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/boyfriend3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/boyfriend3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/boyfriend4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/boyfriend4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend4H)no-repeat center center/cover';
    };
    
  }



  function boyfriend4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE boyfriend';
    document.getElementById('category').innerHTML = 'Drag boyfriends';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/boyfriend4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/boyfriend3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/boyfriend3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/boyfriend4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/boyfriend4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend4H)no-repeat center center/cover';
    };
    
  }



  function boyfriend5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA boyfriend';
    document.getElementById('category').innerHTML = 'Drag boyfriends';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/boyfriend5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/boyfriend5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/boyfriend5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/boyfriend6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/boyfriend6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend6H)no-repeat center center/cover';
    };
    
  }



  function boyfriend6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag boyfriends';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/boyfriend6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/boyfriend5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/boyfriend5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/boyfriend6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/boyfriend6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/boyfriend6H)no-repeat center center/cover';
    };
    
  }






  function connectedW1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH connectedW';
    document.getElementById('category').innerHTML = 'Drag connectedWs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/connectedW)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/connectedW)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/connectedWH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/connectedW2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/connectedW2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedWH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW2H)no-repeat center center/cover';
    };
    
  }


  function connectedW2(){
    document.getElementById('name').innerHTML = 'SHORT connectedW';
    document.getElementById('category').innerHTML = 'Drag connectedWs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/connectedW2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/connectedW2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/connectedW2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/connectedW3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/connectedW3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW3H)no-repeat center center/cover';
    };
    
  }


  function connectedW3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT connectedW';
    document.getElementById('category').innerHTML = 'Drag connectedWs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/connectedW3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/connectedW3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/connectedW3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/connectedW4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/connectedW4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW4H)no-repeat center center/cover';
    };
    
  }


  function connectedW4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE connectedW';
    document.getElementById('category').innerHTML = 'Drag connectedWs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/connectedW4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/connectedW4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/connectedW4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/connectedW5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/connectedW5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW5H)no-repeat center center/cover';
    };
    
  }

  function connectedW5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH connectedW';
    document.getElementById('category').innerHTML = 'Drag connectedWs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/connectedW5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/connectedW5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/connectedW5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/connectedW6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/connectedW6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW6H)no-repeat center center/cover';
    };
    
  }

  function connectedW6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE connectedW';
    document.getElementById('category').innerHTML = 'Drag connectedWs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/connectedW6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/connectedW5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/connectedW5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/connectedW6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/connectedW6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/connectedW6H)no-repeat center center/cover';
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