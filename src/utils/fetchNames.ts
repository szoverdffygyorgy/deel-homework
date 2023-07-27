import API_URL from "../constants/apiUrl";
import FALLBACK_NAMES from "../constants/fallbackNames";

// In case the or internet connection is off defer to an in memory set of names
const fetchNames = async (count = 20): Promise<string[]> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ type: "fullname", number: count }),
    });

    return response.json();
  } catch (_) {
    return FALLBACK_NAMES;
  }
};

export default fetchNames;
