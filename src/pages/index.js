import { html } from 'orison';
import {client, renderRichText} from '../contentful.js'

export default async context => {
  let entry = await client.getEntry('5OcbQPa3d3zmFvOICF5AaS')

  return html`
    <section>${context.mdFile('./src/partials/getting-started.md')}</section>
    <section>
      <h3>Here are some example pages</h3>
      ${renderRichText(entry.fields.content)}

      <ul>
        <li><a href="/blog.html">/blog.html</a></li>
        <li><a href="/blog/blog-a.html">/blog/blog-a.html</a></li>
        <li><a href="/blog/blog-b.html">/blog/blog-b.html</a></li>
        <li><a href="/blog/blog-c.html">/blog/blog-c.html</a></li>
        <li><a href="/info">/info</a></li>
        <li><a href="/info/about.html">/info/about.html</a></li>
      </ul>
    </section>
  `
};
