
document.querySelectorAll('form[data-inquiry]').forEach(form=>{
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    const body = [...data.entries()].map(([k,v])=>`${k}: ${v}`).join('%0D%0A');
    window.location.href = `mailto:paul@shandongtongcai.com?subject=TONGCAI Website Inquiry&body=${body}`;
  });
});
