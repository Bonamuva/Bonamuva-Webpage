// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  btn && btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(mobileNav){
      mobileNav.style.display = expanded ? 'none' : 'block';
      if(!expanded){
        mobileNav.classList.add('fade-in');
      }
    }
  });
});