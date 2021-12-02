import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";

import { queryState, restaurantDataState } from "../states";

export default function useSearchRestaurants() {
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  const query = useRecoilValue(queryState);
  const setRestaurantData = useSetRecoilState(restaurantDataState);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      const response = await axios.get(`/api/posts?area=${query.area}&stage=${query.stage}&type=${query.type}&inputText=${query.inputText}`)
        .catch(error => {
        setIsError(true);
        console.log(error);
      }).then(response => {
        setIsLoading(false);
        setRestaurantData(response.data);
      })
    };
    
    fetchData();
  }, [query]);

  return { isLoading, isError };
}