import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export const QuillEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
  ];

  return (
    <div className="editor-container">
      <ReactQuill
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};
