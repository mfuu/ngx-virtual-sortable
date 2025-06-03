import { Pipe, PipeTransform } from '@angular/core';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  constructor() {}

  async transform(filePath: string): Promise<string> {
    if (!filePath) {
      return '';
    }

    const fileContent = await this.fetchMarkdownFile(filePath);
    const mdString = marked.parse(fileContent);

    return mdString;
  }

  async fetchMarkdownFile(filePath: string) {
    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const markdown = await response.text();

      return markdown;
    } catch (error) {
      console.error('Error fetching the Markdown file:', error);
      return '';
    }
  }
}
