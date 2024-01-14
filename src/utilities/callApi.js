export async function callApi({ city, ApiUrl }) {
  if (!city) return;
  try {
    const response = await fetch(ApiUrl, {
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error("error fetching API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
