import axios from "axios";


export const getData = () => {
  console.log('hi')
  return async (dispatch) => {
    await axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a"
      )
      .then((response) => {
          console.log(response);
        dispatch({
          type: "GET_DATA",
          data: response.data
        });
      });
  };
};


export const getDataById = params => {
  return dispatch => {
    return axios.get('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a', { params }).then(res => {
      dispatch({ type: 'GET_DATA_BY_ID', data: res.data, params })
    })
  }
}