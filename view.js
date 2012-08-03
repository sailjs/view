define(['sail',
        'anchor/events',
        'anchor/class'],
function(sail, events, clazz) {
  
  function View(el, options) {
    View.super_.call(this);
    // TODO: Pass options (locals) to render
    this.el = typeof el == 'string' ? sail.$(sail.render(el, options)) : el;
  }
  clazz.inherits(View, events.EventEmitter);
  
  return View;
});
