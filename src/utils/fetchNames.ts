import {
  API_URL,
  DEFAULT_NAME_FETCH_COUNT,
  FALLBACK_NAMES,
} from "../constants/constants";

// In case the API or the internet connection is off defer to an in memory set of names
const fetchNames = async (
  count = DEFAULT_NAME_FETCH_COUNT
): Promise<string[]> => {
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
