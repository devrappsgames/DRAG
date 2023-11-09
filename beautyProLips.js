
  function disappear(){
    document.getElementById('liquidlipwear').style.display = 'none';
    document.getElementById('lipglosswear').style.display = 'none';
    document.getElementById('lippencilwear').style.display = 'none';
    document.getElementById('lipbamwear').style.display = 'none';
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
    document.getElementById('liquidlipwear').style.display = 'block';
    document.getElementById('lipglosswear').style.display = 'block';
    document.getElementById('lippencilwear').style.display = 'block';
    document.getElementById('lipbamwear').style.display = 'block';
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









  function liquidlip1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag liquidlip';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/liquidlip)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/liquidlip)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/liquidlipH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/liquidlip2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/liquidlip2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlipH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_5kAeWr7y27CV3Ti4gi","","")
    }
    
  }





  function liquidlip2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag liquidlip';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/liquidlip2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/liquidlip)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/liquidlipH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/liquidlip2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/liquidlip2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlipH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip2H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUeWraKef5ndtS3cf","","")
    }

  }




  function liquidlip3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag liquidlip';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/liquidlip3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/liquidlip3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/liquidlip3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/liquidlip4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/liquidlip4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip4H)no-repeat center center/cover';
    };
    
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_3cs15B2dI1exblKeV1","","")
    }

  }



  function liquidlip4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA PANT';
    document.getElementById('category').innerHTML = 'Drag liquidlip';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/liquidlip4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/liquidlip3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/liquidlip3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/liquidlip4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/liquidlip4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip4H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_8wM5lR19EaP7exWfZ3","","")
    }
  }



  function liquidlip5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag liquidlip';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/liquidlip5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/liquidlip5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/liquidlip5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/liquidlip6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/liquidlip6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_aEUg0v19E2iB75u6ou","","")
    }
  }



  function liquidlip6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag liquidlip';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/liquidlip6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/liquidlip5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/liquidlip5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/liquidlip6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/liquidlip6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/liquidlip6H)no-repeat center center/cover';
    };
    buynow.onclick = function(){
        window.open("https://buy.stripe.com/test_6oEbKf7y2f5nfC0004","","")
    }
  }




































  function lipgloss1(){
    document.getElementById('name').innerHTML = 'CROPPED lipgloss';
    document.getElementById('category').innerHTML = 'Drag lipglosss';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipgloss)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipgloss)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipglossH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipgloss2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipgloss2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipglossH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss2H)no-repeat center center/cover';
    };
    
  }





  function lipgloss2(){
    document.getElementById('name').innerHTML = 'CROPPED lipgloss';
    document.getElementById('category').innerHTML = 'Drag lipglosss';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipgloss2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipgloss)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipglossH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipgloss2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipgloss2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipglossH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss2H)no-repeat center center/cover';
    };
    
  }




  function lipgloss3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER lipgloss';
    document.getElementById('category').innerHTML = 'Drag lipglosss';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipgloss3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipgloss3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipgloss3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipgloss4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipgloss4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss4H)no-repeat center center/cover';
    };
    
  }



  function lipgloss4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE lipgloss';
    document.getElementById('category').innerHTML = 'Drag lipglosss';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipgloss4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipgloss3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipgloss3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipgloss4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipgloss4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss4H)no-repeat center center/cover';
    };
    
  }



  function lipgloss5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA lipgloss';
    document.getElementById('category').innerHTML = 'Drag lipglosss';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipgloss5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipgloss5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipgloss5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipgloss6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipgloss6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss6H)no-repeat center center/cover';
    };
    
  }



  function lipgloss6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag lipglosss';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipgloss6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipgloss5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipgloss5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipgloss6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipgloss6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipgloss6H)no-repeat center center/cover';
    };
    
  }








  function lipbam1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH lipbam';
    document.getElementById('category').innerHTML = 'Drag lipbams';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipbam)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipbam)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipbamH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipbam2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipbam2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbamH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam2H)no-repeat center center/cover';
    };
    
  }


  function lipbam2(){
    document.getElementById('name').innerHTML = 'SHORT lipbam';
    document.getElementById('category').innerHTML = 'Drag lipbams';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipbam2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipbam2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipbam2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipbam3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipbam3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam3H)no-repeat center center/cover';
    };
    
  }


  function lipbam3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT lipbam';
    document.getElementById('category').innerHTML = 'Drag lipbams';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipbam3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipbam3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipbam3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipbam4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipbam4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam4H)no-repeat center center/cover';
    };
    
  }


  function lipbam4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE lipbam';
    document.getElementById('category').innerHTML = 'Drag lipbams';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipbam4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipbam4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipbam4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipbam5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipbam5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam5H)no-repeat center center/cover';
    };
    
  }

  function lipbam5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH lipbam';
    document.getElementById('category').innerHTML = 'Drag lipbams';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipbam5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipbam5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipbam5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipbam6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipbam6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam6H)no-repeat center center/cover';
    };
    
  }

  function lipbam6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE lipbam';
    document.getElementById('category').innerHTML = 'Drag lipbams';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lipbam6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lipbam5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lipbam5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lipbam6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lipbam6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lipbam6H)no-repeat center center/cover';
    };
    
  }
























  function lippencil1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH lippencil';
    document.getElementById('category').innerHTML = 'Drag lippencils';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lippencil)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lippencil)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lippencilH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lippencil2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lippencil2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencilH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil2H)no-repeat center center/cover';
    };
    
  }


  function lippencil2(){
    document.getElementById('name').innerHTML = 'SHORT lippencil';
    document.getElementById('category').innerHTML = 'Drag lippencils';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lippencil2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lippencil2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lippencil2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lippencil3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lippencil3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil3H)no-repeat center center/cover';
    };
    
  }


  function lippencil3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT lippencil';
    document.getElementById('category').innerHTML = 'Drag lippencils';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lippencil3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lippencil3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lippencil3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lippencil4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lippencil4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil4H)no-repeat center center/cover';
    };
    
  }


  function lippencil4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE lippencil';
    document.getElementById('category').innerHTML = 'Drag lippencils';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lippencil4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lippencil4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lippencil4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lippencil5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lippencil5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil5H)no-repeat center center/cover';
    };
    
  }

  function lippencil5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH lippencil';
    document.getElementById('category').innerHTML = 'Drag lippencils';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lippencil5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lippencil5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lippencil5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lippencil6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lippencil6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil6H)no-repeat center center/cover';
    };
    
  }

  function lippencil6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE lippencil';
    document.getElementById('category').innerHTML = 'Drag lippencils';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/lippencil6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/lippencil5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/lippencil5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/lippencil6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/lippencil6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/lippencil6H)no-repeat center center/cover';
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