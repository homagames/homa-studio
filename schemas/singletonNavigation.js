import { FiArrowRight } from "react-icons/fi"

export default {
  title: 'Navigations',
  name: 'navigation',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    // {
    //   title: 'Title',
    //   name: 'title',
    //   type: 'string',
    //   validation: Rule => Rule.required()
    // },
    {
      title: "Header Nav Items",
      type: "array",
      name: "headerNavItems",
      of: [
        {
          type: "navItem",
          name: "navItem",
        }
      ],
    },
    {
      title: "Footer Nav Items",
      type: "array",
      name: "footerNavItems",
      of: [
        {
          type: "navItemNoSub",
          name: "navItem",
        }
      ],
    },
    {
      title: "Footer Contact & Legal Nav Items",
      type: "array",
      name: "footerContactAndLegalNavItems",
      of: [
        {
          type: "navItemNoSub",
          name: "navItem",
        }
      ],
    },
    {
      title: "Footer Social Nav",
      type: "array",
      name: "footerSocialNav",
      of: [
        {
          type: 'object',
          icon: FiArrowRight,
          fields: [
            {
              title: 'Section Title',
              description: 'Title of this section, eg: "For The Fans"',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Nav Items',
              name: 'navItems',
              type: 'array',
              of: [
                {
                  type: "navItemSocial",
                  name: "navItem",
                }
              ]
            },
          ],
          preview: {
            select: {
              title: 'title',
              navItems: 'navItems'
            },
            prepare ({ title, navItems }) {
              return {
                title,
                subtitle: navItems ? `${navItems.length} Children` : 'No Children'
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}