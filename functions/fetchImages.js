const { Client } = require("@notionhq/client");
const { NOTION_KEY, NOTION_IMG_DB } = process.env;

const notion = new Client({
  auth: NOTION_KEY,
});
exports.handler = async function (event, context) {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_IMG_DB,
      filter: {
        property: "status",
        select: {
          equals: "PUBLIC",
        },
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.log(e);
    return {
      statuscode: 500,
      body: "Something went wrong... Notify us if this annoys you",
    };
  }
};
