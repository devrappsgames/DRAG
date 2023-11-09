
  function disappear(){
    document.getElementById('necklacewear').style.display = 'none';
    document.getElementById('earringwear').style.display = 'none';
    document.getElementById('menJwear').style.display = 'none';
    document.getElementById('engagementringwear').style.display = 'none';
    document.getElementById('bracletwear').style.display = 'none';
    document.getElementById('ringwear').style.display = 'none';
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
    document.getElementById('necklacewear').style.display = 'block';
    document.getElementById('earringwear').style.display = 'block';
    document.getElementById('menJwear').style.display = 'block';
    document.getElementById('engagementringwear').style.display = 'block';
    document.getElementById('bracletwear').style.display = 'block';
    document.getElementById('ringwear').style.display = 'block';
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









  function necklace1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag necklace';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/necklace)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/necklace)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/necklaceH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/necklace2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/necklace2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklaceH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function necklace2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag necklace';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/necklace2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/necklace)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/necklaceH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/necklace2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/necklace2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklaceH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function necklace3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag necklace';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/necklace3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/necklace3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/necklace3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/necklace4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/necklace4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function necklace4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA ring';
    document.getElementById('category').innerHTML = 'Drag necklace';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/necklace4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/necklace3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/necklace3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/necklace4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/necklace4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function necklace5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag necklace';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/necklace5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/necklace5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/necklace5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/necklace6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/necklace6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function necklace6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag necklace';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/necklace6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/necklace5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/necklace5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/necklace6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/necklace6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/necklace6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function earring1(){
    document.getElementById('name').innerHTML = 'CROPPED earring';
    document.getElementById('category').innerHTML = 'Drag earrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/earring)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/earring)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/earringH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/earring2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/earring2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earringH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring2H)no-repeat center center/cover';
    };
    
  }





  function earring2(){
    document.getElementById('name').innerHTML = 'CROPPED earring';
    document.getElementById('category').innerHTML = 'Drag earrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/earring2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/earring)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/earringH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/earring2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/earring2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earringH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring2H)no-repeat center center/cover';
    };
    
  }




  function earring3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER earring';
    document.getElementById('category').innerHTML = 'Drag earrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/earring3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/earring3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/earring3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/earring4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/earring4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring4H)no-repeat center center/cover';
    };
    
  }



  function earring4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE earring';
    document.getElementById('category').innerHTML = 'Drag earrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/earring4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/earring3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/earring3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/earring4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/earring4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring4H)no-repeat center center/cover';
    };
    
  }



  function earring5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA earring';
    document.getElementById('category').innerHTML = 'Drag earrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/earring5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/earring5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/earring5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/earring6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/earring6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring6H)no-repeat center center/cover';
    };
    
  }



  function earring6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag earrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/earring6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/earring5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/earring5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/earring6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/earring6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/earring6H)no-repeat center center/cover';
    };
    
  }






  function ring1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH ring';
    document.getElementById('category').innerHTML = 'Drag rings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/ring)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/ring)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/ringH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/ring2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/ring2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ringH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring2H)no-repeat center center/cover';
    };
    
  }


  function ring2(){
    document.getElementById('name').innerHTML = 'SHORT ring';
    document.getElementById('category').innerHTML = 'Drag rings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/ring2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/ring2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/ring2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/ring3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/ring3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring3H)no-repeat center center/cover';
    };
    
  }


  function ring3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT ring';
    document.getElementById('category').innerHTML = 'Drag rings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/ring3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/ring3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/ring3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/ring4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/ring4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring4H)no-repeat center center/cover';
    };
    
  }


  function ring4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE ring';
    document.getElementById('category').innerHTML = 'Drag rings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/ring4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/ring4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/ring4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/ring5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/ring5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring5H)no-repeat center center/cover';
    };
    
  }

  function ring5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH ring';
    document.getElementById('category').innerHTML = 'Drag rings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/ring5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/ring5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/ring5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/ring6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/ring6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring6H)no-repeat center center/cover';
    };
    
  }

  function ring6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE ring';
    document.getElementById('category').innerHTML = 'Drag rings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/ring6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/ring5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/ring5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/ring6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/ring6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/ring6H)no-repeat center center/cover';
    };
    
  }



















  function braclet1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH braclet';
    document.getElementById('category').innerHTML = 'Drag braclets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/braclet)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/braclet)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/bracletH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/braclet2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/braclet2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/bracletH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet2H)no-repeat center center/cover';
    };
    
  }


  function braclet2(){
    document.getElementById('name').innerHTML = 'SHORT braclet';
    document.getElementById('category').innerHTML = 'Drag braclets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/braclet2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/braclet2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/braclet2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/braclet3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/braclet3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet3H)no-repeat center center/cover';
    };
    
  }


  function braclet3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT braclet';
    document.getElementById('category').innerHTML = 'Drag braclets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/braclet3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/braclet3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/braclet3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/braclet4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/braclet4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet4H)no-repeat center center/cover';
    };
    
  }


  function braclet4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE braclet';
    document.getElementById('category').innerHTML = 'Drag braclets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/braclet4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/braclet4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/braclet4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/braclet5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/braclet5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet5H)no-repeat center center/cover';
    };
    
  }

  function braclet5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH braclet';
    document.getElementById('category').innerHTML = 'Drag braclets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/braclet5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/braclet5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/braclet5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/braclet6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/braclet6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet6H)no-repeat center center/cover';
    };
    
  }

  function braclet6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE braclet';
    document.getElementById('category').innerHTML = 'Drag braclets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/braclet6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/braclet5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/braclet5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/braclet6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/braclet6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/braclet6H)no-repeat center center/cover';
    };
    
  }





















  function engagementring1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH engagementring';
    document.getElementById('category').innerHTML = 'Drag engagementrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/engagementring)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/engagementring)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/engagementringH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/engagementring2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/engagementring2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementringH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring2H)no-repeat center center/cover';
    };
    
  }


  function engagementring2(){
    document.getElementById('name').innerHTML = 'SHORT engagementring';
    document.getElementById('category').innerHTML = 'Drag engagementrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/engagementring2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/engagementring2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/engagementring2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/engagementring3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/engagementring3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring3H)no-repeat center center/cover';
    };
    
  }


  function engagementring3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT engagementring';
    document.getElementById('category').innerHTML = 'Drag engagementrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/engagementring3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/engagementring3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/engagementring3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/engagementring4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/engagementring4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring4H)no-repeat center center/cover';
    };
    
  }


  function engagementring4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE engagementring';
    document.getElementById('category').innerHTML = 'Drag engagementrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/engagementring4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/engagementring4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/engagementring4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/engagementring5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/engagementring5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring5H)no-repeat center center/cover';
    };
    
  }

  function engagementring5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH engagementring';
    document.getElementById('category').innerHTML = 'Drag engagementrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/engagementring5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/engagementring5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/engagementring5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/engagementring6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/engagementring6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring6H)no-repeat center center/cover';
    };
    
  }

  function engagementring6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE engagementring';
    document.getElementById('category').innerHTML = 'Drag engagementrings';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/engagementring6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/engagementring5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/engagementring5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/engagementring6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/engagementring6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/engagementring6H)no-repeat center center/cover';
    };
    
  }
























  function menJ1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH menJ';
    document.getElementById('category').innerHTML = 'Drag menJs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/menJ)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/menJ)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/menJH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/menJ2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/menJ2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ2H)no-repeat center center/cover';
    };
    
  }


  function menJ2(){
    document.getElementById('name').innerHTML = 'SHORT menJ';
    document.getElementById('category').innerHTML = 'Drag menJs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/menJ2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/menJ2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/menJ2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/menJ3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/menJ3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ3H)no-repeat center center/cover';
    };
    
  }


  function menJ3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT menJ';
    document.getElementById('category').innerHTML = 'Drag menJs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/menJ3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/menJ3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/menJ3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/menJ4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/menJ4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ4H)no-repeat center center/cover';
    };
    
  }


  function menJ4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE menJ';
    document.getElementById('category').innerHTML = 'Drag menJs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/menJ4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/menJ4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/menJ4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/menJ5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/menJ5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ5H)no-repeat center center/cover';
    };
    
  }

  function menJ5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH menJ';
    document.getElementById('category').innerHTML = 'Drag menJs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/menJ5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/menJ5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/menJ5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/menJ6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/menJ6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ6H)no-repeat center center/cover';
    };
    
  }

  function menJ6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE menJ';
    document.getElementById('category').innerHTML = 'Drag menJs';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/menJ6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/menJ5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/menJ5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/menJ6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/menJ6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/menJ6H)no-repeat center center/cover';
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