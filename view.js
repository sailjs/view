define(['sail',
        'anchor/events',
        'anchor/class'],
function(sail, events, clazz) {
  
  function View(el, options) {
    View.super_.call(this);
    
    if (typeof el == 'string') {
      var render = sail.render
        , $ = sail.$;
      
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
  clazz.inherits(View, events.EventEmitter);
  
  return View;
});
