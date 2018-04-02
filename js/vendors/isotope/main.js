// Product Filter
	$(window).load(function() {
	  "use strict";
	var $container = $('.gallery-isotope');
	$container.isotope({
		layoutMode: "masonry",
		itemSelector : '.isotope-item',
		transitionDuration: '0.8s'
	});
	var $optionSets = $('.gallery-filter'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('active') ) {
			return false;
		}
		var $optionSet = $this.parents('.gallery-filter');
		$optionSet.find('.active').removeClass('active');
		$this.addClass('active');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		changeLayoutMode( $this, options );
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}    
	return false;
	});
});

// Product Filter
	$(window).load(function() {
	  "use strict";
	var $container = $('.gallery-isotopes');
	$container.isotope({
		layoutMode: "masonry",
		itemSelector : '.isotope-items',
		transitionDuration: '0.8s'
	});
	var $optionSets = $('.gallery-filters'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('active') ) {
			return false;
		}
		var $optionSet = $this.parents('.gallery-filters');
		$optionSet.find('.active').removeClass('active');
		$this.addClass('active');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		changeLayoutMode( $this, options );
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}    
	return false;
	});
});


