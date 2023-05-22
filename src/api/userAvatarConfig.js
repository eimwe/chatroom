const imageGeneratorApiKey = import.meta.env.VITE_IMAGE_GENERATOR_API_KEY;

const params = new URLSearchParams({
  category: 'food',
  width: 200,
  height: 200
});

const url = `https://api.api-ninjas.com/v1/randomimage?${params}`;

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': imageGeneratorApiKey,
    'Content-Type': 'image/jpg',
    Accept: 'image/jpg'
  }
};

export { url, options };
