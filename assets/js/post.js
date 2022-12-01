'use strict';
const allFeeds = document.querySelectorAll('.feed');
const closeCommentModalBtn = document.querySelectorAll('.close-comment-btn');
const captionP = document.querySelectorAll('.caption-p');
const commentContainerModal = document.getElementById(
  'comment-container-modal'
);
allFeeds.forEach(feed => {
  feed.addEventListener('click', function (e) {
    // this is if ellipse button is clicked
    if (e.target.closest('.ellipse-btn')) {
      const ellipseBtn = e.target.closest('.ellipse-btn');
      console.log('ellipse btn clicked');
    }

    // this is if image or caption is clicked
    if (e.target.closest('.post-caption')) {
      // const captionContainer = e.target.closest(`.post-caption`);
      commentContainerModal.classList.remove('displayNone');
    }
    // if image container was clicked
    if (e.target.closest('.post-images')) {
      // const imgContainer = e.target.closest(`.post-images`);
      commentContainerModal.classList.remove('displayNone');
    }
    // if text container is clicked
    if (e.target.closest('.text-post-container')) {
      // const textPostContainer = e.target.closest(`.text-post-container`);
      commentContainerModal.classList.remove('displayNone');
    }
  });
});
closeCommentModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    commentContainerModal.classList.add('displayNone');
  });
});
captionP.forEach(p => {
  const text = p.textContent.substring(0, 150);
  p.textContent = p.textContent.length > 150 ? text + ' ...See more' : text;
});
