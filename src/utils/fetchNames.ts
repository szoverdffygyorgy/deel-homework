import API_URL from "../constants/apiUrl";
import FALLBACK_NAMES from "../constants/fallbackNames";

// In case the API or the internet connection is off defer to an in memory set of names
const fetchNames = async (count = 20): Promise<string[]> => {
  try {
    const formData = new FormData();
    formData.append("type", "fullname");
    formData.append("number", `${count}`);

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    return await response.json();
  } catch (_) {
    return FALLBACK_NAMES;
  }
};

export default fetchNames;
