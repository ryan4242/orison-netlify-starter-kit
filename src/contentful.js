const contentful = require('contentful');
import { html, unsafeHTML } from 'orison';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
require('dotenv').config();

let contentfulConfig = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY
}

if (process.env.CONTENTFUL_ENV === 'preview') contentfulConfig.host = 'preview.contentful.com';

export const client = contentful.createClient(contentfulConfig);

export function renderRichText(document) {
  const htmlString = documentToHtmlString(document);

  return html`${unsafeHTML(htmlString)}`;
}
