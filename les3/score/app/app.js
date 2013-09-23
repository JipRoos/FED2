var APP = APP || {};

(function(){
	APP.page1 = {
		title:'Pagina 1',
		description:'Pagina 1 is de eerste pagina',
		items: [
			{
				title: 'Item 1',
				description: 'Item 1 is het eerste item'
			}, {
				title: 'Item 2',
				description: 'Item 2 is het tweede item'
			}, {
				title: 'Item 3',
				description: 'Item 3 is het derde item'
			}, {
				title: 'Item 4',
				description: 'Item 4 is het vierde item'
			}
		]
	};

	APP.controller = {
		init: function(){
			APP.router.init();
		}
	};

	APP.router = {
		init: function (){
			routie({
				'page1': function(){
					APP.page.render('page1');
				}, 
				'page2': function(){
					APP.page.render('page2');
				}
			});
		},
		change: function() {
			var route = window.location.hash.slice(2),
                sections = qwery('section'),
                section = qwery('[data-route=' + route + ']')[0];

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }
		}
	};

	APP.page = {
		render: function(route){
			var data = eval('APP.' + route);

			Transparency.render(qwery('[data-route='+route+']')[0], data);
			APP.router.change();
		}
	};


	domready(function() {
		APP.controller.init();
	});
})();