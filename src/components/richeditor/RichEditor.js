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
    />
  );
};

export default RichEditor;
