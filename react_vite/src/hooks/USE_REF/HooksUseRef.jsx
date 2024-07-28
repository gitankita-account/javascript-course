import { useRef, useEffect } from "react";
function HooksUseRef() {
  const inputRef = useRef(null);
  const uploadRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h2>Hooks Useref</h2>
      <input type="text" /> <br /> <br />
      <input type="text" ref={inputRef} /> <br />
      <br />
      <button
        onClick={() => {
          uploadRef.current.click();
        }}
      >
        upload
      </button>{" "}
      <br /> <br />
      <input type="file" ref={uploadRef} style={{ display: "none" }} />
    </>
  );
}
export default HooksUseRef;
