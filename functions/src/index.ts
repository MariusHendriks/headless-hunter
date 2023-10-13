import { Client } from "@notionhq/client";

export interface Env {
	NOTION_KEY: string;
	NOTION_IMG_DB: string;
	NOTION_SHOW_DB: string;
}


export default {
	async fetchImages(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		try {
			// Initialize the Notion client with the necessary authentication.
			const notion = new Client({
				auth: env.NOTION_KEY,
			});

			// Your Notion query logic
			const response = await notion.databases.query({
				database_id: env.NOTION_IMG_DB,
				filter: {
					property: "status",
					select: {
						equals: "PUBLIC",
					},
				},
			});

			return new Response(JSON.stringify(response), {
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (e) {
			console.error(e);
			return new Response("Something went wrong... Notify us if this annoys you", {
				status: 500,
			});
		}
	},

	async fetchShows(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		try {
			// Initialize the Notion client with the necessary authentication.
			const notion = new Client({
				auth: env.NOTION_KEY,
			});

			// Your Notion query logic
			const response = await notion.databases.query({
				database_id: env.NOTION_SHOW_DB,
				filter: {
					property: "status",
					select: {
						equals: "PUBLIC",
					},
				},
			});

			return new Response(JSON.stringify(response), {
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (e) {
			console.error(e);
			return new Response("Something went wrong... Notify us if this annoys you", {
				status: 500,
			});
		}
	},
};
