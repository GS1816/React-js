const API_URL =
  "https://didactic-eureka-69565vjqxrp4cpjg-3000.app.github.dev/api";

export const addCard = async (cardData) => {
  try {
    const response = await fetch(`${API_URL}/name`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) throw new Error("Failed to add card");
    console.log(JSON.stringify(cardData));
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return { message: "Error adding card" };
  }
};

export const getCards = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch cards");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
