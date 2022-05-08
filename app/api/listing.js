import apiClient from "./client";

const endpoint = "/listings";
const getListings = () => apiClient.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.description("description", listing.description);
  listing.images.forEach((image, index) =>
    data.append("image", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.load / progress.total),
  });
};

export default { getListings, addListing };
