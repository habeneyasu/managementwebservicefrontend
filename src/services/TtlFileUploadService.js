import API from '../http-common';

// Function to upload a TTL file
export const uploadTTLFile = (file) => {
  const formData = new FormData();
  formData.append('ttl_file', file);

  return API.post('upload/', formData);
};

