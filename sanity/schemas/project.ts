const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name", maxLength: 96 }
      },
      {
        name: 'url',
        title: 'URL',
        type:'url',
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {hotspot: true},
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" } //rich text etc compatibility...
        ]
      }
    ]
  }
  
  export default project;