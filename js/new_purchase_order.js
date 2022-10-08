
/* ******** Completar ********** */


function createPurchaseOrder() {
	console.log("Order created")

	axios.post('https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/',
	{
		// data body here... document.getElementById("..")...
	})
		.then(function (response) {
			// handle response and do something
			console.log(response);
		})
		.catch(function (error) {
			// handle error here
			console.log(error);
		});
}
