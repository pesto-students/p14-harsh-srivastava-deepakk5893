async function getExchangeRate(currencyCode) { 
	api = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_L6VbuwwKozqLsubmms1YOpZLdR3dlMnUWcuGXppF"
	// api += `?${currencyCode}`
	fetch(api)
	.then((response) => response.json())
	.then((data) => {
		// debugger
		data = data['data']
		let rate = null
		if (data[currencyCode]){
			rate = data[currencyCode].toFixed(4)
		}
		console.log(rate)
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});
}


getExchangeRate('USD')
getExchangeRate('INR')