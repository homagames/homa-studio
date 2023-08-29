import React from "react";

const highlightRender = (props) => (<span style={{ backgroundColor: "#C9E31E" }}>{props.children}</span>);
const highlightRenderTangerine = (props) => (<span style={{ backgroundColor: "#FF7855" }}>{props.children}</span>);
const highlightRenderPlum = (props) => (<span style={{ backgroundColor: "#6E5AB4", color: '#FFF' }}>{props.children}</span>);
const highlightRenderPink = (props) => (<span style={{ backgroundColor: "#FF91FA" }}>{props.children}</span>);

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
            title: "Highlight Lime",
            value: "highlight",
            blockEditor: {
              icon: () => <span style={{ backgroundColor: "#C9E31E" }}>Lime</span>,
              render: highlightRender,
            },
          },
          {
            title: "Highlight Tangerine",
            value: "strikeeeee",
            blockEditor: {
              icon: () => <span style={{ backgroundColor: "#FF7855" }}>Tangerine</span>,
              render: highlightRenderTangerine,
            },
          },
          {
            title: "Highlight Plum",
            value: "hiihhggg",
            blockEditor: {
              icon: () => <span style={{ backgroundColor: "#6E5AB4", color: "#FFF" }}>Tangerine</span>,
              render: highlightRenderPlum,
            },
          },
          {
            title: "Highlight Pink",
            value: "piinnnkk",
            blockEditor: {
              icon: () => <span style={{ backgroundColor: "#FF91FA" }}>Tangerine</span>,
              render: highlightRenderPink,
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
      },{
        name: 'dotted',
        title: 'Dashed Line',
        description: 'Toggle this on to make the line dashed rather than solid',
        type: 'boolean',
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