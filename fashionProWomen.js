
  function disappear(){
    document.getElementById('casualwear').style.display = 'none';
    document.getElementById('jacketwear').style.display = 'none';
    document.getElementById('leggingwear').style.display = 'none';
    document.getElementById('sockwear').style.display = 'none';
    document.getElementById('jeanwear').style.display = 'none';
    document.getElementById('pantwear').style.display = 'none';
    document.getElementById('topwear').style.display = 'none';
    document.getElementById('skirtwear').style.display = 'none';
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
    document.getElementById('casualwear').style.display = 'block';
    document.getElementById('jacketwear').style.display = 'block';
    document.getElementById('leggingwear').style.display = 'block';
    document.getElementById('sockwear').style.display = 'block';
    document.getElementById('jeanwear').style.display = 'block';
    document.getElementById('pantwear').style.display = 'block';
    document.getElementById('topwear').style.display = 'block';
    document.getElementById('skirtwear').style.display = 'block';
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









  function casual1(){
    document.getElementById('name').innerHTML = 'SHORT SLEEVED SHIRT';
    document.getElementById('category').innerHTML = 'Drag Casual';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/casual)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/casual)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/casualH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/casual2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/casual2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casualH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual2H)no-repeat center center/cover';
    };
    
  }





  function casual2(){
    document.getElementById('name').innerHTML = 'SHORTS';
    document.getElementById('category').innerHTML = 'Drag Casual';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/casual2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/casual)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/casualH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/casual2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/casual2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casualH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual2H)no-repeat center center/cover';
    };
    
  }




  function casual3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHIRT';
    document.getElementById('category').innerHTML = 'Drag Casual';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/casual3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/casual3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/casual3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/casual4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/casual4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual4H)no-repeat center center/cover';
    };
    
  }



  function casual4(){
    document.getElementById('name').innerHTML = 'DIORIVIERA PANT';
    document.getElementById('category').innerHTML = 'Drag Casual';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/casual4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/casual3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/casual3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/casual4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/casual4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual4H)no-repeat center center/cover';
    };
    
  }



  function casual5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA BRALETTE';
    document.getElementById('category').innerHTML = 'Drag Casual';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/casual5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/casual5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/casual5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/casual6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/casual6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual6H)no-repeat center center/cover';
    };
    
  }



  function casual6(){
    document.getElementById('name').innerHTML = 'BRALLET';
    document.getElementById('category').innerHTML = 'Drag Casual';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/casual6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/casual5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/casual5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/casual6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/casual6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/casual6H)no-repeat center center/cover';
    };
    
  }




































  function jacket1(){
    document.getElementById('name').innerHTML = 'CROPPED JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacket)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacket)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacket2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacket2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket2H)no-repeat center center/cover';
    };
    
  }





  function jacket2(){
    document.getElementById('name').innerHTML = 'CROPPED JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacket2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacket)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacketH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacket2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacket2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacketH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket2H)no-repeat center center/cover';
    };
    
  }




  function jacket3(){
    document.getElementById('name').innerHTML = 'OFF-THE-SHOULDER JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacket3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacket3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacket3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacket4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacket4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket4H)no-repeat center center/cover';
    };
    
  }



  function jacket4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacket4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacket3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacket3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacket4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacket4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket4H)no-repeat center center/cover';
    };
    
  }



  function jacket5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA JACKET';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacket5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacket5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacket5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacket6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacket6H.avif)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket6H.avif)no-repeat center center/cover';
    };
    
  }



  function jacket6(){
    document.getElementById('name').innerHTML = 'BLAZER';
    document.getElementById('category').innerHTML = 'Drag Jackets';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/jacket6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/jacket5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/jacket5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/jacket6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/jacket6H.avif)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/jacket6H.avif)no-repeat center center/cover';
    };
    
  }






















  function skirt1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH SKIRT';
    document.getElementById('category').innerHTML = 'Drag Skirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/skirt)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/skirt)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/skirtH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/skirt2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/skirt2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirtH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt2H)no-repeat center center/cover';
    };
    
  }


  function skirt2(){
    document.getElementById('name').innerHTML = 'SHORT SKIRT';
    document.getElementById('category').innerHTML = 'Drag Skirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/skirt2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/skirt2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/skirt2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/skirt3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/skirt3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt3H)no-repeat center center/cover';
    };
    
  }


  function skirt3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT SKIRT';
    document.getElementById('category').innerHTML = 'Drag Skirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/skirt3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/skirt3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/skirt3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/skirt4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/skirt4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt4H)no-repeat center center/cover';
    };
    
  }


  function skirt4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE SKIRT';
    document.getElementById('category').innerHTML = 'Drag Skirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/skirt4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/skirt4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/skirt4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/skirt5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/skirt5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt5H)no-repeat center center/cover';
    };
    
  }

  function skirt5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH SKIRT';
    document.getElementById('category').innerHTML = 'Drag Skirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/skirt5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/skirt5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/skirt5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/skirt6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/skirt6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt6H)no-repeat center center/cover';
    };
    
  }

  function skirt6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE skirt';
    document.getElementById('category').innerHTML = 'Drag Skirts';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/skirt6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/skirt5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/skirt5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/skirt6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/skirt6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/skirt6H)no-repeat center center/cover';
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




























  function pant1(){
    document.getElementById('name').innerHTML = 'MID-LENGTH pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pant)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pant)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pantH)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pant2)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pant2H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pantH)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant2)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant2H)no-repeat center center/cover';
    };
    
  }


  function pant2(){
    document.getElementById('name').innerHTML = 'SHORT pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pant2)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pant2)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pant2H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pant3)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pant3H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant2)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant2H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant3)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant3H)no-repeat center center/cover';
    };
    
  }


  function pant3(){
    document.getElementById('name').innerHTML = 'DIORIVIERA SHORT pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pant3)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pant3)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pant3H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pant4)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pant4H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant3)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant3H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant4)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant4H)no-repeat center center/cover';
    };
    
  }


  function pant4(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pant4)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pant4)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pant4H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pant5)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pant5H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant4)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant4H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant5)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant5H)no-repeat center center/cover';
    };
    
  }

  function pant5(){
    document.getElementById('name').innerHTML = 'DIORIVIERA MID-LENGTH pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pant5)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pant5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pant5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pant6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pant6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant6H)no-repeat center center/cover';
    };
    
  }

  function pant6(){
    document.getElementById('name').innerHTML = 'MACROCANNAGE pant';
    document.getElementById('category').innerHTML = 'Drag Pants';
    document.getElementById('description').innerHTML = 'Nothing can be perfect,comfortable than this wear any day and any time.';
    document.getElementById('pho').style.background = 'url(img/pant6)no-repeat center center/cover';

    document.getElementById('photo1').style.background = 'url(img/pant5)no-repeat center center/cover';
    document.getElementById('photo2').style.background = 'url(img/pant5H)no-repeat center center/cover';
    document.getElementById('photo3').style.background = 'url(img/pant6)no-repeat center center/cover';
    document.getElementById('photo4').style.background = 'url(img/pant6H)no-repeat center center/cover';

    photo1.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant5)no-repeat center center/cover';
    };
    photo2.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant5H)no-repeat center center/cover';
    };
    photo3.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant6)no-repeat center center/cover';
    };
    photo4.onclick = function(){
        document.getElementById('pho').style.background = 'url(img/pant6H)no-repeat center center/cover';
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