const profile = document.querySelector('.personal__field--profile');

if(profile) {

  const inner = profile.querySelector('.personal-field-profile-inner');
  //console.log(inner);

  function closeProfile() {
    console.log('close');
    profile.classList.remove('active');
    document.removeEventListener('click', onClickOutsideCloseProfile);
    document.removeEventListener('keyup', onClickByEscCloseProfile);
  }

  const onClickOpenProfile = (evt) => {
    evt.stopPropagation();
    profile.classList.toggle('active');

    if(!profile.classList.contains('active')) {
      closeProfile();
    } else {
      document.addEventListener('click', onClickOutsideCloseProfile);
      document.addEventListener('keyup', onClickByEscCloseProfile);
    }
  }


  const onClickOutsideCloseProfile = (evt) => {
    console.log(evt.target);
  }

  const onClickByEscCloseProfile = (evt) => {
      if (evt.key === "Escape") {
        closeProfile();
      }
  }

  profile.addEventListener('click', onClickOpenProfile);
}
