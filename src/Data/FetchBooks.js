import axios from "axios";

const FetchBooks = async (searchTerm) => {
  const response = await axios.get ('https://www.googleapis.com/books/v1/volumes?',{
    params : {
      q: searchTerm,
      maxResults: 20,
      key: 'AIzaSyAqQKNQn-9zoZBRLTkf4T2qhFXE1fVZmaI'
    }
  });
  return response
}

export default FetchBooks;