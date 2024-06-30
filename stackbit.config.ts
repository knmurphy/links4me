// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/index.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "profileImage", type: "image", required: true },
            { name: "backgroundColor", type: "color" },
            { name: "textColor", type: "color" },
            {
              name: "links",
              type: "list",
              items: { type: "model", models: ["Link"] }
            }
          ]
        },
        {
          name: "Link",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "url", type: "string", required: true },
            { name: "icon", type: "string" },
            { name: "backgroundColor", type: "color" },
            { name: "textColor", type: "color" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});