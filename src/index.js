import "./styles.css";

let slideIndex = 1;
showSlides ( slideIndex );
showSlidesAuto(0);

const previous = document.querySelector( '.prev' );
const next = document.querySelector( '.next' );


previous.addEventListener( 'click', () => {
    plusSlides(-1);
})

next.addEventListener( 'click', () => {
    plusSlides(1);
})

function plusSlides( n ) {
    showSlides ( slideIndex += n );
}

function showSlides ( n ) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if( n > slides.length ) { slideIndex = 1 };
    if( n < 1 ) { slideIndex = slides.length };

    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove( "active");
    }

    slides[ slideIndex - 1 ].style.display = "block";
    dots[ slideIndex - 1 ].classList.add( "active");
}


function showSlidesAuto () {
    let i;
    let slides = document.getElementsByClassName( "slides" );
    let dots = document.getElementsByClassName("dot");

    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
        dots[i].classList.remove( "active");
    }

    slideIndex++
    if ( slideIndex > slides.length ) {
        slideIndex = 1;
    }

    slides[ slideIndex - 1 ].style.display = "block";
    dots[ slideIndex - 1 ].classList.add( "active" );
    setTimeout(showSlidesAuto, 5000);
}