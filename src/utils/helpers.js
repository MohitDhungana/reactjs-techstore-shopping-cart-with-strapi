import url from './URL';

// flatten
export const flattenProducts = (data) => {
  return data.map((item) => {
    let image = item.image.url;

    return { ...item, image };
  });
};

// helper functions
export const featuredProducts = (data) =>
  data.filter((item) => item.featured === true);
