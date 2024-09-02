let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

$(document).ready(function(){
	$("p.2nd").hide();
	$("button.read").click(function(){
		$("p.2nd").show();
	});
	$("button.read").dblclick(function(){
		$("p.2nd").hide();
	});
});
$(document).ready(function(){
	$("div.hello").hide();
	$("button.service").click(function(){
		$("div.hello").show();
	});
	$("button.service").dblclick(function(){
		$("div.hello").hide();
	});
});
function toggleReadMore() {
    const moreContent = document.getElementById('moreContent');
    const readMoreBtn = document.getElementById('readMoreBtn');

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
}
function toggleReadMore1() {
    const moreContent = document.getElementById('moreContent1');
    const readMoreBtn = document.getElementById('readMoreBtn1');

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
}