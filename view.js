define(['events',
        'class',
        'sail'],
function(Emitter, clazz, sail) {
  
  function View(el, options) {
    View.super_.call(this);
    
    if (typeof el == 'string') {
      var $ = sail.$
        , render = sail.render;
      
      var out = render(el, options);
      if (typeof out == 'string') {
        this.el = $(out);
      } else if (typeof out == 'function') {
        this.el = $(out(options));
      }
    } else {
      this.el = el;
    }
  }
  clazz.inherits(View, Emitter);
  
  return View;
});
