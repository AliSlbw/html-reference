// HTML Element Reference — data source
// Each category holds a list of elements: { tag, void, desc, syntax, attrs, demo }
// attrs: array of { name, values?, boolean? }
//   - values: present for enumerable attributes (e.g. input type, a target)
//   - boolean: true for attributes that take no value (e.g. required, disabled)
//   - neither: a free-text attribute (e.g. placeholder, href)
// demo: HTML string rendered live in the preview pane (empty = no visual output)

const HTML_REFERENCE = [
  {
    category: "Document & Metadata",
    elements: [
      { tag: "!DOCTYPE", void: true, desc: "Declares the document type and HTML version to the browser.", syntax: "<!DOCTYPE html>", attrs: [], demo: "" },
      { tag: "html", desc: "The root element wrapping all content on the page.", syntax: "<html lang=\"en\">...</html>", attrs: [{ name: "lang" }, { name: "dir", values: ["ltr", "rtl", "auto"] }], demo: "" },
      { tag: "head", desc: "Container for metadata: title, links, scripts, styles.", syntax: "<head>...</head>", attrs: [], demo: "" },
      { tag: "title", desc: "Sets the page title shown in the browser tab.", syntax: "<title>Page Title</title>", attrs: [], demo: "" },
      { tag: "meta", void: true, desc: "Defines metadata like charset, viewport, or description.", syntax: "<meta charset=\"UTF-8\">", attrs: [{ name: "charset" }, { name: "name", values: ["viewport", "description", "keywords", "author", "robots", "theme-color"] }, { name: "content" }, { name: "http-equiv", values: ["refresh", "content-type", "X-UA-Compatible"] }], demo: "" },
      { tag: "link", void: true, desc: "Links external resources, most often stylesheets.", syntax: "<link rel=\"stylesheet\" href=\"style.css\">", attrs: [{ name: "rel", values: ["stylesheet", "icon", "preload", "preconnect", "manifest", "canonical", "alternate"] }, { name: "href" }, { name: "type" }], demo: "" },
      { tag: "style", desc: "Embeds CSS rules directly inside the document.", syntax: "<style>p { color: teal; }</style>", attrs: [{ name: "type" }, { name: "media", values: ["screen", "print", "all"] }], demo: "" },
      { tag: "base", void: true, desc: "Sets a base URL for all relative links on the page.", syntax: "<base href=\"https://example.com/\">", attrs: [{ name: "href" }, { name: "target", values: ["_blank", "_self", "_parent", "_top"] }], demo: "" },
    ],
  },
  {
    category: "Sectioning & Structure",
    elements: [
      { tag: "body", desc: "Contains all visible content of the page.", syntax: "<body>...</body>", attrs: [], demo: "" },
      { tag: "header", desc: "Introductory content for a page or section, often holds a logo or nav.", syntax: "<header>...</header>", attrs: [], demo: "<div style='background:#22303d;padding:10px;border-radius:6px'>Site Header</div>" },
      { tag: "nav", desc: "Groups the page's primary navigation links.", syntax: "<nav>...</nav>", attrs: [], demo: "<nav><a href='#' style='margin-right:10px'>Home</a><a href='#'>About</a></nav>" },
      { tag: "main", desc: "Marks the dominant, unique content of the document.", syntax: "<main>...</main>", attrs: [], demo: "" },
      { tag: "section", desc: "A thematic grouping of content, typically with a heading.", syntax: "<section>...</section>", attrs: [], demo: "" },
      { tag: "article", desc: "Self-contained content that could stand alone, like a post.", syntax: "<article>...</article>", attrs: [], demo: "" },
      { tag: "aside", desc: "Content tangentially related to the main content, like a sidebar.", syntax: "<aside>...</aside>", attrs: [], demo: "" },
      { tag: "footer", desc: "Closing content for a page or section, often holds credits or links.", syntax: "<footer>...</footer>", attrs: [], demo: "<div style='background:#22303d;padding:10px;border-radius:6px'>Site Footer</div>" },
      { tag: "div", desc: "A generic block-level container with no semantic meaning.", syntax: "<div>...</div>", attrs: [], demo: "<div style='background:#22303d;padding:10px;border-radius:6px'>Generic block</div>" },
    ],
  },
  {
    category: "Headings & Text Blocks",
    elements: [
      { tag: "h1", desc: "The highest-level section heading on the page.", syntax: "<h1>Heading 1</h1>", attrs: [], demo: "<h1 style='margin:0'>Heading 1</h1>" },
      { tag: "h2", desc: "A second-level section heading.", syntax: "<h2>Heading 2</h2>", attrs: [], demo: "<h2 style='margin:0'>Heading 2</h2>" },
      { tag: "h3", desc: "A third-level section heading.", syntax: "<h3>Heading 3</h3>", attrs: [], demo: "<h3 style='margin:0'>Heading 3</h3>" },
      { tag: "h4", desc: "A fourth-level section heading.", syntax: "<h4>Heading 4</h4>", attrs: [], demo: "<h4 style='margin:0'>Heading 4</h4>" },
      { tag: "h5", desc: "A fifth-level section heading.", syntax: "<h5>Heading 5</h5>", attrs: [], demo: "<h5 style='margin:0'>Heading 5</h5>" },
      { tag: "h6", desc: "The lowest-level section heading.", syntax: "<h6>Heading 6</h6>", attrs: [], demo: "<h6 style='margin:0'>Heading 6</h6>" },
      { tag: "p", desc: "Defines a paragraph of text.", syntax: "<p>A paragraph of text.</p>", attrs: [], demo: "<p style='margin:0'>A paragraph of text.</p>" },
      { tag: "blockquote", desc: "An extended quotation, usually indented from surrounding text.", syntax: "<blockquote>Quoted text.</blockquote>", attrs: [{ name: "cite" }], demo: "<blockquote style='margin:0;border-left:3px solid #ff8c42;padding-left:10px'>Quoted text.</blockquote>" },
      { tag: "hr", void: true, desc: "Renders a horizontal rule, marking a thematic break.", syntax: "<hr>", attrs: [], demo: "<hr style='border-color:#2a3340'>" },
      { tag: "pre", desc: "Preformatted text, preserving whitespace and line breaks.", syntax: `<pre>  line one
  line two</pre>`, attrs: [], demo: `<pre style='margin:0'>  line one
  line two</pre>` },
    ],
  },
  {
    category: "Lists",
    elements: [
      { tag: "ol", desc: "An ordered (numbered) list of items.", syntax: "<ol><li>First</li></ol>", attrs: [{ name: "start" }, { name: "type", values: ["1", "a", "A", "i", "I"] }, { name: "reversed", boolean: true }], demo: "<ol style='margin:0;padding-left:18px'><li>First</li><li>Second</li></ol>" },
      { tag: "ul", desc: "An unordered (bulleted) list of items.", syntax: "<ul><li>Item</li></ul>", attrs: [], demo: "<ul style='margin:0;padding-left:18px'><li>Item one</li><li>Item two</li></ul>" },
      { tag: "li", desc: "A single item within an ordered or unordered list.", syntax: "<li>List item</li>", attrs: [{ name: "value" }], demo: "<ul style='margin:0;padding-left:18px'><li>List item</li></ul>" },
      { tag: "dl", desc: "A description list pairing terms with their descriptions.", syntax: "<dl><dt>Term</dt><dd>Def</dd></dl>", attrs: [], demo: "<dl style='margin:0'><dt style='font-weight:600'>HTML</dt><dd style='margin:0 0 4px 14px'>Markup language</dd></dl>" },
      { tag: "dt", desc: "A term being defined inside a description list.", syntax: "<dt>Term</dt>", attrs: [], demo: "<dl style='margin:0'><dt style='font-weight:600'>Term</dt></dl>" },
      { tag: "dd", desc: "The description for a term inside a description list.", syntax: "<dd>Description</dd>", attrs: [], demo: "<dl style='margin:0'><dd style='margin-left:14px'>Description</dd></dl>" },
    ],
  },
  {
    category: "Inline Text Semantics",
    elements: [
      { tag: "a", desc: "A hyperlink to another page, section, or resource.", syntax: "<a href=\"https://example.com\">Link</a>", attrs: [{ name: "href" }, { name: "target", values: ["_blank", "_self", "_parent", "_top"] }, { name: "rel", values: ["noopener", "noreferrer", "nofollow", "external"] }], demo: "<a href='#' style='color:#ff8c42'>Visit link</a>" },
      { tag: "span", desc: "A generic inline container with no semantic meaning.", syntax: "<span>text</span>", attrs: [], demo: "<span style='background:#22303d;padding:2px 6px;border-radius:4px'>inline text</span>" },
      { tag: "strong", desc: "Marks text of strong importance, rendered bold by default.", syntax: "<strong>Important</strong>", attrs: [], demo: "<strong>Important text</strong>" },
      { tag: "em", desc: "Marks emphasized text, rendered italic by default.", syntax: "<em>Emphasized</em>", attrs: [], demo: "<em>Emphasized text</em>" },
      { tag: "b", desc: "Bold text with no extra semantic importance.", syntax: "<b>Bold</b>", attrs: [], demo: "<b>Bold text</b>" },
      { tag: "i", desc: "Italic text, often for technical terms or foreign phrases.", syntax: "<i>Italic</i>", attrs: [], demo: "<i>Italic text</i>" },
      { tag: "mark", desc: "Highlights text as if marked with a highlighter.", syntax: "<mark>Highlighted</mark>", attrs: [], demo: "<mark>Highlighted text</mark>" },
      { tag: "small", desc: "Represents side comments or fine print, rendered smaller.", syntax: "<small>Fine print</small>", attrs: [], demo: "<small>Fine print text</small>" },
      { tag: "sub", desc: "Subscript text, positioned below the baseline.", syntax: "H<sub>2</sub>O", attrs: [], demo: "H<sub>2</sub>O" },
      { tag: "sup", desc: "Superscript text, positioned above the baseline.", syntax: "x<sup>2</sup>", attrs: [], demo: "x<sup>2</sup>" },
      { tag: "code", desc: "Marks a short fragment of computer code.", syntax: "<code>let x = 1;</code>", attrs: [], demo: "<code style='background:#22303d;padding:2px 6px;border-radius:4px'>let x = 1;</code>" },
      { tag: "abbr", desc: "An abbreviation, with the full term in the title attribute.", syntax: "<abbr title=\"HyperText Markup Language\">HTML</abbr>", attrs: [{ name: "title" }], demo: "<abbr title='HyperText Markup Language' style='text-decoration:underline dotted'>HTML</abbr>" },
      { tag: "cite", desc: "References the title of a creative work.", syntax: "<cite>The Odyssey</cite>", attrs: [], demo: "<cite>The Odyssey</cite>" },
      { tag: "q", desc: "A short inline quotation, wrapped in quotation marks automatically.", syntax: "<q>Quoted text</q>", attrs: [{ name: "cite" }], demo: "<q>Quoted text</q>" },
      { tag: "br", void: true, desc: "Inserts a single line break within text.", syntax: "Line one<br>Line two", attrs: [], demo: "Line one<br>Line two" },
      { tag: "time", desc: "Represents a specific date or time in a machine-readable form.", syntax: "<time datetime=\"2026-06-16\">June 16</time>", attrs: [{ name: "datetime" }], demo: "<time datetime='2026-06-16'>June 16, 2026</time>" },
      { tag: "kbd", desc: "Represents keyboard input from the user.", syntax: "<kbd>Ctrl</kbd> + <kbd>C</kbd>", attrs: [], demo: "<kbd style='background:#22303d;padding:2px 6px;border-radius:4px'>Ctrl</kbd> + <kbd style='background:#22303d;padding:2px 6px;border-radius:4px'>C</kbd>" },
      { tag: "del", desc: "Marks text that has been deleted, shown with strikethrough.", syntax: "<del>Removed</del>", attrs: [{ name: "cite" }, { name: "datetime" }], demo: "<del>Removed text</del>" },
      { tag: "ins", desc: "Marks text that has been inserted, shown underlined.", syntax: "<ins>Added</ins>", attrs: [{ name: "cite" }, { name: "datetime" }], demo: "<ins>Added text</ins>" },
      { tag: "u", desc: "Renders text with an underline, with no extra semantic meaning.", syntax: "<u>Underlined</u>", attrs: [], demo: "<u>Underlined text</u>" },
    ],
  },
  {
    category: "Forms",
    elements: [
      { tag: "form", desc: "A container for interactive controls that submit data.", syntax: "<form action=\"/submit\" method=\"post\">...</form>", attrs: [{ name: "action" }, { name: "method", values: ["get", "post"] }, { name: "autocomplete", values: ["on", "off"] }], demo: "" },
      { tag: "input", void: true, desc: "A field for user input; type changes its behavior entirely.", syntax: "<input type=\"text\" placeholder=\"Name\">", attrs: [{ name: "type", values: ["text", "password", "email", "tel", "number", "date", "checkbox", "radio", "file", "hidden", "search", "url", "color", "range", "submit", "button", "reset"] }, { name: "name" }, { name: "value" }, { name: "placeholder" }, { name: "required", boolean: true }], demo: "<input type='text' placeholder='Name' style='background:#0d1117;border:1px solid #2a3340;color:#e6edf3;padding:6px 8px;border-radius:4px'>" },
      { tag: "textarea", desc: "A multi-line plain-text input control.", syntax: "<textarea rows=\"3\"></textarea>", attrs: [{ name: "rows" }, { name: "cols" }, { name: "placeholder" }], demo: "<textarea rows='2' style='background:#0d1117;border:1px solid #2a3340;color:#e6edf3;padding:6px 8px;border-radius:4px' placeholder='Type here'></textarea>" },
      { tag: "button", desc: "A clickable button that can submit, reset, or run script.", syntax: "<button type=\"submit\">Send</button>", attrs: [{ name: "type", values: ["submit", "reset", "button"] }, { name: "disabled", boolean: true }], demo: "<button style='background:#ff8c42;border:none;color:#11161c;padding:6px 14px;border-radius:4px;font-weight:600'>Send</button>" },
      { tag: "select", desc: "A dropdown control for choosing from a list of options.", syntax: "<select><option>One</option></select>", attrs: [{ name: "name" }, { name: "multiple", boolean: true }, { name: "disabled", boolean: true }], demo: "<select style='background:#0d1117;border:1px solid #2a3340;color:#e6edf3;padding:6px 8px;border-radius:4px'><option>One</option><option>Two</option></select>" },
      { tag: "option", desc: "A single selectable choice within a select or datalist.", syntax: "<option value=\"1\">One</option>", attrs: [{ name: "value" }, { name: "selected", boolean: true }, { name: "disabled", boolean: true }], demo: "<select style='background:#0d1117;border:1px solid #2a3340;color:#e6edf3;padding:6px 8px;border-radius:4px'><option>Choice</option></select>" },
      { tag: "optgroup", desc: "Groups related options together inside a select dropdown.", syntax: "<optgroup label=\"Fruits\"><option>Apple</option></optgroup>", attrs: [{ name: "label" }, { name: "disabled", boolean: true }], demo: "" },
      { tag: "label", desc: "A caption for a form control, improving accessibility and click targets.", syntax: "<label for=\"name\">Name</label>", attrs: [{ name: "for" }], demo: "<label style='font-weight:600'>Name</label>" },
      { tag: "fieldset", desc: "Groups related form controls inside a labeled box.", syntax: "<fieldset><legend>Contact</legend>...</fieldset>", attrs: [{ name: "disabled", boolean: true }], demo: "<fieldset style='border:1px solid #2a3340;border-radius:6px;padding:8px'><legend>Contact</legend>Grouped fields</fieldset>" },
      { tag: "legend", desc: "A caption for the contents of a fieldset.", syntax: "<legend>Contact Info</legend>", attrs: [], demo: "<fieldset style='border:1px solid #2a3340;border-radius:6px;padding:8px'><legend>Contact Info</legend></fieldset>" },
      { tag: "datalist", desc: "Provides autocomplete suggestions for an associated input.", syntax: "<datalist id=\"colors\"><option value=\"Red\"></datalist>", attrs: [], demo: "" },
      { tag: "output", desc: "Displays the result of a calculation or user action.", syntax: "<output name=\"result\">42</output>", attrs: [{ name: "for" }, { name: "name" }], demo: "<output style='background:#22303d;padding:2px 8px;border-radius:4px'>42</output>" },
      { tag: "progress", void: true, desc: "Shows the completion progress of a task.", syntax: "<progress value=\"70\" max=\"100\"></progress>", attrs: [{ name: "value" }, { name: "max" }], demo: "<progress value='70' max='100'></progress>" },
      { tag: "meter", desc: "Displays a scalar value within a known range, like disk usage.", syntax: "<meter value=\"0.6\"></meter>", attrs: [{ name: "value" }, { name: "min" }, { name: "max" }, { name: "low" }, { name: "high" }], demo: "<meter value='0.6'></meter>" },
    ],
  },
  {
    category: "Tables",
    elements: [
      { tag: "table", desc: "Defines a table for displaying tabular data.", syntax: "<table>...</table>", attrs: [], demo: "<table style='border-collapse:collapse;width:100%'><tr><th style='border:1px solid #2a3340;padding:4px'>A</th><th style='border:1px solid #2a3340;padding:4px'>B</th></tr><tr><td style='border:1px solid #2a3340;padding:4px'>1</td><td style='border:1px solid #2a3340;padding:4px'>2</td></tr></table>" },
      { tag: "thead", desc: "Groups the header row(s) of a table.", syntax: "<thead><tr><th>Name</th></tr></thead>", attrs: [], demo: "" },
      { tag: "tbody", desc: "Groups the main body rows of a table.", syntax: "<tbody><tr><td>Data</td></tr></tbody>", attrs: [], demo: "" },
      { tag: "tfoot", desc: "Groups the footer row(s) of a table, often totals.", syntax: "<tfoot><tr><td>Total</td></tr></tfoot>", attrs: [], demo: "" },
      { tag: "tr", desc: "Defines a single row of cells within a table.", syntax: "<tr><td>Cell</td></tr>", attrs: [], demo: "" },
      { tag: "th", desc: "A header cell, rendered bold and centered by default.", syntax: "<th>Column Name</th>", attrs: [{ name: "scope", values: ["row", "col", "rowgroup", "colgroup"] }, { name: "colspan" }, { name: "rowspan" }], demo: "<table><tr><th style='border:1px solid #2a3340;padding:4px'>Column Name</th></tr></table>" },
      { tag: "td", desc: "A standard data cell within a table row.", syntax: "<td>Value</td>", attrs: [{ name: "colspan" }, { name: "rowspan" }], demo: "<table><tr><td style='border:1px solid #2a3340;padding:4px'>Value</td></tr></table>" },
      { tag: "caption", desc: "A title or explanation displayed above a table.", syntax: "<caption>Monthly Sales</caption>", attrs: [], demo: "<table><caption>Monthly Sales</caption><tr><td style='border:1px solid #2a3340;padding:4px'>Row</td></tr></table>" },
      { tag: "colgroup", desc: "Groups one or more columns for shared styling.", syntax: "<colgroup><col span=\"2\"></colgroup>", attrs: [{ name: "span" }], demo: "" },
      { tag: "col", void: true, desc: "Defines styling for a column inside a colgroup.", syntax: "<col style=\"background:#eee\">", attrs: [{ name: "span" }], demo: "" },
    ],
  },
  {
    category: "Media & Embedded",
    elements: [
      { tag: "img", void: true, desc: "Embeds an image into the document.", syntax: "<img src=\"photo.jpg\" alt=\"A photo\">", attrs: [{ name: "src" }, { name: "alt" }, { name: "width" }, { name: "height" }, { name: "loading", values: ["lazy", "eager"] }], demo: "<div style='background:#22303d;padding:16px;border-radius:6px;text-align:center;color:#8b96a5'>🖼 image placeholder</div>" },
      { tag: "audio", desc: "Embeds sound content with native playback controls.", syntax: "<audio src=\"song.mp3\" controls></audio>", attrs: [{ name: "src" }, { name: "controls", boolean: true }, { name: "autoplay", boolean: true }, { name: "loop", boolean: true }], demo: "<div style='background:#22303d;padding:8px;border-radius:6px;color:#8b96a5'>🔊 audio player</div>" },
      { tag: "video", desc: "Embeds video content with native playback controls.", syntax: "<video src=\"clip.mp4\" controls></video>", attrs: [{ name: "src" }, { name: "controls", boolean: true }, { name: "autoplay", boolean: true }, { name: "poster" }], demo: "<div style='background:#22303d;padding:16px;border-radius:6px;text-align:center;color:#8b96a5'>▶ video placeholder</div>" },
      { tag: "source", void: true, desc: "Specifies alternate media sources for audio, video, or picture.", syntax: "<source src=\"clip.webm\" type=\"video/webm\">", attrs: [{ name: "src" }, { name: "type" }, { name: "media" }], demo: "" },
      { tag: "track", void: true, desc: "Adds subtitle or caption tracks to audio or video.", syntax: "<track src=\"subs.vtt\" kind=\"subtitles\">", attrs: [{ name: "src" }, { name: "kind", values: ["subtitles", "captions", "descriptions", "chapters", "metadata"] }, { name: "srclang" }, { name: "label" }], demo: "" },
      { tag: "picture", desc: "Wraps multiple image sources for responsive image delivery.", syntax: "<picture><source srcset=\"big.jpg\" media=\"(min-width: 800px)\"><img src=\"small.jpg\"></picture>", attrs: [], demo: "" },
      { tag: "map", desc: "Defines a clickable image map linked to area elements.", syntax: "<map name=\"map1\">...</map>", attrs: [{ name: "name" }], demo: "" },
      { tag: "area", void: true, desc: "Defines a clickable region within an image map.", syntax: "<area shape=\"rect\" coords=\"0,0,50,50\" href=\"#\">", attrs: [{ name: "shape", values: ["rect", "circle", "poly", "default"] }, { name: "coords" }, { name: "href" }, { name: "alt" }], demo: "" },
      { tag: "canvas", desc: "A blank surface for drawing graphics via JavaScript.", syntax: "<canvas width=\"200\" height=\"100\"></canvas>", attrs: [{ name: "width" }, { name: "height" }], demo: "<div style='background:#22303d;padding:16px;border-radius:6px;text-align:center;color:#8b96a5'>🎨 canvas surface</div>" },
      { tag: "svg", desc: "Embeds scalable vector graphics directly in the document.", syntax: "<svg><circle cx=\"25\" cy=\"25\" r=\"20\"/></svg>", attrs: [{ name: "viewBox" }, { name: "width" }, { name: "height" }], demo: "<svg width='50' height='50'><circle cx='25' cy='25' r='20' fill='#ff8c42'/></svg>" },
      { tag: "iframe", desc: "Embeds another HTML document inline within the page.", syntax: "<iframe src=\"page.html\"></iframe>", attrs: [{ name: "src" }, { name: "width" }, { name: "height" }, { name: "loading", values: ["lazy", "eager"] }], demo: "<div style='background:#22303d;padding:16px;border-radius:6px;text-align:center;color:#8b96a5'>🔲 embedded frame</div>" },
      { tag: "object", desc: "Embeds external resources like PDFs or plugins.", syntax: "<object data=\"file.pdf\" type=\"application/pdf\"></object>", attrs: [{ name: "data" }, { name: "type" }, { name: "width" }, { name: "height" }], demo: "" },
    ],
  },
  {
    category: "Interactive & Scripting",
    elements: [
      { tag: "details", desc: "A disclosure widget that shows or hides content on click.", syntax: "<details><summary>More</summary>Hidden text</details>", attrs: [{ name: "open", boolean: true }], demo: "<details><summary>More</summary>Hidden text revealed</details>" },
      { tag: "summary", desc: "The visible label for a details disclosure widget.", syntax: "<summary>Click to expand</summary>", attrs: [], demo: "<details><summary>Click to expand</summary>Content</details>" },
      { tag: "dialog", desc: "A native modal or non-modal dialog box.", syntax: "<dialog open>Dialog content</dialog>", attrs: [{ name: "open", boolean: true }], demo: "<div style='background:#22303d;border:1px solid #2a3340;padding:10px;border-radius:6px'>Dialog content</div>" },
      { tag: "template", desc: "Holds markup that isn't rendered until activated by script.", syntax: "<template><li>Item</li></template>", attrs: [], demo: "" },
      { tag: "script", desc: "Embeds or links executable JavaScript code.", syntax: "<script src=\"app.js\"></script>", attrs: [{ name: "src" }, { name: "type", values: ["module", "text/javascript", "importmap"] }, { name: "defer", boolean: true }, { name: "async", boolean: true }], demo: "" },
      { tag: "noscript", desc: "Shows fallback content when JavaScript is disabled.", syntax: "<noscript>JS is disabled.</noscript>", attrs: [], demo: "" },
    ],
  },
];
