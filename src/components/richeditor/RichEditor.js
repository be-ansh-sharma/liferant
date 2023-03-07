import { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(
  async () => {
    let RQ = await import('react-quill');
    RQ = RQ.default;
    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  },
);

const RichEditor = ({ fieldInput, fieldInputHandler, maxChar, fieldName }) => {
  const quillRef = useRef(false);

  const checkCharacterCount = event => {
    const unprivilegedEditor = quillRef.current.unprivilegedEditor;
    if (unprivilegedEditor.getLength() > maxChar && event.key !== 'Backspace')
      event.preventDefault();
  };

  return (
    <ReactQuill
      theme="snow"
      forwardedRef={quillRef}
      value={fieldInput[fieldName]}
      onKeyDown={checkCharacterCount}
      onChange={value => {
        fieldInputHandler({
          ...fieldInput,
          [fieldName]: value,
        });
      }}
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ['clean'],
        ],
      }}
    />
  );
};

export default RichEditor;
