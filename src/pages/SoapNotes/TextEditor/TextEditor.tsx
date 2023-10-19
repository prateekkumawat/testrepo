import React, { useState, useRef, SyntheticEvent, useEffect } from 'react';

const TextEditor: React.FC<{
  editMode: boolean;
}> = ({ editMode }) => {
  const [htmlContent, setHtmlContent] = useState<string>(
    'Editable HTML content'
  );

  const editorRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    setHtmlContent(target.innerHTML);
  };

  useEffect(() => {
    const moveToCursorPosition = (position: { start: number; end: number }) => {
      // Move the cursor to the specified position
      if (
        editorRef.current &&
        editorRef?.current?.firstChild &&
        position.end <= (editorRef.current.innerText?.length || 0) + 1
      ) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.setStart(editorRef.current.firstChild, position.end + 1);
        range.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    };
    const data = sessionStorage.getItem('editable-container-cursor');
    if (data) {
      const payload = JSON.parse(data);
      if (payload && Object.keys(payload)?.length) {
        console.log('payload', payload);
        moveToCursorPosition({
          start: Number(payload?.start) || 0,
          end: Number(payload?.end) || 0,
        });
      }
    }
  }, [htmlContent]);

  // useEffect(() => {
  //   // Set cursor position to the end after each render
  //   if (editorRef.current) {
  //     const range = document.createRange();
  //     const selection = window.getSelection();
  //     if (selection) {
  //       range.selectNodeContents(editorRef.current);
  //       range.collapse(false);
  //       selection.removeAllRanges();
  //       selection.addRange(range);
  //     }
  //   }
  // }, [htmlContent]);

  return (
    <div>
      {editMode ? (
        <>
          <h2>HTML Text Editor</h2>
          <div
            id="editable-container"
            ref={editorRef}
            contentEditable
            onKeyDown={(_e) => {
              const selection = window.getSelection();
              if (selection) {
                console.log({
                  start: selection.getRangeAt(0).startOffset,
                  end: selection.getRangeAt(0).endOffset,
                });
                // sessionStorage.setItem(
                //   'editable-container-cursor',
                //   JSON.stringify({
                //     start: selection.getRangeAt(0).startOffset,
                //     end: selection.getRangeAt(0).endOffset,
                //   })
                // );
              }
            }}
            // onInput={handleInputChange}
            style={{
              border: '1px solid #ccc',
              minHeight: '200px',
              padding: '10px',
            }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </>
      ) : null}
    </div>
  );
};

export default TextEditor;
