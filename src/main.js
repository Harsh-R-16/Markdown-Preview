import React from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown() {
  let [text, setText] = React.useState(`# Markdown Preview

it's **Bold Text**. it's *Italic* Text. it's ***Bold Italic Text***

---
Even though this text is written on two separate lines,
it is parsed as a single paragraph.  

This paragraph is separated from the previous paragraph
by a blank line.


Three or more asterisks also create a thematic break.
****

> Use quote blocks to emulate reply text.
> This line is part of the same quote.

>> new quote

    This is a code block.
        <div class="footer">
            © 2021 unknown· All rights reserved
        </div>
This line of text is not indented.

list
1. Fix usability problem
2. Create code review
   * Describe my changes
 
[Google](https://www.google.com)`);
  return (
    <section>
      <article id="text">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button
          onClick={() => {
            setText("## Markdown Preview");
          }}
        >
          clear
        </button>
      </article>
      <article id="output">
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
    </section>
  );
}
