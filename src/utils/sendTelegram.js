export async function sendFormToTelegram(message) {
  const botToken = "6428283702:AAGKBaMaMBfChrVMkYThTKvWNmauW1W3Cqw";
  const chatId = "-4152124665";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (response.ok) {
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
