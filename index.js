const myImage = document.getElementById('map');

fetch('https://api.jawg.io/static?zoom=11&center=-3.654703,128.190643&size=850x500&layer=jawg-streets&format=jpg&access-token=ZMkTYUhyUToa5xKWHI3RjQ8xEVz2eQFp2HD5kghztv2aafVqXsa9sPPoTy8iCx7Y')
	.then(response => response.blob())
	.then((myBlob) => {
		const objectURL = URL.createObjectURL(myBlob);
		myImage.src = objectURL;
	  })
	.catch(err => console.error(err));

const mapCont = document.getElementById('map-cont');
mapCont.addEventListener('click', (e)=>{
	console.log(e.clientX);
	console.log(e.clientY);
})