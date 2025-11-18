const NOTION_URL = "https://living-jade-e85.notion.site/Apaarmeet-Singh-fb0593226b4f4bf9a6eb0714f91de3d7";

export default {
  async fetch(request) {
    return fetch(NOTION_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
  },
};
