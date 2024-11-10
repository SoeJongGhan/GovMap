let center = [50.29334359528943, 57.1574789721024];
let road = [50.30647371028188, 57.15320249595006];
let hatch = [50.30221904847277, 57.14833993890731];
let svetofor = [50.279451090512424, 57.191113665225515];
let sneg = [50.28542414992809, 57.19868414460174];
let smart = [50.26827132373671, 57.13788189637295];
let jk = [50.28778660089624, 57.06343832787461];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 17
	});

	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Хедер балуна',
		balloonContentBody: 'Боди балуна',
		balloonContentFooter: 'Подвал',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://th.bing.com/th/id/OIP.ccgGQo-djHb43Uke4Xc4LAHaHa?rs=1&pid=ImgDetMain',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	let placemark1 = new ymaps.Placemark(sneg, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Благоустройство</div>
				<div class="balloon__contacts">
					<a href="https://www.instagram.com/aqtobe_akimat/reel/C2AucR-KmyF/">🔸Актобе очищают от снега в режиме 24/7 </a>
				</div>
			</div>

		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn.shopify.com/s/files/1/2011/6805/files/map-marker-icon_large.png?v=1495099721',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	let placemark2 = new ymaps.Placemark(smart, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Образование</div>
				<div class="balloon__contacts">
					<a href="https://www.gov.kz/memleket/entities/aktobe/press/news/details/603253?lang=ru">📚 Актюбинская область занимает лидирующие позиции по строительству новых школ</a>
				</div>
			</div>

		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn.shopify.com/s/files/1/2011/6805/files/map-marker-icon_large.png?v=1495099721',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	let placemark3 = new ymaps.Placemark(svetofor, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Благоустройство</div>
				<div class="balloon__contacts">
					<a href="tel:+7999999999">По адресу 12 микрорайон, 64 дом установлен пешеходный светофор</a>
				</div>
			</div>

		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn.shopify.com/s/files/1/2011/6805/files/map-marker-icon_large.png?v=1495099721',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	let placemark4 = new ymaps.Placemark(jk, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Транспорт</div>
				<div class="balloon__contacts">
					<a href="https://diapazon.kz/news/129766-avtobusi-pustyat-v-zhiloi-massiv-sulutor">Радостное сообщение для жителей жилого массива Сұлутөр</a>
				</div>
			</div>

		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn.shopify.com/s/files/1/2011/6805/files/map-marker-icon_large.png?v=1495099721',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});



	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// map.geoObjects.add(placemark);
	map.geoObjects.add(placemark1);
	map.geoObjects.add(placemark2);
	map.geoObjects.add(placemark3);
	map.geoObjects.add(placemark4);

	placemark1.balloon.open();
	placemark2.balloon.open();
	placemark3.balloon.open();
	placemark4.balloon.open();
}

ymaps.ready(init);
