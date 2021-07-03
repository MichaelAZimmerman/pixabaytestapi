import { useState, useEffect } from "react";

const baseUrl =
  "https://pixabay.com/api/?key=685709-63778ac101083a4a45814f84c&image_type=photo&q="; // If all of them go to something like https://www.omdb.api this would go there

export default function useFetch(url) {
  // This hook uses state management AND hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setData(null);
    if (url.length < 3 && url.length !== 0) {
      setError("Search must be at least 3 characters long!");
      return;
    } else if (url.length === 0) {
      setError("Enter keywords above to search.");
      return;
    }
    async function callAPI() {
      setLoading(true);
      // This is with fetch, but it could just as easily be with axios
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();

          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
        setError("Something went wrong. Please try again later");
      } finally {
        setLoading(false);
      }
    }
    callAPI();
  }, [url]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error, loading };
}
