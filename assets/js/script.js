setTimeout(function(){ particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 67,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 7.672327672327672,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1420.4657549380909
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 243.62316369040352,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

}
, 1000);



function onContactSubmission(){
  // get field values
  var data = {
     "name" : $( "input#name" ).val(),
     "email" : $( "input#email" ).val(),
     "message" : $( "textarea#message" ).val()
   };

   if(data.name !== '' && data.email !== '' && data.message !== ''){
     // execute ajax to AWS API gateway
     $.ajax({
       type: 'POST',
       url: "https://6rr8eplv52.execute-api.us-east-1.amazonaws.com/dev/contact",
       dataType: 'json',
       contentType: 'application/json',
       data: JSON.stringify(data),
       success: function () {
         // fancy notification
         $.notify(
           "Email successfully send",
           {
             position:'bottom-right',
             className: 'success',
             autoHideDelay: 3000,
           }
         );
       },
       error: function () {
         // fancy notification
         $.notify(
           "Error sending email",
           {
             position:'bottom-right',
             className: 'error',
             autoHideDelay: 3000,
           }
         );
       }
     })

     // reset form
     var form = document.getElementById("contactForm");
     form.reset();
   }

  // handle responses
  return false;
}
