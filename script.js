const comments = document.querySelectorAll('.comment');
let currentCommentIndex = 0;
const autoSlideInterval = 5000; // Set the interval in milliseconds (5 seconds in this example)

function showComment(index) {
    comments.forEach((comment, i) => {
        if (i === index) {
            comment.style.display = 'block';
        } else {
            comment.style.display = 'none';
        }
    });
}

function autoSlide() {
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
    showComment(currentCommentIndex);
}

showComment(currentCommentIndex);

setInterval(autoSlide, autoSlideInterval);













const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
let currentCardSet = 0;
const cardSetSize = 3;

function slideToCardSet(setIndex) {
    const offset = -setIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextCardSet() {
    if (currentCardSet < Math.ceil(cards.length / cardSetSize) - 1) {
        currentCardSet++;
        slideToCardSet(currentCardSet);
    }
}

function prevCardSet() {
    if (currentCardSet > 0) {
        currentCardSet--;
        slideToCardSet(currentCardSet);
    }
}

document.getElementById('next-button').addEventListener('click', nextCardSet);
document.getElementById('prev-button').addEventListener('click', prevCardSet);

slideToCardSet(currentCardSet);

// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Access and populate elements with data
    const bannerImg = document.getElementById('bannerimg');
    const bannerTitle = document.querySelector('.banner h1');
    const bannerLogo = document.querySelector('.logo img');

    // Update banner image, title, and logo
    bannerImg.src = data.banner.imageSrc;
    bannerTitle.textContent = data.banner.title;
    bannerLogo.src = data.banner.logoSrc;

    // Populate the navigation menu
    const navList = document.querySelector('.Navigator ul');
    data.navigation.forEach(item => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.text;
      listItem.appendChild(link);
      navList.appendChild(listItem);
    });

    // Continue populating other elements with data...
  })
  .catch(error => console.error('Error fetching JSON data:', error));
