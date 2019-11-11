const link = {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "URL",
      name: "url",
      type: "string",
      required: true,
    },
    {
      title: "Type",
      name: "link_type",
      type: "string",
      options: {
        list: ["website", "twitter", "code", "blog-post"],
      },
      required: true,
    },
    {
      title: "Primary",
      name: "primary",
      type: "boolean",
      required: true,
    },
  ],
}

export default link
