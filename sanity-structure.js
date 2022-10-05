import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import {
  FiHome,
  FiCamera,
  FiGlobe,
  FiUsers,
  FiFileText,
  FiEdit,
  FiBookmark,
  FiCrosshair,
  FiTarget,
  FiCodepen,
  FiCodesandbox,
  FiSmile,
  FiMail
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem()
        .title('Games')
        .child(
          S.list()
            .title('Games')
            .items([
              S.listItem().title('Overview').child(S.editor().id('games').schemaType('games').documentId('singleton-games').views(getPreview('games'))).icon(FiCrosshair),
              S.divider(),
              S.listItem().title('Success Stories').child(S.documentTypeList('caseStudies').title('Success Stories')).icon(FiTarget),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'gamesLibrary',
                title: 'Game Library',
                icon: FiTarget
              }),
              ,
            ])),
      S.divider(),
      S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('singleton-about').views(getPreview('about'))).icon(FiGlobe),
      S.divider(),
      S.listItem().title('Careers').child(S.editor().id('careers').schemaType('careers').documentId('singleton-careers').views(getPreview('careers'))).icon(FiUsers),
      S.divider(),
      S.listItem()
        .title('Homa Lab')
        .child(
          S.list()
            .title('Homa Lab')
            .items([
              S.listItem().title('Overview').child(S.editor().id('homaLab').schemaType('homaLab').documentId('singleton-homa-lab').views(getPreview('homaLab'))).icon(FiCodesandbox),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'products',
                title: 'Products',
                icon: FiCodepen
              }),
            ])),
      S.divider(),
      S.listItem()
        .title('Community')
        .child(
          S.list()
            .title('Community')
            .items([
              S.listItem().title('Overview').child(S.editor().id('community').schemaType('community').documentId('singleton-community').views(getPreview('community'))).icon(FiSmile),
              S.divider(),
              S.listItem().title('Team').child(S.documentTypeList('team').title('Team')).icon(FiUsers),
              ,
            ])),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem().title('Articles').child(S.documentTypeList('blog').title('Articles')).icon(FiEdit),
              S.divider(),
              S.listItem().title('Categories').child(S.documentTypeList('categories').title('Categories')).icon(FiBookmark),
              S.divider(),
              S.listItem().title('Authors').child(S.documentTypeList('authors').title('Authors')).icon(FiUsers),
              ,
            ])),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('contact'))).icon(FiMail),
      S.divider(),
      S.listItem()
        .title('Legal')
        .child(
          S.list()
            .title('Legal')
            .items([
              S.listItem().title('Privacy').child(S.editor().id('privacy').schemaType('privacy').documentId('singleton-privacy').views(getPreview('privacy'))).icon(FiFileText),
              S.divider(),
              S.listItem().title('Terms').child(S.editor().id('terms').schemaType('terms').documentId('singleton-terms').views(getPreview('terms'))).icon(FiFileText),
            ])),
      S.divider(),
      S.listItem().title('Admin').child(S.editor().id('admin').schemaType('admin').documentId('singleton-admin').views(getPreview('admin'))).icon(FiGlobe),
    ]);