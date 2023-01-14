import { gsap } from "gsap";

const sidebar = document.querySelector('.sidebar');

if(sidebar) {
  const filter = document.querySelector('.sidebar .catalog-filter');
  if(filter) {
    const headers = filter.querySelectorAll('.catalog-filter__section-header');

    headers.forEach(header => {
      header.addEventListener('click', (evt) => {
        evt.target.classList.contains('active') ?
        evt.target.classList.remove('active') :
        evt.target.classList.add('active');
      });

    });

    const sections = filter.querySelectorAll('.catalog-section-main');

    if(sections) {
      sections.forEach(section => {
        section.addEventListener('click', (evt) => {
          evt.target.classList.contains('active') ?
          evt.target.classList.remove('active') :
          evt.target.classList.add('active');
        });
      });
    }
  }

  const sidebarBtn = document.querySelector('.catalog-section__filter-btn');

  if(sidebarBtn) {
    const closer = sidebar.querySelector('.closer');

    function closeSidebar(evt) {
      gsap.to('.sidebar__container', {
        x: '-110%',
        opacity: 0,
        duration: 0.4,
        ease: 'ease-in'
      });

      setTimeout(() => {
        sidebar.classList.remove('active');
        document.removeEventListener('click', onOverlayClickCloseSidebar);
        document.removeEventListener('keydown', onEscClickCloseSidebar);
        closer.removeEventListener('click', onCloserClickCloseSidebar)
        sidebarBtn.addEventListener('click', onClickShowSidebar);
      }, 400);
    }

    const onClickShowSidebar = () => {
      gsap.fromTo('.sidebar__container', {x: '-110%', opacity: 0},{
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'ease-in'
      })

      sidebar.classList.add('active');
      document.addEventListener('click', onOverlayClickCloseSidebar);
      document.addEventListener('keydown', onEscClickCloseSidebar);
      closer.addEventListener('click', onCloserClickCloseSidebar)
      sidebarBtn.removeEventListener('click', onClickShowSidebar);
    }

    const onOverlayClickCloseSidebar = (evt) => {
      if(evt.target === sidebar) {
        closeSidebar();
      }
    }

    const onCloserClickCloseSidebar = () => {
      closeSidebar();
    }

    const onEscClickCloseSidebar = (evt) => {
      if(evt.key === "Escape") {
        closeSidebar();
      }
    }

    sidebarBtn.addEventListener('click', onClickShowSidebar);
  }
}


