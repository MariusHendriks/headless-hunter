const { Client } = require("@notionhq/client");
const { NOTION_KEY, NOTION_SHOW_DB } = process.env;

const notion = new Client({
  auth: NOTION_KEY,
});

exports.handler = async function (event, context) {
  let results = [];
  try {
    const data = await notion.databases.query({
      database_id: NOTION_SHOW_DB,
      filter: {
        property: "status",
        select: {
          equals: "PUBLIC",
        },
      },
    });

    results = [...data.results];

    while (data.has_more) {
      data = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        filter: {
          property: "status",
          select: {
            equals: "PUBLIC",
          },
        },
        start_cursor: data.next_cursor,
      });

      results = [...results, ...data.results];
    }
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (e) {
    console.log(e);
    return {
      statuscode: 500,
      body: "Something went wrong... Notify us if this annoys you",
    };
  }
};
