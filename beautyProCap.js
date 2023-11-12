
  function disappear(){
    document.getElementById('womencapwear').style.display = 'none';
    document.getElementById('boyfrienwomencapwear').style.display = 'none';
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
    document.getElementById('womencapwear').style.display = 'block';
    document.getElementById('boyfrienwomencapwear').style.display = 'block';
    document.getElementById('nav2').style.display = 'none';
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









  function womencap1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag womencap';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/womencap)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/womencap)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/womencapH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/womencap2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/womencap2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencapH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function womencap2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag womencap';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/womencap2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/womencap)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/womencapH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/womencap2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/womencap2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencapH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function womencap3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag womencap';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/womencap3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/womencap3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/womencap3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/womencap4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/womencap4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function womencap4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA PANT';
    document.getElementById('category').innerHTML = 'Drag womencap';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/womencap4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/womencap3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/womencap3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/womencap4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/womencap4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function womencap5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag womencap';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/womencap5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/womencap5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/womencap5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/womencap6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/womencap6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function womencap6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag womencap';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/womencap6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/womencap5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/womencap5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/womencap6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/womencap6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/womencap6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function mencap1(){
    document.getElementById('name').innerHTML = 'CROPPED mencap';
    document.getElementById('category').innerHTML = 'Drag mencaps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mencap)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mencap)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mencapH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mencap2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mencap2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencapH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap2H)no-repeat center center/cover';
    };
    
  }





  function mencap2(){
    document.getElementById('name').innerHTML = 'CROPPED mencap';
    document.getElementById('category').innerHTML = 'Drag mencaps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mencap2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mencap)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mencapH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mencap2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mencap2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencapH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap2H)no-repeat center center/cover';
    };
    
  }




  function mencap3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER mencap';
    document.getElementById('category').innerHTML = 'Drag mencaps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mencap3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mencap3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mencap3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mencap4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mencap4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap4H)no-repeat center center/cover';
    };
    
  }



  function mencap4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE mencap';
    document.getElementById('category').innerHTML = 'Drag mencaps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mencap4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mencap3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mencap3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mencap4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mencap4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap4H)no-repeat center center/cover';
    };
    
  }



  function mencap5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA mencap';
    document.getElementById('category').innerHTML = 'Drag mencaps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mencap5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mencap5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mencap5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mencap6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mencap6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap6H)no-repeat center center/cover';
    };
    
  }



  function mencap6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag mencaps';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/mencap6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/mencap5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/mencap5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/mencap6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/mencap6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/mencap6H)no-repeat center center/cover';
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