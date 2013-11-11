(function () {
    var map;
    var marker;
    var infoBox;
    var cityIndex = 0;
    var citiesList = [
        { name: "Sofia", info: "Capital of Bulgaria", xCoord: 42.7, yCoord: 23.32, zoomed: 12 },
        { name: "Bucuresti", info: "Capital of Romania", xCoord: 44.45, yCoord: 26.1, zoomed: 12 },
        { name: "Chisinau", info: "Capital of Moldova", xCoord: 47.03, yCoord: 28.83, zoomed: 12 },
        { name: "Kiev", info: "Capital of Ukraine", xCoord: 50.44, yCoord: 30.5, zoomed: 11 },
        { name: "Moskva", info: "Capital of Russia", xCoord: 55.73, yCoord: 37.6, zoomed: 10 },
        { name: "Minsk", info: "Capital of Belarus", xCoord: 53.9, yCoord: 27.55, zoomed: 11 },
        { name: "Warszawa", info: "Capital of Poland", xCoord: 52.25, yCoord: 21, zoomed: 11 },
        { name: "Bratislava", info: "Capital of Slovakia", xCoord: 48.14, yCoord: 17.1, zoomed: 12 },
        { name: "Budapest", info: "Capital of Hungary", xCoord: 47.5, yCoord: 19.05, zoomed: 11 },
        { name: "Beograd", info: "Capital of Serbia", xCoord: 44.82, yCoord: 20.44, zoomed: 12 }
    ];

    function mapInit() {
        var mapOptions = {
            zoom: citiesList[0].zoomed,
            center: new google.maps.LatLng(citiesList[0].xCoord, citiesList[0].yCoord),
            mapTypeId: google.maps.MapTypeId.HYBRID
        };

        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        setInfoBox();
    }

    function changeCity(direction) {
        marker.setMap(null);
        infoBox.setMap(null);
        var length = citiesList.length;
        cityIndex = cityIndex + direction;
        if (cityIndex >= length) {
            cityIndex = 0;
        }

        if (cityIndex < 0) {
            cityIndex = length - 1;
        }

        var x = citiesList[cityIndex].xCoord;
        var y = citiesList[cityIndex].yCoord;
        var z = citiesList[cityIndex].zoomed;
        var pos = new google.maps.LatLng(x, y);
        map.panTo(pos);
        map.setZoom(z);
        setInfoBox();
    }

    function setInfoBox() {
        var x = citiesList[cityIndex].xCoord;
        var y = citiesList[cityIndex].yCoord;

        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            position: new google.maps.LatLng(x, y),
            visible: true
        });

        var boxText = document.createElement("div");
        boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: coral; padding: 5px;";
        boxText.innerHTML = citiesList[cityIndex].name + ", " + citiesList[cityIndex].info;

        var myOptions = {
            content: boxText,
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-110, 0),
            zIndex: null,
            boxStyle: {
                background: "#777",
                opacity: 0.75,
                width: "220px"
            },
            closeBoxMargin: "10px 2px 2px 2px",
            closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        infoBox = new InfoBox(myOptions);
        infoBox.open(map, marker);
    }

    (function setNavigation() {
        var listWrap = document.getElementById("navigation");
        for (var i = 0; i < citiesList.length; i++) {
            var listItem = document.createElement("li");
            var anchor = document.createElement("a");
            anchor.setAttribute("href", "#")
            anchor.setAttribute("id", "" + i)
            anchor.innerHTML = citiesList[i].name;
            listItem.appendChild(anchor);
            listWrap.appendChild(listItem);
        }
    })();

    document.getElementById("prev-city").addEventListener("click", function () {
        changeCity(-1);
    }, false);

    document.getElementById("next-city").addEventListener("click", function () {
        changeCity(1);
    }, false);

    document.getElementById("navigation").addEventListener("click", function (ev) {
        var clickedItem = ev.target;
        if (!(clickedItem instanceof HTMLAnchorElement)) {
            return;
        }
        cityIndex = parseInt(clickedItem.id);
        changeCity(0);
    }, false);

    google.maps.event.addDomListener(window, "load", mapInit());
})();