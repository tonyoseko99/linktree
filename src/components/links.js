import React from "react";

function Links() {
  return (
    <div className="container" id="links-container">
      {/* twitter link */}
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        id="twitter"
      >
        <a
          href="https://twitter.com/TonyOseko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter Link
        </a>
      </button>
      {/* zuri team */}
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        id="btn__zuri"
      >
        <a
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
      </button>
      {/* zuri books */}
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        id="books"
      >
        <a
          href="http://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Books
        </a>
      </button>
      {/* python books */}
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        id="book__python"
      >
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=tonnyseko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn python for beginners
        </a>
      </button>
      {/* Background check for coders */}
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        id="pitch"
      >
        <a
          href="https://background.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>
      </button>
      {/* Design Books */}
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        id="book__design"
      >
        <a
          href="https://books.zuri.team/design-rules "
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Books
        </a>
      </button>
    </div>
  );
}

export default Links;
