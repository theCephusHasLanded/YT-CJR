//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./ErrorMessage.css";




//const [ loading, setLoading ] =  useState(false)

// const onFetchDataClicked = async () => {
//   setLoading(true);
//   const res = await fetchSomeData();
//   setLoading(false);
//   setItem(res.data);
// }

// const [ data, setData ] = useState([]);
// const [ isLoading, setIsLoading ] = useState(false);


// useEffect(() => {
// setIsLoading(true);
// axios.get(".....")
// .then(data => {
//   setData(data);  //update stte with response
// })
// .catch(error => {
//   //handle any errors/rejected Promises
// })
// .finally(() => setIsLoading(false)); //complete loading success/fail
// },[]);

// if (isLoading) return <Landing  />;
// return data.map(...)

const ErrorMessage = () => {




//  you would toggle an isLoading statte true immediately prior to making the async requestAnimationFrame, setting it back to falswe when fetch is complete and you have enqueued a state update.

//const [loadingError, setLoadingError] = useState(false);


  return (
    
    <section className="error">
      <p> Danger Will Robinson! You have reached an error. </p>

    </section>
      
  )
}

export default ErrorMessage
