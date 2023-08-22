import React from "react";

const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

export default {
  name: 'contentRich',
  title: 'Content Rich',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: () => "H",
              render: highlightRender,
            },
          },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'about'},
                  {type: 'careers'},
                  {type: 'community'},
                  {type: 'faqs'},
                  {type: 'games'},
                  {type: 'homaLab'},
                  {type: 'home'},
                  {type: 'privacy'},
                  {type: 'subscriptionTerms'},
                  {type: 'terms'},
                  {type: 'marketingPages'},
                  {type: 'blogLanding'},
                  {type: 'products'},
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    },
    { 
      name: 'dottedLineSeperator',
      title: 'Line',
      type: 'object',
      fields: [{
        name: 'title',
        type: 'string',
        hidden: true
      }],
      preview: {
        prepare() {
          return {
            title: 'Line',
          }
        }
      }
    },
    { type: 'table' }
  ]
}