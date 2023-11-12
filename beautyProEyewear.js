
  function disappear(){
    document.getElementById('sunglasswear').style.display = 'none';
    document.getElementById('eyewear').style.display = 'none';
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
    document.getElementById('sunglasswear').style.display = 'block';
    document.getElementById('eyewear').style.display = 'block';
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









  function sunglass1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag sunglass';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sunglass)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sunglass)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sunglassH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sunglass2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sunglass2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglassH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function sunglass2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag sunglass';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sunglass2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sunglass)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sunglassH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sunglass2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sunglass2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglassH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function sunglass3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag sunglass';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sunglass3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sunglass3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sunglass3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sunglass4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sunglass4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function sunglass4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA PANT';
    document.getElementById('category').innerHTML = 'Drag sunglass';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sunglass4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sunglass3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sunglass3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sunglass4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sunglass4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function sunglass5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag sunglass';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sunglass5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sunglass5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sunglass5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sunglass6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sunglass6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function sunglass6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag sunglass';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/sunglass6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/sunglass5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/sunglass5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/sunglass6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/sunglass6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/sunglass6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function eye1(){
    document.getElementById('name').innerHTML = 'CROPPED eye';
    document.getElementById('category').innerHTML = 'Drag eyes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/eye)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/eye)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/eyeH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/eye2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/eye2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eyeH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye2H)no-repeat center center/cover';
    };
    
  }





  function eye2(){
    document.getElementById('name').innerHTML = 'CROPPED eye';
    document.getElementById('category').innerHTML = 'Drag eyes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/eye2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/eye)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/eyeH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/eye2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/eye2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eyeH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye2H)no-repeat center center/cover';
    };
    
  }




  function eye3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER eye';
    document.getElementById('category').innerHTML = 'Drag eyes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/eye3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/eye3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/eye3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/eye4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/eye4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye4H)no-repeat center center/cover';
    };
    
  }



  function eye4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE eye';
    document.getElementById('category').innerHTML = 'Drag eyes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/eye4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/eye3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/eye3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/eye4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/eye4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye4H)no-repeat center center/cover';
    };
    
  }



  function eye5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA eye';
    document.getElementById('category').innerHTML = 'Drag eyes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/eye5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/eye5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/eye5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/eye6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/eye6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye6H)no-repeat center center/cover';
    };
    
  }



  function eye6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag eyes';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/eye6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/eye5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/eye5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/eye6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/eye6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/eye6H)no-repeat center center/cover';
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