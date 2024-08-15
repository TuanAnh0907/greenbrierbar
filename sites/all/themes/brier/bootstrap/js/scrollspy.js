var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /* ========================================================================
     * Bootstrap: scrollspy.js v3.2.0
     * http://getbootstrap.com/javascript/#scrollspy
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */


    +function ($) {
        'use strict';

        // SCROLLSPY CLASS DEFINITION
        // ==========================

        function ScrollSpy(element, options) {
            var process  = $.proxy(this.process, this)

            this.$body          = $('body')
            this.$scrollElement = $(element).is('body') ? $(window) : $(element)
            this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
            this.selector       = (this.options.target || '') + ' .nav li > a'
            this.offsets        = []
            this.targets        = []
            this.activeTarget   = null
            this.scrollHeight   = 0

            this.$scrollElement.on('scroll.bs.scrollspy', process)
            this.refresh()
            this.process()
        }

        ScrollSpy.VERSION  = '3.2.0'

        ScrollSpy.DEFAULTS = {
            offset: 10
        }

        ScrollSpy.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }

        ScrollSpy.prototype.refresh = function () {
            var offsetMethod = 'offset'
            var offsetBase   = 0

            if (!$.isWindow(this.$scrollElement[0])) {
                offsetMethod = 'position'
                offsetBase   = this.$scrollElement.scrollTop()
            }

            this.offsets = []
            this.targets = []
            this.scrollHeight = this.getScrollHeight()

            var self     = this

            this.$body
                .find(this.selector)
                .map(function () {
                    var $el   = $(this)
                    var href  = $el.data('target') || $el.attr('href')
                    var $href = /^#./.test(href) && $(href)

                    return ($href
                        && $href.length
                        && $href.is(':visible')
                        && [[$href[offsetMethod]().top + offsetBase, href]]) || null
                })
                .sort(function (a, b) { return a[0] - b[0] })
                .each(function () {
                    self.offsets.push(this[0])
                    self.targets.push(this[1])
                })
        }

        ScrollSpy.prototype.process = function () {
            var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
            var scrollHeight = this.getScrollHeight()
            var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
            var offsets      = this.offsets
            var targets      = this.targets
            var activeTarget = this.activeTarget
            var i

            if (this.scrollHeight != scrollHeight) {
                this.refresh()
            }

            if (scrollTop >= maxScroll) {
                return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
            }

            if (activeTarget && scrollTop <= offsets[0]) {
                return activeTarget != (i = targets[0]) && this.activate(i)
            }

            for (i = offsets.length; i--;) {
                activeTarget != targets[i]
                && scrollTop >= offsets[i]
                && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
                && this.activate(targets[i])
            }
        }

        ScrollSpy.prototype.activate = function (target) {
            this.activeTarget = target

            $(this.selector)
                .parentsUntil(this.options.target, '.active')
                .removeClass('active')

            var selector = this.selector +
                '[data-target="' + target + '"],' +
                this.selector + '[href="' + target + '"]'

            var active = $(selector)
                .parents('li')
                .addClass('active')

            if (active.parent('.dropdown-menu').length) {
                active = active
                    .closest('li.dropdown')
                    .addClass('active')
            }

            active.trigger('activate.bs.scrollspy')
        }


        // SCROLLSPY PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
            return this.each(function () {
                var $this   = $(this)
                var data    = $this.data('bs.scrollspy')
                var options = typeof option == 'object' && option

                if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        var old = $.fn.scrollspy

        $.fn.scrollspy             = Plugin
        $.fn.scrollspy.Constructor = ScrollSpy


        // SCROLLSPY NO CONFLICT
        // =====================

        $.fn.scrollspy.noConflict = function () {
            $.fn.scrollspy = old
            return this
        }


        // SCROLLSPY DATA-API
        // ==================

        $(window).on('load.bs.scrollspy.data-api', function () {
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this)
                Plugin.call($spy, $spy.data())
            })
        })

    }(jQuery);


}
/*
     FILE ARCHIVED ON 17:36:33 Jan 06, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:20:31 Aug 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.522
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 25.886
  LoadShardBlock: 151.013 (3)
  PetaboxLoader3.datanode: 178.455 (4)
  load_resource: 90.298
  PetaboxLoader3.resolve: 31.945
*/
