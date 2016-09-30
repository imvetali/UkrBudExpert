		var bittersMap = (function () {
			var myLatlng = new google.maps.LatLng(50.419370, 30.521700),
			mapCenter = new google.maps.LatLng(50.419370, 30.521700),
			mapCanvas = document.getElementById('map-canvas'),
			mapOptions = {
				center: mapCenter,
				zoom: 20,
				scrollwheel: false,
				draggable: true,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			},
			map = new google.maps.Map(mapCanvas, mapOptions),
			marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon:'img/map-icon.png'
			});

			return {
				init: function () {
					map.set('styles', [{
						featureType: 'landscape',
						elementType: 'geometry',
						stylers: [
						{ hue: '#ffff00' },
						{ saturation: 30 },
						{ lightness: 10}
						]}
						]);


				}
			};
		}());

		bittersMap.init();