import { ref } from 'vue';

const error = ref(null);

const fetchBlob = async (url, options) => {
  error.value = null;

  try {
    const response = await fetch(url, options);
    const blob = await response.blob();

    error.value = null;

    return blob;
  } catch (err) {
    error.value = err.message;
  }
};

const getImageHref = async (url, options) => {
  error.value = null;

  try {
    const imageBlob = await fetchBlob(url, options);
    const imageBase64 = URL.createObjectURL(imageBlob);

    const imageURL = new URL(imageBase64);

    error.value = null;

    return imageURL.href;
  } catch (err) {
    error.value = err.message;
  }
};

const getRandomImage = () => {
  return { error, getImageHref };
};

export default getRandomImage;
