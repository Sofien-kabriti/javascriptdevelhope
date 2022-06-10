const order = {};

let city = order?.customer?.address?.city 

if (!city) {
  console.log('City is required');
}
