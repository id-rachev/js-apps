var Image = {
	initialise: function(title, thumbUrl, imageUrl){
		this.title = title;
		this.thumbUrl = thumbUrl;
		this.imageUrl = imageUrl;
	}
}

var Slider = {
	initialiseIn: function(wrapSelector){
		this.parentWrapper = document.getElementById(wrapSelector);
		this.images = [];
		this.thumbnailsWrap = document.createElement("div");
		this.parentWrapper.appendChild(this.thumbnailsWrap);
		//this.buttons = [leftButton, rightButton];
	},
	image1: function() {
		return this.images[0];
	},
	addImages: function(setOfImages){
		for (var i = 0; i < setOfImages.length; i++) {
            var currentImg = document.createElement("img");
            currentImg.id = "image-" + (i + 1);
            currentImg.setAttribute("title", setOfImages[i].title);
            currentImg.setAttribute("src", setOfImages[i].thumbUrl);
            currentImg.setAttribute("alt", setOfImages[i].title);
            this.images.push(currentImg);
            this.thumbnailsWrap.appendChild(currentImg);
		};
	}
}

var Button = {
	initialise: function(outerHTML, href, id){
		this.outerHTML = outerHTML;
		this.href = href;
		this.id = id;
	},
	href: function(){
		return this.href;
	}
}

var image1 = Object.create(Image);
image1.initialise("star-wars-img",
	"images/thumbnails/star-wars-thumb.jpg",
	"images/star-wars.jpg");

var image2 = Object.create(Image);
image1.initialise("vader-img",
	"images/thumbnails/vader-thumb.jpg",
	"images/vader.jpg");

var image3 = Object.create(Image);
image1.initialise("star-ship-img",
	"images/thumbnails/star-ship-thumb.jpg",
	"images/star-ship.jpg");

var image4 = Object.create(Image);
image1.initialise("jaba-img",
	"images/thumbnails/jaba-thumb.jpg",
	"images/jaba.jpg");

var image5 = Object.create(Image);
image1.initialise("master-yoda-img",
	"images/thumbnails/master-yoda-thumb.jpg",
	"images/master-yoda.jpg");

var image6 = Object.create(Image);
image1.initialise("star-wars2-img",
	"images/thumbnails/star-wars2-thumb.jpg",
	"images/star-wars2.jpg");

var imagesSet = [image1, image2, image3, image4, image5, image6];

var prevButton = Object.create(Button);
prevButton.initialise("<a></a>", "", "prevBtn");

var nextButton = Object.create(Button);
nextButton.initialise("<a></a>", "nextBtn", "nextBtn");

var starWarsSlider = Object.create(Slider);
starWarsSlider.initialiseIn("wrapper");

starWarsSlider.addImages(imagesSet);

console.log("slider: " + starWarsSlider.image1());