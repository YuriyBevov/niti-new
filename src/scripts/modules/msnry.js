import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const layout = document.querySelector('.masonry');

if(layout) {
  const items = layout.querySelectorAll('.masonry-item img');

  imagesLoaded( items, () => {
    const msnry = new Masonry( layout, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true,
    });
  });
}
